'use client';

import type { FormField } from '@/lib/templates/types';
import SignatureCanvas from './SignatureCanvas';

interface FormFieldRendererProps {
  field: FormField;
  value: string | number | undefined;
  onChange: (name: string, value: string | number | undefined) => void;
}

const INPUT_CLASS =
  'w-full border rounded-lg px-3 py-2.5 text-sm bg-white transition-all placeholder:text-gray-400 disabled:opacity-50 focus:outline-none'
  + ' border-[#D4C5A0] text-[#1B2E4A]'
  + ' focus:border-[#C8A45C] focus:ring-2 focus:ring-[#C8A45C]/20';

export default function FormFieldRenderer({ field, value, onChange }: FormFieldRendererProps) {
  const { name, type, label, placeholder, required, options } = field;
  const handleChange = (val: string | number | undefined) => onChange(name, val);

  if (type === 'signature') {
    return (
      <SignatureCanvas
        id={`field-${name}`}
        label={label}
        value={value as string | undefined}
        onChange={(base64) => handleChange(base64)}
      />
    );
  }

  if (type === 'select') {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={`field-${name}`} className="text-xs font-semibold text-on-surface-variant">
          {label}{required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        <select
          id={`field-${name}`}
          name={name}
          value={value as string || ''}
          required={required}
          onChange={(e) => handleChange(e.target.value)}
          className={`${INPUT_CLASS} cursor-pointer`}
        >
          <option value="" disabled>Pilih {label.toLowerCase()}...</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={`field-${name}`} className="text-xs font-semibold text-on-surface-variant">
          {label}{required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        <textarea
          id={`field-${name}`}
          name={name}
          value={value as string || ''}
          placeholder={placeholder}
          required={required}
          rows={3}
          onChange={(e) => handleChange(e.target.value)}
          className={`${INPUT_CLASS} resize-none`}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={`field-${name}`} className="text-xs font-semibold text-on-surface-variant">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        id={`field-${name}`}
        name={name}
        type={type}
        value={value as string || ''}
        placeholder={placeholder}
        required={required}
        onChange={(e) =>
          handleChange(type === 'number' ? Number(e.target.value) || undefined : e.target.value)
        }
        className={INPUT_CLASS}
      />
    </div>
  );
}
