# Panduan Online / Deploy ke Vercel (vercel.app)
## Aplikasi: admin-guru-skansaba (SMK Negeri 1 Bebandem)

Aplikasi ini telah dikonfigurasi penuh agar dapat di-deploy ke **Vercel** (`https://nama-aplikasi.vercel.app`) dengan dukungan frontend Vite SPA dan backend Serverless Function Express (`/api/*`).

---

### File Konfigurasi yang Disediakan

1. **`vercel.json`**  
   Mengatur build command (`npm run build`), output folder (`dist`), dan routing:
   - Permintaan `/api/(.*)` diarahkan ke Serverless Function `/api`.
   - Permintaan halaman web diarahkan ke `/index.html` (SPA routing).
2. **`api/index.ts`**  
   Serverless API Handler berbasis Express yang menjalankan endpoint:
   - `/api/generate-document` (Generator Dokumen Administrasi AI)
   - `/api/chat` (Konsultasi Asisten Ahli SKANSABA)
   - `/api/enhance-document` (Penyempurnaan Dokumen AI)
3. **`src/server/routes.ts`**  
   Logika Gemini AI Server-Side terpusat yang aman (API Key tidak pernah bocor ke browser).

---

### Langkah 1: Persiapan Repository GitHub

1. Buat repository baru di akun GitHub Anda (misal: `admin-guru-skansaba`).
2. Upload / push semua file kode proyek ini ke repository GitHub tersebut:
   ```bash
   git init
   git add .
   git commit -m "Initial commit admin-guru-skansaba untuk Vercel"
   git branch -M main
   git remote add origin https://github.com/USERNAME-ANDA/admin-guru-skansaba.git
   git push -u origin main
   ```

---

### Langkah 2: Import Proyek di Vercel

1. Buka [https://vercel.com](https://vercel.com) dan login menggunakan akun GitHub Anda.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Cari dan pilih repository `admin-guru-skansaba` yang baru saja Anda buat, lalu klik **"Import"**.
4. Pada halaman konfigurasi project:
   - **Framework Preset**: Pilih `Vite` (Vercel biasanya mendeteksi secara otomatis).
   - **Root Directory**: Biarkan `./` (default).
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

---

### Langkah 3: Tambahkan Environment Variable (WAJIB)

Sebelum menekan tombol Deploy, tambahkan API Key Gemini:

1. Di halaman konfigurasi Vercel, buka bagian **"Environment Variables"**.
2. Masukkan:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Masukkan Gemini API Key Anda (dapat diperoleh gratis dari [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)).
3. Klik **"Add"**.

---

### Langkah 4: Klik Deploy

1. Klik tombol **"Deploy"**.
2. Tunggu proses build selesai sekitar 1 - 2 menit.
3. Setelah selesai, Vercel akan memberikan domain publik aktif, contoh:
   👉 **`https://admin-guru-skansaba.vercel.app`**

---

### Alternatif: Deploy Langsung Menggunakan Vercel CLI

Jika Anda terbiasa dengan terminal / command line:
1. Pastikan Vercel CLI terpasang:
   ```bash
   npm i -g vercel
   ```
2. Jalankan perintah di folder proyek:
   ```bash
   vercel
   ```
3. Ikuti petunjuk di terminal, lalu tambahkan environment variable:
   ```bash
   vercel env add GEMINI_API_KEY
   ```
4. Deploy ke production:
   ```bash
   vercel --prod
   ```

---

### Verifikasi Setelah Online

Setelah aplikasi aktif di `vercel.app`:
1. Buka URL aplikasi Anda di peramban (laptop, tablet, atau HP).
2. Lakukan uji coba:
   - Masukkan identitas guru di bilah verifikasi (Nama, NIP, Mapel, Kelas/Fase).
   - Buka menu **+ Buat Dokumen** dan coba buat Modul Ajar / ATP baru.
   - Buka tab **Konsultasi Asisten Ahli (AI)** dan coba kirim pertanyaan konsultasi.
   - Klik **Ekspor Word (.docx)** dan **Cetak / PDF** untuk memastikan hasil cetak rapi berlogo SMK Negeri 1 Bebandem.
