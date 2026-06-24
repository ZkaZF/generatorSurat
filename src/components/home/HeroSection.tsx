export default function HeroSection() {
  return (
    <section className="mb-8 text-center animate-fade-in-up">
      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-4 text-xs font-semibold"
        style={{ backgroundColor: 'rgba(0,74,198,0.1)', color: '#004ac6' }}>
        <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>auto_awesome</span>
        100% Gratis untuk Surat Umum
      </div>

      {/* Headline */}
      <h1 className="text-3xl font-bold text-on-surface mb-2 leading-tight tracking-tight">
        Buat Surat Resmi dalam{' '}
        <span className="text-primary">2 Menit</span>,{' '}
        <span className="relative inline-block">
          Bebas Ribet
          <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full opacity-40"
            style={{ background: '#004ac6' }} />
        </span>.
      </h1>

      {/* Subtitle */}
      <p className="text-base text-on-surface-variant max-w-sm mx-auto leading-relaxed">
        Hasilkan surat format PDF instan hanya dengan mengisi form singkat. Selesai dan siap cetak.
      </p>

      {/* Stats row */}
      <div className="flex justify-center items-center gap-8 mt-6">
        {[
          { value: '10+', label: 'Template' },
          { value: '100%', label: 'Legal Format' },
          { value: 'Instant', label: 'PDF Download' },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="text-xl font-bold text-primary">{stat.value}</span>
            <span className="text-[11px] font-semibold text-outline uppercase tracking-wide">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

