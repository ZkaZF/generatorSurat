/**
 * Shared style constants for all A4 letter preview components.
 * All previews use inline styles to avoid Tailwind dependency.
 */
export const PS = {
  page: {
    fontFamily: "'Times New Roman', Times, serif",
    fontSize: '10px',
    lineHeight: 1.75,
    padding: '36px 40px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    color: '#1a1a1a',
    boxSizing: 'border-box' as const,
  },
  bold: { fontWeight: 'bold' as const },
  italic: { fontStyle: 'italic' as const },
  underline: { textDecoration: 'underline' as const },
  center: { textAlign: 'center' as const },
  right: { textAlign: 'right' as const },
  justify: { textAlign: 'justify' as const },

  /** Two-col label: value grid */
  dataGrid: (labelWidth = '110px'): React.CSSProperties => ({
    display: 'grid',
    gridTemplateColumns: `${labelWidth} 12px 1fr`,
    gap: '1px 0',
    paddingLeft: '12px',
    marginBottom: '8px',
  }),

  /** Paragraph with margin */
  p: (mb = '8px'): React.CSSProperties => ({
    textAlign: 'justify',
    marginBottom: mb,
  }),

  /** Big centered title (for formal contracts) */
  title: {
    textAlign: 'center' as const,
    fontWeight: 'bold' as const,
    fontSize: '13px',
    letterSpacing: '1px',
    textTransform: 'uppercase' as const,
    marginBottom: '4px',
  },

  divider: {
    borderBottom: '2px solid #000',
    margin: '6px 0 14px',
  },

  thinDivider: {
    borderBottom: '0.5px solid #ccc',
    margin: '10px 0',
  },

  sigBlock: {
    marginTop: 'auto',
    paddingTop: '12px',
    display: 'flex',
    justifyContent: 'flex-end',
  },

  sigBlockCenter: {
    marginTop: 'auto',
    paddingTop: '12px',
    display: 'flex',
    justifyContent: 'center',
  },

  sigRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 'auto',
    paddingTop: '12px',
  },

  sigBox: {
    textAlign: 'center' as const,
    width: '130px',
  },

  sigLineImg: (src: string) => ({
    src,
    alt: 'Tanda tangan',
    style: {
      height: '36px',
      maxWidth: '100%',
      objectFit: 'contain' as const,
      margin: '6px auto',
      display: 'block',
    },
  }),

  sigLineDash: {
    width: '80px',
    borderBottom: '1px dashed #aaa',
    margin: '36px auto 4px',
  },

  footer: {
    marginTop: '10px',
    paddingTop: '6px',
    borderTop: '0.5px solid #e0e0e0',
    textAlign: 'center' as const,
    fontSize: '8px',
    color: '#aaa',
    fontStyle: 'italic' as const,
  },

  section: (mb = '12px'): React.CSSProperties => ({ marginBottom: mb }),
};

/** Render a signature: image if base64 present, else a dashed line */
export function SigImg({ src }: { src: string | undefined }) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt="TTD"
        style={{ height: '36px', maxWidth: '100%', objectFit: 'contain', margin: '6px auto', display: 'block' }}
      />
    );
  }
  return <div style={PS.sigLineDash} />;
}

export const FOOTER = (
  <div style={PS.footer}>Dibuat oleh Suratin.id</div>
);
