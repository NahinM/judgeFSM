"use client";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import ModeToggle from "./theme-button";

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className="bg-transparent text-md p-2 flex justify-between items-center">
            <div className="hover:text-gray-300 font-bold bg-teal-900 py-1 px-4 rounded-md text-white">JudgeFSM</div>
            <div className="flex items-center">
                <div className="space-x-0.4 rounded-md bg-teal-900 text-white">
                    <Link href="/" className={`hover:text-gray-300 py-1 px-4 rounded-l-md ${pathname === '/' ? 'bg-teal-400 text-black hover:text-white' : 'bg-teal-900'}`}>Home</Link>
                    <Link href="/studio/builder" className={`hover:text-gray-300 py-1 px-4 ${pathname === '/studio/builder' ? 'bg-teal-400 text-black hover:text-white' : 'bg-teal-900'}`}>Builder Studio</Link>
                    <Link href="/docs" className={`hover:text-gray-400 py-1 px-4 rounded-r-md ${pathname === '/docs' ? 'bg-teal-400 text-black hover:text-white' : 'bg-teal-900'}`}>Documentation</Link>
                </div>
                <ModeToggle />
            </div>
        </nav>
    );
}