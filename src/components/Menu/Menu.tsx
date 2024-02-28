'use client'
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export function Menu() {
    const pathname = usePathname()
    return (
        <div className="flex justify-center items-center my-2" style={{ gap: 20 }}>
            <Link href={'/'} className={clsx({ "bg-black text-white": pathname == '/' }, "px-4 py-2")}>Home</Link>
            <Link href={'/courses'} className={clsx({ "bg-black text-white": pathname == '/courses' }, "px-4 py-2")}>Courses</Link>
            <Link className="px-4 py-2" href={'/login'}>Login</Link>
        </div>
    )
}
