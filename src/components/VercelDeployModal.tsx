import React, { useState } from 'react';
import {
  Globe,
  X,
  ExternalLink,
  Copy,
  Check,
  CheckCircle2,
  Server,
  KeyRound,
  FileCode,
} from 'lucide-react';

interface VercelDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VercelDeployModal: React.FC<VercelDeployModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-black text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg leading-tight">
                  Konfigurasi Online Vercel (.vercel.app)
                </h3>
                <span className="text-[10px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">
                  Siap Deploy
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Konfigurasi `vercel.json` dan Serverless API telah siap di proyek ini
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
        <div className="p-6 overflow-y-auto space-y-5 text-gray-800 text-xs sm:text-sm leading-relaxed">
          {/* Status Box */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3 text-emerald-950">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-emerald-900">
                File Konfigurasi Vercel Otomatis Dibuat:
              </p>
              <ul className="list-disc list-inside mt-1 text-xs text-emerald-800 space-y-0.5">
                <li>
                  <code className="bg-white/70 px-1 py-0.5 rounded font-mono font-bold">
                    vercel.json
                  </code>{' '}
                  (Build command <code>npm run build</code>, output <code>dist</code>, rewrite SPA)
                </li>
                <li>
                  <code className="bg-white/70 px-1 py-0.5 rounded font-mono font-bold">
                    api/index.ts
                  </code>{' '}
                  (Serverless Function Express untuk pemrosesan AI dokumen)
                </li>
                <li>
                  <code className="bg-white/70 px-1 py-0.5 rounded font-mono font-bold">
                    PANDUAN_VERCEL.md
                  </code>{' '}
                  (Panduan langkah demi langkah lengkap)
                </li>
              </ul>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#0d3b66] text-white flex items-center justify-center text-xs">
                1
              </span>
              Push Kode ke GitHub
            </h4>
            <div className="bg-slate-900 text-slate-200 p-3.5 rounded-xl font-mono text-xs overflow-x-auto relative group">
              <p>git init</p>
              <p>git add .</p>
              <p>git commit -m "Deploy admin-guru-skansaba"</p>
              <p>git branch -M main</p>
              <p>git remote add origin https://github.com/USERNAME/admin-guru-skansaba.git</p>
              <p>git push -u origin main</p>
            </div>

            <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2 pt-2">
              <span className="w-6 h-6 rounded-full bg-[#0d3b66] text-white flex items-center justify-center text-xs">
                2
              </span>
              Import Project di Vercel Dashboard
            </h4>
            <p className="text-gray-600 text-xs">
              Buka{' '}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-bold underline inline-flex items-center gap-0.5"
              >
                vercel.com <ExternalLink className="w-3 h-3" />
              </a>
              , klik <strong>"Add New..." → "Project"</strong>, lalu pilih repository GitHub Anda.
            </p>

            <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2 pt-2">
              <span className="w-6 h-6 rounded-full bg-[#0d3b66] text-white flex items-center justify-center text-xs">
                3
              </span>
              Atur Environment Variable (Wajib untuk AI)
            </h4>
            <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3.5 space-y-2">
              <p className="text-xs text-amber-950 font-medium">
                Pada halaman deploy Vercel, buka menu <strong>Environment Variables</strong> dan masukkan:
              </p>

              <div className="flex items-center justify-between bg-white border border-amber-200 p-2.5 rounded-lg text-xs font-mono">
                <div>
                  <span className="text-gray-500">Key:</span>{' '}
                  <strong className="text-gray-900">GEMINI_API_KEY</strong>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('GEMINI_API_KEY', 'key')}
                  className="text-gray-600 hover:text-black flex items-center gap-1 font-sans text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
                >
                  {copiedKey === 'key' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>Salin Key</span>
                </button>
              </div>

              <p className="text-[11px] text-amber-800">
                Nilai <em>Value</em> dapat Anda ambil secara gratis dari{' '}
                <a
                  href="https://aistudio.google.com/app/apikey"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold underline text-blue-700"
                >
                  Google AI Studio API Key
                </a>
                .
              </p>
            </div>

            <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2 pt-2">
              <span className="w-6 h-6 rounded-full bg-[#0d3b66] text-white flex items-center justify-center text-xs">
                4
              </span>
              Selesai & Online
            </h4>
            <p className="text-gray-600 text-xs">
              Klik tombol <strong>Deploy</strong>. Dalam 1-2 menit aplikasi Anda akan langsung aktif dengan alamat resmi seperti{' '}
              <strong className="text-emerald-700 font-mono">https://admin-guru-skansaba.vercel.app</strong> yang bisa diakses oleh seluruh guru SMK Negeri 1 Bebandem!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-gray-500">
            Panduan lengkap tersimpan di file <code>PANDUAN_VERCEL.md</code>
          </span>
          <button
            onClick={onClose}
            className="text-xs font-bold text-white bg-black hover:bg-slate-800 px-5 py-2.5 rounded-lg transition"
          >
            Mengerti & Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
