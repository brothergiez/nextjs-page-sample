"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const handleComingSoon = () => {
        alert("Coming Soon");
    };

    const [isAboutSubmenuOpen, setIsAboutSubmenuOpen] = useState(false);

    return (
        <div
            className="flex min-h-screen flex-col justify-between relative"
            style={{
                background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/images/bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
            }}
        >
            <div className="flex flex-col gap-20 md:flex-row py-20 px-20">
                <div className="w-[300px] h-[600px] self-center">
                    <Image
                        src="/assets/images/iphone.png"
                        alt="iPhone"
                        width={300}
                        height={600}
                        className="w-full h-full"
                    />
                </div>
                <div className="flex flex-1 px-20 gap-10 flex-col justify-center items-center text-center">
                    <Image src="/assets/images/chat.svg" alt="Chat Icon" width={70} height={70} />
                    <p className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white">
                        Connecting people with calls, chats, and more
                    </p>
                    <div className="flex gap-10 flex-col sm:flex-row items-center justify-center">
                        <div className="w-[150px] sm:w-[150px] md:w-[200px]">
                            <Image
                                src="/assets/images/googleplay.svg"
                                alt="Google Play"
                                layout="responsive"
                                width={200}
                                height={90}
                                className="cursor-pointer"
                                onClick={handleComingSoon}
                            />
                        </div>
                        <div className="w-[150px] sm:w-[150px] md:w-[200px]">
                            <Image
                                src="/assets/images/appstore.svg"
                                alt="App Store"
                                layout="responsive"
                                width={200}
                                height={90}
                                className="cursor-pointer"
                                onClick={handleComingSoon}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <footer className="flex md:flex-row flex-col gap-10 items-center border-t-[1px] border-white w-[95%] self-center py-3 justify-between">
                <div className="flex items-center gap-10 flex-col md:flex-row">
                    <div className="relative">
                        <FooterLink
                            title="About"
                            href="#"
                            isDropdown
                            isOpen={isAboutSubmenuOpen}
                            onClick={() => setIsAboutSubmenuOpen(!isAboutSubmenuOpen)}
                        />
                        {isAboutSubmenuOpen && (
                            <div className="absolute bottom-full left-0 text-white rounded shadow-md">
                                <FooterSubLink title="Getting Started" href="/about/getting-started" />
                                <FooterSubLink title="What's New" href="/about/whats-new" />
                                <FooterSubLink
                                    title="Source Code"
                                    href="/about/source-code"
                                    className="last:mb-4" // Tambahkan margin bawah khusus untuk item terakhir
                                />
                            </div>
                        )}
                    </div>
                    <FooterLink title="Support" href="/support" />
                    <FooterLink title="Platform" href="/platform" />
                    <FooterLink title="English" href="/english" />
                </div>
                <div className="flex items-center gap-10 flex-col md:flex-row">
                    <FooterLink title="Privacy Policy" href="/privacy-policy" />
                    <FooterLink title="Terms & Conditions" href="/terms-conditions" />
                </div>
            </footer>
        </div>
    );
}

type FooterLinkProps = {
    title: string;
    href: string;
    isDropdown?: boolean;
    isOpen?: boolean;
    onClick?: () => void;
};

function FooterLink({ title, href, isDropdown, isOpen, onClick }: FooterLinkProps) {
    return (
        <div className="flex gap-3 items-center">
            <a href={href} className="text-[#FFFFFF] font-[400]" onClick={onClick}>
                {title}
            </a>
            {isDropdown ? (
                <Image
                    src={isOpen ? "/assets/images/chevron-up.svg" : "/assets/images/dropdownIcon.svg"}
                    alt={isOpen ? "Chevron Up" : "Dropdown Icon"}
                    width={10}
                    height={10}
                />
            ) : null}
        </div>
    );
}

type FooterSubLinkProps = {
    title: string;
    href: string;
    className?: string;
};

function FooterSubLink({ title, href, className }: FooterSubLinkProps) {
    return (
        <a
            href={href}
            className={`block px-4 py-2 hover:bg-gray-700 rounded whitespace-nowrap ${className}`}
        >
            {title}
        </a>
    );
}
