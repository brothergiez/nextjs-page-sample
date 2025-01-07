export const metadata = {
    title: 'About Us',
    description: 'Learn more about our company, team, and mission.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gray-100">
            <div className="max-w-3xl bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">About Us</h1>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Welcome to our About page! We are passionate about connecting people through innovative
                    communication tools. Our mission is to provide seamless and secure ways for individuals
                    to communicate with their loved ones, colleagues, and communities.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-black">Our Story</h2>
                <p className="text-gray-700 leading-relaxed">
                    Founded in [Year], our company began as a small startup with a vision to revolutionize how
                    people connect. Over the years, we have grown into a global platform trusted by millions
                    of users worldwide.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-black">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                    Our mission is to make communication easier, faster, and more accessible for everyone. We
                    believe that staying connected should be simple, whether you're making a video call,
                    sending a message, or sharing moments with your loved ones.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-black">Our Team</h2>
                <p className="text-gray-700 leading-relaxed">
                    Behind our success is a team of dedicated professionals who work tirelessly to improve our
                    services. Our engineers, designers, and support staff are committed to ensuring the best
                    experience for our users.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-black">Get in Touch</h2>
                <p className="text-gray-700 leading-relaxed">
                    We'd love to hear from you! If you have any questions, feedback, or suggestions, please
                    feel free to contact us at{' '}
                    <a href="mailto:support@example.com" className="text-blue-500">
                        support@example.com
                    </a>
                    .
                </p>

                <p className="mt-8 text-gray-700 text-sm text-center">
                    Thank you for choosing our platform. We look forward to connecting with you!
                </p>
            </div>
        </div>
    );
}
