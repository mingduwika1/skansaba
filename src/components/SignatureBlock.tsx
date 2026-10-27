import React from 'react';
import { OFFICIAL_KOP_DETAILS } from '../utils/docxExport';
import { TeacherProfile } from '../types';

interface SignatureBlockProps {
  teacherProfile?: TeacherProfile;
  customDate?: string;
}

export const SignatureBlock: React.FC<SignatureBlockProps> = ({
  teacherProfile,
  customDate,
}) => {
  const teacherName = teacherProfile?.name || '[Nama Guru]';
  const teacherNip = teacherProfile?.nip || '[NIP Guru]';
  const dateStr = customDate || teacherProfile?.dateStr || 'Juli 2026';

  return (
    <div className="mt-12 pt-6 border-t border-gray-200 break-inside-avoid print:break-inside-avoid">
      <div className="grid grid-cols-2 gap-8 text-sm text-gray-900">
        {/* Kolom Kiri: Kepala Sekolah */}
        <div className="text-left">
          <p className="font-medium text-gray-800">Mengetahui,</p>
          <p className="font-semibold text-gray-900">Kepala SMK Negeri 1 Bebandem,</p>

          {/* Ruang Tanda Tangan Resmi */}
          <div className="h-20 sm:h-24 flex items-center justify-start pl-2">
            <span className="text-xs text-gray-300 select-none print:hidden">
              (Tanda Tangan & Cap Sekolah)
            </span>
          </div>

          <p className="font-bold underline text-gray-950 tracking-wide text-sm sm:text-base">
            {OFFICIAL_KOP_DETAILS.kepalaSekolah}
          </p>
          <p className="text-xs text-gray-700 font-mono mt-0.5">
            NIP. {OFFICIAL_KOP_DETAILS.nipKepalaSekolah}
          </p>
        </div>

        {/* Kolom Kanan: Guru Mata Pelajaran */}
        <div className="text-left pl-4 sm:pl-8">
          <p className="font-medium text-gray-800">Bebandem, {dateStr}</p>
          <p className="font-semibold text-gray-900">Guru Mata Pelajaran,</p>

          {/* Ruang Tanda Tangan Guru */}
          <div className="h-20 sm:h-24 flex items-center justify-start pl-2">
            <span className="text-xs text-gray-300 select-none print:hidden">
              (Tanda Tangan Guru)
            </span>
          </div>

          <p className="font-bold underline text-gray-950 tracking-wide text-sm sm:text-base">
            {teacherName}
          </p>
          <p className="text-xs text-gray-700 font-mono mt-0.5">
            NIP. {teacherNip}
          </p>
        </div>
      </div>
    </div>
  );
};
