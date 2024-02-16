import { create } from "zustand";

interface CourseState {
  current_lesson_title: string;
}

interface CourseActions {
  setCurrentLesson: (lesson_title: string) => void;
}

export const useCourseStore = create<CourseState & CourseActions>()(
  (set, get) => ({
    current_lesson_title: "",
    setCurrentLesson(lesson_title) {
      set(() => ({ current_lesson_title: lesson_title }));
    },
  })
);
