# 📄 Generator Surat Otomatis

Aplikasi web modern untuk membuat dan meng-generate berbagai surat resmi (seperti Surat Kuasa, Surat Lamaran Kerja, Surat Izin Sakit, dll) secara otomatis. Dibangun menggunakan **Next.js 14+**, **Tailwind CSS**, dan **@react-pdf/renderer**.

## ✨ Fitur Utama

- **Live Preview Split-Screen**: Isi form di sebelah kiri dan lihat hasil surat di kertas A4 di sebelah kanan secara real-time.
- **Tanda Tangan Digital**: Fitur canvas interaktif untuk menggambar tanda tangan digital langsung di browser.
- **20+ Template Tersedia**: Mulai dari surat pekerjaan, jual beli, pemerintahan, hingga keperluan sekolah.
- **Auto-Save Draft**: Data form otomatis tersimpan di LocalStorage, aman dari *accidental refresh*.
- **Cetak Langsung ke PDF**: Render file PDF berkualitas tinggi langsung di server (API Route).

## 🛠️ Teknologi yang Digunakan

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **PDF Generator**: [@react-pdf/renderer](https://react-pdf.org/)
- **Form & Validation**: `react-hook-form` + `zod`
- **Database (Opsional/Tahap Pengembangan)**: [Prisma](https://www.prisma.io/) + PostgreSQL

---

## 🚀 Cara Menjalankan (Lokal)

Untuk sekadar mencoba fitur utama aplikasi ini (form, preview, dan cetak PDF), Anda **tidak perlu mengonfigurasi database**. Anda bisa langsung menjalankannya dengan 2 langkah sederhana.

### 1. Install Dependencies
Pastikan Anda sudah menginstal Node.js (versi 18+ disarankan). Buka terminal di dalam folder project ini dan jalankan:

```bash
npm install
```

### 2. Jalankan Development Server
Mulai server Next.js di mode development:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat dan menggunakan aplikasinya. 

---

## 🗄️ Setup Database (Opsional - Jika ingin mengembangkan fitur backend)

Aplikasi ini sudah disiapkan dengan Prisma untuk fitur tingkat lanjut (seperti autentikasi, menyimpan riwayat dokumen, dan integrasi payment gateway Midtrans). Jika Anda ingin menggunakan/mengembangkan fitur tersebut:

1. Copy file `.env.example` dan ubah namanya menjadi `.env`.
2. Buka `.env` dan atur `DATABASE_URL` ke server PostgreSQL Anda.
3. Jalankan migrasi Prisma:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

## 📜 Lisensi
*(Silakan tambahkan jenis lisensi open-source pilihan Anda di sini, misalnya MIT License)*
