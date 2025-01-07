import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import { ReactNode } from 'react';

export const metadata = {
	title: 'Dint',
	description: 'Connecting people with calls, chats and more',
};

const inter = Inter({
	subsets: ['latin'],
	fallback: ['Arial', 'sans-serif'],
  });

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.className}>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
