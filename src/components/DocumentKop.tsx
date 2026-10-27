import React from 'react';
import { OFFICIAL_KOP_DETAILS } from '../utils/docxExport';

interface DocumentKopProps {
  className?: string;
  showBorder?: boolean;
}

export const DocumentKop: React.FC<DocumentKopProps> = ({
  className = '',
  showBorder = true,
}) => {
  return (
    <div className={`w-full text-gray-900 pb-3 ${className}`}>
      <div className="flex items-center gap-4 sm:gap-6 justify-center">
        {/* Logo Sekolah Resmi */}
        <div className="shrink-0 flex items-center justify-center">
          <img
            src={OFFICIAL_KOP_DETAILS.logoUrl}
            alt="Logo SMK Negeri 1 Bebandem"
            referrerPolicy="no-referrer"
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain filter drop-shadow-sm"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
            }}
          />
        </div>

        {/* Teks Identitas Instansi Resmi */}
        <div className="text-center flex-1 leading-snug">
          <h4 className="text-xs sm:text-sm font-semibold tracking-wider text-gray-800 uppercase">
            {OFFICIAL_KOP_DETAILS.provinsi}
          </h4>
          <h4 className="text-xs sm:text-sm font-semibold tracking-wider text-gray-800 uppercase">
            {OFFICIAL_KOP_DETAILS.dinas}
          </h4>
          <h2 className="text-base sm:text-xl md:text-2xl font-black text-[#0d3b66] tracking-wide uppercase mt-0.5">
            {OFFICIAL_KOP_DETAILS.sekolah}
          </h2>
          <p className="text-xs sm:text-sm font-bold text-[#0d3b66] tracking-widest mt-0.5">
            {OFFICIAL_KOP_DETAILS.tahunAjaran}
          </p>
          <p className="text-[11px] sm:text-xs text-gray-600 mt-0.5 italic">
            {OFFICIAL_KOP_DETAILS.alamat}
          </p>
        </div>
      </div>

      {/* Garis Ganda Standar Tata Naskah Dinas (Kop Surat Resmi) */}
      {showBorder && (
        <div className="mt-3">
          <div className="border-b-[3px] border-gray-900 w-full mb-[2px]"></div>
          <div className="border-b-[1px] border-gray-900 w-full"></div>
        </div>
      )}
    </div>
  );
};
