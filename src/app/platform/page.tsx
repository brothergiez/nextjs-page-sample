export const metadata = {
	title: 'Platform',
	description: 'Learn more about our platform and its features.',
};

export default function PlatformPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gray-100">
			<div className="max-w-3xl bg-white shadow-md rounded-lg p-8">
				<h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Platform</h1>
				<p className="text-gray-700 leading-relaxed mb-4">
					Our platform is designed to connect people with innovative communication tools that are
					simple, secure, and efficient. Whether you're looking to make a call, send a message, or
					collaborate with a team, our platform has you covered.
				</p>

				<h2 className="text-2xl font-semibold mt-6 mb-4">Key Features</h2>
				<ul className="list-disc list-inside text-gray-700 leading-relaxed">
					<li>High-quality voice and video calls</li>
					<li>Real-time messaging with rich media sharing</li>
					<li>End-to-end encryption for your privacy</li>
					<li>Seamless integration across devices</li>
					<li>Customizable settings to fit your needs</li>
				</ul>

				<h2 className="text-2xl font-semibold mt-6 mb-4">Why Choose Us?</h2>
				<p className="text-gray-700 leading-relaxed">
					Our platform is built with the latest technologies to ensure reliability, speed, and
					security. We prioritize user experience and continuously innovate to provide the best
					communication tools available.
				</p>

				<h2 className="text-2xl font-semibold mt-6 mb-4">Available Platforms</h2>
				<p className="text-gray-700 leading-relaxed">
					Our platform is available on multiple devices and operating systems, including:
				</p>
				<ul className="list-disc list-inside text-gray-700 leading-relaxed">
					<li>Web browsers (Chrome, Firefox, Safari, and more)</li>
					<li>iOS and Android mobile apps</li>
					<li>Desktop apps for Windows and macOS</li>
				</ul>

				<h2 className="text-2xl font-semibold mt-6 mb-4">Get Started Today</h2>
				<p className="text-gray-700 leading-relaxed">
					Join millions of users who trust our platform for their communication needs. Whether for
					personal or professional use, our platform is here to help you stay connected.
				</p>

				<p className="mt-8 text-gray-700 text-sm text-center">
					If you have any questions or need support, feel free to reach out at{' '}
					<a href="mailto:support@example.com" className="text-blue-500">
						support@example.com
					</a>
					.
				</p>
			</div>
		</div>
	);
}
