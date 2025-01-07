import Link from 'next/link';

type LinkNavbarProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function LinkNavbar({ href, children, onClick, className }: LinkNavbarProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-4 py-2 md:px-0 md:py-0 hover:text-gray-300 ${className || ''}`}
    >
      {children}
    </Link>
  );
}
