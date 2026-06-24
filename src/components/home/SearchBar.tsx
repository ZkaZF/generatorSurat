'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  const handleClear = () => {
    setValue('');
    onSearch('');
  };

  return (
    <section className="mb-6">
      <div className="relative flex items-center w-full h-14 rounded-xl bg-white border border-outline-variant focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all duration-200 px-4 shadow-card">
        <span className="material-symbols-outlined text-outline mr-3 flex-shrink-0" style={{ fontSize: '20px' }}>search</span>
        <input
          id="search-template"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Mau bikin surat apa? (Cth: Kuasa, Resign, Izin)"
          className="flex-1 bg-transparent border-none outline-none text-sm text-on-surface placeholder:text-outline/60 w-full h-full p-0"
          aria-label="Cari template surat"
        />
        {value && (
          <button
            onClick={handleClear}
            className="flex items-center justify-center w-6 h-6 rounded-full text-outline hover:bg-surface-container transition-colors flex-shrink-0"
            aria-label="Hapus pencarian"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '17px' }}>close</span>
          </button>
        )}
      </div>
    </section>
  );
}

