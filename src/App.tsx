import React, { useState, useEffect } from 'react';
import { TeacherProfile, AdminDocument, DocType } from './types';
import { INITIAL_DOCUMENTS, DOC_TYPE_OPTIONS } from './data/defaultTemplates';
import { OFFICIAL_KOP_DETAILS } from './utils/docxExport';
import { TeacherProfileBar } from './components/TeacherProfileBar';
import { TeacherProfileModal } from './components/TeacherProfileModal';
import { DocumentViewer } from './components/DocumentViewer';
import { DocumentGeneratorModal } from './components/DocumentGeneratorModal';
import { ConsultationChat } from './components/ConsultationChat';
import { RegulationsGuideModal } from './components/RegulationsGuideModal';
import { VercelDeployModal } from './components/VercelDeployModal';
import {
  FileText,
  Plus,
  BookOpen,
  MessageSquare,
  Search,
  Filter,
  CheckCircle2,
  Trash2,
  Copy,
  FolderOpen,
  Award,
  Sparkles,
  School,
  UserCheck,
  Compass,
  Globe,
} from 'lucide-react';

const DEFAULT_PROFILE: TeacherProfile = {
  name: '',
  nip: '',
  subject: '',
  gradePhase: 'Fase F - Kelas XI',
  major: 'Pengembangan Perangkat Lunak dan Gim (PPLG) / Rekayasa Perangkat Lunak',
  semester: 'Ganjil',
  academicYear: '2026/2027',
  dateStr: '15 Juli 2026',
  isVerified: false,
};

export default function App() {
  // Load saved profile or default
  const [profile, setProfile] = useState<TeacherProfile>(() => {
    try {
      const saved = localStorage.getItem('skansaba_teacher_profile');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_PROFILE;
  });

  // Load saved documents or initial sample list
  const [documents, setDocuments] = useState<AdminDocument[]>(() => {
    try {
      const saved = localStorage.getItem('skansaba_documents');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_DOCUMENTS;
  });

  const [selectedDocId, setSelectedDocId] = useState<string>(() => {
    return documents[0]?.id || '';
  });

  const [activeTab, setActiveTab] = useState<'documents' | 'chat' | 'templates'>('documents');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  // Modals
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  const [generatorDocType, setGeneratorDocType] = useState<DocType>('modul_ajar');
  const [isRegulationsOpen, setIsRegulationsOpen] = useState(false);
  const [isVercelModalOpen, setIsVercelModalOpen] = useState(false);

  const handleOpenGenerator = (type: DocType = 'modul_ajar') => {
    setGeneratorDocType(type);
    setIsGeneratorOpen(true);
  };

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('skansaba_teacher_profile', JSON.stringify(profile));
    } catch (e) {
      console.error(e);
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem('skansaba_documents', JSON.stringify(documents));
    } catch (e) {
      console.error(e);
    }
  }, [documents]);

  // Selected document
  const selectedDoc = documents.find((d) => d.id === selectedDocId) || documents[0];

  const handleSaveProfile = (updated: TeacherProfile) => {
    setProfile(updated);
  };

  const handleDocumentCreated = (newDoc: AdminDocument) => {
    setDocuments((prev) => [newDoc, ...prev]);
    setSelectedDocId(newDoc.id);
    setActiveTab('documents');
  };

  const handleUpdateDocument = (updatedDoc: AdminDocument) => {
    setDocuments((prev) =>
      prev.map((d) => (d.id === updatedDoc.id ? updatedDoc : d))
    );
  };

  const handleDeleteDocument = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Apakah Anda yakin ingin menghapus dokumen ini dari riwayat?')) {
      const nextDocs = documents.filter((d) => d.id !== id);
      setDocuments(nextDocs);
      if (selectedDocId === id && nextDocs.length > 0) {
        setSelectedDocId(nextDocs[0].id);
      }
    }
  };

  const handleDuplicateDocument = (docToDup: AdminDocument, e: React.MouseEvent) => {
    e.stopPropagation();
    const dup: AdminDocument = {
      ...docToDup,
      id: `skansaba-doc-${Date.now()}`,
      title: `${docToDup.title} (Salinan)`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      teacherProfile: { ...profile },
    };
    setDocuments((prev) => [dup, ...prev]);
    setSelectedDocId(dup.id);
  };

  // Stamp current teacher profile into active document
  const handleApplyMyProfileToDoc = () => {
    if (!selectedDoc) return;
    const updated: AdminDocument = {
      ...selectedDoc,
      teacherProfile: { ...profile },
      updatedAt: new Date().toISOString(),
    };
    handleUpdateDocument(updated);
  };

  // Filter documents
  const filteredDocs = documents.filter((d) => {
    const matchType = filterType === 'all' || d.docType === filterType;
    const matchSearch =
      searchQuery.trim() === '' ||
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.teacherProfile?.subject?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-gray-900">
      {/* Top Header Navigation (Print Hidden) */}
      <header className="bg-[#0d3b66] text-white border-b border-blue-950/40 sticky top-0 z-40 print:hidden shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* School Branding */}
            <div className="flex items-center gap-3">
              <img
                src={OFFICIAL_KOP_DETAILS.logoUrl}
                alt="Logo SMKN 1 Bebandem"
                referrerPolicy="no-referrer"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter drop-shadow-sm"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base sm:text-lg font-black tracking-wide leading-none text-white">
                    admin-guru-skansaba
                  </h1>
                  <span className="text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-400/30 px-2 py-0.5 rounded-full hidden sm:inline-block">
                    T.A. 2026/2027
                  </span>
                </div>
                <p className="text-xs text-sky-200 mt-1 line-clamp-1">
                  Asisten Administrasi Guru SMK Negeri 1 Bebandem • Deep Learning
                </p>
              </div>
            </div>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Panduan Regulasi */}
              <button
                onClick={() => setIsRegulationsOpen(true)}
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
                title="Buka Acuan Permendikdasmen No 13/2025 & Kepmendikdasmen No 126/P/2025"
              >
                <BookOpen className="w-4 h-4 text-teal-300" />
                <span>Acuan Regulasi</span>
              </button>

              {/* Panduan Deploy Vercel */}
              <button
                onClick={() => setIsVercelModalOpen(true)}
                className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-black/40 hover:bg-black/60 text-white border border-white/20 transition"
                title="Panduan Online / Deploy ke vercel.app"
              >
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Deploy Vercel</span>
              </button>

              {/* Status Identitas Button */}
              <button
                onClick={() => setIsProfileModalOpen(true)}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition ${
                  profile.isVerified
                    ? 'bg-emerald-600/80 hover:bg-emerald-600 text-white'
                    : 'bg-amber-500 hover:bg-amber-600 text-white animate-pulse'
                }`}
                title="Periksa / Ubah Identitas Guru"
              >
                <UserCheck className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {profile.isVerified ? 'Identitas Terverifikasi' : 'Verifikasi Guru'}
                </span>
              </button>

              {/* Buat Dokumen Baru */}
              <button
                onClick={() => handleOpenGenerator('modul_ajar')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-sm transition"
              >
                <Sparkles className="w-4 h-4" />
                <span>+ Buat Dokumen</span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="flex items-center gap-1 sm:gap-4 border-t border-white/10 pt-2 pb-0 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('documents')}
              className={`flex items-center gap-2 text-xs sm:text-sm font-semibold px-3.5 py-2 border-b-2 transition whitespace-nowrap ${
                activeTab === 'documents'
                  ? 'border-teal-400 text-teal-300'
                  : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Dokumen Saya ({documents.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center gap-2 text-xs sm:text-sm font-semibold px-3.5 py-2 border-b-2 transition whitespace-nowrap ${
                activeTab === 'chat'
                  ? 'border-teal-400 text-teal-300'
                  : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Konsultasi Asisten Ahli (AI)</span>
            </button>

            <button
              onClick={() => setActiveTab('templates')}
              className={`flex items-center gap-2 text-xs sm:text-sm font-semibold px-3.5 py-2 border-b-2 transition whitespace-nowrap ${
                activeTab === 'templates'
                  ? 'border-teal-400 text-teal-300'
                  : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Paket Standar SMK & Regulasi</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 print:p-0 print:m-0 print:max-w-none">
        {/* Persistent Teacher Profile & Verification Protocol Bar (Print Hidden) */}
        <div className="print:hidden">
          <TeacherProfileBar
            profile={profile}
            onOpenEdit={() => setIsProfileModalOpen(true)}
          />
        </div>

        {/* TAB 1: DOKUMEN SAYA & VIEWER */}
        {activeTab === 'documents' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Sidebar: Document List & Filters (Print Hidden) */}
            <div className="lg:col-span-4 space-y-4 print:hidden">
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
                    <FolderOpen className="w-4 h-4 text-[#0d3b66]" />
                    Daftar Administrasi Guru
                  </h3>
                  <button
                    onClick={() => setIsGeneratorOpen(true)}
                    className="text-[11px] font-bold text-[#0d3b66] hover:text-blue-800 flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Tambah
                  </button>
                </div>

                {/* Search */}
                <div className="relative mb-2.5">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari judul, topik, atau mapel..."
                    className="w-full text-xs pl-9 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#0d3b66]"
                  />
                </div>

                {/* Filter Doc Type */}
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full text-xs p-1.5 rounded-lg border border-gray-200 bg-slate-50 text-gray-700"
                  >
                    <option value="all">Semua Jenis Dokumen</option>
                    {DOC_TYPE_OPTIONS.map((opt) => (
                      <option key={opt.type} value={opt.type}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Document Cards List */}
                <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
                  {filteredDocs.length === 0 ? (
                    <div className="text-center py-8 text-xs text-gray-500">
                      Tidak ada dokumen yang sesuai pencarian.
                    </div>
                  ) : (
                    filteredDocs.map((item) => {
                      const isSelected = item.id === selectedDocId;
                      return (
                        <div
                          key={item.id}
                          onClick={() => setSelectedDocId(item.id)}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition relative group ${
                            isSelected
                              ? 'bg-blue-50/80 border-[#0d3b66] ring-1 ring-[#0d3b66]'
                              : 'bg-white hover:bg-slate-50 border-gray-200'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="text-[10px] font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded">
                              {item.docType.toUpperCase().replace('_', ' ')}
                            </span>
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                              <button
                                onClick={(e) => handleDuplicateDocument(item, e)}
                                className="p-1 text-gray-400 hover:text-blue-600 rounded"
                                title="Duplikasi Dokumen"
                              >
                                <Copy className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={(e) => handleDeleteDocument(item.id, e)}
                                className="p-1 text-gray-400 hover:text-red-600 rounded"
                                title="Hapus Dokumen"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          <h4 className="text-xs font-bold text-gray-900 leading-snug line-clamp-2">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-gray-500 mt-1 line-clamp-1">
                            {item.topic}
                          </p>

                          <div className="flex items-center justify-between text-[10px] text-gray-400 mt-2 pt-1 border-t border-gray-100">
                            <span>{item.teacherProfile?.name || 'Guru'}</span>
                            <span>{item.teacherProfile?.semester || 'Ganjil'}</span>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Quick Card: Stamp My Identity into Active Document */}
              {selectedDoc && (
                <div className="bg-white border border-slate-200 rounded-xl p-3.5 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-800">Tanda Tangan Dokumen:</span>
                    <span className="text-[11px] text-gray-500 font-mono">
                      {selectedDoc.teacherProfile?.name || '-'}
                    </span>
                  </div>
                  {profile.name && selectedDoc.teacherProfile?.name !== profile.name && (
                    <button
                      onClick={handleApplyMyProfileToDoc}
                      className="w-full text-xs font-bold text-[#0d3b66] bg-blue-50 hover:bg-blue-100 p-2 rounded-lg border border-blue-200 transition text-center"
                    >
                      Terapkan Nama & NIP Saya ke Dokumen Ini
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Right Pane: Document Viewer (With Official Kop, Colorful Tables, Signatures) */}
            <div className="lg:col-span-8 print:w-full print:col-span-12">
              {selectedDoc ? (
                <DocumentViewer
                  document={selectedDoc}
                  currentProfile={profile}
                  onUpdateDocument={handleUpdateDocument}
                  onOpenGenerator={() => setIsGeneratorOpen(true)}
                />
              ) : (
                <div className="bg-white rounded-xl p-12 text-center text-gray-500 border border-slate-200">
                  <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm font-semibold">Belum ada dokumen yang dipilih.</p>
                  <button
                    onClick={() => setIsGeneratorOpen(true)}
                    className="mt-4 text-xs font-bold px-4 py-2 bg-[#0d3b66] text-white rounded-lg"
                  >
                    Buat Dokumen Sekarang
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: KONSULTASI ASISTEN AHLI (AI CHAT) */}
        {activeTab === 'chat' && (
          <div className="max-w-4xl mx-auto">
            <ConsultationChat
              teacherProfile={profile}
              onOpenProfileEdit={() => setIsProfileModalOpen(true)}
              onQuickGenerate={(promptIdea) => {
                setIsGeneratorOpen(true);
              }}
            />
          </div>
        )}

        {/* TAB 3: PAKET TEMPLATE STANDAR SMK & REGULASI */}
        {activeTab === 'templates' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h2 className="text-lg font-bold text-[#0d3b66] flex items-center gap-2">
                <School className="w-6 h-6 text-teal-600" />
                8 Fitur Administrasi Pembelajaran Mendalam (Deep Learning)
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                Tahun Ajaran 2026/2027 • Mengacu pada Permendikdasmen No. 13 Tahun 2025 dan Kepmendikdasmen No. 126/P/2025 (Mindful, Meaningful, & Joyful Learning).
              </p>

              {/* Grid of Doc Types */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {DOC_TYPE_OPTIONS.map((item) => (
                  <div
                    key={item.type}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#0d3b66] transition shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-white bg-[#0d3b66] px-2 py-0.5 rounded">
                          {item.badge}
                        </span>
                        <FileText className="w-4 h-4 text-[#0d3b66]" />
                      </div>
                      <h3 className="font-bold text-sm text-gray-900 mb-1">
                        {item.label}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <button
                      onClick={() => handleOpenGenerator(item.type)}
                      className="mt-4 w-full text-xs font-bold text-[#0d3b66] bg-white hover:bg-blue-50 border border-blue-200 py-2 rounded-lg transition text-center flex items-center justify-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                      <span>Buat Dokumen Ini</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Balinese Context & Vocational Excellence Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-950">
                <h4 className="font-bold text-sm mb-1 text-emerald-900 flex items-center gap-1.5">
                  <Compass className="w-4 h-4" />
                  Kearifan Lokal Tri Hita Karana
                </h4>
                <p className="text-emerald-800 leading-relaxed">
                  Setiap dokumen mengaitkan kompetensi kejuruan dengan pelestarian lingkungan, keharmonisan sosial, dan nilai etis budaya Bali dalam pembelajaran praktik.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-950">
                <h4 className="font-bold text-sm mb-1 text-blue-900 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  Kemitraan DUDIKA Industri
                </h4>
                <p className="text-blue-800 leading-relaxed">
                  Penyelarasan dengan software house, perhotelan berbintang di Karangasem/Bali, industri kuliner, agrowisata Sibetan, dan standar 5R/5S.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-xs text-purple-950">
                <h4 className="font-bold text-sm mb-1 text-purple-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Refleksi Metakognitif 3-2-1
                </h4>
                <p className="text-purple-800 leading-relaxed">
                  Menutup pembelajaran dengan rasa gembira (Joyful) dan kesadaran diri (Mindful) tentang apa yang telah dipelajari, tantangan, dan solusinya.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer (Print Hidden) */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-gray-500 print:hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            © 2026/2027 <strong>SMK Negeri 1 Bebandem</strong> • Karangasem, Bali.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsVercelModalOpen(true)}
              className="text-xs text-blue-700 hover:underline flex items-center gap-1 font-semibold"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Panduan Online Vercel (.vercel.app)</span>
            </button>
            <span className="text-gray-300">•</span>
            <p className="text-gray-400">
              Permendikdasmen No. 13/2025 & Kepmendikdasmen No. 126/P/2025
            </p>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <TeacherProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
      />

      <DocumentGeneratorModal
        isOpen={isGeneratorOpen}
        onClose={() => setIsGeneratorOpen(false)}
        teacherProfile={profile}
        onOpenProfileEdit={() => setIsProfileModalOpen(true)}
        onDocumentCreated={handleDocumentCreated}
        initialType={generatorDocType}
      />

      <RegulationsGuideModal
        isOpen={isRegulationsOpen}
        onClose={() => setIsRegulationsOpen(false)}
      />

      <VercelDeployModal
        isOpen={isVercelModalOpen}
        onClose={() => setIsVercelModalOpen(false)}
      />
    </div>
  );
}
