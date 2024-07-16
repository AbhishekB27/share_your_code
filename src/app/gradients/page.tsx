/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TEK3rqXnuvi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Gradient() {
    const gradients = [
        "bg-gradient-to-r from-indigo-400 to-cyan-400",
        "bg-gradient-to-r from-violet-400 to-purple-300",
        "bg-gradient-to-r from-blue-600 to-violet-600",
        "bg-gradient-to-r from-rose-100 to-teal-100",
        "bg-gradient-to-r from-rose-700 to-pink-600",
        "bg-gradient-to-r from-red-500 to-orange-500",
        "bg-gradient-to-r from-slate-500 to-slate-800",
        "bg-gradient-to-r from-rose-400 to-red-500",
        "bg-gradient-to-r from-purple-500 to-purple-900",
        "bg-gradient-to-r from-red-400 to-red-900",
        "bg-gradient-to-r from-emerald-500 to-lime-600",
        "bg-gradient-to-r from-gray-700 to-black",
        "bg-gradient-to-r from-indigo-500 to-blue-500",
        "bg-gradient-to-r from-blue-300 to-yellow-300",
        "bg-gradient-to-r from-lime-400 to-lime-500",
        "bg-gradient-to-r from-pink-500 to-violet-600",
        "bg-gradient-to-r from-violet-600 to-indigo-600",
        "bg-gradient-to-r from-fuchsia-600 to-pink-600",
        "bg-gradient-to-r from-yellow-200 to-green-500",
        "bg-gradient-to-r from-cyan-200 to-cyan-400",
        "bg-gradient-to-r from-sky-400 to-blue-500",
        "bg-gradient-to-r from-orange-300 to-rose-300",
        "bg-gradient-to-r from-rose-400 to-orange-300",
        "bg-gradient-to-r from-fuchsia-600 to-purple-600",
        "bg-gradient-to-r from-yellow-600 to-red-600",
        "bg-gradient-to-r from-amber-200 to-yellow-400",
        "bg-gradient-to-r from-teal-200 to-teal-500",
        "bg-gradient-to-r from-blue-300 to-blue-800",
        "bg-gradient-to-r from-green-300 to-yellow-300",
        "bg-gradient-to-r from-indigo-200 to-yellow-100",
        "bg-gradient-to-r from-slate-900 to-slate-700",
        "bg-gradient-to-r from-teal-400 to-gray-800",
        "bg-gradient-to-r from-violet-500 to-orange-300",
        "bg-gradient-to-r from-blue-500 to-blue-600",
        "bg-gradient-to-r from-rose-300 to-rose-500",
        "bg-gradient-to-r from-orange-400 to-rose-400",
        "bg-gradient-to-r from-cyan-500 to-blue-500",
        "bg-gradient-to-r from-violet-200 to-pink-200",
        "bg-gradient-to-r from-green-200 to-blue-500",
        "bg-gradient-to-r from-red-200 to-yellow-200",
        "bg-gradient-to-r from-purple-200 to-purple-800",
        "bg-gradient-to-r from-violet-400 to-purple-300",
        "bg-gradient-to-r from-neutral-300 to-stone-400",
        "bg-gradient-to-r from-amber-200 to-yellow-500",
        "bg-gradient-to-r from-gray-100 to-gray-300",
        "bg-gradient-to-r from-rose-500 to-red-500",
        "bg-gradient-to-r from-blue-100 to-blue-500",
        "bg-gradient-to-r from-red-200 to-red-600",
        "bg-gradient-to-r from-indigo-300 to-purple-400",
        "bg-gradient-to-r from-orange-600 to-orange-500",
        "bg-gradient-to-r from-teal-400 to-yellow-200",
        "bg-gradient-to-r from-slate-300 to-slate-500",
        "bg-gradient-to-r from-indigo-400 to-cyan-400",
        "bg-gradient-to-r from-fuchsia-500 to-cyan-500",
        "bg-gradient-to-r from-gray-900 to-gray-600",
        "bg-gradient-to-r from-fuchsia-500 to-pink-500",
        "bg-gradient-to-r from-violet-500 to-purple-500",
        "bg-gradient-to-r from-yellow-200 to-pink-400",
        "bg-gradient-to-r from-blue-800 to-indigo-900",
        "bg-gradient-to-r from-slate-500 to-stone-700",
        "bg-gradient-to-r from-sky-400 to-cyan-300",
        "bg-gradient-to-r from-violet-600 to-purple-600",
        "bg-gradient-to-r from-teal-200 to-lime-200",
        "bg-gradient-to-r from-blue-400 to-emerald-400",
        "bg-gradient-to-r from-sky-400 to-sky-200",
    ]
    return (
        <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="flex text-white flex-col items-center mb-12 sm:mb-16 lg:mb-20">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">Gradient Card Collection</h1>
                <p className=" text-base sm:text-lg lg:text-xl max-w-3xl text-center">
                    Explore a curated selection of beautiful gradient cards and copy the CSS code to use in your own projects.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {gradients.map((gradient, index) => (
                    <div key={index} className={`${gradient} rounded-lg shadow-lg overflow-hidden`}>
                        <div className="p-6 sm:p-8 lg:p-10">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Gradient {index + 1}</h2>
                            <p className="text-white/80 text-base sm:text-lg lg:text-xl mb-6">A beautiful gradient combination.</p>
                            <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white">
                                Copy CSS
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}