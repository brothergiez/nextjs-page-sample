export const metadata = {
    title: 'Terms & Conditions',
    description: 'Terms & Conditions for using our website and services.',
};

export default function TermsAndConditions() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gray-100">
            <div className="max-w-3xl bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Terms & Conditions</h1>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Welcome to our Terms & Conditions page. By using our website and services, you agree to
                    the following terms and conditions.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                    By accessing or using our website, you agree to be bound by these terms. If you do not
                    agree, please do not use our services.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use of Services</h2>
                <p className="text-gray-700 leading-relaxed">
                    You agree to use our website and services only for lawful purposes. Any misuse or
                    unauthorized use of our platform is strictly prohibited.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">3. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                    All content on our website, including text, images, and logos, is the property of our
                    company. Unauthorized use, reproduction, or distribution is prohibited.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">4. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                    We are not responsible for any damages, losses, or issues arising from the use of our
                    services. Use our website at your own risk.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">5. Modifications to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify these terms at any time. Please review this page
                    periodically for updates.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">6. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                    These terms are governed by the laws of [Your Country/Region]. Any disputes will be
                    resolved in accordance with these laws.
                </p>

                <p className="mt-8 text-gray-700 text-sm text-center">
                    If you have any questions about these Terms & Conditions, contact us at{' '}
                    <a href="mailto:support@example.com" className="text-blue-500">
                        support@example.com
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
