import React from 'react'

export default function Custom404() {
    return (
        <div className=" text-white flex flex-col justify-center items-center  w-full">
            <div className="text-center">
                <div className="flex justify-center items-center mb-4">
                    <img src="https://cdn.404er.online/_static/404-space-rafiki.svg" alt="404 Error" className="w-40 h-40 object-contain" />
                </div>
                <h1 className="text-4xl font-bold mb-4">POV: You are lost</h1>
                <p className="mb-6">Maybe you are looking for any of the following:</p>
                <a href="https://404er.online" className="text-blue-500 underline mb-4">404er.online</a>
                <br />
                <a href="/" className="text-blue-500 underline">Home</a>
                <footer className="mt-10 text-gray-500">&copy; 404er</footer>
            </div>
        </div>
    )
}
