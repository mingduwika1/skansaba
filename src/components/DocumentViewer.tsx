import React, { useState } from 'react';
import { AdminDocument, TeacherProfile } from '../types';
import { DocumentKop } from './DocumentKop';
import { SignatureBlock } from './SignatureBlock';
import { exportToWordDocument, printDocument } from '../utils/docxExport';
import {
  Printer,
  FileDown,
  Copy,
  Check,
  Edit3,
  Eye,
  Sparkles,
  BookMarked,
  Layers,
  Save,
  RotateCcw,
} from 'lucide-react';

interface DocumentViewerProps {
  document: AdminDocument;
  currentProfile: TeacherProfile;
  onUpdateDocument?: (updated: AdminDocument) => void;
  onOpenGenerator?: () => void;
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({
  document: initialDoc,
  currentProfile,
  onUpdateDocument,
  onOpenGenerator,
}) => {
  const [doc, setDoc] = useState<AdminDocument>(initialDoc);
  const [isEditing, setIsEditing] = useState(false);
  const [editableHtml, setEditableHtml] = useState(initialDoc.htmlBody);
  const [copiedType, setCopiedType] = useState<'md' | 'html' | null>(null);
  const [isAiRefining, setIsAiRefining] = useState(false);
  const [aiInstruction, setAiInstruction] = useState('');
  const [showAiModal, setShowAiModal] = useState(false);

  // Keep state in sync if prop changes
  React.useEffect(() => {
    setDoc(initialDoc);
    setEditableHtml(initialDoc.htmlBody);
  }, [initialDoc]);

  const handleCopy = (text: string, type: 'md' | 'html') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSaveEdit = () => {
    const updated = {
      ...doc,
      htmlBody: editableHtml,
      updatedAt: new Date().toISOString(),
    };
    setDoc(updated);
    setIsEditing(false);
    if (onUpdateDocument) {
      onUpdateDocument(updated);
    }
  };

  const handleAiRefine = async () => {
    if (!aiInstruction.trim()) return;
    setIsAiRefining(true);
    try {
      const response = await fetch('/api/enhance-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentContent: editableHtml,
          instruction: aiInstruction,
        }),
      });
      const data = await response.json();
      if (data.success && data.result?.updatedHtml) {
        setEditableHtml(data.result.updatedHtml);
        const updated = {
          ...doc,
          htmlBody: data.result.updatedHtml,
          markdownBody: data.result.updatedMarkdown || doc.markdownBody,
          updatedAt: new Date().toISOString(),
        };
        setDoc(updated);
        if (onUpdateDocument) onUpdateDocument(updated);
        setShowAiModal(false);
        setAiInstruction('');
      } else {
        alert('Gagal menyempurnakan dokumen: ' + (data.error || 'Unknown error'));
      }
    } catch (err: any) {
      alert('Terjadi kesalahan menghubungi server: ' + err.message);
    } finally {
      setIsAiRefining(false);
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Top Action Toolbar (Floating / Sticky at top of document) */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs flex flex-wrap items-center justify-between gap-3 print:hidden">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-700 bg-slate-100 px-2.5 py-1 rounded-md">
            {doc.docType.toUpperCase().replace('_', ' ')}
          </span>
          <span className="text-xs text-gray-500 hidden sm:inline">
            Terakhir diubah: {new Date(doc.updatedAt).toLocaleTimeString('id-ID')}
          </span>
        </div>

        {/* Buttons Group */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {/* Edit / View Toggle */}
          <button
            onClick={() => {
              if (isEditing) handleSaveEdit();
              else setIsEditing(true);
            }}
            className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border transition ${
              isEditing
                ? 'bg-emerald-600 text-white border-emerald-700 hover:bg-emerald-700'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            {isEditing ? (
              <>
                <Save className="w-3.5 h-3.5" /> Simpan Perubahan
              </>
            ) : (
              <>
                <Edit3 className="w-3.5 h-3.5 text-blue-600" /> Edit Dokumen
              </>
            )}
          </button>

          {/* AI Refine Button */}
          <button
            onClick={() => setShowAiModal(true)}
            className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span className="hidden sm:inline">Penyempurnaan AI</span>
          </button>

          {/* Export to Word */}
          <button
            onClick={() => exportToWordDocument(doc)}
            className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition shadow-xs"
            title="Unduh file dokumen Microsoft Word (.doc) lengkap dengan format tabel dan logo resmi"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Ekspor Word (.docx)</span>
          </button>

          {/* Print / PDF */}
          <button
            onClick={printDocument}
            className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#0d3b66] text-white hover:bg-[#092947] transition shadow-xs"
            title="Cetak langsung ke printer atau Simpan sebagai PDF (A4 Siap Cetak)"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak / PDF</span>
          </button>

          {/* Copy Markdown / HTML dropdown or buttons */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
            <button
              onClick={() => handleCopy(doc.markdownBody, 'md')}
              className="text-xs px-2.5 py-1.5 text-gray-700 hover:bg-gray-100 transition flex items-center gap-1"
              title="Salin isi dokumen dalam format Markdown"
            >
              {copiedType === 'md' ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-gray-500" />
              )}
              <span className="text-[11px] font-medium">MD</span>
            </button>
            <div className="w-[1px] h-4 bg-gray-300"></div>
            <button
              onClick={() => handleCopy(doc.htmlBody, 'html')}
              className="text-xs px-2.5 py-1.5 text-gray-700 hover:bg-gray-100 transition flex items-center gap-1"
              title="Salin kode HTML dokumen"
            >
              {copiedType === 'html' ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-gray-500" />
              )}
              <span className="text-[11px] font-medium">HTML</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Printable Paper Container (Styled as White A4 Paper Sheet) */}
      <div
        id="printable-document"
        className="bg-white rounded-xl shadow-md border border-slate-300 p-6 sm:p-10 md:p-14 text-gray-900 max-w-4xl mx-auto print:shadow-none print:border-none print:p-0 print:max-w-none print:m-0"
      >
        {/* KOP DOKUMEN RESMI (WAJIB MENAMPILKAN LOGO) */}
        <DocumentKop showBorder={true} />

        {/* REGULATION & DEEP LEARNING COMPLIANCE BADGE (Print Friendly) */}
        <div className="my-4 p-3 bg-emerald-50/80 border-l-4 border-emerald-600 text-xs text-gray-800 rounded-r flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <p className="font-bold text-emerald-950 flex items-center gap-1.5">
              <BookMarked className="w-4 h-4 text-emerald-700 shrink-0" />
              Kepatuhan Regulasi Resmi T.A. 2026/2027:
            </p>
            <p className="text-[11px] text-gray-700 mt-0.5">
              1. Permendikdasmen No. 13 Tahun 2025 (Standar Sarana, Prasarana, dan Kurikulum)
              <br />
              2. Kepmendikdasmen No. 126/P/2025 (Pedoman Implementasi Pembelajaran Mendalam: Mindful, Meaningful, & Joyful Learning)
            </p>
          </div>
          <div className="flex flex-wrap gap-1 shrink-0">
            <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">
              Mindful
            </span>
            <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded text-[10px]">
              Meaningful
            </span>
            <span className="bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded text-[10px]">
              Joyful
            </span>
            <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded text-[10px]">
              Asesmen Autentik
            </span>
          </div>
        </div>

        {/* EDITABLE OR PREVIEW BODY */}
        {isEditing ? (
          <div className="space-y-3 print:hidden">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-blue-800">
                Mode Edit Langsung: Anda dapat mengedit HTML atau teks di bawah ini.
              </span>
              <button
                type="button"
                onClick={() => setEditableHtml(initialDoc.htmlBody)}
                className="text-gray-500 hover:text-gray-700 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Kembalikan Asli
              </button>
            </div>
            <textarea
              value={editableHtml}
              onChange={(e) => setEditableHtml(e.target.value)}
              rows={20}
              className="w-full text-xs font-mono p-4 border border-blue-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-slate-50/50 leading-relaxed"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsEditing(false)}
                className="text-xs px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                onClick={handleSaveEdit}
                className="text-xs font-bold px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 flex items-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5" /> Simpan
              </button>
            </div>
          </div>
        ) : (
          <div
            className="document-body leading-relaxed text-gray-900 mt-6"
            dangerouslySetInnerHTML={{ __html: doc.htmlBody }}
          />
        )}

        {/* BAGIAN TANDA TANGAN (SUDUT BAWAH DOKUMEN - 2 KOLOM BERSEBELAHAN) */}
        <SignatureBlock teacherProfile={doc.teacherProfile || currentProfile} />
      </div>

      {/* AI Enhancement Modal */}
      {showAiModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-indigo-100">
            <div className="flex items-center gap-2.5 text-indigo-900 font-bold text-base mb-1">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <h3>Penyempurnaan Dokumen dengan AI</h3>
            </div>
            <p className="text-xs text-gray-600 mb-4">
              Minta AI menyesuaikan atau memperdalam bagian tertentu dari dokumen ini (misal: perdalam pertanyaan pemantik mindful, tambahkan studi kasus industri DUDIKA lokal Bali, atau buat rubrik 4 level lebih spesifik).
            </p>

            <textarea
              rows={4}
              value={aiInstruction}
              onChange={(e) => setAiInstruction(e.target.value)}
              placeholder="Contoh: 'Tolong perdalam aktivitas Joyful Learning dengan studi kasus UMKM di Bebandem Karangasem, dan buat rubrik kinerja lebih terukur.'"
              className="w-full text-sm p-3 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            />

            {/* Quick Suggestion Chips */}
            <div className="flex flex-wrap gap-1.5 mt-2 mb-4">
              <button
                type="button"
                onClick={() =>
                  setAiInstruction(
                    'Perdalam pertanyaan pemantik Mindful Learning dan buat aktivitas Joyful Learning lebih eksploratif.'
                  )
                }
                className="text-[11px] bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md hover:bg-indigo-100 transition"
              >
                + Perdalam Mindful & Joyful
              </button>
              <button
                type="button"
                onClick={() =>
                  setAiInstruction(
                    'Hubungkan materi dengan studi kasus industri DUDIKA dan potensi lokal Karangasem/Bali (Meaningful Learning).'
                  )
                }
                className="text-[11px] bg-blue-50 text-blue-700 px-2 py-1 rounded-md hover:bg-blue-100 transition"
              >
                + Konteks DUDIKA Bali
              </button>
              <button
                type="button"
                onClick={() =>
                  setAiInstruction(
                    'Lengkapi analisis potensi miskonsepsi siswa dan rancang program remedial konseptual.'
                  )
                }
                className="text-[11px] bg-amber-50 text-amber-800 px-2 py-1 rounded-md hover:bg-amber-100 transition"
              >
                + Analisis Miskonsepsi
              </button>
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                disabled={isAiRefining}
                onClick={() => setShowAiModal(false)}
                className="text-xs px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                type="button"
                disabled={isAiRefining || !aiInstruction.trim()}
                onClick={handleAiRefine}
                className="text-xs font-bold px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 flex items-center gap-1.5 disabled:opacity-50"
              >
                {isAiRefining ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Memproses AI...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" /> Terapkan Penyempurnaan
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
