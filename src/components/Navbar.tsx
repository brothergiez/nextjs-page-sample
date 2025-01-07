"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LinkNavbar from '../components/LinkNavbar';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    const isHomepage = pathname === '/';

    if (isHomepage) {
        return null;
    }

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="bg-gray-800 text-white shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <LinkNavbar href="/" onClick={closeMenu} className="text-2xl font-bold">
                    Dint+
                </LinkNavbar>
                <button
                    className="block md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
                <div
                    className={`${isOpen ? 'flex' : 'hidden'
                        } md:flex md:items-center md:space-x-6 flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent z-10`}
                >
                    <LinkNavbar href="/about" onClick={closeMenu}>
                        About
                    </LinkNavbar>
                    <LinkNavbar href="/support" onClick={closeMenu}>
                        Support
                    </LinkNavbar>
                    <LinkNavbar href="/platform" onClick={closeMenu}>
                        Platform
                    </LinkNavbar>
                    <LinkNavbar href="/english" onClick={closeMenu}>
                        English
                    </LinkNavbar>
                    <LinkNavbar href="/privacy-policy" onClick={closeMenu}>
                        Privacy Policy
                    </LinkNavbar>
                    <LinkNavbar href="/terms-conditions" onClick={closeMenu}>
                        Terms & Conditions
                    </LinkNavbar>
                </div>
            </div>
        </nav>
    );
}
