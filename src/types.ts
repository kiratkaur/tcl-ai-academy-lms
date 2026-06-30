export type TrackId = 'T1' | 'T2' | 'T3' | 'T4' | 'T5' | 'T6' | 'T7' | 'T8';

export type PageView = 'dashboard' | 'learning' | 'assessments' | 'challenge' | 'pii-scanner';

export interface TrackInfo {
  id: TrackId;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Slide {
  title: string;
  body: string; // Markdown content
  type: 'concept' | 'code' | 'interactive' | 'exercise' | 'highlight' | 'demo';
}

export interface LessonContent {
  title: string;
  duration: string;
  type: 'reading' | 'lab' | 'challenge';
  content: string;
  slides: Slide[];
  labData?: {
    objective: string;
    sourceData: string;
    promptTemplate: string;
  };
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  objective: string;
  lessons: LessonContent[];
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface ChallengeSubmission {
  id: string;
  moduleId: string;
  prompt: string;
  output: string;
  timestamp: number;
  taskDescription: string;
}

export interface TrackProgress {
  completedLessons: string[];
  challengeSubmissions: ChallengeSubmission[];
  currentModuleIndex: number;
  currentLessonIndex: number;
  currentSlideIndex: number;
}

export interface UserProgress {
  selectedTrack: TrackId | null;
  quizScore: number | null;
  quizPassed: boolean;
  policySignedOff: boolean;
  trackProgress: Record<string, TrackProgress>;
}

export const DEFAULT_TRACK_PROGRESS: TrackProgress = {
  completedLessons: [],
  challengeSubmissions: [],
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  currentSlideIndex: 0,
};

export const DEFAULT_PROGRESS: UserProgress = {
  selectedTrack: null,
  quizScore: null,
  quizPassed: false,
  policySignedOff: false,
  trackProgress: {},
};
