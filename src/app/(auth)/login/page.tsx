"use client"
import { login, signInGithub } from "@/actions/userAuth";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { FormEvent, useTransition } from "react";
import { toast } from "sonner";
import { signIn } from 'next-auth/react'


export default function Component() {

    const [isPending, startTransition] = useTransition()
    const [isPending2, startTransition2] = useTransition()
    const router = useRouter()
    const onSubmit = async (event: FormEvent) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(event.target as HTMLFormElement);
        console.log(formData)

        const email = formData.get('email');
        const password = formData.get('password');

        startTransition(async () => {
            const response = await login({ email, password })
            console.log(response)
            if (!response?.success) {
                toast.error(response?.message, { position: 'top-center' })
            } else {
                router.push('/')
                router.refresh()
                toast.success(response?.message, { position: 'top-center' })

            }
        })
        // Now you can use the form data as needed (e.g., send it to an API)
    };
    return (
        <div className="flex flex-col items-center justify-center  p-4 bg-white z-10 rounded-lg">
            <div className="w-full max-w-md space-y-6">
                <div className="flex justify-end">
                    <Link
                        href="/signUp"
                    >
                        <button className="w-full px-4 py-2 text-sm font-medium bg-white text-gray-900  rounded-md  focus:outline-none hover:bg-black/10">
                            Sign Up
                        </button>
                    </Link>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="pb-5 text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Login</h2>
                        <p className="text-sm text-gray-600"> Enter your email below to login to your account</p>
                    </div>
                    <div className="space-y-4">

                        <input
                            name="email"
                            type="email"
                            placeholder="name@example.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                        />
                        <input
                            name='password'
                            type="password"
                            placeholder="Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                        />
                        {
                            isPending ? <button type="button" className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-md shadow-sm hover:bg-gray-900/90 focus:outline-none">
                                Loading...
                            </button> : <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-md shadow-sm hover:bg-gray-900/90 focus:outline-none">
                                Sign UP
                            </button>
                        }
                    </div>
                </form>
                <div className="relative flex items-center justify-center my-4">
                    <div className="absolute w-full border-t border-gray-300" />
                    <div className="relative px-4 text-sm text-gray-500 bg-gray-50">OR CONTINUE WITH</div>
                </div>
                <div>
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        try {
                            startTransition2(async () => {
                                const response = await signIn("github", {
                                    redirect: false, callbackUrl: '/'
                                })
                                console.log(response)
                            })
                        } catch (error) {
                            console.log(error, "error");
                        }
                    }}>

                        {
                            isPending2 ? <button disabled={isPending2} type="button" className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none ">
                                Loading...
                            </button> : <button type="submit" className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none ">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.621.069-.608.069-.608 1.004.07 1.533 1.032 1.533 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.221-.252-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.447-1.268.098-2.644 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.8a9.56 9.56 0 012.5.336c1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.391.099 2.644.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.688-4.565 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.748 0 .267.18.578.688.48C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                                GitHub
                            </button>
                        }
                    </form>
                </div>
                <div className="text-sm text-center text-gray-600">
                    By clicking continue, you agree to our{" "}
                    <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
                        Privacy Policy
                    </a>
                    .
                </div>
            </div>
        </div>
    )
}