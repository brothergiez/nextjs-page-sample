export const metadata = {
    title: "What's New",
    description: 'Discover the latest updates and features on our platform.',
};

export default function WhatsNewPage() {
    const updates = [
        {
            date: 'January 2025',
            title: 'New Messaging Features',
            description:
                'We’ve added end-to-end encryption for all chats and introduced a new group video call feature.',
        },
        {
            date: 'December 2024',
            title: 'Improved User Interface',
            description:
                'Our platform now features a revamped user interface for a smoother and more intuitive experience.',
        },
        {
            date: 'November 2024',
            title: 'Bug Fixes and Performance Improvements',
            description:
                'Various bug fixes and optimizations have been implemented to ensure better performance.',
        },
    ];

    return (
        <div className="h-auto text-black flex flex-col items-center py-10 px-6">
            <h1 className="text-4xl font-bold mb-6">What&apos;s New</h1>
            <p className="text-lg text-black mb-10 text-center max-w-2xl">
                Stay up-to-date with the latest features, improvements, and announcements from our team.
            </p>
            <div className="space-y-6 max-w-3xl">
                {updates.map((update, index) => (
                    <div key={index} className="border border-gray-700 rounded-lg p-6">
                        <p className="text-sm text-gray-500">{update.date}</p>
                        <h2 className="text-2xl font-semibold text-black mb-2">{update.title}</h2>
                        <p className="text-black">{update.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
