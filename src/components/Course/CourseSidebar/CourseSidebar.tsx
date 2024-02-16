import clsx from "clsx"
import { Modules } from "../Modules/Modules"
import styles from './styles.module.css'
import Link from "next/link"

export const CourseSidebar = () => {
    let classNames = clsx('bg-primary-color h-[100vh] overflow-auto', styles.sidebar)
    return (
        <div className={classNames}>
            <div className="text-white py-2 bg-slate-950 text-center">
                <h1 className="text-xl font-bold">Course Title</h1>
                <Link href={'/'}>Go to home</Link>
            </div >
            <Modules />
        </div >
    )
}