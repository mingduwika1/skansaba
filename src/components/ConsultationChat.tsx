import React, { useState, useRef, useEffect } from 'react';
import { TeacherProfile, ChatMessage } from '../types';
import {
  Send,
  Sparkles,
  Bot,
  User,
  ShieldAlert,
  Edit,
  Lightbulb,
  FilePlus,
  RefreshCw,
} from 'lucide-react';

interface ConsultationChatProps {
  teacherProfile: TeacherProfile;
  onOpenProfileEdit: () => void;
  onQuickGenerate: (promptIdea: string) => void;
}

export const ConsultationChat: React.FC<ConsultationChatProps> = ({
  teacherProfile,
  onOpenProfileEdit,
  onQuickGenerate,
}) => {
  const isProfileComplete =
    Boolean(teacherProfile.name?.trim()) &&
    Boolean(teacherProfile.nip?.trim()) &&
    Boolean(teacherProfile.subject?.trim()) &&
    Boolean(teacherProfile.gradePhase?.trim());

  const initialGreeting = `Om Swastiastu, Salam hangat Bapak/Ibu Guru Hebat SMK Negeri 1 Bebandem (SKANSABA)! 🌺

Saya adalah Asisten Ahli Pembuat Administrasi Guru SMKN 1 Bebandem untuk Tahun Ajaran 2026/2027.
Saya siap membantu Bapak/Ibu menyusun dokumen pembelajaran mendalam yang patuh pada:
1. Permendikdasmen No. 13 Tahun 2025
2. Kepmendikdasmen No. 126/P/2025 (Deep Learning: Mindful, Meaningful, & Joyful Learning)

${
  isProfileComplete
    ? `Data identitas Bapak/Ibu telah terverifikasi:
• Nama: ${teacherProfile.name}
• NIP: ${teacherProfile.nip}
• Mapel: ${teacherProfile.subject} (${teacherProfile.gradePhase})

Ada yang bisa saya bantu hari ini? Misalnya menyusun Modul Ajar, merumuskan pertanyaan pemantik nalar kritis, merancang studi kasus DUDIKA industri, atau membuat rubrik asesmen autentik?`
    : `⚠️ PROTOKOL AWAL: Sebelum kita menyusun dokumen baru, mohon konfirmasi 4 data identitas berikut jika belum lengkap:
1. Nama Lengkap Guru: ${teacherProfile.name || '(Belum terisi)'}
2. NIP Guru: ${teacherProfile.nip || '(Belum terisi)'}
3. Mata Pelajaran yang Diampu: ${teacherProfile.subject || '(Belum terisi)'}
4. Kelas / Fase / Konsentrasi Keahlian: ${teacherProfile.gradePhase || '(Belum terisi)'}

Bapak/Ibu dapat mengklik tombol "Lengkapi Identitas" di atas atau langsung ketikkan data tersebut di obrolan ini.`
}`;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      role: 'assistant',
      content: initialGreeting,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    if (!textToSend) setInputText('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
          teacherInfo: teacherProfile,
        }),
      });

      const data = await res.json();
      if (data.success && data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: `assistant-${Date.now()}`,
            role: 'assistant',
            content: data.reply,
            timestamp: new Date().toLocaleTimeString('id-ID', {
              hour: '2-digit',
              minute: '2-digit',
            }),
          },
        ]);
      } else {
        throw new Error(data.error || 'Gagal menerima balasan.');
      }
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: 'assistant',
          content: `Mohon maaf, terjadi kendala: ${err.message}. Silakan periksa koneksi atau coba sesaat lagi.`,
          timestamp: new Date().toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
          }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const SUGGESTED_QUERIES = [
    'Susun Modul Ajar Deep Learning untuk materi esensial di kelas saya',
    'Buatkan instrumen Refleksi Awal untuk memetakan kesiapan & emosi belajar siswa (Mindful)',
    'Rancang lembar Refleksi Akhir model 3-2-1 dan indeks Joyful Learning',
    'Buat kisi-kisi Asesmen Sumatif & rubrik kinerja 4 tingkat standar industri',
    'Rancang Bahan Ajar konseptual mendalam berbasis studi kasus DUDIKA Bali',
    'Susun program Remedial berbasis analisis miskonsepsi siswa',
    'Buat tantangan proyek Pengayaan mandiri untuk siswa kategori Mahir',
    'Rancang Rencana Tindak Lanjut (RTL) pasca asesmen untuk perbaikan mutu KBM',
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden flex flex-col h-[700px]">
      {/* Chat Header */}
      <div className="bg-[#0d3b66] text-white p-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm sm:text-base leading-tight">
                Konsultasi Asisten Ahli Administrasi Guru SKANSABA
              </h3>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            </div>
            <p className="text-xs text-sky-200">
              SMK Negeri 1 Bebandem • Tahun Ajaran 2026/2027
            </p>
          </div>
        </div>

        {!isProfileComplete && (
          <button
            onClick={onOpenProfileEdit}
            className="text-xs font-semibold bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Lengkapi Identitas</span>
          </button>
        )}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-50/60">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                isUser ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold ${
                  isUser
                    ? 'bg-[#0d3b66] text-white'
                    : 'bg-teal-700 text-white'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 text-xs sm:text-sm shadow-xs ${
                  isUser
                    ? 'bg-[#0d3b66] text-white rounded-tr-none'
                    : 'bg-white text-gray-900 border border-slate-200 rounded-tl-none leading-relaxed'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.content}</div>

                <div
                  className={`mt-2 text-[10px] flex items-center justify-end ${
                    isUser ? 'text-blue-200' : 'text-gray-400'
                  }`}
                >
                  <span>{msg.timestamp}</span>
                </div>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-3.5 shadow-xs flex items-center gap-2 text-xs text-gray-600">
              <div className="w-3.5 h-3.5 border-2 border-[#0d3b66] border-t-transparent rounded-full animate-spin"></div>
              <span>Asisten Ahli sedang memikirkan solusi mendalam...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts Suggestions */}
      <div className="p-2.5 bg-slate-100 border-t border-slate-200 shrink-0">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 mb-1.5 px-1">
          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
          <span>Pertanyaan Populer Pembelajaran Mendalam (Deep Learning):</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {SUGGESTED_QUERIES.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="whitespace-nowrap text-xs bg-white hover:bg-blue-50 hover:text-blue-700 text-gray-700 border border-gray-200 px-3 py-1.5 rounded-lg transition shrink-0"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Tanyakan konsep pembelajaran mendalam, ide studi kasus DUDIKA, atau minta draft dokumen..."
          className="flex-1 text-sm px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#0d3b66]"
        />
        <button
          type="submit"
          disabled={isLoading || !inputText.trim()}
          className="bg-[#0d3b66] hover:bg-[#092947] text-white p-2.5 rounded-xl transition disabled:opacity-50 shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
