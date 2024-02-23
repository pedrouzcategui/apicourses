import type { CourseCardProps } from '@/types';

export function CourseCardWithDetails({ slug, title, description, price, image_url = 'https://placehold.co/300x150' }: CourseCardProps) {
    return (
        <div className="border-2 border-black">
            <img src={`/images/${image_url}`} alt={title} className="w-full" />
            <div className="p-5 flex flex-col justify-between">
                <span>Acerca de este curso</span>
                <hr />
                <div>
                    <span>icon</span>
                    400 lecciones
                </div>
                <div>
                    <span>icon</span>
                    400 horas de contenido en video
                </div>
                <div>
                    <span>icon</span>
                    USD $50.00
                </div>
            </div>
        </div>
    )
}
