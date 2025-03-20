"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {

    const pathname = usePathname();

    console.log(pathname)

    return (
        <nav
            className=" p-4 shadow-md bg-white sticky top-0 z-10 text-black space-x-7"
        >
            <Link
                href={'/'}
                className={pathname === '/' ? 'text-blue-500 underline' : ''}
            >
                Parallel Routes Eg
            </Link>
            <Link
                href={'/photos'}
                className={(pathname === '/photos' || pathname.includes('photos')) ? 'text-blue-500 underline' : ''}
            >
                Interception + Parallel Routes Eg
            </Link>
        </nav>
    )
}
