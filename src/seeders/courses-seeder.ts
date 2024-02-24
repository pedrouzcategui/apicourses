import prisma from "../db";
import { CourseCardProps as TCourse } from "../types";
import { COURSES } from "../utils/course-data";

async function main() {
  // Courses Seeder
  await prisma.course.deleteMany();
  await prisma.module.deleteMany();
  await prisma.lesson.deleteMany();

  COURSES.map(async (course) => {
    const { title, description, slug, published, price, image_url, modules } =
      course;
    const dbCourse = await prisma.course.create({
      data: {
        title,
        description,
        slug,
        published,
        price,
        image_url,
      },
    });

    if (modules) {
      modules.map(async (module, i) => {
        const { name, lessons } = module;
        const dbModule = await prisma.module.create({
          data: {
            number: i + 1,
            courseId: dbCourse.id,
            name,
          },
        });

        const lessonsData = lessons.map((lesson, i) => ({
          number: i + 1,
          moduleId: dbModule.id,
          name: lesson.title,
          type: lesson.type,
        }));

        await prisma.lesson.createMany({
          data: lessonsData,
        });
      });
    }
  });

  console.log("Seeded Successfully");
}

main();
