// Shared @react-pdf/renderer styled components for all letter PDFs
import { StyleSheet, Text, View, Font } from '@react-pdf/renderer';

// ── Register Fonts ─────────────────────────────────────────────────────────────
// Use Helvetica as built-in fallback (Times New Roman not bundled)
// In production, register actual Times New Roman from /public/fonts/

// ── Shared Styles ─────────────────────────────────────────────────────────────
export const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.6,
    paddingTop: 50,
    paddingBottom: 60,
    paddingHorizontal: 60,
    color: '#1a1a1a',
  },
  // Headers
  sectionTitle: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 2,
  },
  headerDivider: {
    borderBottom: '2px double #000',
    marginBottom: 16,
    paddingBottom: 8,
  },
  // Body text
  body: {
    fontSize: 11,
    lineHeight: 1.7,
    textAlign: 'justify',
    marginBottom: 8,
  },
  bodyBold: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
  },
  // Data table row
  dataRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  dataLabel: {
    width: 120,
    fontSize: 10,
  },
  dataColon: {
    width: 16,
    fontSize: 10,
  },
  dataValue: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
  },
  // Indented section
  indented: {
    paddingLeft: 20,
    marginBottom: 8,
  },
  // Signature block
  signatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  signatureBlock: {
    alignItems: 'center',
    width: '40%',
  },
  signatureLabel: {
    fontSize: 10,
    marginBottom: 4,
    textAlign: 'center',
  },
  signatureLine: {
    borderBottom: '1px dashed #aaa',
    width: 80,
    marginVertical: 40,
  },
  signatureImage: {
    width: 80,
    height: 40,
    objectFit: 'contain',
    marginVertical: 4,
  },
  signatureName: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    textDecoration: 'underline',
    textAlign: 'center',
  },
  // Watermark
  watermarkContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  watermarkText: {
    fontSize: 28,
    color: '#dddddd',
    transform: 'rotate(-45deg)',
    opacity: 0.15,
  },
  // Footer
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 60,
    right: 60,
    borderTop: '0.5px solid #ddd',
    paddingTop: 6,
    textAlign: 'center',
    fontSize: 8,
    color: '#aaa',
    fontStyle: 'italic',
  },
  // Location/date line
  rightAlign: {
    textAlign: 'right',
    fontSize: 10,
    marginBottom: 12,
  },
  // Numbered list item
  listItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  listNumber: {
    width: 20,
    fontSize: 10,
  },
  listContent: {
    flex: 1,
    fontSize: 10,
    textAlign: 'justify',
  },
});

