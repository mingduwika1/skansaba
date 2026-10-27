export type DocType = 
  | 'modul_ajar'
  | 'refleksi_awal'
  | 'refleksi_akhir'
  | 'asesmen_sumatif'
  | 'bahan_ajar'
  | 'remedial'
  | 'pengayaan'
  | 'tindak_lanjut';

export interface TeacherProfile {
  name: string;
  nip: string;
  subject: string;
  gradePhase: string; // Kelas / Fase (e.g. Kelas X / Fase E, Kelas XI / Fase F)
  major: string;
  semester: 'Ganjil' | 'Genap';
  academicYear: string;
  dateStr: string;
  isVerified: boolean;
}

export interface AdminDocument {
  id: string;
  title: string;
  docType: DocType;
  topic: string;
  timeAllocation: string;
  createdAt: string;
  updatedAt: string;
  teacherProfile: TeacherProfile;
  htmlBody: string;
  markdownBody: string;
  summary: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface DocTypeOption {
  type: DocType;
  label: string;
  subtitle: string;
  badge: string;
  color: string;
  iconName: string;
  description: string;
}
