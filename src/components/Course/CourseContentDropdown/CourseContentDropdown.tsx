"use client";

import { useState } from "react";
import {
    FaFileAlt,
    FaPencilRuler,
    FaVideo,
    FaArrowDown,
    FaArrowUp,
    FaLock,
} from "react-icons/fa";

interface CourseContentDropdownProps {
    modules: ModuleProps[];
}

interface ModuleProps {
    id: string;
    number: number;
    name: string;
    lessons: LessonProps[];
}

interface LessonProps {
    id: string;
    name: string;
    type: string;
    duration_in_minutes?: number;
    isFree: boolean;
}

export function CourseContentDropdown({ modules }: CourseContentDropdownProps) {
    const [isSeeMore, setIsSeeMore] = useState<boolean>(false);
    const limit = 5;
    const displayModules = isSeeMore ? modules : modules.slice(0, limit);
    return (
        <div>
            {displayModules.map((module, i) => (
                <Module
                    id={module.id}
                    number={module.number}
                    key={`${module.name}-${i}`}
                    name={module.name}
                    lessons={module.lessons}
                />
            ))}
            <button className="mt-4" onClick={() => setIsSeeMore(!isSeeMore)}>
                {isSeeMore ? "See Less" : "See More"}
            </button>
        </div>
    );
}

function Module({ id, number, name, lessons }: ModuleProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div onClick={() => setIsOpen(!isOpen)} className="w-full">
            <div className="border-b-2 border-slate-900 flex items-center justify-between py-4 transition-all cursor-pointer">
                <span>
                    Seccion {number}: {name}
                </span>
                {isOpen ? <FaArrowUp /> : <FaArrowDown />}
            </div>
            {isOpen && (
                <ul>
                    {lessons.map((lesson, i) => (
                        <Lesson
                            id={lesson.id}
                            isFree={lesson.isFree}
                            key={`${lesson.name}-${i}`}
                            name={lesson.name}
                            duration_in_minutes={0}
                            type={lesson.type}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

function Lesson({ name, type, isFree = false }: LessonProps) {
    return (
        <li className="py-4 flex items-center gap-2 hover:bg-white border-b-2 border-slate-300">
            {IconHandler(type)} {name}{" "}
            {isFree ? (
                <span className="border-2 border-green-500 text-green-600 px-4">
                    Watch Free
                </span>
            ) : (
                <FaLock />
            )}
        </li>
    );
}

function IconHandler(type: string) {
    switch (type) {
        case "quiz":
            return <FaPencilRuler />;
        case "video":
            return <FaVideo />;
        default:
            return <FaFileAlt />;
    }
}
