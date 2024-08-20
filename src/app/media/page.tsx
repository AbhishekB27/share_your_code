import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { auth } from "@/auth"
export default async function page() {
    const session = await auth()
    if (!session) {
        return <div className="h-screen text-white grid place-items-center z-10">Not Authenticated</div>
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-transparent z-10">
            <div className="w-full max-w-4xl px-4 md:px-6 py-12 md:py-24 lg:py-32">
                <div className="flex flex-col items-center justify-center text-center text-slate-100 space-y-6">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl/none">
                        Seamless File Transfer Between Devices
                    </h1>
                    <p className="text-muted-foreground md:text-xl">
                        Easily transfer files between your mobile and desktop devices. No more emailing or cloud storage hassle.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <article
                            className="hover:animate-background mx-auto rounded-xl w-fit bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
                        >
                            <div className="rounded-[10px] py-2 px-6   bg-gray-900">
                                <Link href='/s#'>Try it Now</Link>
                            </div>
                        </article>
                        <Link
                            href="#"
                            className="inline-flex text-gray-900 rounded-[10px]  transition-colors  py-2 px-6 items-center justify-center  border border-input bg-background text-sm font-medium shadow-sm  hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 md:px-6 py-12 md:py-24 lg:py-32 text-slate-100">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-muted text-slate-800 px-3 py-1 text-sm">Key Features</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Seamless File Sharing Across Devices</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Instantly transfer files between your mobile and desktop devices. No more emailing or cloud storage
                            hassle.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Quick and Easy</h3>
                                    <p className="text-muted-foreground">
                                        Instantly transfer files with a few taps. No complex setup required.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Secure Transfer</h3>
                                    <p className="text-muted-foreground">
                                        Your files are encrypted and transferred securely between devices.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Supported Devices</h3>
                                    <p className="text-muted-foreground">
                                        Transfer files between your Android, iOS, Windows, and macOS devices.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img
                        src="https://www.transfernow.net/cdn/icons/discover/welcome.png"
                        width="550"
                        height="310"
                        alt="File Transfer"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    />
                </div>
            </div>

            <div className="w-full max-w-4xl px-4 md:px-6 py-12 md:py-24 lg:py-32 text-slate-100">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Try Our File Transfer Service Today
                        </h2>
                        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Seamlessly transfer files between your mobile and desktop devices. No more emailing or cloud storage
                            hassle.
                        </p>
                    </div>
                    <div className="mx-auto w-full max-w-sm space-y-2">
                        <form className="flex gap-2">
                            <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                            <Button type="submit">Try it Now</Button>
                        </form>
                        <p className="text-xs text-muted-foreground">
                            Sign up to get started. No credit card required.{" "}
                            <Link href="#" className="underline underline-offset-2" prefetch={false}>
                                Terms &amp; Conditions
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
