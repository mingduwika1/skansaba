import { TeacherProfile, AdminDocument } from '../types';

export const OFFICIAL_KOP_DETAILS = {
  logoUrl: 'https://i.imgur.com/kx40xIV.png',
  provinsi: 'PEMERINTAH PROVINSI BALI',
  dinas: 'DINAS PENDIDIKAN KEPEMUDAAN DAN OLAHRAGA',
  sekolah: 'SMK NEGERI 1 BEBANDEM',
  tahunAjaran: 'TAHUN AJARAN 2026/2027',
  alamat: 'Jl. Kuncara Giri, Sibetan, Bebandem, Karangasem, Bali.',
  kepalaSekolah: 'I Wayan Darmayasa, S.T.,M.Si',
  nipKepalaSekolah: '19730522 200501 1 009',
};

/**
 * Exports document as an enriched Word-compatible file (.doc/.docx)
 * with complete Kop, official logo, responsive CSS tables, and dual-column signature block.
 */
export function exportToWordDocument(doc: AdminDocument) {
  const profile = doc.teacherProfile;
  const fileName = `${doc.title.replace(/[^a-zA-Z0-9_-]/g, '_')}_SMKN1Bebandem.doc`;

  const htmlContent = `
<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="utf-8">
<title>${doc.title}</title>
<style>
  @page {
    size: 21cm 29.7cm; /* A4 */
    margin: 2cm 2cm 2cm 2cm;
    mso-page-orientation: portrait;
  }
  body {
    font-family: 'Times New Roman', 'Calibri', serif;
    font-size: 11pt;
    line-height: 1.4;
    color: #111827;
  }
  .kop-container {
    width: 100%;
    margin-bottom: 12pt;
    border-bottom: 3px double #000;
    padding-bottom: 6pt;
  }
  .kop-table {
    width: 100%;
    border-collapse: collapse;
    border: none;
  }
  .kop-table td {
    border: none;
    padding: 0;
    vertical-align: middle;
  }
  .kop-logo {
    width: 80px;
    height: auto;
  }
  .kop-text {
    text-align: center;
  }
  .kop-text h4 {
    margin: 0;
    font-size: 12pt;
    font-weight: bold;
    color: #000;
    text-transform: uppercase;
  }
  .kop-text h2 {
    margin: 2pt 0;
    font-size: 14pt;
    font-weight: bold;
    color: #0d3b66;
    letter-spacing: 0.5pt;
  }
  .kop-text p {
    margin: 1pt 0;
    font-size: 9pt;
    color: #374151;
  }
  
  .regulasi-box {
    background-color: #f0fdf4;
    border-left: 4px solid #16a34a;
    padding: 8pt 12pt;
    margin: 10pt 0;
    font-size: 9.5pt;
  }
  .deep-learning-box {
    background-color: #f0f9ff;
    border: 1px solid #bae6fd;
    padding: 10pt;
    margin: 12pt 0;
    border-radius: 4pt;
  }
  
  h1, h2, h3, h4 {
    color: #0d3b66;
    margin-top: 14pt;
    margin-bottom: 6pt;
  }
  h1 { font-size: 15pt; text-align: center; text-transform: uppercase; }
  h2 { font-size: 13pt; border-bottom: 1px solid #cbd5e1; padding-bottom: 3pt; }
  h3 { font-size: 11.5pt; color: #0f766e; }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 10pt 0;
  }
  table, th, td {
    border: 1px solid #334155;
  }
  th {
    background-color: #0d3b66;
    color: #ffffff;
    font-weight: bold;
    text-align: left;
    padding: 6pt;
    font-size: 10pt;
  }
  td {
    padding: 5.5pt;
    font-size: 10pt;
    vertical-align: top;
  }
  tr:nth-child(even) {
    background-color: #f8fafc;
  }
  
  .signature-table {
    width: 100%;
    border-collapse: collapse;
    border: none;
    margin-top: 30pt;
    page-break-inside: avoid;
  }
  .signature-table td {
    border: none;
    width: 50%;
    vertical-align: top;
    font-size: 11pt;
  }
  .signature-space {
    height: 70px;
  }
  .underlined-name {
    font-weight: bold;
    text-decoration: underline;
  }
</style>
</head>
<body>

  <!-- KOP DOKUMEN RESMI SMKN 1 BEBANDEM -->
  <div class="kop-container">
    <table class="kop-table">
      <tr>
        <td style="width: 90px; text-align: center;">
          <img src="${OFFICIAL_KOP_DETAILS.logoUrl}" alt="Logo SMKN 1 Bebandem" class="kop-logo" width="80" height="80" />
        </td>
        <td class="kop-text">
          <h4>${OFFICIAL_KOP_DETAILS.provinsi}</h4>
          <h4>${OFFICIAL_KOP_DETAILS.dinas}</h4>
          <h2>${OFFICIAL_KOP_DETAILS.sekolah}</h2>
          <p style="font-weight: bold; color: #0d3b66;">${OFFICIAL_KOP_DETAILS.tahunAjaran}</p>
          <p>${OFFICIAL_KOP_DETAILS.alamat}</p>
        </td>
      </tr>
    </table>
  </div>

  <div class="regulasi-box">
    <strong>ACUAN REGULASI RESMI T.A. 2026/2027:</strong><br/>
    1. Permendikdasmen Nomor 13 Tahun 2025 (Standar Sarana, Prasarana, dan Kurikulum)<br/>
    2. Kepmendikdasmen Nomor 126/P/2025 (Pedoman Implementasi Pembelajaran Mendalam: Mindful, Meaningful, & Joyful Learning)
  </div>

  <!-- ISI DOKUMEN -->
  <div class="document-content">
    ${doc.htmlBody}
  </div>

  <!-- BLOK TANDA TANGAN 2 KOLOM BERSEBELAHAN -->
  <table class="signature-table">
    <tr>
      <td style="text-align: left;">
        <p>Mengetahui,</p>
        <p>Kepala SMK Negeri 1 Bebandem,</p>
        <div class="signature-space"></div>
        <p class="underlined-name">${OFFICIAL_KOP_DETAILS.kepalaSekolah}</p>
        <p>NIP. ${OFFICIAL_KOP_DETAILS.nipKepalaSekolah}</p>
      </td>
      <td style="text-align: left; padding-left: 20pt;">
        <p>Bebandem, ${profile.dateStr || 'Juli 2026'}</p>
        <p>Guru Mata Pelajaran,</p>
        <div class="signature-space"></div>
        <p class="underlined-name">${profile.name || '[Nama Guru]'}</p>
        <p>NIP. ${profile.nip || '[NIP Guru]'}</p>
      </td>
    </tr>
  </table>

</body>
</html>
  `;

  const blob = new Blob(['\ufeff', htmlContent], {
    type: 'application/msword;charset=utf-8',
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Triggers standard browser print dialog with page-optimized styles for PDF generation.
 */
export function printDocument() {
  window.print();
}
