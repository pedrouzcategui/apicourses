'use client'
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginFormInputs {
    email: string;
    password: string;
}

export function LoginForm() {

    const { register, handleSubmit } = useForm<LoginFormInputs>();

    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
        console.log(data);
    }

    return (
        <div className="text-center">
            <h1 className="text-center text-2xl mb-4 font-bold">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-2">
                <div className="text-left mb-2">
                    <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
                    <input className="border-2 border-black p-2 w-full" type="email" placeholder="Ex: bruce@wayneindustries.com" {...register('email', { required: true })} />
                </div>
                <div className="text-left mb-2">
                    <label className="block mb-2 font-semibold" htmlFor="password">Password</label>
                    <input className="border-2 border-black p-2 w-full" type="password" {...register('password', { required: true })} placeholder="********" />
                </div>
                <button type="submit" className="block bg-black text-white p-2">Login</button>
            </form>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <Link href={"/forgot-password"} className="text-blue-500 font-semibold mb-4 block">Forgot Your Password?</Link>
            <p className="mb-4 block">Don't have an account? <Link href={'/signup'} className="text-blue-500 font-semibold">Sign Up</Link></p>
        </div>
    )
}
