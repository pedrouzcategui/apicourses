"use client";

import { useState } from "react";
import { TLesson, TModule } from "./types";
import { MODULES_SAMPLE_DATA } from "./sample-data";
import {
    FaPencilRuler,
    FaVideo,
    FaFileAlt,
    FaArrowUp,
    FaArrowDown,
} from "react-icons/fa";
import clsx from "clsx";
import { useCourseStore } from "../../../stores/course-store/course.store";
import { FaRegCircle, FaRegCircleCheck } from "react-icons/fa6";
interface ModuleProps extends TModule {
    id: number;
}
interface LessonProps extends TLesson { }
interface LessonsProps {
    lessons: TLesson[];
}

export const Modules = () => {
    return (
        <>
            {MODULES_SAMPLE_DATA.map((module, i) => (
                <Module key={`${module.name}-${i}`} id={i + 1} {...module} />
            ))}
        </>
    );
};

export const Module = ({ name, lessons, id }: ModuleProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const classNames = clsx(
        "flex flex-col min-h-20 justify-between text-white cursor-pointer p-4",
        {
            "bg-slate-950": isOpen,
        }
    );
    return (
        <div className="border-b-2 border-terciary-color">
            <div className={classNames} onClick={() => setIsOpen(!isOpen)}>
                <div className="flex justify-between items-center">
                    <div>
                        <span className="block font-bold">
                            #{id} - {name}
                        </span>
                        <span className="text-sm"> 0/{lessons.length} Completed</span>
                    </div>
                    <span>{isOpen ? <FaArrowUp /> : <FaArrowDown />}</span>
                </div>
            </div >
            {isOpen && <Lessons lessons={lessons} />}
        </div >
    );
};

const Lessons = ({ lessons }: LessonsProps) => {
    return (
        <>
            {lessons.map((lesson) => {
                return <Lesson {...lesson} />;
            })}
        </>
    );
};

const Lesson = ({
    completed = false,
    title,
    type,
    duration_in_minutes,
}: LessonProps) => {
    const [isCompleted, setIsCompleted] = useState<boolean>(completed);
    const setCurrentLesson = useCourseStore((state) => state.setCurrentLesson);
    return (
        <div className="bg-secondary-color px-4 py-2 text-white border-b-2 border-terciary-color"
            onClick={() => setCurrentLesson(title)}>
            <div className="flex gap-2 items-center">
                <span
                    className="cursor-pointer"
                    onClick={() => setIsCompleted(!isCompleted)}
                >
                    {isCompleted == true ? <FaRegCircleCheck /> : <FaRegCircle />}
                </span>
                <span>{title}</span>
            </div>
            <div className="flex gap-2 items-center">
                <span>{IconHandler(type)}</span>
                {
                    <span>{duration_in_minutes} {lessonTypeHandler(type)}</span>
                }
            </div>
        </div>
    );
};

function IconHandler(type: TLesson["type"]) {
    switch (type) {
        case "quiz":
            return <FaPencilRuler />;
        case "video":
            return <FaVideo />;
        default:
            return <FaFileAlt />;
    }
}

function lessonTypeHandler(type: TLesson["type"]) {
    switch (type) {
        case 'quiz':
            return 'Quiz'
        case 'video':
            return 'Minutes'
        case 'text':
            return 'Text'
        default:
            return 'Text'
    }
}