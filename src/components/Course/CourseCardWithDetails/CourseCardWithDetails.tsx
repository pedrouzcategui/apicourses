import type { CourseCardProps } from '@/types';
import { IoDocumentText } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

interface CourseCardWithDetailsProps extends CourseCardProps {
    lessons_number: number
}

export function CourseCardWithDetails({ title, lessons_number, price, image_url = 'https://placehold.co/300x150' }: CourseCardWithDetailsProps) {
    return (
        <div className="border-2 border-black">
            <img src={`/images/${image_url}`} alt={title} className="w-full" />
            <div className="p-5 flex flex-col justify-between">
                <span className='font-bold'>Acerca de este curso:</span>
                <div className='w-[100px] h-[1px] bg-black my-2'></div>
                <div className='flex items-center gap-2 my-2'>
                    <IoDocumentText />
                    <span>{lessons_number} lecciones</span>
                </div>
                <div className='flex items-center gap-2 my-2'>
                    <FaPlayCircle />
                    <span>400 horas de contenido en video</span>
                </div>
                <div className='flex items-center gap-2 my-2'>
                    <MdAttachMoney />
                    <span>USD {price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}
