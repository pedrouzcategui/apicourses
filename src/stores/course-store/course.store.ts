import { create } from "zustand";

interface CourseState {
  current_lesson_id: number;
}

interface CourseActions {
  setCurrentLessonId: (lesson_id: number) => void;
}

export const useCourseStore = create<CourseState & CourseActions>()((set) => ({
  current_lesson_id: 1,
  setCurrentLessonId(lesson_id) {
    set(() => ({ current_lesson_id: lesson_id }));
  },
}));
