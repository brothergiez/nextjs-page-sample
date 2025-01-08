export const metadata = {
    title: 'Getting Started',
    description: 'Learn how to get started with our platform.',
};

export default function GettingStartedPage() {
    return (
        <div className="h-auto text-black flex flex-col items-center  py-10 px-6">
            <h1 className="text-4xl font-bold mb-6">Getting Started</h1>
            <p className="text-lg text-black mb-4 text-center max-w-2xl">
                Welcome to our platform! Follow these steps to get started and make the most out of our services.
            </p>
            <ol className="list-decimal list-inside text-black max-w-2xl space-y-4">
                <li>
                    <strong>Sign Up:</strong> Create an account by visiting the{' '}
                    <a href="/signup" className="text-blue-500 hover:underline">
                        Sign Up
                    </a>{' '}
                    page.
                </li>
                <li>
                    <strong>Explore Features:</strong> Browse through our features and tools to find what suits you best.
                </li>
                <li>
                    <strong>Get Support:</strong> If you have any questions, visit the{' '}
                    <a href="/support" className="text-blue-500 hover:underline">
                        Support
                    </a>{' '}
                    page for assistance.
                </li>
                <li>
                    <strong>Stay Updated:</strong> Check out the{' '}
                    <a href="/about/whats-new" className="text-blue-500 hover:underline">
                        What&apos;s New
                    </a>{' '}
                    page to learn about the latest updates.
                </li>
            </ol>
        </div>
    );
}
