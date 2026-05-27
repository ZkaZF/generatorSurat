'use client';

import { useState, useEffect } from 'react';
import type { TemplateConfig, FormData } from '@/lib/templates/types';
import { useLocalDraft } from '@/lib/hooks/useLocalDraft';
import FormFieldRenderer from './FormField';

interface DynamicFormProps {
  template: TemplateConfig;
  onFormChange: (data: FormData) => void;
}

export default function DynamicForm({ template, onFormChange }: DynamicFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const { formData, setFormData, isRestored } = useLocalDraft(template.id);

  const totalSteps = template.steps.length;
  const step = template.steps[currentStep];

  useEffect(() => {
    onFormChange(formData);
  }, [formData, onFormChange]);

  const handleFieldChange = (name: string, value: string | number | undefined) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => { if (currentStep < totalSteps - 1) setCurrentStep((s) => s + 1); };
  const handlePrev = () => { if (currentStep > 0) setCurrentStep((s) => s - 1); };

  if (!isRestored) {
    return (
      <div className="space-y-6 p-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="h-4 w-24 shimmer rounded" />
            <div className="h-12 w-full shimmer rounded-lg" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* ── Progress Stepper ─────────────────────────────────────────────── */}
      {totalSteps > 1 && (
        <div className="px-4 pt-4 pb-2">
          {/* Progress bars */}
          <div className="flex gap-1.5 mb-2">
            {template.steps.map((s, idx) => (
              <div key={s.id} className="flex-1">
                <div style={{
                  height: '3px', borderRadius: '9999px', transition: 'background .3s',
                  background: idx <= currentStep ? '#1B2E4A' : '#E5D8C5',
                }} />
              </div>
            ))}
          </div>
          {/* Step labels */}
          <div className="flex gap-1.5">
            {template.steps.map((s, idx) => (
              <div key={s.id} className="flex-1">
                <span style={{
                  fontSize: '10px', fontWeight: 600, lineHeight: 1.3, transition: 'color .3s',
                  color: idx === currentStep ? '#1B2E4A' : idx < currentStep ? '#8A9AAA' : '#D4C5A0',
                }}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Step Header ─────────────────────────────────────────────────── */}
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-lg font-bold text-on-surface">{step.title}</h2>
        {step.description && (
          <p className="text-xs text-on-surface-variant mt-0.5">{step.description}</p>
        )}
      </div>

      {/* ── Fields ──────────────────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          {step.fields.map((field) => (
            <div
              key={field.name}
              className={field.colSpan === 1 ? 'col-span-1' : 'col-span-2'}
            >
              <FormFieldRenderer
                field={field}
                value={formData[field.name]}
                onChange={handleFieldChange}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Step Navigation ─────────────────────────────────────────────── */}
      {totalSteps > 1 && (
        <div className="flex gap-2 px-4 py-3 border-t border-gray-100">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={handlePrev}
              style={{
                flex: 1, height: '44px', borderRadius: '12px', fontSize: '14px', fontWeight: 600,
                border: '1.5px solid #D4C5A0', background: 'transparent', color: '#5A6A7A',
                cursor: 'pointer', transition: 'background .15s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = '#F5EFE3')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'transparent')}
            >
              ← Sebelumnya
            </button>
          )}
          {currentStep < totalSteps - 1 && (
            <button
              type="button"
              onClick={handleNext}
              style={{
                flex: 1, height: '44px', borderRadius: '12px', fontSize: '14px', fontWeight: 700,
                border: 'none', background: '#1B2E4A', color: '#fff',
                cursor: 'pointer', transition: 'opacity .15s',
                boxShadow: '0 3px 12px rgba(27,46,74,0.25)',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.88')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
            >
              Selanjutnya →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
