"use server";
import prisma from "@/db";

export async function getPublishedCourses() {
  const courses = await prisma.course.findMany({
    where: {
      published: true,
    },
  });
  return courses;
}
