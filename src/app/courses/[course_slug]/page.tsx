import { findCourseBySlug } from '@/actions';
import { CourseCardWithDetails, CourseContentDropdown } from '@/components';
import Link from 'next/link';
import { MODULES_SAMPLE_DATA } from "@/utils/modules-sample-data";
import { notFound } from 'next/navigation';

interface PageParams {
    params: {
        course_slug: string
    }
}

export default async function CoursePage({ params }: PageParams) {
    const { course_slug } = params;
    const course = await findCourseBySlug(course_slug);
    if (!course) {
        throw notFound();
    }
    return (
        <div className='w-4/5 mx-auto'>
            <Link href={"/"}>
                Go Back
            </Link>
            <div className='grid grid-cols-2 items-center mb-4'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold mb-2'>{course.title}</h1>
                    <p className='text-lg mb-2'>{course.description}</p>
                    <button className='bg-black text-white py-2 px-4 mr-2'>Acquire Now</button>
                    <button className='text-black py-2 px-4 mr-2'>Watch Free Classes</button>
                </div>
                <div>
                    <img src={`/images/${course.image_url}`} alt={course.title} />
                </div>
            </div>
            <div className='grid grid-cols-3'>
                <div className='col-span-2 m-5'>
                    <h2 className='text-xl'>Course Contents</h2>
                    <CourseContentDropdown modules={MODULES_SAMPLE_DATA} />
                </div>
                <div>
                    <CourseCardWithDetails
                        title={course.title}
                        description={course.description}
                        price={course.price}
                        slug={course.slug}
                        difficulty={'Begginer'}
                        image_url={course.image_url ?? ""}
                    />
                </div>
            </div>
        </div>
    );
}