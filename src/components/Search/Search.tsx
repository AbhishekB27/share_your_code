"use client"
import React from 'react'
import { Input } from '../ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const getSearch = useDebouncedCallback((search: string) => {
        const params = new URLSearchParams(searchParams);
        if (search) {
            params.set('search', search);
        } else {
            params.delete('search');
        }
        replace(`${pathname}?${params.toString()}`);

    }, 300)

    return (
        <div className="relative w-full max-w-md">
            <Input
                onChange={(e) => { getSearch(e.target.value) }}
                placeholder="Search snippets..."
                className="pr-10 text-black focus:bg-background border border-muted rounded-md"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <SearchIcon className="w-5 h-5 text-muted-foreground" />
            </div>
        </div>
    )
}

export default Search

function SearchIcon(props: { className: string }) {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}