import Link from "next/link";
import type { CourseCardProps } from '@/types';

export function CourseCard({ slug, title, description, price, image_url = 'https://placehold.co/300x150' }: CourseCardProps) {
    return (
        <Link href={`/courses/${slug}`}>
            <div className="border-2 border-black hover:bg-slate-900 hover:text-white transition-colors">
                <img src={`/images/${image_url}`} alt={title} className="w-full" />
                <div className="h-[200px] p-5 flex flex-col justify-between">
                    <div className="">
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <p className="text-sm">{description}</p>
                    </div>
                    <span className="text-2xl font-bold">{price == 0 ? 'Free' : `$ ${price}`}</span>
                </div>
            </div>
        </Link>
    )
}
