"use client"
import { verifyUserEmail } from "@/actions/userAuth"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { FormEvent, useTransition } from "react"
import { toast } from "sonner"

export default function Component({ params }: { params: string }) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault()
        startTransition(async () => {
            const response = await verifyUserEmail(params?.token)
            if (response?.success) {
                toast.success(response?.message)
                router.push('/')
            } else {
                toast.error(response?.message)
            }
        })
    }

    return (
        <div className="flex z-10 flex-col items-center justify-center bg-white/10 rounded-md px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center">
                <div className="inline-block rounded-full bg-white p-4">
                    <MailCheckIcon className="h-8 w-8 text-black" />
                </div>
                <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">Email Verification</h1>
                <p className="mt-4 text-white">
                    Please check your email to verify your account and continue using our services.
                </p>
                <form onSubmit={onSubmit}>
                    {
                        isPending ? <Button type="button" className="mt-6 w-full bg-white text-black hover:bg-white/85">Loading...</Button> : <Button type="submit" className="mt-6 w-full bg-white text-black hover:bg-white/85">Verify Email</Button>
                    }

                </form>
            </div>
        </div>
    )
}

function MailCheckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            <path d="m16 19 2 2 4-4" />
        </svg>
    )
}