# SuratOtomatis — Task 1: Project Foundation & Split-Screen Editor

Build the foundation of an Indonesian automatic official letter generator web app. Users fill a dynamic form (left panel) and see a live A4 paper preview (right panel), with digital signature support.

## Confirmed Decisions

| Decision | Choice |
|---|---|
| Database | PostgreSQL directly |
| PDF Rendering | Server-side via API Route |
| Digital Signature | Included in Task 1 |
| Auth | Guest-first (deferred to Task 2) |
| Payment | Midtrans QRIS (deferred to Task 2) |

---

## Project Structure

```
Generator-Surat/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout: fonts, metadata, providers
│   │   ├── page.tsx                      # Landing page (template explorer)
│   │   ├── globals.css                   # Tailwind base + M3 design tokens
│   │   ├── editor/
│   │   │   └── [templateId]/
│   │   │       └── page.tsx              # Split-screen editor page
│   │   └── api/
│   │       └── generate-pdf/
│   │           └── route.ts              # Server-side PDF generation
│   ├── components/
│   │   ├── ui/                           # Shadcn UI components (auto-generated)
│   │   ├── layout/
│   │   │   ├── Header.tsx                # Top app bar
│   │   │   └── BottomNav.tsx             # Mobile bottom navigation
│   │   ├── editor/
│   │   │   ├── DynamicForm.tsx           # Renders form from template JSON config
│   │   │   ├── FormField.tsx             # Individual field type renderer
│   │   │   ├── SignatureCanvas.tsx        # HTML5 Canvas digital signature
│   │   │   ├── A4Preview.tsx             # Live A4 paper preview (HTML mirror)
│   │   │   ├── EditorTabs.tsx            # Mobile tab switcher (Isi Data / Lihat Hasil)
│   │   │   └── StickyActionBar.tsx       # Bottom action bar (price + download)
│   │   └── home/
│   │       ├── HeroSection.tsx           # Landing hero
│   │       ├── SearchBar.tsx             # Template search
│   │       ├── CategoryPills.tsx         # Category filter chips
│   │       └── TemplateCard.tsx          # Template grid card
│   ├── lib/
│   │   ├── templates/
│   │   │   ├── types.ts                  # Template & form field type definitions
│   │   │   ├── registry.ts              # Template registry (lookup by ID, category, price tier)
│   │   │   ├── surat-izin-sakit.ts      # ✅ FREE — Pekerjaan
│   │   │   ├── surat-pengunduran-diri.ts # ✅ FREE — Pekerjaan
│   │   │   ├── surat-kuasa.ts           # 💰 PAID Rp 10.000 — Jual Beli
│   │   │   └── surat-perjanjian-jual-beli.ts # 💰 PAID Rp 15.000 — Jual Beli
│   │   ├── pdf/
│   │   │   ├── components.tsx           # Shared PDF styled components
│   │   │   ├── SuratIzinSakitPDF.tsx    # PDF React component for Surat Izin Sakit
│   │   │   └── SuratKuasaPDF.tsx        # PDF React component for Surat Kuasa
│   │   ├── hooks/
│   │   │   └── useLocalDraft.ts         # LocalStorage auto-save hook
│   │   ├── preview/
│   │   │   ├── SuratIzinSakitPreview.tsx   # A4 HTML preview for Surat Izin Sakit
│   │   │   └── SuratKuasaPreview.tsx       # A4 HTML preview for Surat Kuasa
│   │   └── utils.ts                     # Helpers (formatRupiah, formatTanggal, etc.)
│   └── types/
│       └── index.ts                     # Global shared types
├── prisma/
│   └── schema.prisma                    # DB schema (User, Document, Transaction)
├── public/
│   └── fonts/                           # Times New Roman for PDF (serif font)
├── tailwind.config.ts
├── next.config.ts
├── package.json
├── tsconfig.json
└── .env.example
```

---

## Proposed Changes

### 1. Project Initialization & Configuration

#### [NEW] Project scaffolding via `create-next-app`

```bash
npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

#### [NEW] Additional dependencies

```bash
# PDF generation (server-side)
npm install @react-pdf/renderer

# Form management
npm install react-hook-form @hookform/resolvers zod

# Digital signature
npm install react-signature-canvas
npm install -D @types/react-signature-canvas

# Database
npm install prisma @prisma/client
npx prisma init

# Shadcn UI setup
npx -y shadcn@latest init

# Shadcn components needed for Task 1
npx -y shadcn@latest add button input label textarea select tabs card badge
```

#### [NEW] `.env.example`
```
DATABASE_URL="postgresql://user:password@localhost:5432/surat_otomatis"
```

#### [MODIFY] `tailwind.config.ts`
Extend with the complete Material Design 3 color token system from the mockups. Key tokens:
- `primary: #004ac6`, `primary-container: #2563eb`
- `surface`, `surface-container`, `surface-container-lowest`, etc.
- Custom spacing: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `margin-mobile`
- Custom font sizes: `h1`, `h2`, `h3`, `body-lg`, `body-md`, `body-sm`, `label-md`, `label-sm`, `button`
- Font family: `Inter` throughout

#### [NEW] `src/app/globals.css`
- Tailwind directives
- Custom scrollbar hide utility
- A4 paper aspect ratio utility
- Serif text class for letter content (Times New Roman)
- Material Symbols icon font import

---

### 2. Database Schema (Prisma)

#### [NEW] `prisma/schema.prisma`

```prisma
model User {
  id          String     @id @default(cuid())
  email       String?    @unique
  whatsapp    String?    @unique
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
  documents   Document[]
  transactions Transaction[]
}

model Document {
  id          String   @id @default(cuid())
  templateId  String
  formData    Json     // Stores the dynamic form data
  status      String   @default("draft") // draft | completed
  pdfUrl      String?
  userId      String?
  user        User?    @relation(fields: [userId], references: [id])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Transaction {
  id            String   @id @default(cuid())
  documentId    String
  amount        Int
  status        String   @default("pending") // pending | paid | expired
  midtransId    String?  @unique
  qrisUrl       String?
  userId        String?
  user          User?    @relation(fields: [userId], references: [id])
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

> [!NOTE]
> Prisma will be initialized and schema generated, but full DB integration (create/read records) is deferred to Task 2 when we implement the guest auth flow and payment system.

---

### 3. Template System (Dynamic Form Engine)

#### [NEW] `src/lib/templates/types.ts`

Core type definitions for the dynamic form engine:

```typescript
type FieldType = 'text' | 'number' | 'date' | 'textarea' | 'select' | 'signature';

type TemplateCategory = 'pekerjaan' | 'pemerintahan' | 'jual-beli' | 'sekolah';

/** Price tier determines badge styling and download flow */
type PriceTier = 'free' | 'paid';

interface FormField {
  name: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
  colSpan?: 1 | 2;
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    message?: string;
  };
  options?: { value: string; label: string }[];
}

interface FormStep {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
}

interface TemplateConfig {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  icon: string;              // Material Symbols icon name
  price: number;             // 0 = free, > 0 = paid (in IDR)
  steps: FormStep[];
  previewComponent: string;
  pdfComponent: string;
}

/** Helper to derive tier from price */
function getPriceTier(template: TemplateConfig): PriceTier {
  return template.price === 0 ? 'free' : 'paid';
}

/** Helper to check if template is free */
function isFreeTemplate(template: TemplateConfig): boolean {
  return template.price === 0;
}
```

---

#### Template Catalog — Free vs Paid

All templates are explicitly categorized. The landing page grid will show **all 4 templates** matching the mockup, with visually distinct badges:

| # | Template | Category | Price | Tier | Badge Style |
|---|---|---|---|---|---|
| 1 | Surat Izin Sakit | Pekerjaan | 0 | ✅ FREE | `bg-secondary-container text-on-secondary-container` → "Gratis" |
| 2 | Surat Pengunduran Diri | Pekerjaan | 0 | ✅ FREE | `bg-secondary-container text-on-secondary-container` → "Gratis" |
| 3 | Surat Kuasa BPKB | Jual Beli | 10.000 | 💰 PAID | `bg-surface-variant text-on-surface-variant` → "Rp 10.000" |
| 4 | Surat Perjanjian Jual Beli | Jual Beli | 15.000 | 💰 PAID | `bg-surface-variant text-on-surface-variant` → "Rp 15.000" |

> [!IMPORTANT]
> **FREE templates** → PDF has watermark footer "Dibuat oleh SuratOtomatis", download immediately after email entry.
> **PAID templates** → PDF has NO watermark, download only after payment confirmed via Midtrans QRIS.

---

#### [NEW] `src/lib/templates/surat-izin-sakit.ts` — ✅ FREE | Pekerjaan

Single-step form with fields:
- `namaKaryawan` (text) — Nama Lengkap
- `jabatan` (text) — Jabatan/Posisi
- `departemen` (text) — Departemen
- `namaPerusahaan` (text) — Nama Perusahaan
- `alamatPerusahaan` (textarea) — Alamat Perusahaan
- `tanggalMulai` (date) — Tanggal Mulai Sakit
- `tanggalSelesai` (date) — Tanggal Selesai Izin
- `keterangan` (textarea) — Keterangan Sakit
- `tanggalSurat` (date) — Tanggal Surat
- `kotaSurat` (text) — Kota Penulisan Surat
- `tandaTangan` (signature) — Tanda Tangan

**`price: 0` → Gratis → Watermark on PDF**

#### [NEW] `src/lib/templates/surat-pengunduran-diri.ts` — ✅ FREE | Pekerjaan

Single-step form with fields:
- `namaKaryawan` (text) — Nama Lengkap
- `jabatan` (text) — Jabatan/Posisi
- `departemen` (text) — Departemen
- `namaPerusahaan` (text) — Nama Perusahaan
- `alamatPerusahaan` (textarea) — Alamat Perusahaan
- `tanggalEfektif` (date) — Tanggal Efektif Pengunduran Diri
- `alasan` (textarea) — Alasan Pengunduran Diri
- `tanggalSurat` (date) — Tanggal Surat
- `kotaSurat` (text) — Kota Penulisan Surat
- `tandaTangan` (signature) — Tanda Tangan

**`price: 0` → Gratis → Watermark on PDF**

> [!NOTE]
> Surat Pengunduran Diri will reuse the single-step form layout. Its preview and PDF components will be created as placeholder stubs in Task 1, with full content in a follow-up task.

#### [NEW] `src/lib/templates/surat-kuasa.ts` — 💰 PAID Rp 10.000 | Jual Beli

Multi-step form (3 steps, matching the mockup's progress stepper):

**Step 1 — Data Pemberi Kuasa:**
- `namaPemberi` (text), `nikPemberi` (number), `tempatLahirPemberi` (text), `tanggalLahirPemberi` (date), `alamatPemberi` (textarea), `pekerjaanPemberi` (text)

**Step 2 — Data Penerima Kuasa:**
- `namaPenerima` (text), `nikPenerima` (number), `tempatLahirPenerima` (text), `tanggalLahirPenerima` (date), `alamatPenerima` (textarea), `pekerjaanPenerima` (text)

**Step 3 — Detail Kuasa:**
- `perihalKuasa` (select: BPKB, Tanah, Pengambilan Dokumen, Lainnya)
- `isiKuasa` (textarea) — Uraian kuasa yang diberikan
- `tanggalSurat` (date), `kotaSurat` (text)
- `tandaTanganPemberi` (signature), `tandaTanganPenerima` (signature)

**`price: 10000` → Rp 10.000 → No watermark on PDF (after payment)**

#### [NEW] `src/lib/templates/surat-perjanjian-jual-beli.ts` — 💰 PAID Rp 15.000 | Jual Beli

Multi-step form (3 steps):

**Step 1 — Data Pihak Pertama (Penjual):**
- `namaPenjual` (text), `nikPenjual` (number), `alamatPenjual` (textarea), `pekerjaanPenjual` (text)

**Step 2 — Data Pihak Kedua (Pembeli):**
- `namaPembeli` (text), `nikPembeli` (number), `alamatPembeli` (textarea), `pekerjaanPembeli` (text)

**Step 3 — Detail Perjanjian:**
- `objekJualBeli` (text) — Objek yang diperjualbelikan
- `hargaJualBeli` (number) — Harga kesepakatan
- `deskripsiObjek` (textarea) — Deskripsi detail objek
- `ketentuanTambahan` (textarea) — Ketentuan tambahan
- `tanggalSurat` (date), `kotaSurat` (text)
- `tandaTanganPenjual` (signature), `tandaTanganPembeli` (signature)

**`price: 15000` → Rp 15.000 → No watermark on PDF (after payment)**

> [!NOTE]
> Surat Perjanjian Jual Beli will have full template config defined. Its preview and PDF components will be created as placeholder stubs in Task 1, with full content in a follow-up task.

---

#### [NEW] `src/lib/templates/registry.ts`

Registry object that maps `templateId → TemplateConfig`. Exports helper functions:

```typescript
// Lookup
getTemplate(id: string): TemplateConfig
getAllTemplates(): TemplateConfig[]

// Filter by category
getTemplatesByCategory(category: TemplateCategory): TemplateConfig[]

// Filter by price tier
getFreeTemplates(): TemplateConfig[]   // price === 0
getPaidTemplates(): TemplateConfig[]   // price > 0

// Search
searchTemplates(query: string): TemplateConfig[]  // fuzzy match on name/description
```

---

### 4. Landing Page (Home / Template Explorer)

#### [NEW] `src/app/page.tsx`
Server component that renders the landing page. Imports templates from registry.

#### [NEW] `src/components/home/HeroSection.tsx`
Matches mockup: "Buat Surat Resmi dalam 2 Menit, Bebas Ribet." headline + subtitle.

#### [NEW] `src/components/home/SearchBar.tsx`
Search input with Material icon. Client component with `useState` for filtering.

#### [NEW] `src/components/home/CategoryPills.tsx`
Horizontal scrollable pills: Pekerjaan, Pemerintahan, Jual Beli, Sekolah. Active state uses `bg-primary text-on-primary`.

#### [NEW] `src/components/home/TemplateCard.tsx`
Grid card matching mockup design:
- Icon circle (`bg-surface-container-low` with Material icon in `text-primary`)
- Template name (2-line clamp via `line-clamp-2`)
- **Price badge with distinct styling per tier:**
  - ✅ **FREE:** `<span class="bg-secondary-container text-on-secondary-container">Gratis</span>`
  - 💰 **PAID:** `<span class="bg-surface-variant text-on-surface-variant">Rp 10.000</span>`
- "Buat Sekarang" CTA button
- Links to `/editor/[templateId]`
- The card uses `isFreeTemplate()` helper to determine which badge variant to render

---

### 5. Editor Page — Split-Screen Layout

This is the **core** of Task 1. Must precisely match the mockup behavior.

#### [NEW] `src/app/editor/[templateId]/page.tsx`

Server component that:
1. Reads `templateId` from params
2. Looks up template config from registry
3. Renders the `EditorClient` component with the config

#### [NEW] `src/components/editor/EditorTabs.tsx`

**Mobile (< md):** Tab bar with "Isi Data" and "Lihat Hasil" tabs. Only one panel visible at a time.
**Desktop (≥ md):** Hidden — both panels shown side-by-side.

#### [NEW] `src/components/editor/DynamicForm.tsx`

The form engine. Client component (`"use client"`).

**Responsibilities:**
- Accepts `TemplateConfig` as prop
- Uses `react-hook-form` with Zod schema auto-generated from template fields
- Renders multi-step form with progress stepper (matching mockup's segmented progress bar)
- Manages step navigation (Selanjutnya / Sebelumnya buttons)
- Calls `useLocalDraft` hook to persist form state to localStorage
- Passes form values up to parent via callback for live preview sync

**Progress Stepper UI** (from mockup):
- Horizontal bar segments per step
- Active step: `bg-primary` + label in primary color
- Inactive: `bg-outline-variant` + 50% opacity

#### [NEW] `src/components/editor/FormField.tsx`

Renders a single field based on its `type`:
- `text` → `<Input>` (Shadcn)
- `number` → `<Input type="number">`
- `date` → `<Input type="date">`
- `textarea` → `<Textarea>` (Shadcn)
- `select` → `<Select>` (Shadcn)
- `signature` → `<SignatureCanvas>` (custom)

All fields follow the mockup styling:
- Label above with `font-label-md`
- Input with `border-outline-variant rounded-lg px-4 py-3`
- Focus: `border-primary ring-1 ring-primary`
- Placeholder: `text-outline/70`

#### [NEW] `src/components/editor/SignatureCanvas.tsx`

Digital signature component using `react-signature-canvas`:
- Label: "Tanda Tangan Digital"
- Clear button: "Hapus" (top-right, red on hover)
- Canvas area: `h-48 border-dashed border-outline-variant rounded-xl`
- "X" marker and signature line at bottom (matching mockup)
- Placeholder text: "Goreskan tanda tangan di sini"
- On draw end: exports canvas to Base64 PNG, updates form value
- Touch-enabled (`touch-none select-none` for proper mobile handling)

#### [NEW] `src/components/editor/A4Preview.tsx`

Live A4 paper preview. Client component.

**Responsibilities:**
- Accepts `templateId` and `formData` as props
- Renders the correct preview component based on template
- A4 aspect ratio: `aspect-[1/1.414]`
- White paper with shadow (matching mockup's `paper-shadow`)
- Scales down to fit container while maintaining aspect ratio
- Shows watermark overlay for free templates: "Dibuat dengan SuratOtomatis.id" (rotated, 3% opacity)
- Shows "DRAFT" watermark while editing

#### [NEW] `src/components/editor/StickyActionBar.tsx`

Fixed bottom bar (matching mockup):
- Left: "Total Biaya" label + price in `font-h3`
- Right: "Download PDF" button with download icon
- Free templates: button says "Download PDF"
- Paid templates: button says "Bayar & Download" (payment flow deferred to Task 2)
- `shadow-[0_-4px_24px_rgba(0,0,0,0.04)]`

---

### 6. Preview Components (HTML mirrors of PDF)

These render the letter content as HTML for the live preview panel. They mirror what the PDF will look like.

#### [NEW] `src/lib/preview/SuratIzinSakitPreview.tsx`

Standard Indonesian sick leave letter format:
- Header: City + date (right-aligned)
- "Kepada Yth." addressee section
- Subject line: "Perihal: Permohonan Izin Sakit"
- Body paragraphs with employee data
- Closing: "Hormat saya," + signature area + name
- Serif font (`Times New Roman`) for formal look
- Watermark: "Dibuat oleh SuratOtomatis" in footer

#### [NEW] `src/lib/preview/SuratKuasaPreview.tsx`

Standard Indonesian power of attorney letter format:
- Centered header: "SURAT KUASA" with double border
- "Yang bertanda tangan di bawah ini:" opener
- Pemberi Kuasa data table (Nama, NIK, TTL, Alamat, Pekerjaan)
- "Selanjutnya disebut PIHAK PERTAMA"
- Penerima Kuasa data table
- "Selanjutnya disebut PIHAK KEDUA"
- Body: kuasa details
- Dual signature area at bottom (Pemberi + Penerima)

---

### 7. PDF Generation (Server-Side)

#### [NEW] `src/lib/pdf/components.tsx`

Shared `@react-pdf/renderer` styled components:
- `A4Page` — Standard A4 with margins
- `Heading` — Bold serif text
- `BodyText` — Regular serif text
- `DataRow` — Name : Value layout
- `SignatureBlock` — Signature image + underline + name
- `Watermark` — Rotated, low-opacity overlay text

#### [NEW] `src/lib/pdf/SuratIzinSakitPDF.tsx`

`@react-pdf/renderer` Document component that produces the exact same layout as the HTML preview. Accepts `formData` as props. Includes watermark footer for free template.

#### [NEW] `src/lib/pdf/SuratKuasaPDF.tsx`

Same approach for Surat Kuasa. No watermark (paid template — watermark removal happens after payment in Task 2).

#### [NEW] `src/app/api/generate-pdf/route.ts`

Next.js API Route handler:
```typescript
POST /api/generate-pdf
Body: { templateId: string, formData: Record<string, any> }
Response: PDF file stream (application/pdf)
```

Logic:
1. Validate `templateId` exists
2. Select the correct PDF component
3. Render with `@react-pdf/renderer`'s `renderToStream()`
4. Return as downloadable PDF response

---

### 8. Shared Layout Components

#### [NEW] `src/components/layout/Header.tsx`

Top app bar matching mockup:
- `h-14 sticky top-0 z-50`
- Left: document icon (home) or close icon (editor)
- Center: "SuratOtomatis" logo text (`text-blue-600 font-bold tracking-tighter`)
- Right: account circle icon
- Border bottom + subtle shadow
- Glassmorphism: `bg-white/90 backdrop-blur-md`

#### [NEW] `src/components/layout/BottomNav.tsx`

Mobile bottom navigation (mockup):
- 3 tabs: Eksplor, Draft, Profil
- Active tab: blue with filled icon + rounded bg
- Fixed bottom, `backdrop-blur-md`
- Hidden on desktop (`md:hidden`)
- Hidden when in editor mode (replaced by StickyActionBar)

---

### 9. Hooks & Utilities

#### [NEW] `src/lib/hooks/useLocalDraft.ts`

Custom hook for LocalStorage draft persistence:
```typescript
function useLocalDraft(templateId: string) {
  // Returns [formData, setFormData, clearDraft]
  // Auto-saves to localStorage on every change (debounced 500ms)
  // Key format: `surat-draft-${templateId}`
  // Hydration-safe (checks window existence)
}
```

#### [NEW] `src/lib/utils.ts`

Utility functions:
- `formatRupiah(amount: number): string` — "Rp 15.000"
- `formatTanggalIndonesia(date: string): string` — "10 Oktober 2023"
- `formatTanggalPanjang(date: string): string` — "Senin, Sepuluh Oktober Dua Ribu Dua Puluh Tiga"
- `cn(...classes)` — Tailwind class merger (from shadcn)

---

## Data Flow Diagram

```mermaid
flowchart LR
    subgraph Client ["Client (Browser)"]
        A["DynamicForm"] -->|"formData state"| B["A4Preview"]
        A -->|"debounced save"| C["LocalStorage"]
        C -->|"restore on mount"| A
        A -->|"signature Base64"| D["SignatureCanvas"]
    end

    subgraph Server ["Server (Next.js API)"]
        E["POST /api/generate-pdf"]
        F["@react-pdf/renderer"]
        E --> F
        F -->|"PDF stream"| G["Download"]
    end

    B -->|"user clicks Download"| E
    A -->|"formData JSON"| E
```

---

## Verification Plan

### Automated Tests
```bash
# 1. Project builds without errors
npm run build

# 2. Dev server starts
npm run dev

# 3. Prisma schema validates
npx prisma validate

# 4. Type checking passes
npx tsc --noEmit
```

### Manual / Browser Verification

1. **Landing Page** (`/`):
   - Hero section renders with correct typography
   - Category pills are scrollable and filterable
   - **4 template cards visible in 2×2 grid:**
     - Surat Izin Sakit → badge "Gratis" (secondary-container style)
     - Surat Pengunduran Diri → badge "Gratis" (secondary-container style)
     - Surat Kuasa BPKB → badge "Rp 10.000" (surface-variant style)
     - Surat Perjanjian Jual Beli → badge "Rp 15.000" (surface-variant style)
   - Category filter "Pekerjaan" shows only the 2 free templates
   - Category filter "Jual Beli" shows only the 2 paid templates
   - Clicking "Buat Sekarang" navigates to `/editor/[id]`

2. **Editor Page** (`/editor/surat-izin-sakit`):
   - Desktop: side-by-side layout (form left, preview right)
   - Mobile: tab switching between "Isi Data" and "Lihat Hasil"
   - All form fields render correctly per template JSON
   - Typing in form fields updates A4 preview in real-time
   - Signature canvas accepts mouse/touch drawing
   - Signature appears in preview after drawing
   - "Hapus" button clears signature
   - Progress stepper shows correct step (single step for this template)

3. **Editor Page** (`/editor/surat-kuasa`):
   - Multi-step form with 3 steps
   - Progress stepper updates on step navigation
   - All fields per step render correctly
   - Step navigation (Selanjutnya / Sebelumnya) works
   - Dual signature canvases in step 3

4. **Draft Persistence**:
   - Fill some fields → refresh page → data is restored
   - Different templates have separate drafts

5. **PDF Generation**:
   - Click "Download PDF" → PDF downloads
   - PDF content matches the A4 preview
   - Free template PDF has watermark footer
   - Signature images appear in PDF

6. **Responsive Design**:
   - Test at 375px (mobile), 768px (tablet), 1280px (desktop)
   - Bottom nav visible on mobile, hidden on desktop
   - Editor tabs visible on mobile, split-screen on desktop
