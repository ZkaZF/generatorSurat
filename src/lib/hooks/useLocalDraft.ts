'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import type { FormData } from '@/lib/templates/types';

const DRAFT_KEY_PREFIX = 'surat-draft-';
const DEBOUNCE_MS = 500;

/**
 * Custom hook for auto-saving form data to localStorage.
 * - Restores saved draft on mount (hydration-safe)
 * - Debounces saves by 500ms to avoid excessive writes
 * - Stores separate drafts per templateId
 */
export function useLocalDraft(templateId: string) {
  const [formData, setFormDataState] = useState<FormData>({});
  const [isRestored, setIsRestored] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const storageKey = `${DRAFT_KEY_PREFIX}${templateId}`;

  // ── Restore draft on mount ────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as FormData;
        setFormDataState(parsed);
      }
    } catch {
      // Ignore JSON parse errors or storage access errors
    } finally {
      setIsRestored(true);
    }
  }, [storageKey]);

  // ── Debounced save ────────────────────────────────────────────────────────
  const setFormData = useCallback(
    (newData: FormData | ((prev: FormData) => FormData)) => {
      setFormDataState((prev) => {
        const next = typeof newData === 'function' ? newData(prev) : newData;

        // Clear previous debounce timer
        if (debounceTimer.current) {
          clearTimeout(debounceTimer.current);
        }

        // Schedule save
        debounceTimer.current = setTimeout(() => {
          if (typeof window !== 'undefined') {
            try {
              window.localStorage.setItem(storageKey, JSON.stringify(next));
            } catch {
              // Ignore storage full errors
            }
          }
        }, DEBOUNCE_MS);

        return next;
      });
    },
    [storageKey]
  );

  // ── Clear draft ───────────────────────────────────────────────────────────
  const clearDraft = useCallback(() => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(storageKey);
      } catch {
        // Ignore
      }
    }
    setFormDataState({});
  }, [storageKey]);

  // ── Cleanup timer on unmount ──────────────────────────────────────────────
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  return { formData, setFormData, clearDraft, isRestored };
}
