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
