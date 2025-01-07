export const metadata = {
    title: 'English',
    description: 'Learn about language settings and English-specific details on our platform.',
};

export default function EnglishPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gray-100">
            <div className="max-w-3xl bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">English Language Settings</h1>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Welcome to the English page! Our platform supports multiple languages, including English,
                    to provide a seamless experience for our users worldwide.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Why Choose English?</h2>
                <p className="text-gray-700 leading-relaxed">
                    English is one of the most widely spoken languages globally, making it an essential
                    option for communication. By selecting English as your preferred language, you can enjoy
                    a localized experience tailored to your needs.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">How to Change Language Settings?</h2>
                <p className="text-gray-700 leading-relaxed">
                    To switch to English or another language, follow these steps:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Go to the settings menu on your account.</li>
                    <li>Select the "Language" option.</li>
                    <li>Choose "English" from the list of available languages.</li>
                    <li>Save your changes and enjoy the updated experience!</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Need Help?</h2>
                <p className="text-gray-700 leading-relaxed">
                    If you encounter any issues with language settings or have questions about using English
                    on our platform, feel free to contact our support team at{' '}
                    <a href="mailto:support@example.com" className="text-blue-500">
                        support@example.com
                    </a>
                    .
                </p>

                <p className="mt-8 text-gray-700 text-sm text-center">
                    Thank you for choosing our platform. We’re here to make your experience as smooth as
                    possible in your preferred language.
                </p>
            </div>
        </div>
    );
}
