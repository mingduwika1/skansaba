import React from 'react';
import { BookOpen, CheckCircle, Award, Compass, School, X } from 'lucide-react';
import { OFFICIAL_KOP_DETAILS } from '../utils/docxExport';

interface RegulationsGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegulationsGuideModal: React.FC<RegulationsGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0d3b66] text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-teal-300">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">
                Panduan Acuan Regulasi Resmi 2026/2027
              </h3>
              <p className="text-xs text-sky-200">
                SMK Negeri 1 Bebandem • Implementasi Pembelajaran Mendalam (Deep Learning)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-gray-800 text-sm leading-relaxed">
          {/* Card 1: Permendikdasmen No 13/2025 */}
          <div className="border border-blue-200 bg-blue-50/50 rounded-xl p-4.5 space-y-2">
            <div className="flex items-center gap-2 text-[#0d3b66] font-bold text-base">
              <Award className="w-5 h-5 text-blue-700" />
              <h4>1. Permendikdasmen Nomor 13 Tahun 2025</h4>
            </div>
            <p className="text-xs text-gray-600 font-medium">
              Tentang Standar Sarana, Prasarana, dan Kurikulum Pendidikan Menengah Kejuruan.
            </p>
            <ul className="list-disc list-inside text-xs space-y-1.5 text-gray-700 pt-1">
              <li>Penyesuaian kurikulum SMK dengan kebutuhan DUDIKA (Dunia Usaha, Dunia Industri, & Dunia Kerja) terkini.</li>
              <li>Penyelarasan sarana laboratorium, bengkel praktik, dan perangkat lunak industri dengan alokasi jam pembelajaran (JP) yang fleksibel.</li>
              <li>Integrasi budaya kerja industri (5R/5S, SOP keselamatan kerja, K3LH, dan etika profesional).</li>
            </ul>
          </div>

          {/* Card 2: Kepmendikdasmen No 126/P/2025 */}
          <div className="border border-emerald-200 bg-emerald-50/50 rounded-xl p-4.5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-950 font-bold text-base">
              <Compass className="w-5 h-5 text-emerald-700" />
              <h4>2. Kepmendikdasmen Nomor 126/P/2025 (Deep Learning Framework)</h4>
            </div>
            <p className="text-xs text-gray-600 font-medium">
              Pedoman Implementasi Pembelajaran Mendalam: Mindful, Meaningful, & Joyful Learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="bg-white p-3 rounded-lg border border-emerald-200 shadow-2xs">
                <span className="font-bold text-xs text-emerald-800 block mb-1">
                  🧘 Mindful Learning
                </span>
                <p className="text-[11px] text-gray-600">
                  Fokus pada kehadiran utuh (mindfulness), perumusan pertanyaan pemantik nalar kritis, dan pemahaman konsep dasar yang kokoh (anti-hafalan dangkal).
                </p>
              </div>

              <div className="bg-white p-3 rounded-lg border border-blue-200 shadow-2xs">
                <span className="font-bold text-xs text-blue-800 block mb-1">
                  🌐 Meaningful Learning
                </span>
                <p className="text-[11px] text-gray-600">
                  Keterkaitan materi dengan dunia nyata, studi kasus nyata industri DUDIKA di Bali, pemecahan masalah lokal, dan relevansi langsung dengan masa depan karir siswa.
                </p>
              </div>

              <div className="bg-white p-3 rounded-lg border border-purple-200 shadow-2xs">
                <span className="font-bold text-xs text-purple-800 block mb-1">
                  🎉 Joyful Learning
                </span>
                <p className="text-[11px] text-gray-600">
                  Pembelajaran yang menggugah kegembiraan belajar, eksplorasi kolaboratif tanpa rasa takut salah, gamifikasi edukatif, dan refleksi metakognisi 3-2-1.
                </p>
              </div>
            </div>

            <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs">
              <strong>Asesmen Autentik Berjenjang:</strong> Penilaian tidak hanya berbasis tes tertulis, melainkan rubrik kinerja nyata dengan 4 tingkatan standar:
              <span className="font-semibold text-gray-800 ml-1">
                (1) Baru Berkembang, (2) Layak, (3) Cakap, dan (4) Mahir.
              </span>
            </div>
          </div>

          {/* Card 3: Identitas Resmi SKANSABA */}
          <div className="border border-slate-200 bg-slate-50 rounded-xl p-4.5 space-y-2">
            <div className="flex items-center gap-2 text-gray-900 font-bold text-base">
              <School className="w-5 h-5 text-[#0d3b66]" />
              <h4>3. Identitas Lembaga & Pejabat Pengesah Resmi</h4>
            </div>
            <div className="text-xs space-y-1 text-gray-700">
              <p>
                <strong>Nama Sekolah:</strong> {OFFICIAL_KOP_DETAILS.sekolah}
              </p>
              <p>
                <strong>Alamat Resmi:</strong> {OFFICIAL_KOP_DETAILS.alamat}
              </p>
              <p>
                <strong>Kepala Sekolah:</strong> {OFFICIAL_KOP_DETAILS.kepalaSekolah}
              </p>
              <p>
                <strong>NIP Kepala Sekolah:</strong> {OFFICIAL_KOP_DETAILS.nipKepalaSekolah}
              </p>
              <p>
                <strong>Logo Resmi:</strong> Menggunakan URL aktif{' '}
                <code className="text-[11px] bg-slate-200 px-1 py-0.5 rounded">
                  {OFFICIAL_KOP_DETAILS.logoUrl}
                </code>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="text-xs font-bold text-white bg-[#0d3b66] hover:bg-[#092947] px-5 py-2.5 rounded-lg transition"
          >
            Tutup Panduan
          </button>
        </div>
      </div>
    </div>
  );
};
