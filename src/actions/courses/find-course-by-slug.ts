"use server";
import prisma from "@/db";

export async function findCourseBySlug(slug: string) {
  const course = await prisma.course.findFirst({
    where: {
      slug: slug,
    },
  });
  return course;
}
