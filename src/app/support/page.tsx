export const metadata = {
	title: 'Support',
	description: 'Get help and find answers to your questions on our Support page.',
};

export default function SupportPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gray-100">
			<div className="max-w-3xl bg-white shadow-md rounded-lg p-8">
				<h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Support</h1>
				<p className="text-gray-700 leading-relaxed mb-4">
					Need help? You’re in the right place. Our support team is here to assist you with any
					questions, issues, or feedback you may have. Explore the resources below to get started.
				</p>

				<h2 className="text-2xl font-semibold mt-6 mb-4">FAQs</h2>
				<p className="text-gray-700 leading-relaxed">
					Check out our Frequently Asked Questions (FAQs) for quick answers to common queries.
				</p>
				<ul className="list-disc list-inside text-gray-700 leading-relaxed">
					<li>How do I create an account?</li>
					<li>How can I reset my password?</li>
					<li>What devices are supported?</li>
					<li>How do I contact customer support?</li>
				</ul>

				<h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
				<p className="text-gray-700 leading-relaxed">
					If you can’t find what you’re looking for, our team is here to help. Reach out to us at:
				</p>
				<ul className="list-disc list-inside text-gray-700 leading-relaxed">
					<li>Email: <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a></li>
					<li>Phone: +1-234-567-890</li>
					<li>Live Chat: Available 24/7 on our website</li>
				</ul>

				<h2 className="text-2xl font-semibold mt-6 mb-4">Support Hours</h2>
				<p className="text-gray-700 leading-relaxed">
					Our support team is available during the following hours:
				</p>
				<ul className="list-disc list-inside text-gray-700 leading-relaxed">
					<li>Monday to Friday: 9:00 AM - 6:00 PM</li>
					<li>Saturday: 10:00 AM - 4:00 PM</li>
					<li>Sunday: Closed</li>
				</ul>

				<h2 className="text-2xl font-semibold mt-6 mb-4">Feedback</h2>
				<p className="text-gray-700 leading-relaxed">
					We’d love to hear from you! If you have any feedback or suggestions, please let us know
					how we can improve.
				</p>

				<p className="mt-8 text-gray-700 text-sm text-center">
					Thank you for choosing our platform. We’re here to support you every step of the way!
				</p>
			</div>
		</div>
	);
}
