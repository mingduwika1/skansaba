import { DocType } from '../types';

interface GenerateInput {
  teacherName: string;
  teacherNip: string;
  subject: string;
  gradePhase: string;
  major: string;
  semester: string;
  timeAllocation: string;
  topic: string;
  customNotes?: string;
  additionalPrompt?: string;
}

export function generateStructuredDocument(docType: DocType, input: GenerateInput) {
  const {
    teacherName,
    teacherNip,
    subject,
    gradePhase,
    major,
    semester,
    timeAllocation,
    topic,
    customNotes,
  } = input;

  switch (docType) {
    case 'modul_ajar':
      return {
        title: `Modul Ajar Deep Learning: ${topic}`,
        docType,
        summary: `Modul ajar pembelajaran mendalam (Mindful, Meaningful, Joyful) mata pelajaran ${subject} kelas ${gradePhase} SMK Negeri 1 Bebandem mengacu pada Kepmendikdasmen No. 126/P/2025.`,
        htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">MODUL AJAR PEMBELAJARAN MENDALAM (DEEP LEARNING)</h1>
    <h2 class="text-sm sm:text-base font-semibold text-gray-700 mt-1">Mata Pelajaran: ${subject}</h2>
    <p class="text-xs text-gray-500 mt-1">Acuan Resmi: Permendikdasmen No. 13 Tahun 2025 & Kepmendikdasmen No. 126/P/2025</p>
  </div>

  <!-- Identitas Umum -->
  <div class="bg-slate-50 border border-slate-300 rounded-xl p-4">
    <h3 class="text-sm font-bold text-[#0d3b66] border-b pb-2 mb-3">I. IDENTITAS UMUM</h3>
    <table class="w-full text-xs sm:text-sm border-collapse">
      <tbody>
        <tr class="border-b border-slate-200"><td class="w-1/3 py-1 font-semibold text-gray-700">Nama Guru</td><td class="py-1">: ${teacherName}</td></tr>
        <tr class="border-b border-slate-200"><td class="py-1 font-semibold text-gray-700">NIP Guru</td><td class="py-1">: ${teacherNip}</td></tr>
        <tr class="border-b border-slate-200"><td class="py-1 font-semibold text-gray-700">Satuan Pendidikan</td><td class="py-1">: SMK Negeri 1 Bebandem</td></tr>
        <tr class="border-b border-slate-200"><td class="py-1 font-semibold text-gray-700">Mata Pelajaran</td><td class="py-1">: ${subject}</td></tr>
        <tr class="border-b border-slate-200"><td class="py-1 font-semibold text-gray-700">Konsentrasi Keahlian</td><td class="py-1">: ${major || 'Kejuruan SMK'}</td></tr>
        <tr class="border-b border-slate-200"><td class="py-1 font-semibold text-gray-700">Kelas / Fase / Semester</td><td class="py-1">: ${gradePhase} (${semester})</td></tr>
        <tr class="border-b border-slate-200"><td class="py-1 font-semibold text-gray-700">Alokasi Waktu</td><td class="py-1">: ${timeAllocation || '4 JP x 45 Menit'}</td></tr>
        <tr><td class="py-1 font-semibold text-gray-700">Profil Pelajar Pancasila & Budaya Kerja</td><td class="py-1">: Bernalar Kritis, Gotong Royong, Integritas, Budaya Kerja Industri 5R/5S (Ringkas, Rapi, Resik, Rawat, Rajin)</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Capaian & Tujuan Pembelajaran -->
  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] mb-2 uppercase">II. CAPAIAN & TUJUAN PEMBELAJARAN (DEEP LEARNING ORIENTED)</h3>
    <div class="p-3 bg-blue-50/70 border-l-4 border-[#0d3b66] text-xs sm:text-sm text-gray-800 mb-3 rounded-r">
      <strong>Topik Materi Pokok:</strong> ${topic}<br/>
      <strong>Fokus Industri DUDIKA:</strong> ${customNotes || 'Penyelarasan dengan standar kompetensi kerja industri kejuruan di Bali.'}
    </div>
    
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 text-left w-10">No</th>
          <th class="p-2 border border-slate-400 text-left">Tujuan Pembelajaran (TP)</th>
          <th class="p-2 border border-slate-400 text-left w-44">Dimensi Deep Learning</th>
          <th class="p-2 border border-slate-400 text-left w-40">Indikator Ketercapaian (KKTP)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center font-bold">1</td>
          <td class="p-2 border border-slate-300">Menganalisis prinsip dan konsep esensial pada materi ${topic} secara mendalam tanpa hafalan mekanis.</td>
          <td class="p-2 border border-slate-300 font-semibold text-emerald-800 bg-emerald-50/60">Mindful Learning (Kesadaran konsep dasar & nalar kritis)</td>
          <td class="p-2 border border-slate-300">Mampu menjelaskan alur logika dan relasi konsep dengan tepat.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 text-center font-bold">2</td>
          <td class="p-2 border border-slate-300">Menerapkan keterampilan praktik materi ${topic} untuk menyelesaikan masalah nyata di dunia kerja industri DUDIKA.</td>
          <td class="p-2 border border-slate-300 font-semibold text-blue-800 bg-blue-50/60">Meaningful Learning (Keterkaitan DUDIKA & Kasus Nyata)</td>
          <td class="p-2 border border-slate-300">Produk/kinerja memenuhi standar kualitas dan SOP keselamatan kerja.</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center font-bold">3</td>
          <td class="p-2 border border-slate-300">Berkolaborasi aktif dalam tim secara antusias, terbuka terhadap umpan balik, serta melakukan refleksi metakognitif.</td>
          <td class="p-2 border border-slate-300 font-semibold text-purple-800 bg-purple-50/60">Joyful Learning (Pengalaman eksploratif & apresiatif)</td>
          <td class="p-2 border border-slate-300">Kerja sama tim solid tanpa rasa takut salah, refleksi 3-2-1 tuntas.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Pertanyaan Pemantik (Mindful) -->
  <div class="bg-amber-50 border border-amber-300 rounded-xl p-4">
    <h4 class="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
      💡 PERTANYAAN PEMANTIK NALAR KRITIS (MINDFUL LEARNING)
    </h4>
    <ul class="list-disc list-inside space-y-1 text-xs text-gray-800">
      <li><em>"Mengapa penguasaan kompetensi ${topic} menjadi penentu kualitas profesional di dunia industri masa kini?"</em></li>
      <li><em>"Apa dampak negatif bagi keselamatan kerja dan kepuasan pelanggan jika tahapan standar ${topic} diabaikan?"</em></li>
      <li><em>"Bagaimana cara kita menerapkan prinsip keharmonisan kerja (Tri Hita Karana) dalam praktik kejuruan sehari-hari?"</em></li>
    </ul>
  </div>

  <!-- Skenario Kegiatan Pembelajaran Deep Learning -->
  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] mb-3 uppercase">III. KEGIATAN PEMBELAJARAN (DEEP LEARNING MODEL)</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0f766e] text-white">
          <th class="p-2 border border-slate-400 w-28 text-left">Tahapan</th>
          <th class="p-2 border border-slate-400 text-left">Aktivitas Guru dan Peserta Didik</th>
          <th class="p-2 border border-slate-400 w-40 text-left">Fokus Pembelajaran</th>
          <th class="p-2 border border-slate-400 w-16 text-center">Waktu</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-teal-50/40">
          <td class="p-3 border border-slate-300 font-bold text-teal-950 align-top">A. Pendahuluan</td>
          <td class="p-3 border border-slate-300 space-y-1.5">
            <p>1. <strong>Mindful Conditioning:</strong> Guru memandu hening sejenak (1 menit mindfulness) memusatkan konsentrasi dan pernafasan sebelum memulai KBM.</p>
            <p>2. <strong>Apersepsi Kontekstual:</strong> Mengaitkan materi ${topic} dengan isu aktual di industri kejuruan Bali.</p>
            <p>3. <strong>Asesmen Diagnostik Kesiapan:</strong> Tanya jawab singkat mengecek pemahaman awal peserta didik.</p>
          </td>
          <td class="p-3 border border-slate-300 font-semibold text-teal-800 align-top">Mindful Learning (Kesiapan mental utuh & kesadaran awal)</td>
          <td class="p-3 border border-slate-300 text-center font-bold align-top">20 Menit</td>
        </tr>
        <tr class="bg-white">
          <td class="p-3 border border-slate-300 font-bold text-blue-950 align-top">B. Kegiatan Inti</td>
          <td class="p-3 border border-slate-300 space-y-1.5">
            <p>1. <strong>Meaningful - Studi Kasus Industri:</strong> Siswa menerima lembar studi kasus nyata berstandar industri DUDIKA mitra SMKN 1 Bebandem.</p>
            <p>2. <strong>Joyful - Eksplorasi & Kolaborasi:</strong> Praktik kelompok terbimbing secara aktif dan menyenangkan dengan saling mereview kinerja antarteman (peer feedback).</p>
            <p>3. <strong>Scaffolding & Konsultasi:</strong> Guru berkeliling memberikan pendampingan personal bagi siswa yang membutuhkan penguatan konsep.</p>
          </td>
          <td class="p-3 border border-slate-300 font-semibold text-blue-800 align-top">Meaningful & Joyful (PBL, Kolaborasi, Bebas Rasa Takut)</td>
          <td class="p-3 border border-slate-300 text-center font-bold align-top">140 Menit</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-3 border border-slate-300 font-bold text-slate-800 align-top">C. Penutup</td>
          <td class="p-3 border border-slate-300 space-y-1.5">
            <p>1. <strong>Refleksi 3-2-1 Metakognitif:</strong> Setiap siswa menuliskan 3 hal baru yang dipahami, 2 tantangan yang diatasi, dan 1 pertanyaan lanjutan.</p>
            <p>2. <strong>Apresiasi:</strong> Memberikan apresiasi positif atas kerja keras tim hari ini.</p>
            <p>3. <strong>Budaya Kerja 5R/5S:</strong> Membersihkan dan merapikan workstation praktik sesuai standar industri.</p>
          </td>
          <td class="p-3 border border-slate-300 font-semibold text-purple-800 align-top">Joyful Metacognition & Nilai Kerja 5R/5S</td>
          <td class="p-3 border border-slate-300 text-center font-bold align-top">20 Menit</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Asesmen Formatif & Rubrik Autentik -->
  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] mb-3 uppercase">IV. ASESMEN AUTENTIK & RUBRIK KINERJA 4 TINGKAT</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 text-left w-32">Kriteria Penilaian</th>
          <th class="p-2 border border-slate-400 text-left">Baru Berkembang (1)</th>
          <th class="p-2 border border-slate-400 text-left">Layak (2)</th>
          <th class="p-2 border border-slate-400 text-left">Cakap (3)</th>
          <th class="p-2 border border-slate-400 text-left">Mahir (4 - Standar Industri)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold">1. Pemahaman Konsep ${topic}</td>
          <td class="p-2 border border-slate-300">Belum memahami prinsip dasar; perlu bimbingan penuh.</td>
          <td class="p-2 border border-slate-300">Memahami konsep dasar namun belum konsisten menerapkannya.</td>
          <td class="p-2 border border-slate-300">Menguasai konsep dan mampu mengaplikasikan pada tugas mandiri.</td>
          <td class="p-2 border border-slate-300 font-medium text-emerald-900">Sangat menguasai, kritis, dan mampu memberi solusi orisinal.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 font-bold">2. Kualitas Kinerja Praktik</td>
          <td class="p-2 border border-slate-300">Hasil belum memenuhi SOP minimum; banyak kesalahan teknis.</td>
          <td class="p-2 border border-slate-300">Memenuhi sebagian SOP namun kecepatan dan kerapian masih kurang.</td>
          <td class="p-2 border border-slate-300">Memenuhi seluruh SOP dengan hasil kerja rapi dan tepat waktu.</td>
          <td class="p-2 border border-slate-300 font-medium text-emerald-900">Standar profesional industri dengan efisiensi tinggi.</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold">3. Sikap & Budaya Kerja 5R/5S</td>
          <td class="p-2 border border-slate-300">Tempat kerja ditinggalkan berantakan; abaikan K3LH.</td>
          <td class="p-2 border border-slate-300">Merapikan alat jika diingatkan oleh guru/instruktur.</td>
          <td class="p-2 border border-slate-300">Disiplin menjaga kerapian dan kebersihan secara mandiri.</td>
          <td class="p-2 border border-slate-300 font-medium text-emerald-900">Menjadi role-model disiplin industri dan proaktif membantu tim.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        `,
        markdownBody: `# Modul Ajar Deep Learning: ${topic}\n...`,
      };

    case 'refleksi_awal':
      return {
        title: `Instrumen Refleksi Awal: ${topic}`,
        docType,
        summary: `Instrumen pemetaan kesiapan belajar kognitif dan emosional (Mindful Learning) untuk topik ${topic} SMK Negeri 1 Bebandem.`,
        htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">INSTRUMEN REFLEKSI AWAL PEMBELAJARAN (MINDFUL LEARNING)</h1>
    <h2 class="text-sm sm:text-base font-semibold text-gray-700 mt-1">Pemetaan Kesiapan Belajar & Kesadaran Diri Siswa</h2>
    <p class="text-xs text-gray-500 mt-1">Acuan: Kepmendikdasmen No. 126/P/2025 (Mindful Learning Framework)</p>
  </div>

  <div class="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r text-xs text-gray-800">
    <strong>Tujuan Utama Refleksi Awal:</strong> Memetakan kondisi awal kesiapan kognitif, motivasi kejuruan, dan kondisi emosional siswa terkait materi <strong>${topic}</strong> sebelum memulai pembelajaran mendalam.
  </div>

  <div class="bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs">
    <strong>Identitas Guru & Kelas:</strong> ${teacherName} (NIP. ${teacherNip}) | Mapel: ${subject} | Kelas: ${gradePhase} (${semester})
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">A. Lembar Refleksi Diri Siswa (Mindful Self-Assessment)</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 text-center w-10">No</th>
          <th class="p-2 border border-slate-400 text-left">Pernyataan Kesadaran Diri & Kesiapan Materi</th>
          <th class="p-2 border border-slate-400 text-center w-24">Belum Siap</th>
          <th class="p-2 border border-slate-400 text-center w-24">Cukup Siap</th>
          <th class="p-2 border border-slate-400 text-center w-24">Sangat Siap</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center font-bold">1</td>
          <td class="p-2 border border-slate-300">Saya merasa siap dan memiliki fokus pikiran yang tenang untuk mengikuti sesi praktik ${topic} hari ini.</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 text-center font-bold">2</td>
          <td class="p-2 border border-slate-300">Saya memahami materi prasyarat yang dibutuhkan sebelum mempelajari kompetensi ${topic}.</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center font-bold">3</td>
          <td class="p-2 border border-slate-300">Saya antusias dan memiliki rasa ingin tahu tinggi untuk memecahkan kasus nyata industri kejuruan.</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">B. Tindak Lanjut Guru Berdasarkan Pemetaan Refleksi Awal</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0f766e] text-white">
          <th class="p-2 border border-slate-400 text-left w-36">Kelompok Kesiapan</th>
          <th class="p-2 border border-slate-400 text-left">Indikasi Hasil Refleksi</th>
          <th class="p-2 border border-slate-400 text-left">Strategi Pembelajaran Berdiferensiasi</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold text-amber-900">Perlu Penguatan Konsep</td>
          <td class="p-2 border border-slate-300">Peserta didik masih cemas atau belum menguasai konsep dasar prasyarat.</td>
          <td class="p-2 border border-slate-300">Diberikan scaffolding visual terpandu dan pendampingan tutor sebaya.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 font-bold text-blue-900">Siap Belajar Reguler</td>
          <td class="p-2 border border-slate-300">Memiliki kesiapan standar dan siap mempraktikkan SOP industri.</td>
          <td class="p-2 border border-slate-300">Mengikuti alur studi kasus industri DUDIKA secara mandiri terarah.</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold text-emerald-900">Kesiapan Tinggi (Mahir)</td>
          <td class="p-2 border border-slate-300">Sangat siap, percaya diri, dan memiliki wawasan lanjutan di bidang kejuruan.</td>
          <td class="p-2 border border-slate-300">Diberikan tantangan pengayaan terbuka dan dilibatkan sebagai fasilitator tim.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        `,
        markdownBody: `# Instrumen Refleksi Awal: ${topic}\n...`,
      };

    case 'refleksi_akhir':
      return {
        title: `Lembar Refleksi Akhir: ${topic}`,
        docType,
        summary: `Refleksi metakognisi 3-2-1 dan indeks Joyful Learning untuk materi ${topic} SMK Negeri 1 Bebandem.`,
        htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">LEMBAR REFLEKSI AKHIR PEMBELAJARAN (JOYFUL & METAKOGNISI)</h1>
    <h2 class="text-sm sm:text-base font-semibold text-gray-700 mt-1">Materi: ${topic}</h2>
    <p class="text-xs text-gray-500 mt-1">Acuan: Kepmendikdasmen No. 126/P/2025 (Metacognitive & Joyful Learning)</p>
  </div>

  <div class="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r text-xs text-gray-800">
    <strong>Prinsip Metakognisi:</strong> Menumbuhkan kesadaran peserta didik atas proses belajarnya sendiri: apa yang berhasil dipahami, bagaimana mengatasi rintangan, dan rasa bangga atas pencapaian kompetensi.
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">A. Lembar Metakognisi Siswa (Format 3 - 2 - 1)</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 w-28 text-left">Elemen Refleksi</th>
          <th class="p-2 border border-slate-400 text-left">Pertanyaan Pemicu Metakognisi</th>
          <th class="p-2 border border-slate-400 text-left">Respon Refleksi Peserta Didik</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2.5 border border-slate-300 font-bold text-blue-900">3 Hal Baru</td>
          <td class="p-2.5 border border-slate-300">Tuliskan 3 konsep atau keahlian penting tentang ${topic} yang berhasil Anda pahami secara bermakna.</td>
          <td class="p-2.5 border border-slate-300 text-gray-500 italic">1. ................................................................<br/>2. ................................................................<br/>3. ................................................................</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2.5 border border-slate-300 font-bold text-amber-900">2 Tantangan</td>
          <td class="p-2.5 border border-slate-300">Sebutkan 2 kesulitan atau error teknis yang sempat Anda hadapi dan langkah yang Anda ambil untuk menyelesaikannya.</td>
          <td class="p-2.5 border border-slate-300 text-gray-500 italic">1. ................................................................<br/>2. ................................................................</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2.5 border border-slate-300 font-bold text-emerald-900">1 Ide Eksplorasi</td>
          <td class="p-2.5 border border-slate-300">Tuliskan 1 ide inovasi kejuruan yang ingin Anda kembangkan lebih lanjut di dunia industri.</td>
          <td class="p-2.5 border border-slate-300 text-gray-500 italic">1. ................................................................</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">B. Survei Indeks Kebahagiaan Belajar (Joyful Learning Index)</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0f766e] text-white">
          <th class="p-2 border border-slate-400 w-10 text-center">No</th>
          <th class="p-2 border border-slate-400 text-left">Pernyataan Suasana Belajar</th>
          <th class="p-2 border border-slate-400 text-center w-20">Kurang 😊</th>
          <th class="p-2 border border-slate-400 text-center w-20">Cukup 😃</th>
          <th class="p-2 border border-slate-400 text-center w-20">Sangat 😍</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center font-bold">1</td>
          <td class="p-2 border border-slate-300">Saya merasa aman mengeksplorasi ide dan tidak takut disalahkan saat membuat kekeliruan praktik.</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 text-center font-bold">2</td>
          <td class="p-2 border border-slate-300">Kerja sama tim menyenangkan dan rekan sejawat saling mengapresiasi kontribusi satu sama lain.</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
          <td class="p-2 border border-slate-300 text-center">[ ]</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        `,
        markdownBody: `# Lembar Refleksi Akhir: ${topic}\n...`,
      };

    case 'asesmen_sumatif':
      return {
        title: `Instrumen Asesmen Sumatif: ${topic}`,
        docType,
        summary: `Kisi-kisi soal autentik, uji kinerja berbasis kasus industri, dan rubrik penilaian 4 level untuk ${topic}.`,
        htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">INSTRUMEN ASESMEN SUMATIF LINGKUP MATERI</h1>
    <h2 class="text-sm sm:text-base font-semibold text-gray-700 mt-1">Materi: ${topic} (${gradePhase})</h2>
    <p class="text-xs text-gray-500 mt-1">Sesuai Permendikdasmen No. 13/2025 & Kepmendikdasmen No. 126/P/2025</p>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">A. Kisi-Kisi Asesmen Sumatif Autentik</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 w-10 text-center">No</th>
          <th class="p-2 border border-slate-400 text-left">Elemen Kompetensi</th>
          <th class="p-2 border border-slate-400 text-left">Indikator Ketercapaian Soal</th>
          <th class="p-2 border border-slate-400 text-center w-24">Level Kognitif</th>
          <th class="p-2 border border-slate-400 text-center w-28">Bentuk Asesmen</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center font-bold">1</td>
          <td class="p-2 border border-slate-300">Penguasaan Konsep & Teori</td>
          <td class="p-2 border border-slate-300">Menganalisis skenario studi kasus kerusakan/kendala pada materi ${topic} dan merumuskan solusi teknis yang tepat.</td>
          <td class="p-2 border border-slate-300 text-center font-bold text-blue-900">C4 (Analisis)</td>
          <td class="p-2 border border-slate-300 text-center">Studi Kasus Tertulis</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 text-center font-bold">2</td>
          <td class="p-2 border border-slate-300">Keterampilan Praktik Kinerja</td>
          <td class="p-2 border border-slate-300">Mempraktikkan prosedur standar industri untuk memproduksi hasil kerja materi ${topic} sesuai SOP dan K3LH.</td>
          <td class="p-2 border border-slate-300 text-center font-bold text-emerald-900">C6 (Mencipta/Kinerja)</td>
          <td class="p-2 border border-slate-300 text-center">Uji Kinerja Praktik</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">B. Rubrik Kinerja 4 Level Ketercapaian (KKTP)</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0f766e] text-white">
          <th class="p-2 border border-slate-400 w-32 text-left">Aspek Penilaian</th>
          <th class="p-2 border border-slate-400 text-left">Baru Berkembang (1)</th>
          <th class="p-2 border border-slate-400 text-left">Layak (2)</th>
          <th class="p-2 border border-slate-400 text-left">Cakap (3)</th>
          <th class="p-2 border border-slate-400 text-left">Mahir (4 - Standar DUDIKA)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold">Kualitas Produk / Praktik</td>
          <td class="p-2 border border-slate-300">Belum berfungsi atau tidak sesuai spesifikasi teknis minimum.</td>
          <td class="p-2 border border-slate-300">Berfungsi namun ada kekurangan minor pada kerapian atau efisiensi.</td>
          <td class="p-2 border border-slate-300">Berfungsi sempurna sesuai SOP dengan ketepatan hasil yang baik.</td>
          <td class="p-2 border border-slate-300 font-medium text-emerald-900">Kualitas prima melampaui ekspektasi standar industri kerja.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 font-bold">Kepatuhan K3LH & 5R/5S</td>
          <td class="p-2 border border-slate-300">Tidak mematuhi SOP keselamatan; area kerja berantakan.</td>
          <td class="p-2 border border-slate-300">Mematuhi SOP jika diingatkan; alat cukup tertata.</td>
          <td class="p-2 border border-slate-300">Disiplin menerapkan SOP keselamatan dan 5R/5S secara mandiri.</td>
          <td class="p-2 border border-slate-300 font-medium text-emerald-900">Menjadi teladan keselamatan kerja dan aktif membina rekan tim.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        `,
        markdownBody: `# Instrumen Asesmen Sumatif: ${topic}\n...`,
      };

    case 'bahan_ajar':
      return {
        title: `Bahan Ajar & Studi Kasus: ${topic}`,
        docType,
        summary: `Handout konseptual esensial, studi kasus industri DUDIKA Bali, dan glosarium untuk materi ${topic}.`,
        htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">BAHAN AJAR PEMBELAJARAN MENDALAM (DEEP LEARNING)</h1>
    <h2 class="text-sm sm:text-base font-semibold text-gray-700 mt-1">Materi Pokok: ${topic}</h2>
    <p class="text-xs text-gray-500 mt-1">Acuan: Permendikdasmen No. 13/2025 & Kepmendikdasmen No. 126/P/2025</p>
  </div>

  <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r text-xs text-gray-800">
    <strong>Pendekatan Meaningful Learning:</strong> Bahan ajar ini dirancang menghubungkan teori ilmiah materi ${topic} dengan fakta empiris di lapangan kerja kejuruan SMK, menghindari hafalan kering tanpa pemahaman makna.
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">1. Peta Konsep Esensial (Mindful Architecture)</h3>
    <div class="p-3 bg-slate-50 border border-slate-300 rounded-lg text-xs leading-relaxed text-gray-800">
      <p><strong>Struktur Inti Materi ${topic}:</strong> Konsep Fondasi Dasar ➔ Standar Prosedur Operasional (SOP) ➔ Implementasi Kerja Nyata ➔ Pengujian & Quality Control Industri.</p>
    </div>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">2. Studi Kasus Nyata Industri DUDIKA Bali</h3>
    <div class="p-3 bg-teal-50 border border-teal-300 rounded-lg text-xs space-y-2 text-gray-900">
      <p class="font-bold text-teal-950">Kasus Riil: Kebutuhan Mutu & Efisiensi Pelayanan di Karangasem/Bali</p>
      <p>Dunia kerja industri menuntut profesionalitas tinggi dalam penguasaan ${topic}. Pada kasus riil, kendala sering terjadi saat teknisi tidak memahami akar permasalahan dan hanya bergantung pada prosedur otomatis.</p>
      <p><strong>Tugas Analisis Siswa:</strong> Telaah faktor utama penyebab kendala tersebut dan rumuskan 3 langkah preventif sesuai prinsip standar industri.</p>
    </div>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">3. Glosarium Istilah Teknis Kejuruan</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 w-36 text-left">Istilah Teknis</th>
          <th class="p-2 border border-slate-400 text-left">Makna Konseptual Industri</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold font-mono">Standard Operating Procedure (SOP)</td>
          <td class="p-2 border border-slate-300">Pedoman baku langkah kerja yang memastikan keselamatan, konsistensi mutu, dan efisiensi waktu kerja industri.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 font-bold font-mono">Quality Assurance</td>
          <td class="p-2 border border-slate-300">Sistem penjaminan mutu terencana untuk memastikan setiap produk/layanan memenuhi standar kelayakan konsumen.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        `,
        markdownBody: `# Bahan Ajar: ${topic}\n...`,
      };

    case 'remedial':
      return {
        title: `Program Pembelajaran Remedial: ${topic}`,
        docType,
        summary: `Program rekonsiliasi miskonsepsi dan bimbingan terfokus pemahaman bermakna untuk materi ${topic}.`,
        htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">PROGRAM PEMBELAJARAN REMEDIAL</h1>
    <h2 class="text-sm sm:text-base font-semibold text-gray-700 mt-1">Topik: ${topic}</h2>
    <p class="text-xs text-gray-500 mt-1">Acuan: Kepmendikdasmen No. 126/P/2025 (Mindful Concept Reconciliation)</p>
  </div>

  <div class="bg-rose-50 border-l-4 border-rose-600 p-4 rounded-r text-xs text-gray-800">
    <strong>Prinsip Remedial:</strong> Memperbaiki akar miskonsepsi peserta didik dengan analogi kontekstual dan penyederhanaan langkah kerja, bukan sekadar memberikan tes ulangan yang sama.
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">A. Analisis Miskonsepsi Siswa</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 text-left w-36">Konsep Yang Sulit</th>
          <th class="p-2 border border-slate-400 text-left">Miskonsepsi / Kekeliruan Siswa</th>
          <th class="p-2 border border-slate-400 text-left">Strategi Rekonsiliasi Konsep</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold">Akar Konsep ${topic}</td>
          <td class="p-2 border border-slate-300">Siswa menghafalkan rumus/sintaks tanpa memahami hubungan sebab-akibat logika operasional.</td>
          <td class="p-2 border border-slate-300">Diberikan visualisasi alur diagram terpandu dan contoh kasus konkret dari aktivitas sehari-hari.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">B. Lembar Kerja Remedial Terpadu</h3>
    <div class="p-3 bg-slate-50 border border-slate-300 rounded-lg text-xs space-y-2 text-gray-800">
      <p><strong>Aktivitas Terbimbing:</strong> Siswa bersama guru membedah kembali 1 contoh soal/tugas praktik yang belum tuntas, mengidentifikasi titik kekeliruan secara jujur tanpa rasa cemas, lalu memperbaikinya hingga berhasil.</p>
    </div>
  </div>
</div>
        `,
        markdownBody: `# Program Remedial: ${topic}\n...`,
      };

    case 'pengayaan':
      return {
        title: `Program Pengayaan Siswa: ${topic}`,
        docType,
        summary: `Tantangan proyek terbuka dan penerapan inovatif berbasis industri DUDIKA untuk ${topic}.`,
        htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">PROGRAM PENGAYAAN SISWA (ADVANCED CHALLENGE)</h1>
    <h2 class="text-sm sm:text-base font-semibold text-gray-700 mt-1">Topik: ${topic} (${gradePhase})</h2>
    <p class="text-xs text-gray-500 mt-1">Acuan: Kepmendikdasmen No. 126/P/2025 (Joyful Applied Innovation)</p>
  </div>

  <div class="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-r text-xs text-gray-800">
    <strong>Sasaran Pengayaan:</strong> Memfasilitasi siswa yang telah melampaui kriteria ketuntasan (kategori Mahir) agar daya nalar, kreativitas, dan keterampilan kejuruan berkembang optimal melalui proyek nyata.
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">A. Deskripsi Tantangan Terbuka (Open-Ended Industry Project)</h3>
    <div class="p-3 bg-slate-50 border border-slate-300 rounded-lg text-xs space-y-2 text-gray-900">
      <p class="font-bold text-indigo-950">Tantangan Inovasi Mandiri:</p>
      <p>Siswa ditantang merancang purwarupa produk/layanan mandiri berbasis materi <strong>${topic}</strong> yang dapat langsung dimanfaatkan untuk efisiensi operasional UMKM lokal, koperasi sekolah, atau mitra industri di Bali.</p>
    </div>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">B. Rubrik Penilaian Karya Pengayaan</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 text-left">Aspek Penilaian</th>
          <th class="p-2 border border-slate-400 text-left">Kriteria Mutu Inovasi</th>
          <th class="p-2 border border-slate-400 text-center w-24">Skor Maks</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold">1. Orisinalitas & Kreativitas</td>
          <td class="p-2 border border-slate-300">Menghasilkan solusi baru yang melampaui contoh modul ajar reguler.</td>
          <td class="p-2 border border-slate-300 text-center font-bold">35</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 font-bold">2. Kesesuaian Standar Industri</td>
          <td class="p-2 border border-slate-300">Mematuhi kaidah mutu, kerapian kode/produk, dan efisiensi SOP DUDIKA.</td>
          <td class="p-2 border border-slate-300 text-center font-bold">35</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold">3. Nilai Manfaat Nyata</td>
          <td class="p-2 border border-slate-300">Siap dipresentasikan dan diuji coba pada lingkungan nyata.</td>
          <td class="p-2 border border-slate-300 text-center font-bold">30</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        `,
        markdownBody: `# Program Pengayaan: ${topic}\n...`,
      };

    case 'tindak_lanjut':
    default:
      return {
        title: `Rencana Tindak Lanjut (RTL): ${topic}`,
        docType,
        summary: `Rencana tindak lanjut pembelajaran dan peningkatan mutu KBM berkelanjutan untuk ${topic}.`,
        htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">RENCANA TINDAK LANJUT (RTL) PEMBELAJARAN</h1>
    <h2 class="text-sm sm:text-base font-semibold text-gray-700 mt-1">Materi: ${topic} (${gradePhase})</h2>
    <p class="text-xs text-gray-500 mt-1">Acuan: Permendikdasmen No. 13/2025 & Kepmendikdasmen No. 126/P/2025</p>
  </div>

  <div class="bg-teal-50 border-l-4 border-teal-700 p-4 rounded-r text-xs text-gray-800">
    <strong>Tujuan Rencana Tindak Lanjut:</strong> Memastikan hasil asesmen menjadi landasan konkret peningkatan mutu pengajaran guru secara berkelanjutan (*Continuous Quality Improvement*) dan menjamin setiap peserta didik terfasilitasi sesuai potensinya.
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">A. Matriks Intervensi Tiga Kelompok Belajar</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 text-left w-36">Kelompok Capaian</th>
          <th class="p-2 border border-slate-400 text-left">Karakteristik Ketuntasan</th>
          <th class="p-2 border border-slate-400 text-left">Bentuk Intervensi Tindak Lanjut</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold text-red-900">Perlu Bimbingan</td>
          <td class="p-2 border border-slate-300">Belum mencapai Kriteria Ketercapaian Tujuan Pembelajaran (KKTP).</td>
          <td class="p-2 border border-slate-300">Pelaksanaan program remedial konsep dan pendampingan personal pasca pembelajaran.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 font-bold text-blue-900">Cakap / Reguler</td>
          <td class="p-2 border border-slate-300">Telah mencapai kriteria ketuntasan secara baik dan konsisten.</td>
          <td class="p-2 border border-slate-300">Pemberian penguatan studi kasus industri lanjutan dan kolaborasi terarah.</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold text-emerald-900">Mahir</td>
          <td class="p-2 border border-slate-300">Melampaui kriteria ketuntasan dengan kecepatan belajar tinggi.</td>
          <td class="p-2 border border-slate-300">Penugasan proyek pengayaan terbuka dan pelibatan sebagai tutor sebaya bagi kelompok bimbingan.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
    <h3 class="text-sm font-bold text-[#0d3b66] uppercase mb-2">B. Rencana Aksi Perbaikan KBM Guru (Siklus Berikutnya)</h3>
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0f766e] text-white">
          <th class="p-2 border border-slate-400 w-10 text-center">No</th>
          <th class="p-2 border border-slate-400 text-left">Bidang Peningkatan</th>
          <th class="p-2 border border-slate-400 text-left">Rencana Aksi Konkret Guru</th>
          <th class="p-2 border border-slate-400 text-center w-28">Target Waktu</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center font-bold">1</td>
          <td class="p-2 border border-slate-300 font-semibold">Integrasi DUDIKA & Praktik Riil</td>
          <td class="p-2 border border-slate-300">Menyesuaikan lembar kerja praktik dengan studi kasus terbaru dari industri mitra kejuruan SMK di Bali.</td>
          <td class="p-2 border border-slate-300 text-center">Bulan Depan</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 text-center font-bold">2</td>
          <td class="p-2 border border-slate-300 font-semibold">Penguatan Pembelajaran Menyenangkan</td>
          <td class="p-2 border border-slate-300">Memperkaya variasi metode Joyful Learning (gamifikasi edukatif dan apresiasi berkala).</td>
          <td class="p-2 border border-slate-300 text-center">Setiap Pekan KBM</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        `,
        markdownBody: `# Rencana Tindak Lanjut: ${topic}\n...`,
      };
  }
}
