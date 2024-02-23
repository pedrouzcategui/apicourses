import prisma from "../db";
import { CourseCardProps as TCourse } from "../types";
import { COURSES } from "../utils/course-data";

async function main() {
  // Courses Seeder
  await prisma.course.deleteMany();
  const coursesFormatted = COURSES.map((course: TCourse) => {
    return {
      title: course.title,
      price: course.price,
      description: course.description,
      slug: course.slug,
    };
  });

  await prisma.course.createMany({
    data: coursesFormatted,
  });
}

main();
