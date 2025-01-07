"use client";

import Image from 'next/image';

export default function Header() {
    const handleComingSoon = () => {
        alert('Coming Soon');
    };
    return (
        <div
            className="flex min-h-screen flex-col justify-between relative"
            style={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/images/bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
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
                    <FooterLink title="About" href="/about" />
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
};

function FooterLink({ title, href }: FooterLinkProps) {
    return (
        <div className="flex gap-3 items-center">
            <a href={href} className="text-[#FFFFFF] font-[400]">
                {title}
            </a>
            <Image src="/assets/images/dropdownIcon.svg" alt="Dropdown Icon" width={10} height={10} />
        </div>
    );
}
