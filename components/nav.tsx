"use client";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import ModeToggle from "./theme-button";

const linkSet = [
    { name: 'Home', href: '/' },
    { name: 'Builder Studio', href: '/studio/builder' },
    { name: 'Documentation', href: '/docs' },
]

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className="bg-transparent text-md p-2 flex justify-between items-center">
            <div className="hover:text-gray-300 font-bold bg-teal-900 py-1 px-4 rounded-md text-white">JudgeFSM</div>
            <div className="flex items-center">
                <div className="flex space-x-0.5 text-white px-1">
                    {
                        linkSet.map((link, i) => (
                            <Link key={link.href} href={link.href} className={`hover:text-gray-300 px-4 ${pathname === link.href ? 'bg-teal-700 text-black hover:text-white' : 'bg-teal-900'} ${i === 0 ? 'rounded-l-md' : ''} ${i === linkSet.length - 1 ? 'rounded-r-md' : ''}`}>
                                {link.name}
                            </Link>
                        ))
                    }
                </div>
                <ModeToggle />
            </div>
        </nav>
    );
}