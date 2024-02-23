import { CourseCard, YouTubeVideoPlayer } from "@/components";
import { COURSES } from "@/utils/course-data";

export default function Home() {
  return (
    <div className="w-4/5 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-4">Learn Automations</h1>
      <div className="grid grid-cols-3 gap-4 items-stretch">
        {
          COURSES.map((course, i) => <CourseCard key={`${course.slug}-${i}`} {...course} />)
        }
      </div>
    </div>
  );
}

