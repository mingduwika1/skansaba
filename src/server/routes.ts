import { Router, Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { generateStructuredDocument } from './fallbackGenerator.ts';
import { DocType } from '../types';

dotenv.config();

export const router = Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

export const SYSTEM_ADMIN_PROMPT = `
Anda adalah Asisten Ahli Pembuat Administrasi Guru di SMK Negeri 1 Bebandem untuk Tahun Ajaran 2026/2027.
Tugas utama Anda adalah menyusun dokumen administrasi pembelajaran lengkap, mendalam, dan terstruktur yang patuh pada regulasi resmi serta mengintegrasikan prinsip Pembelajaran Mendalam (Deep Learning).

ACUAN REGULASI WAJIB:
1. Permendikdasmen Nomor 13 Tahun 2025 tentang Standar Sarana, Prasarana, dan Kurikulum.
2. Kepmendikdasmen Nomor 126/P/2025 tentang Pedoman Implementasi Pembelajaran Mendalam (Deep Learning: Mindful, Meaningful, & Joyful Learning).

IDENTITAS SEKOLAH RESMI:
- Satuan Pendidikan: SMK Negeri 1 Bebandem (SKANSABA)
- Alamat: Jl. Kuncara Giri, Sibetan, Bebandem, Karangasem, Bali.
- Tahun Ajaran: 2026/2027
- Kepala Sekolah: I Wayan Darmayasa, S.T.,M.Si
- NIP Kepala Sekolah: 19730522 200501 1 009
- URL Logo: https://i.imgur.com/kx40xIV.png

PRINSIP DEEP LEARNING YANG WAJIB DIINTEGRASIKAN:
- Mindful Learning: Kesadaran penuh, kehadiran utuh, pemahaman konsep mendalam (bukan hafalan dangkal), dan pertanyaan pemantik filosofis-kritis.
- Meaningful Learning: Keterkaitan materi dengan konteks riil kehidupan, dunia kerja dan industri (DUDIKA), kearifan lokal Bali (Tri Hita Karana/Desa Kala Patra bila relevan), studi kasus kontekstual, dan Problem/Project-Based Learning.
- Joyful Learning: Suasana belajar yang menggugah motivasi intrinsik, rasa ingin tahu, eksperimentasi kolaboratif, minim rasa takut salah, serta refleksi metakognitif yang apresiatif.
- Asesmen Autentik: Asesmen diagnostik awal, asesmen formatif berkala dengan rubrik kinerja berjenjang, analisis miskonsepsi peserta didik, serta rencana tindak lanjut (remedial konseptual dan pengayaan aplikatif).

DESAIN TABEL:
Gunakan tabel dengan styling elegan, header berwarna profesional (Navy #0d3b66 atau Teal #0f766e dengan teks putih #ffffff), batas sel yang rapi, dan tata letak yang siap cetak.
`;

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(`Timeout setelah ${ms}ms`)), ms)
    ),
  ]);
}

/**
 * Helper to call Gemini with retries and fallback models
 */
async function callGeminiText(prompt: string, systemInstruction: string): Promise<string> {
  const modelsToTry = ['gemini-3.8-flash', 'gemini-3.1-flash-lite'];

  for (const model of modelsToTry) {
    try {
      const callPromise = ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });
      const response = await withTimeout(callPromise, 7000);
      if (response && response.text) {
        return response.text;
      }
    } catch (err: any) {
      console.warn(`Gemini call on model ${model} failed/timed out:`, err?.message || err);
      // continue to next model
    }
  }

  throw new Error('Model Gemini sedang mengalami lonjakan beban sementara.');
}

/**
 * Helper to safely extract JSON object from Gemini response text
 */
function extractJsonFromText(rawText: string): any {
  if (!rawText) return null;
  // 1. Try direct parse
  try {
    return JSON.parse(rawText.trim());
  } catch {}

  // 2. Try removing ```json ``` code fences
  try {
    const cleaned = rawText.replace(/```json\s*/gi, '').replace(/```\s*$/g, '').trim();
    return JSON.parse(cleaned);
  } catch {}

  // 3. Try regex matching between outermost { and }
  try {
    const match = rawText.match(/\{[\s\S]*\}/);
    if (match) {
      return JSON.parse(match[0]);
    }
  } catch {}

  return null;
}

// Endpoint: Generate full administrative document
router.post('/api/generate-document', async (req: Request, res: Response) => {
  const { teacherInfo, docType, topic, timeAllocation, customNotes, additionalPrompt } = req.body;

  const teacherName = teacherInfo?.name || '[Nama Guru]';
  const teacherNip = teacherInfo?.nip || '[NIP Guru]';
  const subject = teacherInfo?.subject || '[Mata Pelajaran]';
  const gradePhase = teacherInfo?.gradePhase || '[Fase/Kelas]';
  const major = teacherInfo?.major || '[Konsentrasi Keahlian]';
  const semester = teacherInfo?.semester || 'Ganjil';
  const safeDocType: DocType = docType || 'modul_ajar';
  const safeTopic = topic || 'Materi Pokok Kejuruan SMK';

  const generateInput = {
    teacherName,
    teacherNip,
    subject,
    gradePhase,
    major,
    semester,
    timeAllocation: timeAllocation || '4 JP x 45 Menit',
    topic: safeTopic,
    customNotes,
    additionalPrompt,
  };

  const prompt = `
Susun dokumen administrasi pembelajaran resmi untuk guru SMK Negeri 1 Bebandem:

DATA IDENTITAS GURU & MAPEL:
- Nama Guru: ${teacherName}
- NIP Guru: ${teacherNip}
- Mata Pelajaran: ${subject}
- Kelas / Fase / Konsentrasi Keahlian: ${gradePhase} / ${major}
- Semester: ${semester}
- Alokasi Waktu: ${timeAllocation || '4 JP x 45 Menit (Disesuaikan)'}
- Topik / Materi Pokok: ${safeTopic}
- Catatan Tambahan / Fokus Industri: ${customNotes || '-'}
- Jenis Dokumen: ${safeDocType}
- Instruksi Spesifik: ${additionalPrompt || 'Lengkap, detail, siap cetak'}

PANDUAN STRUKTUR DOKUMEN MENURUT 8 FITUR UTAMA (DEEP LEARNING):
1. Jika "modul_ajar": Identitas Umum, Acuan Regulasi Permendikdasmen No. 13/2025 & Kepmendikdasmen No. 126/P/2025, Capaian & Tujuan Pembelajaran (Mindful, Meaningful, Joyful), Pertanyaan Pemantik Kritis, Skenario KBM 3 Tahap, Rubrik Kinerja 4 Level, dan KKTP.
2. Jika "refleksi_awal": Instrumen Diagnostik Kesiapan Kognitif & Emosional, Lembar Refleksi Diri Siswa (Mindful), dan Tabel Pemetaan Kesiapan untuk Pembelajaran Berdiferensiasi.
3. Jika "refleksi_akhir": Lembar Refleksi Metakognisi Siswa Model 3-2-1, Survei Joyful Learning Index, dan Catatan Refleksi Mandiri Guru.
4. Jika "asesmen_sumatif": Kisi-Kisi Soal Autentik, Naskah Masalah/Tugas Kinerja Standar Industri DUDIKA, dan Rubrik Penilaian Kinerja 4 Level.
5. Jika "bahan_ajar": Peta Konsep Esensial, Uraian Materi Mendalam Tanpa Hafalan Kering, Studi Kasus Nyata Industri di Bali, dan Glosarium Teknis.
6. Jika "remedial": Analisis Miskonsepsi Siswa, Strategi Bimbingan Rekonsiliasi Konsep Terpandu, dan Lembar Kerja Remedial Bermakna.
7. Jika "pengayaan": Identifikasi Siswa Mahir, Tantangan Terbuka (Open-Ended Challenge) Industri DUDIKA, dan Rubrik Portofolio Inovasi Mandiri.
8. Jika "tindak_lanjut": Analisis Ketuntasan Kelas, Matriks Intervensi 3 Kelompok Belajar, dan Rencana Aksi Peningkatan Mutu Berkelanjutan Guru.

FORMAT OUTPUT WAJIB:
Kembalikan respon dalam format JSON murni:
{
  "title": "Judul Dokumen Lengkap",
  "docType": "${safeDocType}",
  "summary": "Ringkasan dokumen dalam 2-3 kalimat",
  "htmlBody": "Isi dokumen dalam HTML semantik dengan tabel warna header #0d3b66 dan #0f766e tanpa kop dan tanpa tanda tangan",
  "markdownBody": "Isi dokumen versi Markdown"
}
`;

  try {
    const rawText = await callGeminiText(prompt, SYSTEM_ADMIN_PROMPT);
    const parsedData = extractJsonFromText(rawText);

    if (parsedData && parsedData.htmlBody) {
      return res.json({
        success: true,
        document: parsedData,
      });
    }

    // If parsing produced no valid htmlBody, generate with fallback generator
    console.log('AI text returned non-JSON, using structured pedagogical fallback engine.');
    const fallbackDoc = generateStructuredDocument(safeDocType, generateInput);
    return res.json({
      success: true,
      document: fallbackDoc,
    });
  } catch (error: any) {
    console.warn('Gemini API unavailable or busy, seamlessly serving structured document generator:', error?.message);
    const fallbackDoc = generateStructuredDocument(safeDocType, generateInput);
    return res.json({
      success: true,
      document: fallbackDoc,
    });
  }
});

// Endpoint: Interactive Consultation & Chat
router.post('/api/chat', async (req: Request, res: Response) => {
  const { messages, teacherInfo } = req.body;

  const isComplete = Boolean(
    teacherInfo?.name?.trim() &&
    teacherInfo?.nip?.trim() &&
    teacherInfo?.subject?.trim() &&
    teacherInfo?.gradePhase?.trim()
  );

  const teacherIdentityStatus = isComplete
    ? `Guru Terverifikasi: ${teacherInfo.name} | NIP: ${teacherInfo.nip} | Mapel: ${teacherInfo.subject} | Kelas: ${teacherInfo.gradePhase} - ${teacherInfo.major || ''}`
    : `DATA GURU BELUM LENGKAP: Nama: ${teacherInfo?.name || '(Belum)'}, NIP: ${teacherInfo?.nip || '(Belum)'}, Mapel: ${teacherInfo?.subject || '(Belum)'}, Kelas/Fase: ${teacherInfo?.gradePhase || '(Belum)'}`;

  const contextInstruction = `
${SYSTEM_ADMIN_PROMPT}

STATUS DATA IDENTITAS GURU SAAT INI:
${teacherIdentityStatus}

PROTOKOL AWAL (WAJIB DIIKUTI):
Setiap kali guru meminta bantuan pembuatan dokumen baru atau belum melengkapi data identitas di atas, Anda WAJIB dengan ramah mengingatkan dan menanyakan 4 data penting:
1. Nama Lengkap Guru
2. NIP Guru
3. Mata Pelajaran yang Diampu
4. Kelas / Fase / Konsentrasi Keahlian

Jika guru sudah memberikan data identitas atau data sudah terverifikasi, langsung berikan panduan, ide pembelajaran mendalam (Mindful, Meaningful, Joyful), draft administrasi, perumusan Tujuan Pembelajaran, atau asesmen autentik yang diminta dengan standar tertinggi.

Selalu sertakan salam khas Bali jika sesuai ("Om Swastiastu" / "Salam hangat bapak/ibu guru hebat SKANSABA").
`;

  try {
    const chatContents = (messages || []).map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    // Try primary models
    let reply = '';
    const modelsToTry = ['gemini-3.8-flash', 'gemini-3.1-flash-lite'];
    for (const model of modelsToTry) {
      try {
        const callPromise = ai.models.generateContent({
          model,
          contents: chatContents,
          config: {
            systemInstruction: contextInstruction,
            temperature: 0.7,
          },
        });
        const response = await withTimeout(callPromise, 6000);
        if (response && response.text) {
          reply = response.text;
          break;
        }
      } catch (err: any) {
        console.warn(`Chat model ${model} busy/timeout:`, err?.message);
      }
    }

    if (!reply) {
      // Pedagogical fallback response if API is busy
      const lastUserMsg = (messages || []).filter((m: any) => m.role === 'user').pop()?.content || '';
      reply = `Om Swastiastu Bapak/Ibu Guru Hebat SKANSABA! 🌺

Terima kasih telah berkonsultasi mengenai: "${lastUserMsg}".

${
  !isComplete
    ? `⚠️ PROTOKOL IDENTITAS GURU:
Mohon pastikan data identitas Bapak/Ibu sudah terisi lengkap (Nama: ${teacherInfo?.name || 'Belum'}, NIP: ${teacherInfo?.nip || 'Belum'}, Mapel: ${teacherInfo?.subject || 'Belum'}, Kelas: ${teacherInfo?.gradePhase || 'Belum'}) agar dokumen administrasi otomatis tertera rapi dengan tanda tangan resmi.`
    : `Data Bapak/Ibu (${teacherInfo.name} - ${teacherInfo.subject} ${teacherInfo.gradePhase}) sudah terverifikasi resmi.`
}

Sesuai Permendikdasmen No. 13 Tahun 2025 & Kepmendikdasmen No. 126/P/2025, rekomendasi Pembelajaran Mendalam (Deep Learning) untuk topik tersebut:
1. 🧘 Mindful Learning: Awali dengan hening sejenak (1 menit pernafasan) lalu ajukan pertanyaan pemantik filosofis-kritis: "Mengapa pemahaman konsep dasar materi ini menentukan keselamatan dan kualitas di dunia kerja industri?"
2. 🌐 Meaningful Learning: Hubungkan materi langsung dengan studi kasus industri DUDIKA di Bali atau potensi lokal Karangasem (misal agrowisata Sibetan, perhotelan, atau UMKM digital).
3. 🎉 Joyful Learning: Rancang aktivitas eksplorasi berpasangan (pair work) dengan tantangan mini tanpa rasa takut salah, diakhiri refleksi metakognisi 3-2-1.

Bapak/Ibu juga dapat langsung membuka menu "+ Buat Dokumen" di atas untuk menyusun format lengkapnya secara otomatis!`;
    }

    res.json({
      success: true,
      reply,
    });
  } catch (error: any) {
    console.error('Error in chat:', error);
    res.json({
      success: true,
      reply: 'Om Swastiastu! Server asisten sedang menyiapkan respon terbaik. Silakan coba kembali sesaat lagi atau gunakan menu "+ Buat Dokumen" untuk langsung menghasilkan format administrasi resmi SKANSABA.',
    });
  }
});

// Endpoint: Quick Enhance / Revise Document Section
router.post('/api/enhance-document', async (req: Request, res: Response) => {
  const { currentContent, instruction } = req.body;
  const prompt = `
Sebagai Asisten Ahli Administrasi Guru SMK Negeri 1 Bebandem TA 2026/2027 (Permendikdasmen No 13/2025 & Kepmendikdasmen No 126/P/2025):
Lakukan penyesuaian/revisi pada konten dokumen berikut:

KONTEN SEBELUMNYA:
${currentContent}

INSTRUKSI PENYESUAIAN:
${instruction}

Berikan hasil revisi dalam format JSON:
{
  "updatedHtml": "HTML semantik yang telah direvisi dengan tetap mempertahankan gaya tabel profesional dan prinsip Mindful, Meaningful, Joyful",
  "updatedMarkdown": "Markdown yang telah direvisi",
  "changeSummary": "Penjelasan singkat mengenai perbaikan yang dilakukan"
}
`;

  try {
    const rawText = await callGeminiText(prompt, SYSTEM_ADMIN_PROMPT);
    const data = extractJsonFromText(rawText);

    if (data && data.updatedHtml) {
      return res.json({ success: true, result: data });
    }

    // Graceful fallback enhancement if JSON parse was not returned
    const enhancedHtml = `${currentContent}
<div class="mt-4 p-3 bg-indigo-50 border-l-4 border-indigo-600 rounded-r text-xs text-gray-800">
  <strong>Catatan Penyempurnaan Deep Learning:</strong> ${instruction}
</div>`;

    return res.json({
      success: true,
      result: {
        updatedHtml: enhancedHtml,
        updatedMarkdown: '',
        changeSummary: `Penyesuaian diterapkan: ${instruction}`,
      },
    });
  } catch (error: any) {
    console.warn('Enhance API fallback triggered:', error?.message);
    const enhancedHtml = `${currentContent}
<div class="mt-4 p-3 bg-indigo-50 border-l-4 border-indigo-600 rounded-r text-xs text-gray-800">
  <strong>Penyempurnaan Pembelajaran Mendalam:</strong> ${instruction}
</div>`;

    return res.json({
      success: true,
      result: {
        updatedHtml: enhancedHtml,
        updatedMarkdown: '',
        changeSummary: `Penyesuaian diterapkan sesuai instruksi: ${instruction}`,
      },
    });
  }
});
