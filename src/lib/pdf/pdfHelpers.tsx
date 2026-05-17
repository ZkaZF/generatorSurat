/**
 * Shared helpers for all PDF components using @react-pdf/renderer
 */
import { Text, View, Image } from '@react-pdf/renderer';
import { styles } from './components';
import { orDash, formatTanggalIndonesia } from '@/lib/utils';
import type { FormData } from '@/lib/templates/types';
import React from 'react';

export const DR = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.dataRow}>
    <Text style={styles.dataLabel}>{label}</Text>
    <Text style={styles.dataColon}>:</Text>
    <Text style={styles.dataValue}>{value}</Text>
  </View>
);

export const Body = ({ children, mb = 8 }: { children: React.ReactNode; mb?: number }) => (
  <Text style={[styles.body, { marginBottom: mb }]}>{children}</Text>
);

export const DateLine = ({ kotaSurat, tanggalSurat }: { kotaSurat?: string; tanggalSurat?: string }) => (
  <Text style={[styles.rightAlign, { marginBottom: 10 }]}>
    {orDash(kotaSurat || '')}, {tanggalSurat ? formatTanggalIndonesia(tanggalSurat) : '_______________'}
  </Text>
);

export const Addressee = ({ lines, boldIdx = -2 }: { lines: string[]; boldIdx?: number }) => (
  <View style={{ marginBottom: 10 }}>
    {lines.map((line, i) => (
      <Text key={i} style={[{ fontSize: 10 }, i === lines.length + boldIdx ? styles.bodyBold : {}]}>{line}</Text>
    ))}
  </View>
);

export const Perihal = ({ text }: { text: string }) => (
  <View style={[styles.dataRow, { marginBottom: 10 }]}>
    <Text style={[styles.dataLabel, styles.bodyBold]}>Perihal</Text>
    <Text style={styles.dataColon}>:</Text>
    <Text style={styles.dataValue}>{text}</Text>
  </View>
);

export const SigRight = ({ label = 'Hormat saya,', name, src }: { label?: string; name: string; src?: string }) => (
  <View style={[styles.signatureRow, { justifyContent: 'flex-end' }]}>
    <View style={styles.signatureBlock}>
      <Text style={styles.signatureLabel}>{label}</Text>
      {src ? <Image src={src} style={styles.signatureImage} /> : <View style={styles.signatureLine} />}
      <Text style={styles.signatureName}>{name}</Text>
    </View>
  </View>
);

export const SigDual = ({ label1, name1, src1, label2, name2, src2 }: {
  label1: string; name1: string; src1?: string;
  label2: string; name2: string; src2?: string;
}) => (
  <View style={[styles.signatureRow, { justifyContent: 'space-between' }]}>
    {[{ label: label1, name: name1, src: src1 }, { label: label2, name: name2, src: src2 }].map((s, i) => (
      <View key={i} style={styles.signatureBlock}>
        <Text style={styles.signatureLabel}>{s.label}</Text>
        {s.src ? <Image src={s.src} style={styles.signatureImage} /> : <View style={styles.signatureLine} />}
        <Text style={styles.signatureName}>{s.name}</Text>
      </View>
    ))}
  </View>
);

export const Watermark = () => (
  <View style={styles.watermarkContainer} fixed>
    <Text style={styles.watermarkText}>SuratOtomatis.id</Text>
  </View>
);

export const Footer = () => (
  <Text style={styles.footer} fixed>
    Dibuat oleh SuratOtomatis.id — Dokumen ini merupakan salinan yang sah
  </Text>
);

export const TitleHeader = ({ title, sub }: { title: string; sub?: string }) => (
  <View style={{ alignItems: 'center', marginBottom: 4 }}>
    <Text style={{ fontSize: 12, fontFamily: 'Times-Bold', letterSpacing: 0.8 }}>{title}</Text>
    {sub && <Text style={{ fontSize: 10, marginTop: 2 }}>{sub}</Text>}
    <View style={{ borderBottomWidth: 1.5, borderBottomColor: '#000', width: '100%', marginTop: 6, marginBottom: 2 }} />
  </View>
);

export const ThinLine = () => (
  <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#aaa', marginVertical: 6 }} />
);

export const IndentedRows = ({ rows }: { rows: [string, string | undefined][] }) => (
  <View style={styles.indented}>
    {rows.filter(([, v]) => !!v).map(([label, value], i) => (
      <DR key={i} label={label} value={orDash(value || '')} />
    ))}
  </View>
);

// Re-export helpers
export { orDash, formatTanggalIndonesia };
export type { FormData };
