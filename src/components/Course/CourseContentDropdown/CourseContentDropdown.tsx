"use client";

import { useState } from "react";
import { TLesson, TModule } from "@/types/course";

interface CourseContentDropdownProps {
    modules: TModule[];
}

interface ModuleProps {
    id: number;
    name: string;
    lessons: TLesson[];
}

interface LessonProps {
    name: string;
    type: TLesson["type"];
    duration?: number;
}

export function CourseContentDropdown({ modules }: CourseContentDropdownProps) {
    const [isSeeMore, setIsSeeMore] = useState<boolean>(false);
    const limit = 5;
    const displayModules = isSeeMore ? modules : modules.slice(0, limit);
    return (
        <div>
            {displayModules.map((module, i) => (
                <Module
                    id={i + 1}
                    key={`${module.name}-${i}`}
                    name={module.name}
                    lessons={module.lessons}
                />
            ))}
            <button onClick={() => setIsSeeMore(!isSeeMore)}>
                {isSeeMore ? "See Less" : "See More"}
            </button>
        </div>
    );
}

function Module({ id, name, lessons }: ModuleProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-2 py-2 hover:bg-slate-300"
        >
            <span>
                Seccion {id}: {name}
            </span>
            {isOpen && (
                <ul>
                    {lessons.map((lesson, i) => (
                        <Lesson
                            key={`${lesson.title}-${i}`}
                            name={lesson.title}
                            duration={lesson.duration_in_minutes}
                            type={lesson.type}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

function Lesson({ name, type }: LessonProps) {
    return <li>{type} - {name}</li>;
}
