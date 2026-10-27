import React, { useState } from 'react';
import { TeacherProfile } from '../types';
import { UserCheck, ShieldAlert, X, Save, Sparkles } from 'lucide-react';

interface TeacherProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: TeacherProfile;
  onSave: (updated: TeacherProfile) => void;
}

export const VOCATIONAL_MAJORS = [
  'Pengembangan Perangkat Lunak dan Gim (PPLG) / Rekayasa Perangkat Lunak',
  'Desain Komunikasi Visual (DKV) & Animasi',
  'Perhotelan / Akomodasi Perhotelan',
  'Kuliner / Tata Boga',
  'Akuntansi dan Keuangan Lembaga (AKL)',
  'Manajemen Perkantoran dan Layanan Bisnis (MPLB)',
  'Teknik Kendaraan Ringan Otomotif (TKRO)',
  'Muatan Umum (Bahasa Indonesia, Matematika, Bahasa Inggris, IPAS, PJOK, dll.)',
];

export const GRADE_PHASES = [
  'Fase E - Kelas X (Sepuluh)',
  'Fase F - Kelas XI (Sebelas)',
  'Fase F - Kelas XII (Dua Belas)',
];

export const TeacherProfileModal: React.FC<TeacherProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
}) => {
  const [formData, setFormData] = useState<TeacherProfile>({
    ...profile,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isComplete =
      Boolean(formData.name?.trim()) &&
      Boolean(formData.nip?.trim()) &&
      Boolean(formData.subject?.trim()) &&
      Boolean(formData.gradePhase?.trim());

    onSave({
      ...formData,
      isVerified: isComplete,
    });
    onClose();
  };

  const handleFillSample = () => {
    setFormData({
      name: 'I Made Suartana, S.Kom.',
      nip: '19840215 201001 1 012',
      subject: 'Konsentrasi Keahlian PPLG (Pemrograman Web)',
      gradePhase: 'Fase F - Kelas XI (Sebelas)',
      major: 'Pengembangan Perangkat Lunak dan Gim (PPLG) / Rekayasa Perangkat Lunak',
      semester: 'Ganjil',
      academicYear: '2026/2027',
      dateStr: '15 Juli 2026',
      isVerified: true,
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-[#0d3b66] text-white p-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-teal-300">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">
                Protokol Verifikasi Identitas Guru
              </h3>
              <p className="text-xs text-sky-200 mt-0.5">
                SMK Negeri 1 Bebandem • Tahun Ajaran 2026/2027
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

        {/* Info Box */}
        <div className="p-4 bg-amber-50/80 border-b border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Protokol Wajib:</strong> Data identitas guru diperlukan untuk dicantumkan secara resmi pada Kop Dokumen, Format Administrasi Pembelajaran Mendalam (Deep Learning), dan Lembar Pengesahan Tanda Tangan.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
              1. Nama Lengkap & Gelar Guru <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Contoh: I Made Suartana, S.Kom."
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#0d3b66] focus:border-transparent transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                2. NIP Guru <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.nip}
                onChange={(e) => setFormData({ ...formData, nip: e.target.value })}
                placeholder="19840215 201001 1 012 / -"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#0d3b66] focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                Semester / Tahun Ajaran
              </label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={formData.semester}
                  onChange={(e) =>
                    setFormData({ ...formData, semester: e.target.value as any })
                  }
                  className="text-sm px-2.5 py-2.5 rounded-lg border border-gray-300 bg-white"
                >
                  <option value="Ganjil">Ganjil</option>
                  <option value="Genap">Genap</option>
                </select>
                <input
                  type="text"
                  disabled
                  value="2026/2027"
                  className="text-sm px-2 py-2.5 rounded-lg border border-gray-200 bg-gray-100 text-gray-600 text-center font-semibold"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
              3. Mata Pelajaran yang Diampu <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Contoh: Konsentrasi Keahlian PPLG / Informatika / DKV / Front Office"
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#0d3b66] focus:border-transparent transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                4. Kelas / Fase <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.gradePhase}
                onChange={(e) => setFormData({ ...formData, gradePhase: e.target.value })}
                className="w-full text-sm px-3 py-2.5 rounded-lg border border-gray-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0d3b66]"
              >
                {GRADE_PHASES.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                Tanggal Penetapan
              </label>
              <input
                type="text"
                value={formData.dateStr}
                onChange={(e) => setFormData({ ...formData, dateStr: e.target.value })}
                placeholder="Contoh: 15 Juli 2026"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#0d3b66]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
              Konsentrasi Keahlian / Bidang Kejuruan
            </label>
            <select
              value={formData.major}
              onChange={(e) => setFormData({ ...formData, major: e.target.value })}
              className="w-full text-sm px-3 py-2.5 rounded-lg border border-gray-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0d3b66]"
            >
              {VOCATIONAL_MAJORS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleFillSample}
              className="inline-flex items-center gap-1.5 text-xs text-[#0d3b66] hover:text-blue-800 font-semibold px-2 py-1.5 rounded-md hover:bg-blue-50 transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Isi Contoh Profil Guru (Demo)
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-initial text-xs font-medium text-gray-700 px-4 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-[#0d3b66] hover:bg-[#092947] px-5 py-2.5 rounded-lg shadow-sm transition"
              >
                <Save className="w-4 h-4" />
                Simpan & Verifikasi
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
