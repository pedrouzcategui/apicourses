'use client'
import { useCourseStore } from "@/stores/course-store/course.store";

export const CourseTitle = () => {
    const lesson_title = useCourseStore(state => state.current_lesson_title)
    return (
        <h2 className="font-bold text-2xl text-white mb-4">{lesson_title}</h2>
    )
}
