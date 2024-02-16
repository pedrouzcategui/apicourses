import clsx from "clsx"
import { Modules } from "../Modules/Modules"
import styles from './styles.module.css'

export const CourseSidebar = () => {
    let classNames = clsx('bg-primary-color h-[100vh] overflow-auto', styles.sidebar)
    return (
        <div className={classNames}>
            <Modules />
        </div>
    )
}