import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Indie_Flower } from "next/font/google";
import { Key } from 'lucide-react';

const IndieFlower = Indie_Flower({
    weight: '400',
    subsets: ['latin'],
})

const Header = () => {
    const navLinks = [
        {
            name: 'Snippets',
            path: '/snippets',
            icons: '',
            Key: 1
        },
        {
            name: 'Gradients',
            path: '/gradients',
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
        path: '/signIn',
        key: 4
    }]
    return (
        <div className=' bg-slate-600/10 flex justify-between items-center text-white'>
            <Link className='flex justify-start items-center' href='/'><Image src='/ShareYourCode.png' alt='logo' width={100} height={100} /> <span className={`${IndieFlower.className} text-3xl font-extrabold`}>Share Your Code</span></Link>
            <div className='flex justify-start items-center gap-8 divide-x-2'>
                <div className='font-medium space-x-3'>
                    {
                        navLinks.map(item => {
                            return <Link key={item?.key} href={item.path}>{item.name}</Link>
                        })
                    }
                </div>
                <div className='font-medium space-x-3 px-8'>
                    {
                        authLinks.map(item => {
                            return <Link key={item?.key} className='' href={item.path}>{item.name}</Link>
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Header