import React, { useState } from 'react';
import { DocType, TeacherProfile, AdminDocument } from '../types';
import { DOC_TYPE_OPTIONS } from '../data/defaultTemplates';
import {
  Sparkles,
  X,
  FileCheck2,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

interface DocumentGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  teacherProfile: TeacherProfile;
  onOpenProfileEdit: () => void;
  onDocumentCreated: (newDoc: AdminDocument) => void;
  initialType?: DocType;
}

const PRESET_TOPICS: { [key in DocType]?: string[] } = {
  modul_ajar: [
    'Pemrograman Web Responsif & Integrasi REST API Industri',
    'Desain Antarmuka Pengguna (UI/UX) Berbasis Kearifan Lokal Bali',
    'Pelayanan Front Office Hospitality Bintang 4 di Karangasem',
    'Pengolahan Hidangan Nusantara Kontemporer (Boga)',
    'Berpikir Komputasional & Keamanan Jaringan Komputer',
  ],
  refleksi_awal: [
    'Pemetaan Kesiapan Belajar & Gaya Belajar Siswa (Mindful Start)',
    'Asesmen Diagnostik Pemahaman Konsep Dasar & Emosional Siswa',
    'Identifikasi Minat Kejuruan DUDIKA & Ekspektasi Belajar',
  ],
  refleksi_akhir: [
    'Refleksi Metakognisi Siswa Model 3-2-1 Pasca Pembelajaran',
    'Survei Indeks Kebahagiaan Belajar (Joyful Learning) & Refleksi Guru',
    'Evaluasi Diri Siswa & Apresiasi Rekan Sejawat di Laboratorium',
  ],
  asesmen_sumatif: [
    'Kisi-Kisi & Soal Uji Kinerja Praktik Pemecahan Masalah Industri',
    'Instrumen Tes Autentik & Rubrik 4 Level Ketercapaian (KKTP)',
    'Uji Portofolio Produk Nyata & Presentasi Standar DUDIKA',
  ],
  bahan_ajar: [
    'Handout Konseptual Esensial & Peta Konsep Logika Kejuruan',
    'Studi Kasus Nyata Industri DUDIKA Bali & Lembar Analisis Masalah',
    'Rangkuman Terstruktur, SOP Industri, dan Glosarium Istilah',
  ],
  remedial: [
    'Rekonsiliasi Miskonsepsi Siswa & Bimbingan Terfokus Berbantuan Tutor',
    'Modul Remedial Konseptual Berbasis Analogi Masalah Sehari-hari',
    'Lembar Kerja Remedial Terpadu Pemahaman Bermakna',
  ],
  pengayaan: [
    'Tantangan Terbuka (Open-Ended Challenge) Siswa Kategori Mahir',
    'Mini Proyek Mandiri Solusi Digital UMKM Agrowisata Salak Sibetan',
    'Eksplorasi Inovasi Teknologi Baru Standar Dunia Usaha & Industri',
  ],
  tindak_lanjut: [
    'Rencana Tindak Lanjut (RTL) Pembelajaran Pasca Asesmen Sumatif',
    'Analisis Daya Serap Kelas & Matriks Intervensi Tiga Kelompok Belajar',
    'Rencana Aksi Perbaikan KBM Guru (Continuous Quality Improvement)',
  ],
};

export const DocumentGeneratorModal: React.FC<DocumentGeneratorModalProps> = ({
  isOpen,
  onClose,
  teacherProfile,
  onOpenProfileEdit,
  onDocumentCreated,
  initialType,
}) => {
  const [selectedType, setSelectedType] = useState<DocType>(initialType || 'modul_ajar');
  const [topic, setTopic] = useState('');
  const [timeAllocation, setTimeAllocation] = useState('4 JP x 45 Menit');
  const [elementCp, setElementCp] = useState('');
  const [industryFocus, setIndustryFocus] = useState('');
  const [additionalPrompt, setAdditionalPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  React.useEffect(() => {
    if (initialType) {
      setSelectedType(initialType);
    }
  }, [initialType, isOpen]);

  if (!isOpen) return null;

  const isProfileComplete =
    Boolean(teacherProfile.name?.trim()) &&
    Boolean(teacherProfile.nip?.trim()) &&
    Boolean(teacherProfile.subject?.trim()) &&
    Boolean(teacherProfile.gradePhase?.trim());

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) {
      setErrorMsg('Mohon masukkan topik atau materi pokok pembelajaran.');
      return;
    }

    setIsGenerating(true);
    setErrorMsg(null);

    try {
      const payload = {
        teacherInfo: teacherProfile,
        docType: selectedType,
        topic,
        timeAllocation,
        customNotes: `Elemen CP: ${elementCp || 'Sesuai kurikulum'}. Fokus Industri DUDIKA / Kearifan Bali: ${
          industryFocus || 'Standar industri SMK'
        }`,
        additionalPrompt,
      };

      const res = await fetch('/api/generate-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!data.success || !data.document) {
        throw new Error(data.error || 'Gagal menghasilkan dokumen.');
      }

      const generated = data.document;
      const newDoc: AdminDocument = {
        id: `skansaba-doc-${Date.now()}`,
        title: generated.title || `Dokumen Administrasi - ${topic}`,
        docType: selectedType,
        topic,
        timeAllocation,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        teacherProfile: { ...teacherProfile },
        htmlBody: generated.htmlBody || '<p>Dokumen berhasil dibuat.</p>',
        markdownBody: generated.markdownBody || '',
        summary: generated.summary || 'Dokumen administrasi pembelajaran mendalam.',
      };

      onDocumentCreated(newDoc);
      onClose();
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Terjadi kesalahan saat memproses generator AI.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#0d3b66] text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">
                Generator Administrasi Guru Deep Learning
              </h3>
              <p className="text-xs text-sky-200">
                SMK Negeri 1 Bebandem • Permendikdasmen No. 13/2025 & Kepmendikdasmen No. 126/P/2025
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isGenerating}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Identity Verification Warning Bar if Incomplete */}
        {!isProfileComplete && (
          <div className="bg-amber-50 border-b border-amber-200 p-3.5 text-xs text-amber-900 flex items-start justify-between gap-3 shrink-0">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Perhatian Protokol Identitas Guru:</strong> Data Anda belum lengkap (Nama, NIP, Mapel, atau Kelas/Fase). Anda disarankan melengkapinya agar tanda tangan dan kop dokumen otomatis terisi.
              </div>
            </div>
            <button
              onClick={onOpenProfileEdit}
              className="text-amber-800 bg-amber-100 hover:bg-amber-200 font-bold px-2.5 py-1 rounded text-[11px] whitespace-nowrap transition"
            >
              Lengkapi Sekarang
            </button>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <form onSubmit={handleGenerate} className="p-6 overflow-y-auto space-y-5 flex-1">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-700 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* 1. Pilih Jenis Dokumen Administrasi */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
              1. Pilih Jenis Dokumen Administrasi
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {DOC_TYPE_OPTIONS.map((item) => {
                const isSelected = selectedType === item.type;
                return (
                  <button
                    key={item.type}
                    type="button"
                    onClick={() => {
                      setSelectedType(item.type);
                      setTopic('');
                    }}
                    className={`text-left p-3 rounded-xl border transition flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#0d3b66] bg-blue-50/70 ring-2 ring-[#0d3b66]'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            isSelected
                              ? 'bg-[#0d3b66] text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {item.badge}
                        </span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#0d3b66]" />}
                      </div>
                      <h4 className="font-bold text-xs text-gray-900 leading-tight">
                        {item.label}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Topik / Materi Pokok & Preset */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                2. Topik / Materi Pokok <span className="text-red-500">*</span>
              </label>
              <span className="text-[11px] text-gray-500">
                Mata Pelajaran: {teacherProfile.subject || 'Disesuaikan'}
              </span>
            </div>
            <input
              type="text"
              required
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Contoh: Pemrograman Web Responsif Berbasis Modern Framework"
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#0d3b66]"
            />

            {/* Rekomendasi Topik Cepat */}
            {PRESET_TOPICS[selectedType] && (
              <div className="mt-2">
                <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 mb-1">
                  <Lightbulb className="w-3 h-3 text-amber-500" />
                  Contoh Cepat untuk {selectedType.replace('_', ' ')}:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_TOPICS[selectedType]?.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setTopic(preset)}
                      className="text-[11px] text-left bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-gray-700 px-2 py-1 rounded-md transition border border-gray-200"
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 3. Alokasi Waktu & Elemen CP */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                Alokasi Waktu
              </label>
              <input
                type="text"
                value={timeAllocation}
                onChange={(e) => setTimeAllocation(e.target.value)}
                placeholder="Contoh: 4 JP x 45 Menit (Pertemuan 1 - 2)"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#0d3b66]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                Elemen Capaian Pembelajaran (CP)
              </label>
              <input
                type="text"
                value={elementCp}
                onChange={(e) => setElementCp(e.target.value)}
                placeholder="Contoh: Pemrograman Web / Front Office / Nirmana"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#0d3b66]"
              />
            </div>
          </div>

          {/* 4. Meaningful Learning: Keterkaitan Industri DUDIKA & Kearifan Lokal */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1 flex items-center gap-1">
              <span>🏭 Meaningful Learning: Hubungan Industri / DUDIKA & Konteks Nyata</span>
            </label>
            <input
              type="text"
              value={industryFocus}
              onChange={(e) => setIndustryFocus(e.target.value)}
              placeholder="Contoh: Kasus nyata katalog digital produk Salak Sibetan, SOP Hotel Berbintang di Bali, standar kerja 5S DUDIKA"
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#0d3b66]"
            />
          </div>

          {/* 5. Catatan / Instruksi Khusus Tambahan */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
              Catatan / Permintaan Khusus ke AI
            </label>
            <textarea
              rows={2}
              value={additionalPrompt}
              onChange={(e) => setAdditionalPrompt(e.target.value)}
              placeholder="Contoh: Sertakan simulasi gamifikasi peran pelanggan & staf, kuis diagnostik non-kognitif, dan rubrik penilaian 4 level yang detail."
              className="w-full text-sm px-3.5 py-2 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#0d3b66]"
            />
          </div>

          {/* Deep Learning Guarantee Badge */}
          <div className="bg-linear-to-r from-blue-50 via-teal-50 to-emerald-50 p-3 rounded-xl border border-teal-200 text-xs text-gray-700 space-y-1">
            <p className="font-bold text-[#0d3b66] flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-teal-600" />
              Jaminan Standar Pembelajaran Mendalam (Deep Learning):
            </p>
            <p className="text-[11px] text-gray-600">
              Dokumen akan otomatis dilengkapi Kop Resmi SMKN 1 Bebandem, tabel terstruktur warna profesional (#0d3b66 / #0f766e), aktivitas Mindful, Meaningful, & Joyful, serta blok tanda tangan resmi Kepala Sekolah dan Guru.
            </p>
          </div>

          {/* Modal Footer */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
            <button
              type="button"
              disabled={isGenerating}
              onClick={onClose}
              className="text-xs font-semibold px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isGenerating || !topic.trim()}
              className="inline-flex items-center gap-2 text-xs font-bold px-6 py-2.5 rounded-lg bg-[#0d3b66] hover:bg-[#092947] text-white shadow-md transition disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Menyusun Dokumen Deep Learning...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-teal-300" />
                  <span>Generate Dokumen Resmi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
