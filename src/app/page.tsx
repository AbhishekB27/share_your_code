
import Image from "next/image";
import { Indie_Flower } from "next/font/google";
import Link from "next/link";

const IndieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
})
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center text-white justify-center z-10">
      <div className="min-h-screen flex flex-col justify-center items-center gap-14 max-w-4xl text-center ">
        {/* hero section */}
        <div className="space-y-6">
          <p className="text-indigo-600 font-medium">Free Web Application</p>
          <h1 className="text-5xl font-semibold text-white">Welcome to ShareYourCode
          </h1>
          <p className="text-xl text-gray-100">Easily share your code snippets with friends and colleagues. Securely store and manage your code with privacy options.</p>
          <article
            className="hover:animate-background mx-auto rounded-xl w-fit bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
          >
            <div className="rounded-[10px] py-2 px-6   bg-gray-900">
              <Link href='/shareYourCode'>Get Started</Link>
            </div>
          </article>
        </div>
        <div className={`${IndieFlower.className} relative grid place-items-center`}>
          <Image className="absolute right-[-5rem] top-0 rotate-[45deg]" alt="image" width={100} height={100} src='/Arrow.svg' />
          <Image className="absolute left-[-5rem] top-60 rotate-[70deg]" alt="image" width={100} height={100} src='/Arrow2.svg' />

          <p className="font-semibold tracking-widest text-3xl absolute">  COPY & PASTE <br /> YOUR CODE</p>
          <Image className="w-full h-full" alt="image" width={100} height={100} src='/HeroImage.svg' />
        </div>
      </div>


    </main>
  );
}
