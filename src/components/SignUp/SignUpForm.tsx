'use client'
import { register } from "@/actions";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

interface SignUpFormInputs {
    name: string;
    email: string;
    password: string;
    phone: string;
}

export function SignUpForm() {

    const { register, handleSubmit } = useForm<SignUpFormInputs>();

    const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
        console.log(data);
    }

    return (
        <div className="text-center">
            <h1 className="text-center text-2xl mb-4 font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-2">
                <div className="text-left mb-2">
                    <label className="block mb-2 font-semibold" htmlFor="name">Full Name</label>
                    <input className="border-2 border-black p-2 w-full" type="text" placeholder="Bruce Wayne" {...register('name', { required: true })} />
                </div>
                <div className="text-left mb-2">
                    <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
                    <input className="border-2 border-black p-2 w-full" type="email" placeholder="Ex: bruce@wayneindustries.com" {...register('email', { required: true })} />
                </div>
                <div className="text-left mb-2">
                    <label className="block mb-2 font-semibold" htmlFor="password">Password</label>
                    <input className="border-2 border-black p-2 w-full" type="password" {...register('password', { required: true })} placeholder="********" />
                </div>
                <div className="text-left mb-2">
                    <label className="block mb-2 font-semibold" htmlFor="phone">Phone Number</label>
                    <input className="border-2 border-black p-2 w-full" type="tel" {...register('phone', { required: true })} placeholder="+12015550123" />
                </div>
                <button type="submit" className="block bg-black text-white p-2">Sign Up</button>
            </form>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <p className="mb-4 block">Already an account? <Link href={'/login'} className="text-blue-500 font-semibold">Sign In</Link></p>
        </div>
    )
}
