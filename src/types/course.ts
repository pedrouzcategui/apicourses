export interface CourseCardProps {
  slug: string;
  title: string;
  description: string;
  price: number;
  image_url?: string;
  mini_course?: boolean;
  difficulty: "Begginer" | "Intermediate" | "Advanced";
  category?: "Marketing" | "Tech";
}

export interface TCourse {
  name: string;
  completion: number;
  modules: TModule[];
}

export interface TModule {
  name: string;
  lessons: TLesson[];
}

export interface TLesson {
  title: string;
  completed?: boolean;
  type: "video" | "quiz" | "text";
  duration_in_minutes?: number;
}
