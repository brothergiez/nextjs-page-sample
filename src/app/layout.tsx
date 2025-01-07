import './globals.css';
import Navbar from '../components/Navbar';
import { ReactNode } from 'react';

export const metadata = {
	title: 'Dint',
	description: 'Connecting people with calls, chats and more',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
