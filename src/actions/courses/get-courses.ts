"use server";
import prisma from "@/db";

export async function getCourses() {
  const courses = await prisma.course.findMany();
  return courses;
}
