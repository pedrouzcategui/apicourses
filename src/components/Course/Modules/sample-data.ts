import { TModule } from "./types";

export const MODULES_SAMPLE_DATA: TModule[] = [
  {
    name: "Starting GoHighLevel",
    lessons: [
      {
        title: "Intro to Go High Level",
        type: "video",
        duration_in_minutes: 10,
        completed: true,
      },
      {
        title: "How to take advantage of this course",
        type: "video",
        duration_in_minutes: 3,
        completed: true,
      },
      {
        title: "Update notes",
        type: "text",
        completed: true,
      },
    ],
  },
  {
    name: "Intermediate GoHighLevel",
    lessons: [
      {
        title: "Contacts",
        type: "video",
        duration_in_minutes: 3,
        completed: true,
      },
      {
        title: "Workflows",
        type: "video",
        duration_in_minutes: 3,
        completed: true,
      },
    ],
  },
];
