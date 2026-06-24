/**
 * LetterPDF — shared base layout for all letter-style PDF documents.
 * Mirrors the preview component structure: date → addressee → subject → body → signature.
 */
import { Document, Page, Text, View, Image } from '@react-pdf/renderer';
import { styles } from './components';

export interface LetterSection {
  type: 'date-right'    // right-aligned date/city line
    | 'addressee'       // "Kepada Yth." block (array of lines)
    | 'subject'         // "Perihal : ..." line
    | 'paragraph'       // body text paragraph
    | 'data-rows'       // indented label : value grid
    | 'title-center'    // centered bold uppercase title (for contracts)
    | 'divider'         // horizontal line
    | 'list-ordered'    // numbered list
    | 'box'             // bordered box (for pernyataan content)
    | 'spacer';         // vertical spacer
  content?: string;
  lines?: string[];               // for 'addressee', 'list-ordered'
  rows?: [string, string][];      // for 'data-rows'
  bold?: boolean;
}

export interface SignatureBlock {
  label: string;
  name: string;
  src?: string;
}

export interface LetterPDFConfig {
  docTitle: string;
  withWatermark: boolean;
  sections: LetterSection[];
  signatures: SignatureBlock[];   // 1 = single sig right-aligned, 2 = dual sig space-between
}

const DataRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.dataRow}>
    <Text style={styles.dataLabel}>{label}</Text>
    <Text style={styles.dataColon}>:</Text>
    <Text style={styles.dataValue}>{value}</Text>
  </View>
);

export function LetterPDF({ docTitle, withWatermark, sections, signatures }: LetterPDFConfig) {
  return (
    <Document title={docTitle} author="Suratin.id">
      <Page size="A4" style={styles.page}>
        {/* Watermark */}
        {withWatermark && (
          <View style={styles.watermarkContainer} fixed>
            <Text style={styles.watermarkText}>Suratin.id</Text>
          </View>
        )}

        {/* Sections */}
        {sections.map((sec, i) => {
          switch (sec.type) {
            case 'title-center':
              return (
                <View key={i} style={{ alignItems: 'center', marginBottom: 4 }}>
                  <Text style={{ fontSize: 12, fontFamily: 'Times-Bold', letterSpacing: 0.8 }}>
                    {sec.content}
                  </Text>
                </View>
              );

            case 'divider':
              return (
                <View key={i} style={{ borderBottomWidth: 1.5, borderBottomColor: '#000', marginBottom: 10, marginTop: 4 }} />
              );

            case 'date-right':
              return (
                <Text key={i} style={[styles.rightAlign, { marginBottom: 10 }]}>
                  {sec.content}
                </Text>
              );

            case 'addressee':
              return (
                <View key={i} style={{ marginBottom: 10 }}>
                  {(sec.lines || []).map((line, j) => (
                    <Text key={j} style={{ fontSize: 10, fontFamily: j === (sec.lines!.length - 2) ? 'Times-Bold' : 'Times-Roman' }}>
                      {line}
                    </Text>
                  ))}
                </View>
              );

            case 'subject':
              return (
                <View key={i} style={[styles.dataRow, { marginBottom: 10 }]}>
                  <Text style={[styles.dataLabel, styles.bodyBold]}>Perihal</Text>
                  <Text style={styles.dataColon}>:</Text>
                  <Text style={styles.dataValue}>{sec.content}</Text>
                </View>
              );

            case 'paragraph':
              return (
                <Text key={i} style={[styles.body, sec.bold ? styles.bodyBold : {}]}>
                  {sec.content}
                </Text>
              );

            case 'data-rows':
              return (
                <View key={i} style={styles.indented}>
                  {(sec.rows || []).map(([label, value], j) => (
                    <DataRow key={j} label={label} value={value} />
                  ))}
                </View>
              );

            case 'list-ordered':
              return (
                <View key={i} style={{ paddingLeft: 14, marginBottom: 8 }}>
                  {(sec.lines || []).map((line, j) => (
                    <Text key={j} style={[styles.body, { marginBottom: 2 }]}>
                      {j + 1}. {line}
                    </Text>
                  ))}
                </View>
              );

            case 'box':
              return (
                <View key={i} style={{
                  borderWidth: 1, borderColor: '#666', borderRadius: 3,
                  padding: 8, marginBottom: 8,
                }}>
                  <Text style={styles.body}>{sec.content}</Text>
                </View>
              );

            case 'spacer':
              return <View key={i} style={{ height: 8 }} />;

            default:
              return null;
          }
        })}

        {/* Signatures */}
        <View style={[
          styles.signatureRow,
          signatures.length >= 2 ? { justifyContent: 'space-between' } : { justifyContent: 'flex-end' }
        ]}>
          {signatures.map((sig, i) => (
            <View key={i} style={styles.signatureBlock}>
              <Text style={styles.signatureLabel}>{sig.label}</Text>
              {sig.src ? (
                <Image src={sig.src} style={styles.signatureImage} />
              ) : (
                <View style={styles.signatureLine} />
              )}
              <Text style={styles.signatureName}>{sig.name}</Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        {withWatermark && (
          <Text style={styles.footer} fixed>
            Dibuat oleh Suratin.id — Dokumen ini merupakan salinan yang sah
          </Text>
        )}
      </Page>
    </Document>
  );
}

