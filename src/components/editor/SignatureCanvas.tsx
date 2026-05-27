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
    };
    img.src = value;
  }, []); // Only on mount

  // ── Export canvas to base64 ──────────────────────────────────────────────
  const exportSignature = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !hasSignature.current) return;
    onChange(canvas.toDataURL('image/png'));
  }, [onChange]);

  // ── Clear ────────────────────────────────────────────────────────────────
  const handleClear = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = getCtx();
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hasSignature.current = false;
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
    exportSignature();
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Label row */}
      <div className="flex justify-between items-center">
        <label htmlFor={id} className="text-xs font-semibold text-[#5f5f5d]">
          {label}
        </label>
        <button
          type="button"
          onClick={handleClear}
          className="text-xs font-medium text-[#5f5f5d] hover:text-[#1a1a17] transition-colors"
          aria-label="Hapus tanda tangan"
        >
          Hapus
        </button>
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
