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
                <div className={`h-1 rounded-full transition-all duration-300 ${
                  idx <= currentStep ? 'bg-primary' : 'bg-gray-200'
                }`} />
              </div>
            ))}
          </div>
          {/* Step labels */}
          <div className="flex gap-1.5">
            {template.steps.map((s, idx) => (
              <div key={s.id} className="flex-1">
                <span className={`text-[10px] font-semibold leading-tight transition-colors ${
                  idx === currentStep ? 'text-primary' : idx < currentStep ? 'text-outline' : 'text-gray-300'
                }`}>
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
              className="flex-1 h-11 border border-outline-variant text-on-surface-variant rounded-xl text-sm font-semibold hover:bg-surface-container transition-colors active:scale-[0.98]"
            >
              ← Sebelumnya
            </button>
          )}
          {currentStep < totalSteps - 1 && (
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 h-11 bg-primary text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-colors active:scale-[0.98]"
            >
              Selanjutnya →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
