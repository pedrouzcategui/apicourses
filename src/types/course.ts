type CourseDifficulty = "Begginer" | "Intermediate" | "Advanced";
type CourseCategory = "Marketing" | "Tech";
type LessonType = "video" | "quiz" | "text";

export interface CourseCardProps {
  title: string;
  slug: string;
  description: string;
  price: number;
  image_url?: string;
  mini_course?: boolean;
  difficulty: CourseDifficulty;
  category?: CourseCategory;
  published?: boolean;
}

export interface TCourse {
  title: string;
  slug: string;
  description: string;
  price: number;
  image_url?: string;
  mini_course?: boolean;
  difficulty: CourseDifficulty;
  category?: CourseCategory;
  published?: boolean;
  modules?: TModule[];
}

export interface TModule {
  name: string;
  lessons: TLesson[];
}

export interface TLesson {
  title: string;
  completed?: boolean;
  type: LessonType;
  duration_in_minutes?: number;
}
