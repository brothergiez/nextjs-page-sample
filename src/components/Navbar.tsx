"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const isHomepage = pathname === '/';

    if (isHomepage) {
        return null; // Jangan tampilkan Navbar di homepage
    }
    return (
        <nav className="bg-gray-800 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link href="/">
                    Dint+
                </Link>

                <div className="flex space-x-6">
                    <Link href="/about">
                        About
                    </Link>
                    <Link href="/support">
                        Support
                    </Link>
                    <Link href="/platform">
                        Platform
                    </Link>
                    <Link href="/english">
                        English
                    </Link>
                    <Link href="/privacy-policy">
                        Privacy Policy
                    </Link>
                    <Link href="/terms-conditions">
                        Terms & Conditions
                    </Link>
                </div>
            </div>
        </nav>
    );
}
