import { LoginForm } from '@/components';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function LoginPage() {
    return (
        <main className="w-1/2 mx-auto h-screen flex flex-col justify-center">
            <Link href={'/'} className='flex items-center gap-2'><FaArrowLeft /> Back to home</Link>
            <LoginForm />
        </main>
    );
}