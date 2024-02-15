export interface TModule {
  name: string;
  lessons: TLesson[];
}

export interface TLesson {
  title: string;
  completed?: boolean;
  type: "video" | "quiz" | "text";
  duration_in_minutes: number;
}
