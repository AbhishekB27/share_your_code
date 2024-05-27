import CodeShare from "@/components/codeShare/CodeShare";
import Image from "next/image";
import { Alex_Brush } from "next/font/google";

const AlexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
})
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center text-white justify-center">
      <div className="min-h-screen py-12 flex flex-col justify-center items-center gap-14 max-w-4xl text-center ">
        {/* hero section */}
        <div className="space-y-6">
          <p className="text-indigo-600 font-medium">Free Web Application</p>
          <h1 className="text-5xl font-semibold text-white">Welcome to ShareYourCode
          </h1>
          <p className="text-xl text-gray-100">Easily share your code snippets with friends and colleagues. Securely store and manage your code with privacy options.</p>
          <button className="bg-[#813EFB] px-8 py-3 rounded-3xl">Get Started</button>
        </div>
        <div className={`${AlexBrush.className} relative grid place-items-center`}>
          <p className="font-semibold tracking-widest text-3xl absolute">  COPY & PASTE <br /> YOUR CODE</p>
          <Image className="w-full h-full" alt="image" width={100} height={100} src='/HeroImage.svg' />
        </div>
      </div>


      <CodeShare code="function foo() {console.log('Hello World')};" />
    </main>
  );
}
