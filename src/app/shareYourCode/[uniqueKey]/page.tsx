"use client"
// import { useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    // const searchParams = useSearchParams()
    // console.log(Boolean(searchParams.get('isPrivate')))
    const data = async () => {
        const response = await fetch('http://localhost:3000/api/shareYourCode/sjlkdjslkdf?isPrivate=true')
        const result = await response.json()
        console.log(result)
        return result
    }
    data()
    return (
        <div>page</div>
    )
}

export default page