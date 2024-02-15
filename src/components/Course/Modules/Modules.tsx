'use client'

import { useState } from "react"
import { TLesson, TModule } from "./types"
import { MODULES_SAMPLE_DATA } from "./sample-data"

interface ModuleProps extends TModule { }
interface LessonProps extends TLesson { }
interface LessonsProps {
    lessons: TLesson[]
}

export const Modules = () => {
    return (
        <div>
            {
                MODULES_SAMPLE_DATA.map((module, i) => <Module key={`${module.name}-${i}`} {...module} />)
            }
        </div>
    )
}

export const Module = ({ name, lessons }: ModuleProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div className="mb-4">
            <div className="cursor-pointer py-4" onClick={() => setIsOpen(!isOpen)}>
                <span className="block">{name}</span>
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
        <div className="ml-2 bg-slate-300 mb-2">
            <div className="flex gap-2 items-center">
                <span className="cursor-pointer" onClick={() => setIsCompleted(!isCompleted)}>{isCompleted == true ? "✅" : "❌"}</span>
                <span>{title}</span>
            </div>
            <div className="flex gap-2 items-center">
                <span>{type}</span>
                <span>{duration_in_minutes} minutes</span>
            </div>
        </div>
    )
}