import React from 'react';
import { TeacherProfile } from '../types';
import { UserCheck, AlertTriangle, Edit3, School } from 'lucide-react';

interface TeacherProfileBarProps {
  profile: TeacherProfile;
  onOpenEdit: () => void;
}

export const TeacherProfileBar: React.FC<TeacherProfileBarProps> = ({
  profile,
  onOpenEdit,
}) => {
  const isComplete =
    Boolean(profile.name?.trim()) &&
    Boolean(profile.nip?.trim()) &&
    Boolean(profile.subject?.trim()) &&
    Boolean(profile.gradePhase?.trim());

  return (
    <div className="w-full bg-white border border-slate-200 rounded-xl shadow-xs p-3.5 sm:p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Left: Identity Summary */}
        <div className="flex items-start sm:items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center font-bold ${
              isComplete
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-amber-100 text-amber-800 animate-pulse'
            }`}
          >
            {isComplete ? (
              <UserCheck className="w-5 h-5" />
            ) : (
              <AlertTriangle className="w-5 h-5" />
            )}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                {profile.name || '(Nama Guru Belum Diisi)'}
              </h3>
              {isComplete ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  Terverifikasi T.A. 2026/2027
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  Perlu Verifikasi Identitas
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600 mt-1">
              <span>
                <strong>NIP:</strong> {profile.nip || '-'}
              </span>
              <span>•</span>
              <span>
                <strong>Mapel:</strong> {profile.subject || '-'}
              </span>
              <span>•</span>
              <span>
                <strong>Kelas/Fase:</strong> {profile.gradePhase || '-'}
              </span>
            </div>
          </div>
        </div>

        {/* Right: School Badge & Edit Button */}
        <div className="flex items-center justify-between md:justify-end gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-lg">
            <School className="w-3.5 h-3.5 text-slate-600" />
            <span>SMKN 1 Bebandem</span>
          </div>

          <button
            onClick={onOpenEdit}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition shadow-xs ${
              isComplete
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                : 'bg-amber-600 hover:bg-amber-700 text-white'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isComplete ? 'Ubah Identitas' : 'Lengkapi Identitas (Wajib)'}</span>
          </button>
        </div>
      </div>

      {/* Protocol Alert Warning if incomplete */}
      {!isComplete && (
        <div className="mt-3 pt-3 border-t border-amber-200 text-xs text-amber-900 bg-amber-50/70 p-2.5 rounded-lg flex items-center justify-between gap-2">
          <p>
            <strong>Protokol Awal:</strong> Mohon lengkapi Nama, NIP, Mapel, dan Kelas/Fase agar dokumen administrasi otomatis tertera resmi dengan tanda tangan Anda.
          </p>
          <button
            onClick={onOpenEdit}
            className="underline font-bold hover:text-amber-950 shrink-0"
          >
            Isi Sekarang
          </button>
        </div>
      )}
    </div>
  );
};
