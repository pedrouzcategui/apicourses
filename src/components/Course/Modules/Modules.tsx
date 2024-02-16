'use client'

import { useState } from "react"
import { TLesson, TModule } from "./types"
import { MODULES_SAMPLE_DATA } from "./sample-data"
import { FaPencilRuler, FaVideo, FaFileAlt, FaArrowUp, FaArrowDown } from "react-icons/fa"

interface ModuleProps extends TModule {
    id: number
}
interface LessonProps extends TLesson { }
interface LessonsProps {
    lessons: TLesson[]
}

export const Modules = () => {
    return (
        <>
            {
                MODULES_SAMPLE_DATA.map((module, i) => <Module key={`${module.name}-${i}`} id={i + 1} {...module} />)
            }
        </>
    )
}

export const Module = ({ name, lessons, id }: ModuleProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div className="border-b-2 border-terciary-color">
            <div className="flex min-h-20 justify-between items-center text-white cursor-pointer p-4" onClick={() => setIsOpen(!isOpen)}>
                <span className="font-bold">#{id} - {name}</span>
                <span>{isOpen ? <FaArrowUp /> : <FaArrowDown />}</span>
            </div>
            {
                isOpen &&
                <Lessons lessons={lessons} />
            }
        </div>
    )
}

const Lessons = ({ lessons }: LessonsProps) => {
    return (
        <>
            {lessons.map((lesson) => {
                return <Lesson {...lesson} />
            })}
        </>
    )
}

const Lesson = ({ completed = false, title, type, duration_in_minutes }: LessonProps) => {

    const [isCompleted, setIsCompleted] = useState<boolean>(completed);

    return (
        <div className="bg-secondary-color px-4 py-2 text-white border-b-2 border-terciary-color">
            <div className="flex gap-2 items-center">
                <span className="cursor-pointer" onClick={() => setIsCompleted(!isCompleted)}>{isCompleted == true ? "✅" : "❌"}</span>
                <span>{title}</span>
            </div>
            <div className="flex gap-2 items-center">
                <span>{IconHandler(type)}</span>
                <span>{duration_in_minutes} minutes</span>
            </div>
        </div>
    )
}

function IconHandler(type: TLesson['type']) {
    switch (type) {
        case 'quiz':
            return <FaPencilRuler />
        case 'video':
            return <FaVideo />
        default:
            return <FaFileAlt />
    }
}