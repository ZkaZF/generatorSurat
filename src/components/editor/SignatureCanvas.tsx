'use client';

import { useRef, useEffect, useCallback } from 'react';

interface SignatureCanvasProps {
  id: string;
  label: string;
  value?: string; // Base64 PNG
  onChange: (base64: string | undefined) => void;
}

export default function SignatureCanvas({ id, label, value, onChange }: SignatureCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const hasSignature = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  // ── Undo history: array of ImageData snapshots (one per completed stroke) ──
  const undoStack = useRef<ImageData[]>([]);

  // ── Setup canvas context ────────────────────────────────────────────────
  const getCtx = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.strokeStyle = '#0d1c2f';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    return ctx;
  }, []);

  // ── Restore saved signature ─────────────────────────────────────────────
  useEffect(() => {
    if (!value || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      hasSignature.current = true;
      // Save initial state as the first undo point
      undoStack.current = [ctx.getImageData(0, 0, canvas.width, canvas.height)];
    };
    img.src = value;
  }, []); // Only on mount

  // ── Export canvas to base64 ──────────────────────────────────────────────
  const exportSignature = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !hasSignature.current) return;
    onChange(canvas.toDataURL('image/png'));
  }, [onChange]);

  // ── Save snapshot to undo stack ──────────────────────────────────────────
  const saveSnapshot = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    undoStack.current = [
      ...undoStack.current,
      ctx.getImageData(0, 0, canvas.width, canvas.height),
    ];
  }, []);

  // ── Undo last stroke ─────────────────────────────────────────────────────
  const handleUndo = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const stack = undoStack.current;
    if (stack.length === 0) return;

    // Pop the latest snapshot
    const newStack = stack.slice(0, -1);
    undoStack.current = newStack;

    if (newStack.length === 0) {
      // Nothing left → clear canvas entirely
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hasSignature.current = false;
      onChange(undefined);
    } else {
      // Restore previous snapshot
      const prev = newStack[newStack.length - 1];
      ctx.putImageData(prev, 0, 0);
      hasSignature.current = true;
      onChange(canvas.toDataURL('image/png'));
    }
  }, [onChange]);

  // ── Clear ────────────────────────────────────────────────────────────────
  const handleClear = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = getCtx();
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hasSignature.current = false;
    undoStack.current = [];
    onChange(undefined);
  }, [getCtx, onChange]);

  // ── Pointer position helpers ─────────────────────────────────────────────
  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if ('touches' in e) {
      const touch = e.touches[0];
      return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    isDrawing.current = true;
    lastPos.current = getPos(e);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isDrawing.current) return;
    const ctx = getCtx();
    if (!ctx) return;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    lastPos.current = pos;
    hasSignature.current = true;
  };

  const endDraw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isDrawing.current) return;
    isDrawing.current = false;
    // Save snapshot after each complete stroke for undo
    saveSnapshot();
    exportSignature();
  };

  const canUndo = undoStack.current.length > 0;
  const canClear = !!value;

  return (
    <div className="flex flex-col gap-2">
      {/* Label row */}
      <div className="flex justify-between items-center">
        <label htmlFor={id} className="text-xs font-semibold text-[#5f5f5d]">
          {label}
        </label>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          {/* Undo button */}
          <button
            type="button"
            onClick={handleUndo}
            disabled={!canUndo}
            className="flex items-center gap-1 text-xs font-medium text-[#5f5f5d] hover:text-[#1a1a17] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Undo stroke tanda tangan"
            title="Undo"
          >
            {/* Undo icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 14 4 9l5-5" />
              <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
            </svg>
            Undo
          </button>

          {/* Divider */}
          {canClear && canUndo && (
            <span className="text-[#5f5f5d] opacity-30 select-none">·</span>
          )}

          {/* Clear button */}
          {canClear && (
            <button
              type="button"
              onClick={handleClear}
              className="text-xs font-medium text-[#5f5f5d] hover:text-[#e53e3e] transition-colors"
              aria-label="Hapus tanda tangan"
              title="Hapus semua"
            >
              Hapus
            </button>
          )}
        </div>
      </div>

      {/* Canvas area */}
      <div className="relative border border-dashed border-[rgba(26,26,23,0.22)] bg-white rounded-[6px] h-72 overflow-hidden select-none">
        <canvas
          ref={canvasRef}
          id={id}
          width={600}
          height={288}
          className="absolute inset-0 w-full h-full signature-canvas cursor-crosshair"
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
          onTouchStart={startDraw}
          onTouchMove={draw}
          onTouchEnd={endDraw}
          aria-label={`Canvas tanda tangan untuk ${label}`}
        />

        {/* "X" baseline guide — hidden once user draws */}
        {!value && (
          <div className="absolute bottom-10 left-6 flex items-center gap-2 pointer-events-none">
            <span className="text-lg font-medium text-[rgba(26,26,23,0.15)]">X</span>
            <div className="w-48 h-px bg-[rgba(26,26,23,0.15)]" />
          </div>
        )}

        {/* Placeholder text */}
        {!value && (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-[#5f5f5d] pointer-events-none whitespace-nowrap">
            Goreskan tanda tangan di sini
          </span>
        )}
      </div>
    </div>
  );
}

