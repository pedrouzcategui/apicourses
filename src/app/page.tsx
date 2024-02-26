import { getPublishedCourses } from "@/actions";
import { CourseCard, Menu } from "@/components";

export default async function Home() {

  const COURSES = await getPublishedCourses();

  return (
    <div className="w-4/5 mx-auto">
      <Menu />
      <h1 className="text-3xl font-semibold text-center my-4">Learn Automations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        {
          COURSES.map((course, i) => (
            <CourseCard key={`${course.slug}-${i}`}
              title={course.title}
              description={course.description}
              price={course.price}
              slug={course.slug}
              difficulty={'Begginer'}
              image_url={course.image_url ?? ""} />
          ))
        }
      </div>
    </div>
  );
}

