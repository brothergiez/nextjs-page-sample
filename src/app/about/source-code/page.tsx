export const metadata = {
    title: 'Source Code',
    description: 'Access and explore the source code of our platform.',
  };
  
  export default function SourceCodePage() {
    const repositories = [
      {
        name: 'Frontend Repository',
        description: 'The source code for the frontend of our platform.',
        url: 'https://github.com/example/frontend-repo',
      },
      {
        name: 'Backend Repository',
        description: 'The source code for the backend services.',
        url: 'https://github.com/example/backend-repo',
      },
      {
        name: 'Mobile App Repository',
        description: 'The source code for our mobile applications.',
        url: 'https://github.com/example/mobile-repo',
      },
    ];
  
    return (
      <div className="h-auto text-black flex flex-col items-center py-10 px-6">
        <h1 className="text-4xl font-bold mb-6">Source Code</h1>
        <p className="text-lg text-black mb-10 text-center max-w-2xl">
          Explore the source code of our platform and contribute to our open-source projects.
        </p>
        <div className="space-y-6 max-w-3xl">
          {repositories.map((repo, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-black mb-2">{repo.name}</h2>
              <p className="text-black mb-4">{repo.description}</p>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:underline"
              >
                Visit Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  