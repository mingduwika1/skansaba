import { AdminDocument, DocTypeOption } from '../types';

export const DOC_TYPE_OPTIONS: DocTypeOption[] = [
  {
    type: 'modul_ajar',
    label: 'Modul Ajar Deep Learning',
    subtitle: 'Rencana Pembelajaran Mendalam Lengkap',
    badge: 'Fitur Utama',
    color: 'from-blue-600 to-indigo-700',
    iconName: 'FileText',
    description: 'Format modul ajar resmi mengintegrasikan Mindful, Meaningful, & Joyful Learning dengan studi kasus industri SMK dan KKTP.',
  },
  {
    type: 'refleksi_awal',
    label: 'Refleksi Awal (Diagnostik)',
    subtitle: 'Kesiapan Belajar & Kesadaran Penuh (Mindful)',
    badge: 'Mindful Learning',
    color: 'from-emerald-600 to-teal-700',
    iconName: 'Compass',
    description: 'Instrumen diagnostik kesiapan kognitif/non-kognitif, pemetaan gaya belajar, dan pertanyaan pemantik awal siswa.',
  },
  {
    type: 'refleksi_akhir',
    label: 'Refleksi Akhir (Metakognisi)',
    subtitle: 'Evaluasi Pembelajaran & Joyful Learning',
    badge: 'Joyful Learning',
    color: 'from-purple-600 to-pink-700',
    iconName: 'Sparkles',
    description: 'Refleksi metakognitif siswa model 3-2-1, indeks kebahagiaan belajar, serta lembar evaluasi reflektif guru.',
  },
  {
    type: 'asesmen_sumatif',
    label: 'Asesmen Sumatif & Rubrik',
    subtitle: 'Kisi-Kisi, Soal Masalah Riil, & Rubrik 4 Level',
    badge: 'Asesmen Autentik',
    color: 'from-amber-600 to-orange-700',
    iconName: 'CheckSquare',
    description: 'Kisi-kisi soal autentik berbasis masalah industri DUDIKA, uji kinerja praktik, pedoman penskoran, dan konversi nilai.',
  },
  {
    type: 'bahan_ajar',
    label: 'Bahan Ajar & Studi Kasus',
    subtitle: 'Materi Konseptual & Relevansi Industri (Meaningful)',
    badge: 'Meaningful Learning',
    color: 'from-cyan-600 to-blue-700',
    iconName: 'BookOpen',
    description: 'Peta konsep esensial, uraian materi mendalam tanpa hafalan dangkal, studi kasus industri DUDIKA Bali, dan glosarium.',
  },
  {
    type: 'remedial',
    label: 'Program Remedial',
    subtitle: 'Analisis Miskonsepsi & Bimbingan Terfokus',
    badge: 'Diferensiasi',
    color: 'from-rose-600 to-red-700',
    iconName: 'RotateCcw',
    description: 'Identifikasi miskonsepsi siswa, strategi bimbingan konseptual terbimbing, dan lembar kerja perbaikan bermakna.',
  },
  {
    type: 'pengayaan',
    label: 'Program Pengayaan',
    subtitle: 'Tantangan Eksploratif & Proyek Mandiri',
    badge: 'Tantangan Riil',
    color: 'from-indigo-600 to-violet-700',
    iconName: 'Award',
    description: 'Tantangan terbuka (open-ended project) untuk siswa kategori Mahir berbasis kebutuhan industri nyata.',
  },
  {
    type: 'tindak_lanjut',
    label: 'Rencana Tindak Lanjut (RTL)',
    subtitle: 'Analisis Ketuntasan & Peningkatan Mutu KBM',
    badge: 'Evaluasi Mutu',
    color: 'from-teal-600 to-emerald-800',
    iconName: 'Layers',
    description: 'Analisis daya serap kelas, matriks program tindak lanjut tiga kelompok, dan rencana aksi perbaikan berkelanjutan.',
  },
];

export const INITIAL_DOCUMENTS: AdminDocument[] = [
  // 1. Modul Ajar
  {
    id: 'skansaba-modul-pplg-01',
    title: 'Modul Ajar Deep Learning: Desain Web Responsif & Integrasi API Industri',
    docType: 'modul_ajar',
    topic: 'Pemrograman Web Responsif Berbasis Modern Framework dan RESTful API',
    timeAllocation: '4 JP x 45 Menit (Pertemuan 1 - 2)',
    createdAt: '2026-07-20T08:00:00Z',
    updatedAt: '2026-07-20T08:00:00Z',
    summary: 'Modul Ajar Pembelajaran Mendalam (Mindful, Meaningful, Joyful) untuk Konsentrasi Keahlian PPLG SMK Negeri 1 Bebandem mengacu pada Kepmendikdasmen No. 126/P/2025.',
    teacherProfile: {
      name: 'I Made Suartana, S.Kom.',
      nip: '19840215 201001 1 012',
      subject: 'Konsentrasi Keahlian Pengembangan Perangkat Lunak dan Gim (PPLG)',
      gradePhase: 'Kelas XI / Fase F',
      major: 'Rekayasa Perangkat Lunak / PPLG',
      semester: 'Ganjil',
      academicYear: '2026/2027',
      dateStr: '20 Juli 2026',
      isVerified: true,
    },
    markdownBody: `# MODUL AJAR PEMBELAJARAN MENDALAM (DEEP LEARNING)\n...`,
    htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">MODUL AJAR PEMBELAJARAN MENDALAM (DEEP LEARNING)</h1>
    <p class="text-sm font-semibold text-gray-600 mt-1">Acuan Resmi: Permendikdasmen No. 13/2025 & Kepmendikdasmen No. 126/P/2025</p>
  </div>

  <div class="bg-slate-50 border border-slate-300 rounded-lg p-4">
    <h3 class="text-base font-bold text-[#0d3b66] border-b pb-2 mb-3">I. IDENTITAS UMUM</h3>
    <table class="w-full text-sm border-collapse">
      <tbody>
        <tr class="border-b border-slate-200"><td class="w-1/3 py-1 font-semibold text-gray-700">Nama Guru</td><td class="py-1">: I Made Suartana, S.Kom.</td></tr>
        <tr class="border-b border-slate-200"><td class="py-1 font-semibold text-gray-700">NIP Guru</td><td class="py-1">: 19840215 201001 1 012</td></tr>
        <tr class="border-b border-slate-200"><td class="py-1 font-semibold text-gray-700">Satuan Pendidikan</td><td class="py-1">: SMK Negeri 1 Bebandem</td></tr>
        <tr class="border-b border-slate-200"><td class="py-1 font-semibold text-gray-700">Mata Pelajaran</td><td class="py-1">: Konsentrasi Keahlian PPLG</td></tr>
        <tr class="border-b border-slate-200"><td class="py-1 font-semibold text-gray-700">Kelas / Fase</td><td class="py-1">: Kelas XI / Fase F (Semester Ganjil)</td></tr>
        <tr class="border-b border-slate-200"><td class="py-1 font-semibold text-gray-700">Alokasi Waktu</td><td class="py-1">: 4 JP x 45 Menit (Pertemuan ke-1)</td></tr>
        <tr><td class="py-1 font-semibold text-gray-700">Profil Pelajar Pancasila & Budaya Kerja</td><td class="py-1">: Bernalar Kritis, Gotong Royong, Integritas, Standar Kerja 5R/5S Industri</td></tr>
      </tbody>
    </table>
  </div>

  <div>
    <h3 class="text-base font-bold text-[#0d3b66] mb-2">II. CAPAIAN & TUJUAN PEMBELAJARAN (DEEP LEARNING ORIENTED)</h3>
    <div class="p-3 bg-blue-50/70 border-l-4 border-[#0d3b66] text-sm text-gray-800 mb-3 rounded-r">
      <strong>Capaian Pembelajaran (Elemen):</strong> Peserta didik mampu merancang, mengkodekan, menguji, dan menerapkan antarmuka web responsif yang terhubung dengan API backend sesuai standar industri perangkat lunak.
    </div>
    
    <table class="w-full text-sm border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 text-left w-12">No</th>
          <th class="p-2 border border-slate-400 text-left">Tujuan Pembelajaran (TP)</th>
          <th class="p-2 border border-slate-400 text-left w-48">Dimensi Deep Learning</th>
          <th class="p-2 border border-slate-400 text-left w-36">Indikator Ketercapaian</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center font-bold">1</td>
          <td class="p-2 border border-slate-300">Menganalisis prinsip arsitektur antarmuka responsif dan konsumsi data REST API pada sistem katalog UMKM Salak Sibetan.</td>
          <td class="p-2 border border-slate-300 font-medium text-emerald-800 bg-emerald-50/50">Mindful Learning (Kesadaran logika struktur mendalam)</td>
          <td class="p-2 border border-slate-300">Menjelaskan alur data client-server tanpa miskonsepsi async</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 text-center font-bold">2</td>
          <td class="p-2 border border-slate-300">Mengembangkan prototipe antarmuka responsif nyata yang menyelesaikan kebutuhan etalase digital DUDIKA.</td>
          <td class="p-2 border border-slate-300 font-medium text-blue-800 bg-blue-50/50">Meaningful Learning (Konteks DUDIKA & Kearifan Lokal)</td>
          <td class="p-2 border border-slate-300">Halaman adaptif pada desktop & mobile (Lighthouse > 90)</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center font-bold">3</td>
          <td class="p-2 border border-slate-300">Melakukan eksplorasi kode bersama tim (pair programming) dengan rasa ingin tahu tinggi serta mempresentasikan solusi kreatif.</td>
          <td class="p-2 border border-slate-300 font-medium text-purple-800 bg-purple-50/50">Joyful Learning (Pengalaman eksploratif & apresiatif)</td>
          <td class="p-2 border border-slate-300">Antusiasme tim, saling review kode tanpa rasa takut salah</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-amber-50 border border-amber-300 rounded-lg p-4">
    <h4 class="text-sm font-bold text-amber-900 uppercase tracking-wider mb-2">
      💡 PERTANYAAN PEMANTIK NALAR KRITIS (MINDFUL LEARNING)
    </h4>
    <ul class="list-disc list-inside space-y-1 text-sm text-gray-800">
      <li><em>"Mengapa situs web yang cepat dan adaptif di layar ponsel bisa melipatgandakan omset pelaku usaha lokal di lereng Gunung Agung?"</em></li>
      <li><em>"Apa yang sebenarnya terjadi di balik layar peramban ketika pengguna mengeklik tombol pada koneksi internet lambat?"</em></li>
    </ul>
  </div>

  <div>
    <h3 class="text-base font-bold text-[#0d3b66] mb-3">III. KEGIATAN PEMBELAJARAN (DEEP LEARNING MODEL)</h3>
    <table class="w-full text-sm border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0f766e] text-white">
          <th class="p-2 border border-slate-400 w-32 text-left">Tahapan</th>
          <th class="p-2 border border-slate-400 text-left">Aktivitas Guru dan Peserta Didik</th>
          <th class="p-2 border border-slate-400 w-44 text-left">Fokus Deep Learning</th>
          <th class="p-2 border border-slate-400 w-20 text-center">Waktu</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-teal-50/40">
          <td class="p-3 border border-slate-300 font-bold text-teal-950 align-top">A. Pendahuluan</td>
          <td class="p-3 border border-slate-300 space-y-1 text-xs">
            <p>1. <strong>Mindful Conditioning:</strong> Hening sejenak (1 menit mindfulness) memusatkan konsentrasi sebelum praktik di Lab.</p>
            <p>2. <strong>Apersepsi Kontekstual:</strong> Mengamati 2 aplikasi web nyata dan memantik diskusi kritis perbedaannya.</p>
          </td>
          <td class="p-3 border border-slate-300 text-xs font-semibold text-teal-800 align-top">Mindful Learning (Kesiapan mental & kehadiran utuh)</td>
          <td class="p-3 border border-slate-300 text-center align-top font-semibold">20 Menit</td>
        </tr>
        <tr class="bg-white">
          <td class="p-3 border border-slate-300 font-bold text-blue-950 align-top">B. Kegiatan Inti</td>
          <td class="p-3 border border-slate-300 space-y-1 text-xs">
            <p>1. <strong>Meaningful:</strong> Membedah brief industri nyata software house mitra DUDIKA SKANSABA.</p>
            <p>2. <strong>Joyful:</strong> Tantangan coding berpasangan (pair programming) dengan sesi interaktif 'Bug Hunt'.</p>
            <p>3. <strong>Scaffolding:</strong> Guru memberikan bimbingan personal pada kelompok yang butuh penguatan.</p>
          </td>
          <td class="p-3 border border-slate-300 text-xs font-semibold text-blue-800 align-top">Meaningful & Joyful (PBL & Kolaborasi Bebas Rasa Takut)</td>
          <td class="p-3 border border-slate-300 text-center align-top font-semibold">140 Menit</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-3 border border-slate-300 font-bold text-slate-800 align-top">C. Penutup</td>
          <td class="p-3 border border-slate-300 space-y-1 text-xs">
            <p>1. <strong>Refleksi 3-2-1 Metakognitif:</strong> Menuliskan 3 hal baru, 2 tantangan, 1 ide eksplorasi.</p>
            <p>2. <strong>Budaya 5R/5S:</strong> Membersihkan dan merapikan workstation lab sesuai standar industri.</p>
          </td>
          <td class="p-3 border border-slate-300 text-xs font-semibold text-purple-800 align-top">Metakognisi & Refleksi Joyful</td>
          <td class="p-3 border border-slate-300 text-center align-top font-semibold">20 Menit</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    `,
  },

  // 2. Refleksi Awal
  {
    id: 'skansaba-refleksi-awal-01',
    title: 'Instrumen Refleksi Awal & Pemetaan Kesiapan Belajar (Mindful Learning)',
    docType: 'refleksi_awal',
    topic: 'Pemetaan Kesiapan Kognitif, Minat Industri, & Kondisi Emosional Siswa',
    timeAllocation: '1 JP x 45 Menit (Awal Semester / Bab)',
    createdAt: '2026-07-21T08:30:00Z',
    updatedAt: '2026-07-21T08:30:00Z',
    summary: 'Instrumen asesmen diagnostik dan refleksi diri awal untuk membangun kesadaran penuh (Mindful Learning) sesuai Kepmendikdasmen No. 126/P/2025.',
    teacherProfile: {
      name: 'I Made Suartana, S.Kom.',
      nip: '19840215 201001 1 012',
      subject: 'Konsentrasi Keahlian PPLG',
      gradePhase: 'Kelas XI / Fase F',
      major: 'Rekayasa Perangkat Lunak / PPLG',
      semester: 'Ganjil',
      academicYear: '2026/2027',
      dateStr: '21 Juli 2026',
      isVerified: true,
    },
    markdownBody: `# INSTRUMEN REFLEKSI AWAL\n...`,
    htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">INSTRUMEN REFLEKSI AWAL SISWA (MINDFUL LEARNING)</h1>
    <h2 class="text-base font-semibold text-gray-700 mt-1">Pemetaan Kesiapan Belajar & Kesadaran Diri Pembelajaran Mendalam</h2>
    <p class="text-xs text-gray-500 mt-1">Acuan: Kepmendikdasmen No. 126/P/2025 (Mindful Learning Framework)</p>
  </div>

  <div class="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r text-xs text-gray-800">
    <strong>Tujuan Refleksi Awal:</strong> Membangun kehadiran utuh (mindfulness), menggali pemahaman awal peserta didik tanpa penghakiman nilai, dan memetakan kebutuhan diferensiasi sebelum memasuki materi inti.
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">A. Lembar Refleksi Diri Siswa (Mindful Self-Check)</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 text-left w-12">No</th>
          <th class="p-2 border border-slate-400 text-left">Pertanyaan Refleksi Kesiapan & Minat</th>
          <th class="p-2 border border-slate-400 text-center w-24">Belum Siap</th>
          <th class="p-2 border border-slate-400 text-center w-24">Cukup Siap</th>
          <th class="p-2 border border-slate-400 text-center w-24">Sangat Siap</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center font-bold">1</td>
          <td class="p-2 border border-slate-300">Bagaimana kesiapan fisik dan pikiran saya untuk belajar fokus di ruang praktik hari ini?</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 text-center font-bold">2</td>
          <td class="p-2 border border-slate-300">Sejauh mana pemahaman saya tentang konsep dasar HTML & CSS yang dipelajari pada semester sebelumnya?</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center font-bold">3</td>
          <td class="p-2 border border-slate-300">Apakah saya merasa nyaman bekerja sama dan bertukar pikiran dalam tim saat menghadapi kesulitan kode?</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">B. Tabel Pemetaan Hasil Refleksi Awal & Strategi Guru</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0f766e] text-white">
          <th class="p-2 border border-slate-400 text-left w-36">Kategori Kesiapan</th>
          <th class="p-2 border border-slate-400 text-left">Karakteristik Temuan Refleksi</th>
          <th class="p-2 border border-slate-400 text-left">Rencana Intervensi Pembelajaran Berdiferensiasi</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold text-amber-800">1. Perlu Bimbingan Konsep</td>
          <td class="p-2 border border-slate-300">Masih ragu pada sintaks logika dasar dan sering cemas saat membuka lembar kerja praktik.</td>
          <td class="p-2 border border-slate-300">Diberikan modul visual bertahap (scaffolding) dan dipasangkan dengan rekan tutor sebaya yang suportif.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 font-bold text-blue-800">2. Siap Belajar Reguler</td>
          <td class="p-2 border border-slate-300">Memiliki pemahaman dasar yang baik, siap mengikuti studi kasus DUDIKA dengan panduan SOP.</td>
          <td class="p-2 border border-slate-300">Mengerjakan studi kasus mandiri terstruktur dan melakukan eksplorasi layout web adaptif.</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold text-emerald-800">3. Mahir & Eksploratif</td>
          <td class="p-2 border border-slate-300">Memahami konsep dengan cepat, memiliki inisiatif tinggi, dan antusias mencoba teknologi baru.</td>
          <td class="p-2 border border-slate-300">Diberikan proyek pengayaan integrasi API pihak ketiga (payment gateway/maps lokal Bali) dan menjadi asisten mentor sebaya.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    `,
  },

  // 3. Refleksi Akhir
  {
    id: 'skansaba-refleksi-akhir-01',
    title: 'Lembar Refleksi Akhir Pembelajaran (Metakognisi Siswa & Joyful Learning Index)',
    docType: 'refleksi_akhir',
    topic: 'Refleksi Metakognisi Model 3-2-1 dan Evaluasi Iklim Belajar Menyenangkan',
    timeAllocation: '20 Menit (Setiap Akhir Sesi/Bab)',
    createdAt: '2026-07-22T10:00:00Z',
    updatedAt: '2026-07-22T10:00:00Z',
    summary: 'Instrumen refleksi metakognisi 3-2-1 dan joyful learning index bagi peserta didik dan guru SMK Negeri 1 Bebandem.',
    teacherProfile: {
      name: 'I Made Suartana, S.Kom.',
      nip: '19840215 201001 1 012',
      subject: 'Konsentrasi Keahlian PPLG',
      gradePhase: 'Kelas XI / Fase F',
      major: 'Rekayasa Perangkat Lunak / PPLG',
      semester: 'Ganjil',
      academicYear: '2026/2027',
      dateStr: '22 Juli 2026',
      isVerified: true,
    },
    markdownBody: `# REFLEKSI AKHIR PEMBELAJARAN\n...`,
    htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">LEMBAR REFLEKSI AKHIR PEMBELAJARAN (JOYFUL & METAKOGNISI)</h1>
    <h2 class="text-base font-semibold text-gray-700 mt-1">Evaluasi Pengalaman Belajar Bermakna & Menyenangkan</h2>
    <p class="text-xs text-gray-500 mt-1">Acuan: Kepmendikdasmen No. 126/P/2025 (Joyful Metacognition Framework)</p>
  </div>

  <div class="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r text-xs text-gray-800">
    <strong>Esensi Refleksi Akhir:</strong> Menutup proses belajar dengan apresiasi, mengasah kesadaran atas proses berpikir sendiri (metakognisi), dan mengukur rasa gembira belajar tanpa tekanan traumatik.
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">A. Lembar Metakognisi Siswa (Format 3 - 2 - 1)</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 w-28 text-left">Elemen 3-2-1</th>
          <th class="p-2 border border-slate-400 text-left">Panduan Pertanyaan Reflektif Siswa</th>
          <th class="p-2 border border-slate-400 text-left">Respon & Catatan Refleksi Siswa</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2.5 border border-slate-300 font-bold text-blue-900">3 Hal Baru</td>
          <td class="p-2.5 border border-slate-300">Tuliskan 3 konsep atau keterampilan paling bermakna yang Anda kuasai hari ini.</td>
          <td class="p-2.5 border border-slate-300 text-gray-500 italic">1. ........................................................................<br/>2. ........................................................................<br/>3. ........................................................................</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2.5 border border-slate-300 font-bold text-amber-900">2 Tantangan</td>
          <td class="p-2.5 border border-slate-300">Sebutkan 2 kesulitan yang sempat Anda temui dan bagaimana strategi Anda menanganinya.</td>
          <td class="p-2.5 border border-slate-300 text-gray-500 italic">1. ........................................................................<br/>2. ........................................................................</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2.5 border border-slate-300 font-bold text-emerald-900">1 Ide Eksplorasi</td>
          <td class="p-2.5 border border-slate-300">Tuliskan 1 ide proyek atau hal menarik yang ingin Anda coba buat di masa depan.</td>
          <td class="p-2.5 border border-slate-300 text-gray-500 italic">1. ........................................................................</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">B. Survei Kebahagiaan Belajar (Joyful Learning Index)</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0f766e] text-white">
          <th class="p-2 border border-slate-400 w-12 text-center">No</th>
          <th class="p-2 border border-slate-400 text-left">Pernyataan Suasana Belajar</th>
          <th class="p-2 border border-slate-400 text-center w-20">Kurang 😊</th>
          <th class="p-2 border border-slate-400 text-center w-20">Cukup 😃</th>
          <th class="p-2 border border-slate-400 text-center w-20">Sangat 😍</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center">1</td>
          <td class="p-2 border border-slate-300">Saya merasa tidak takut salah ketika mencoba menulis kode dan berdiskusi dengan teman.</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 text-center">2</td>
          <td class="p-2 border border-slate-300">Aktivitas belajar hari ini terasa seru, menantang, dan membuat waktu berlalu cepat.</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    `,
  },

  // 4. Asesmen Sumatif
  {
    id: 'skansaba-asesmen-sumatif-01',
    title: 'Instrumen Asesmen Sumatif & Rubrik Kinerja Berstandar Industri',
    docType: 'asesmen_sumatif',
    topic: 'Uji Kompetensi Sumatif Lingkup Materi Aplikasi Web Berbasis REST API',
    timeAllocation: '2 Pertemuan (4 JP x 45 Menit)',
    createdAt: '2026-07-23T11:00:00Z',
    updatedAt: '2026-07-23T11:00:00Z',
    summary: 'Kisi-kisi soal autentik, instrumen uji kinerja proyek DUDIKA, dan rubrik penilaian 4 level berstandar Permendikdasmen No. 13/2025.',
    teacherProfile: {
      name: 'I Made Suartana, S.Kom.',
      nip: '19840215 201001 1 012',
      subject: 'Konsentrasi Keahlian PPLG',
      gradePhase: 'Kelas XI / Fase F',
      major: 'Rekayasa Perangkat Lunak / PPLG',
      semester: 'Ganjil',
      academicYear: '2026/2027',
      dateStr: '23 Juli 2026',
      isVerified: true,
    },
    markdownBody: `# ASESMEN SUMATIF\n...`,
    htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">ASESMEN SUMATIF LINGKUP MATERI</h1>
    <h2 class="text-base font-semibold text-gray-700 mt-1">Uji Kinerja Praktik Industri & Pemecahan Masalah Autentik</h2>
    <p class="text-xs text-gray-500 mt-1">Sesuai Permendikdasmen No. 13/2025 & Kepmendikdasmen No. 126/P/2025</p>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">A. Kisi-Kisi Asesmen Sumatif</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 w-12 text-center">No</th>
          <th class="p-2 border border-slate-400 text-left">Elemen Capaian Pembelajaran</th>
          <th class="p-2 border border-slate-400 text-left">Indikator Ketercapaian Soal</th>
          <th class="p-2 border border-slate-400 text-center w-24">Level Kognitif</th>
          <th class="p-2 border border-slate-400 text-center w-28">Bentuk Asesmen</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center">1</td>
          <td class="p-2 border border-slate-300">Pemrograman Web Terintegrasi</td>
          <td class="p-2 border border-slate-300">Diberikan studi kasus kegagalan rendering data, siswa mampu menganalisis titik error asynchronous fetching.</td>
          <td class="p-2 border border-slate-300 text-center font-bold text-blue-900">C4 (Analisis)</td>
          <td class="p-2 border border-slate-300 text-center">Studi Kasus Analitis</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 text-center">2</td>
          <td class="p-2 border border-slate-300">Desain Antarmuka Responsif</td>
          <td class="p-2 border border-slate-300">Siswa mampu memproduksi katalog produk UMKM Bali yang adaptif dan bebas layout break di smartphone.</td>
          <td class="p-2 border border-slate-300 text-center font-bold text-emerald-900">C6 (Mencipta/Kinerja)</td>
          <td class="p-2 border border-slate-300 text-center">Uji Kinerja Praktik</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">B. Rubrik Kinerja 4 Tingkat Ketercapaian</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0f766e] text-white">
          <th class="p-2 border border-slate-400 w-32 text-left">Kriteria Penilaian</th>
          <th class="p-2 border border-slate-400 text-left">Baru Berkembang (1)</th>
          <th class="p-2 border border-slate-400 text-left">Layak (2)</th>
          <th class="p-2 border border-slate-400 text-left">Cakap (3)</th>
          <th class="p-2 border border-slate-400 text-left">Mahir (4 - Standar Industri)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold">Responsivitas & UX</td>
          <td class="p-2 border border-slate-300">Layout rusak pada ponsel; teks saling tumpuk.</td>
          <td class="p-2 border border-slate-300">Tampilan menyesuaikan namun masih ada overflow horizontal.</td>
          <td class="p-2 border border-slate-300">Responsif mulus di layar mobile, tablet, dan laptop.</td>
          <td class="p-2 border border-slate-300 font-medium text-emerald-900">Sangat rapi dengan transisi interaktif ramah aksesibilitas.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 font-bold">Integrasi API & Data</td>
          <td class="p-2 border border-slate-300">Gagal menghubungkan data; error tidak ditangani.</td>
          <td class="p-2 border border-slate-300">Data tampil namun belum ada indikator loading/error.</td>
          <td class="p-2 border border-slate-300">Data tampil dinamis dengan status loading dan error yang tepat.</td>
          <td class="p-2 border border-slate-300 font-medium text-emerald-900">Menerapkan penanganan asynchronous yang tangguh dan caching data.</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold">Budaya Kerja 5R/5S</td>
          <td class="p-2 border border-slate-300">Area kerja lab ditinggalkan kotor tanpa SOP.</td>
          <td class="p-2 border border-slate-300">Merapikan alat setelah diingatkan guru.</td>
          <td class="p-2 border border-slate-300">Disiplin menjaga kerapian dan kebersihan komputer secara mandiri.</td>
          <td class="p-2 border border-slate-300 font-medium text-emerald-900">Menjadi teladan SOP industri dan aktif mengedukasi rekan kelompok.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    `,
  },

  // 5. Bahan Ajar
  {
    id: 'skansaba-bahan-ajar-01',
    title: 'Bahan Ajar & Studi Kasus: Arsitektur Modern Web & Ekosistem Industri',
    docType: 'bahan_ajar',
    topic: 'Handout Konseptual Mendalam, Studi Kasus Industri Pariwisata Bali, & Glosarium',
    timeAllocation: 'Modul Bacaan & Panduan Praktik',
    createdAt: '2026-07-24T09:00:00Z',
    updatedAt: '2026-07-24T09:00:00Z',
    summary: 'Bahan ajar kontekstual berbasis pemahaman mendalam (Meaningful Learning) yang mengaitkan teori dengan studi kasus nyata di Bali.',
    teacherProfile: {
      name: 'I Made Suartana, S.Kom.',
      nip: '19840215 201001 1 012',
      subject: 'Konsentrasi Keahlian PPLG',
      gradePhase: 'Kelas XI / Fase F',
      major: 'Rekayasa Perangkat Lunak / PPLG',
      semester: 'Ganjil',
      academicYear: '2026/2027',
      dateStr: '24 Juli 2026',
      isVerified: true,
    },
    markdownBody: `# BAHAN AJAR DEEP LEARNING\n...`,
    htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">BAHAN AJAR PEMBELAJARAN MENDALAM (DEEP LEARNING)</h1>
    <h2 class="text-base font-semibold text-gray-700 mt-1">Materi Pokok: Desain Web Responsif & Integrasi Layanan DUDIKA</h2>
    <p class="text-xs text-gray-500 mt-1">Acuan: Permendikdasmen No. 13/2025 & Kepmendikdasmen No. 126/P/2025</p>
  </div>

  <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r text-xs text-gray-800">
    <strong>Pendekatan Meaningful Learning:</strong> Materi tidak disajikan berupa hafalan sintaks melainkan pemahaman logika mendalam tentang arsitektur data, kebutuhan pengguna riil, dan studi kasus industri pariwisata serta UMKM di Karangasem, Bali.
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">1. Peta Konsep Esensial (Mindful Architecture)</h3>
    <div class="p-3 bg-slate-50 border border-slate-300 rounded-lg text-xs leading-relaxed text-gray-800">
      <p><strong>Hierarki Logika:</strong> User Interface (UI Layer) ➔ State Management (Komponen Logika) ➔ Asynchronous API Service ➔ Backend Database Server.</p>
      <p class="mt-1 text-gray-600"><em>Kunci Pemahaman: Komputer tidak sekadar menjalankan baris kode, melainkan memproses aliran data interaktif yang harus ramah bagi pengguna awam.</em></p>
    </div>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">2. Studi Kasus Nyata Industri (Meaningful Case Study)</h3>
    <div class="p-3 bg-teal-50/70 border border-teal-300 rounded-lg text-xs space-y-2 text-gray-900">
      <p class="font-bold text-teal-950">Kasus: Sistem Reservasi Agrowisata Salak Sibetan, Bebandem</p>
      <p>Pelaku usaha agrowisata mengeluhkan 40% calon wisatawan mancanegara membatalkan pemesanan karena halaman lambat dimuat dan tombol formulir bergeser keluar layar saat dibuka dari ponsel di area sinyal minim pegunungan.</p>
      <p><strong>Tantangan Siswa:</strong> Rancanglah tata letak CSS Grid/Flexbox ringan dengan sistem caching lokal agar halaman tetap dapat dibuka secara offline (Offline First Architecture).</p>
    </div>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">3. Glosarium Istilah Teknis Industri</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 w-36 text-left">Istilah</th>
          <th class="p-2 border border-slate-400 text-left">Definisi Konseptual Bermakna</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold font-mono">Mobile-First</td>
          <td class="p-2 border border-slate-300">Filosofi desain yang memprioritaskan kesederhanaan dan performa layar kecil sebelum memperkaya fitur di layar besar.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 font-bold font-mono">RESTful API</td>
          <td class="p-2 border border-slate-300">Standar protokol jembatan data yang menghubungkan aplikasi frontend dengan server penyedia informasi secara efisien.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    `,
  },

  // 6. Remedial
  {
    id: 'skansaba-remedial-01',
    title: 'Program Pembelajaran Remedial & Analisis Miskonsepsi Konseptual',
    docType: 'remedial',
    topic: 'Rekonsiliasi Konsep Asynchronous JavaScript & Flexbox Layout',
    timeAllocation: '2 JP x 45 Menit (Bimbingan Terfokus)',
    createdAt: '2026-07-25T13:00:00Z',
    updatedAt: '2026-07-25T13:00:00Z',
    summary: 'Program remedial bimbingan terfokus berdasarkan pemetaan miskonsepsi peserta didik untuk mencapai pemahaman bermakna.',
    teacherProfile: {
      name: 'I Made Suartana, S.Kom.',
      nip: '19840215 201001 1 012',
      subject: 'Konsentrasi Keahlian PPLG',
      gradePhase: 'Kelas XI / Fase F',
      major: 'Rekayasa Perangkat Lunak / PPLG',
      semester: 'Ganjil',
      academicYear: '2026/2027',
      dateStr: '25 Juli 2026',
      isVerified: true,
    },
    markdownBody: `# PROGRAM REMEDIAL\n...`,
    htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">PROGRAM PEMBELAJARAN REMEDIAL T.A. 2026/2027</h1>
    <h2 class="text-base font-semibold text-gray-700 mt-1">Rekonsiliasi Miskonsepsi & Pendampingan Pemahaman Bermakna</h2>
    <p class="text-xs text-gray-500 mt-1">Acuan: Permendikdasmen No. 13/2025 & Kepmendikdasmen No. 126/P/2025</p>
  </div>

  <div class="bg-rose-50 border-l-4 border-rose-600 p-4 rounded-r text-xs text-gray-800">
    <strong>Prinsip Remedial Deep Learning:</strong> Remedial bukan sekadar mengulang tes yang sama, melainkan proses meluruskan miskonsepsi (akar kekeliruan berpikir) dengan analogi sederhana dan bimbingan terpandu.
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">A. Analisis Miskonsepsi Siswa</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 text-left w-36">Konsep Pokok</th>
          <th class="p-2 border border-slate-400 text-left">Miskonsepsi Siswa yang Ditemukan</th>
          <th class="p-2 border border-slate-400 text-left">Penjelasan Konseptual Pelurus</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold">Asynchronous Data (Fetch)</td>
          <td class="p-2 border border-slate-300">Siswa mengira baris kode setelah <code>fetch()</code> langsung dieksekusi setelah data tiba di laptop.</td>
          <td class="p-2 border border-slate-300">Diberi analogi memesan makanan di kasir (pesanan diproses di dapur sementara nomor antrean dipegang pembeli).</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 font-bold">CSS Flexbox Sumbu (Axis)</td>
          <td class="p-2 border border-slate-300">Siswa menganggap <code>justify-content</code> selalu mengatur posisi horizontal kiri-kanan.</td>
          <td class="p-2 border border-slate-300">Dijelaskan bahwa posisi <code>justify-content</code> mengikuti arah <code>flex-direction</code> (main axis).</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">B. Rencana Kegiatan Remedial & Evaluasi Capaian</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0f766e] text-white">
          <th class="p-2 border border-slate-400 text-left w-12">No</th>
          <th class="p-2 border border-slate-400 text-left">Nama Siswa Terbimbing</th>
          <th class="p-2 border border-slate-400 text-left">Bentuk Bimbingan</th>
          <th class="p-2 border border-slate-400 text-center w-24">Nilai Awal</th>
          <th class="p-2 border border-slate-400 text-center w-24">Nilai Akhir</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center">1</td>
          <td class="p-2 border border-slate-300 font-semibold">I Gede Arya Wiguna</td>
          <td class="p-2 border border-slate-300">Bimbingan terbimbing puzzle layout interaktif Flexbox</td>
          <td class="p-2 border border-slate-300 text-center text-red-600 font-bold">58</td>
          <td class="p-2 border border-slate-300 text-center text-emerald-700 font-bold">82 (Tuntas)</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 text-center">2</td>
          <td class="p-2 border border-slate-300 font-semibold">Ni Putu Sintya Dewi</td>
          <td class="p-2 border border-slate-300">Scaffolding step-by-step konsumsi API terpandu</td>
          <td class="p-2 border border-slate-300 text-center text-red-600 font-bold">62</td>
          <td class="p-2 border border-slate-300 text-center text-emerald-700 font-bold">85 (Tuntas)</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    `,
  },

  // 7. Pengayaan
  {
    id: 'skansaba-pengayaan-01',
    title: 'Program Pengayaan Siswa Mahir: Tantangan Proyek Terbuka Industri DUDIKA',
    docType: 'pengayaan',
    topic: 'Pengembangan Fitur Offline PWA & Integrasi Geolocation Peta Wisata Karangasem',
    timeAllocation: 'Tantangan Mandiri & Mentorship',
    createdAt: '2026-07-26T14:00:00Z',
    updatedAt: '2026-07-26T14:00:00Z',
    summary: 'Program pengayaan bagi siswa kategori Mahir untuk mengembangkan inovasi nyata berbasis kebutuhan industri DUDIKA.',
    teacherProfile: {
      name: 'I Made Suartana, S.Kom.',
      nip: '19840215 201001 1 012',
      subject: 'Konsentrasi Keahlian PPLG',
      gradePhase: 'Kelas XI / Fase F',
      major: 'Rekayasa Perangkat Lunak / PPLG',
      semester: 'Ganjil',
      academicYear: '2026/2027',
      dateStr: '26 Juli 2026',
      isVerified: true,
    },
    markdownBody: `# PROGRAM PENGAYAAN\n...`,
    htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">PROGRAM PENGAYAAN SISWA (ADVANCED CHALLENGE)</h1>
    <h2 class="text-base font-semibold text-gray-700 mt-1">Pengembangan Proyek Terbuka Berbasis Solusi Nyata Masyarakat</h2>
    <p class="text-xs text-gray-500 mt-1">Acuan: Kepmendikdasmen No. 126/P/2025 (Joyful Exploration & Applied Innovation)</p>
  </div>

  <div class="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-r text-xs text-gray-800">
    <strong>Sasaran Program Pengayaan:</strong> Memfasilitasi peserta didik yang telah mencapai kriteria Mahir lebih cepat dari rekan sekelasnya, agar potensi mereka terasah melalui tantangan berstandar industri.
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">A. Deskripsi Tantangan Terbuka (Open-Ended Challenge)</h3>
    <div class="p-3 bg-slate-50 border border-slate-300 rounded-lg text-xs space-y-2 text-gray-900">
      <p class="font-bold text-indigo-950">Proyek: Progressive Web App (PWA) Peta Titik Panen Salak & Homestay Desa Sibetan</p>
      <p>Siswa ditantang mengimplementasikan Service Worker agar antarmuka dapat di-install layaknya aplikasi native di HP petani dan turis, serta menyematkan fitur penunjuk arah GPS lokal.</p>
    </div>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">B. Rubrik Penilaian Portofolio Pengayaan</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 w-36 text-left">Aspek Inovasi</th>
          <th class="p-2 border border-slate-400 text-left">Indikator Keberhasilan Portofolio</th>
          <th class="p-2 border border-slate-400 text-center w-24">Skor Maks</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold">1. Keberfungsian Offline PWA</td>
          <td class="p-2 border border-slate-300">Aplikasi terpasang di layar utama ponsel dan dapat dibuka mulus saat Airplane Mode aktif.</td>
          <td class="p-2 border border-slate-300 text-center font-bold">35</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 font-bold">2. Kualitas Kode & Arsitektur</td>
          <td class="p-2 border border-slate-300">Struktur kode modular, clean code, serta dokumentasi README yang jelas.</td>
          <td class="p-2 border border-slate-300 text-center font-bold">35</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold">3. Dampak Manfaat Nyata</td>
          <td class="p-2 border border-slate-300">Antarmuka mudah dipahami dan siap digunakan oleh masyarakat pengrajin/petani lokal.</td>
          <td class="p-2 border border-slate-300 text-center font-bold">30</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    `,
  },

  // 8. Tindak Lanjut
  {
    id: 'skansaba-tindak-lanjut-01',
    title: 'Rencana Tindak Lanjut (RTL) Pembelajaran & Evaluasi Mutu KBM Berkelanjutan',
    docType: 'tindak_lanjut',
    topic: 'Analisis Ketuntasan Belajar Kelas XI PPLG dan Rencana Aksi Siklus Berikutnya',
    timeAllocation: 'Evaluasi Pasca Asesmen Sumatif',
    createdAt: '2026-07-27T15:00:00Z',
    updatedAt: '2026-07-27T15:00:00Z',
    summary: 'Rencana tindak lanjut pembelajaran (RTL) komprehensif untuk menjamin continuous quality improvement di SMK Negeri 1 Bebandem.',
    teacherProfile: {
      name: 'I Made Suartana, S.Kom.',
      nip: '19840215 201001 1 012',
      subject: 'Konsentrasi Keahlian PPLG',
      gradePhase: 'Kelas XI / Fase F',
      major: 'Rekayasa Perangkat Lunak / PPLG',
      semester: 'Ganjil',
      academicYear: '2026/2027',
      dateStr: '27 Juli 2026',
      isVerified: true,
    },
    markdownBody: `# RENCANA TINDAK LANJUT\n...`,
    htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">RENCANA TINDAK LANJUT (RTL) PEMBELAJARAN</h1>
    <h2 class="text-base font-semibold text-gray-700 mt-1">Continuous Quality Improvement Guru & Siswa SKANSABA</h2>
    <p class="text-xs text-gray-500 mt-1">Berdasarkan Permendikdasmen No. 13/2025 & Kepmendikdasmen No. 126/P/2025</p>
  </div>

  <div class="bg-teal-50 border-l-4 border-teal-700 p-4 rounded-r text-xs text-gray-800">
    <strong>Fungsi Rencana Tindak Lanjut:</strong> Memastikan setiap hasil asesmen ditindaklanjuti secara konkret, terukur, dan bermakna agar mutu pembelajaran terus meningkat dari waktu ke waktu.
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">A. Analisis Daya Serap & Distribusi Ketuntasan Kelas</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 text-left">Kelompok Capaian</th>
          <th class="p-2 border border-slate-400 text-center w-24">Jumlah Siswa</th>
          <th class="p-2 border border-slate-400 text-center w-24">Persentase</th>
          <th class="p-2 border border-slate-400 text-left">Fokus Intervensi Guru</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold text-red-900">Perlu Bimbingan (Nilai &lt; 70)</td>
          <td class="p-2 border border-slate-300 text-center font-bold">4 Orang</td>
          <td class="p-2 border border-slate-300 text-center">11%</td>
          <td class="p-2 border border-slate-300">Program remedial konsep mendalam & pendampingan personal pasca KBM.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 font-bold text-blue-900">Cakap / Reguler (Nilai 70 - 89)</td>
          <td class="p-2 border border-slate-300 text-center font-bold">24 Orang</td>
          <td class="p-2 border border-slate-300 text-center">67%</td>
          <td class="p-2 border border-slate-300">Pemantapan studi kasus industri lanjutan dan penguatan kolaborasi pair.</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold text-emerald-900">Mahir (Nilai 90 - 100)</td>
          <td class="p-2 border border-slate-300 text-center font-bold">8 Orang</td>
          <td class="p-2 border border-slate-300 text-center">22%</td>
          <td class="p-2 border border-slate-300">Program pengayaan mandiri tantangan PWA dan pelibatan sebagai tutor sebaya.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">B. Rencana Aksi Peningkatan Mutu Pengajaran Guru (Siklus Mendatang)</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0f766e] text-white">
          <th class="p-2 border border-slate-400 w-12 text-center">No</th>
          <th class="p-2 border border-slate-400 text-left">Aspek Evaluasi Guru</th>
          <th class="p-2 border border-slate-400 text-left">Rencana Aksi Perbaikan (Continuous Improvement)</th>
          <th class="p-2 border border-slate-400 text-center w-28">Target Waktu</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center font-bold">1</td>
          <td class="p-2 border border-slate-300 font-semibold">Integrasi DUDIKA Nyata</td>
          <td class="p-2 border border-slate-300">Menghadirkan sesi bedah kode bersama instruktur industri mitra software house di Denpasar/Karangasem.</td>
          <td class="p-2 border border-slate-300 text-center">Agustus 2026</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 text-center font-bold">2</td>
          <td class="p-2 border border-slate-300 font-semibold">Penguatan Joyful Learning</td>
          <td class="p-2 border border-slate-300">Menyisipkan mini-games tebak logika dan apresiasi mingguan bagi siswa yang paling gigih berusaha.</td>
          <td class="p-2 border border-slate-300 text-center">Setiap Pekan KBM</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    `,
  },
];
