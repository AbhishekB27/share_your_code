import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Indie_Flower } from "next/font/google";
import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const IndieFlower = Indie_Flower({
    weight: '400',
    subsets: ['latin'],
})

const Header = async () => {
    const session = await auth()
    console.log(session, "header")
    const navLinks = [
        {
            name: 'Snippets',
            path: '/snippets',
            icons: '',
            key: 1
        },
        {
            name: 'Media',
            path: '/media',
            icons: '',
            key: 2
        }
    ]
    const authLinks = [{

        name: 'SignUp',
        path: '/signUp',
        key: 3

    },
    {
        name: 'Login',
        path: '/login',
        key: 4
    }]
    return (
        <div className=' bg-[#020617] flex justify-between items-center text-white'>
            <Link className='flex justify-start items-center' href='/'><Image src='/ShareYourCode.png' alt='logo' width={100} height={100} /> <span className={`${IndieFlower.className} text-3xl font-extrabold`}>Share Your Code</span></Link>

            <div className='flex justify-start items-center gap-8 divide-x-2'>
                <div className='font-medium space-x-6'>
                    {
                        navLinks.map(item => {
                            return <Link key={item?.key} href={item.path}>{item.name}</Link>
                        })
                    }
                </div>
                <div className='font-medium space-x-3 px-8'>
                    {
                        session ? <div className='flex gap-4'>
                            <Avatar>
                                <AvatarImage src={session?.user?.image || "https://github.com/shadcn.png"} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <form action={async () => {
                                "use server"
                                await signOut()
                            }}>
                                <Button type='submit'>Logout</Button>
                            </form>
                        </div> : authLinks.map(item => {
                            return <Link key={item?.key} className='' href={item.path}>{item.name}</Link>
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Header