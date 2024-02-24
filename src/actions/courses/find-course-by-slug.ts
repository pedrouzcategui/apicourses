"use server";
import prisma from "@/db";

export async function findCourseBySlug(slug: string) {
  const course = await prisma.course.findFirst({
    where: {
      slug: slug,
    },
    include: {
      modules: {
        orderBy: {
          number: "asc",
        },
        include: {
          lessons: {
            orderBy: {
              number: "asc",
            },
          },
        },
      },
    },
  });
  return course;
}
