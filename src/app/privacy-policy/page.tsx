export const metadata = {
    title: 'Privacy Policy',
    description: 'Our Privacy Policy outlines how we handle your data.',
};

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gray-100">
            <div className="max-w-3xl bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Privacy Policy</h1>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Welcome to our Privacy Policy page. We value your privacy and are committed to protecting
                    your personal information. This page explains how we collect, use, and safeguard your
                    data when you interact with our website and services.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-black">1. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed">
                    We collect personal information that you provide to us, such as your name, email address,
                    and other details when you sign up or contact us. Additionally, we collect non-personal
                    information such as browser type, device information, and IP address for analytics
                    purposes.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-black">2. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed">
                    Your information is used to provide and improve our services, respond to your inquiries,
                    send updates, and personalize your experience. We may also use your data for analytics to
                    understand user behavior and improve our website.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-black">3. Sharing of Information</h2>
                <p className="text-gray-700 leading-relaxed">
                    We do not share your personal information with third parties, except as required by law
                    or to provide specific services (e.g., payment processing) that are essential to our
                    operations.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-black">4. Security</h2>
                <p className="text-gray-700 leading-relaxed">
                    We take reasonable measures to secure your personal information from unauthorized access,
                    loss, or misuse. However, no online service can guarantee 100% security.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-black">5. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed">
                    You have the right to access, update, or delete your personal information. If you have
                    any questions or requests, feel free to contact us.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-black">6. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. Please check this page periodically
                    for updates.
                </p>

                <p className="mt-8 text-gray-700 text-sm text-center">
                    If you have any questions about this Privacy Policy, contact us at{' '}
                    <a href="mailto:support@dint.com" className="text-blue-500">
                        support@dint.com
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
