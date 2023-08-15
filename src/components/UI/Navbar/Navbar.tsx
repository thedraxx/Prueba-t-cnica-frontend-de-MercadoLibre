'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {

    const [search, setSearch] = useState("")

    return (
        <div
            className="flex items-center justify-center w-full h-16 px-6 dark:bg-neutral-900 dark:text-neutral-100"
            style={{ backgroundColor: "#FFE600" }}
        >
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mr-10"
                src="/ML-Logo.svg"
                alt="Next.js Logo"
                width={50}
                height={37}
                priority
            />
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-2 w-8/12 flex border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            />
            <button
                type="submit"
                className="relative right-0 top-0 mr-4 bg-fuchsia-50 justify-center items-center rounded-xl p-3"
            >
                <svg
                    className="text-gray-600 h-4 w-4 fill-current bg-gray justify-center items-center"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                        className="heroicon-ui"
                        d="M15.56 14.44a8 8 0 111.06-1.06l5.02 5.02-1.06 1.06-5.02-5.02zM10 16a6 6 0 100-12 6 6 0 000 12z"
                    />
                </svg>
            </button>
        </div>
    )
}

export default Navbar