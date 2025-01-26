import Link from 'next/link';

export default function Home() {
  const resources = [
    {
      title: "Version Control",
      description: "Learn Git and GitHub - essential tools for code collaboration and project management.",
      icon: "📚",
      link: "https://docs.github.com/en/get-started"
    },
    {
      title: "Web Development",
      description: "Start building real web applications with HTML, CSS, and JavaScript fundamentals.",
      icon: "🌐",
      link: "https://developer.mozilla.org/en-US/docs/Learn"
    },
    {
      title: "Project Ideas",
      description: "Practice your skills with beginner-friendly coding projects and tutorials.",
      icon: "💡",
      link: "https://www.freecodecamp.org/news/programming-projects-for-beginners/"
    },
    {
      title: "Best Practices",
      description: "Learn software development best practices, clean code, and design patterns.",
      icon: "✨",
      link: "https://refactoring.guru/"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 px-4">
            <div className="pt-24">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Half-Baked Dev</span>
                  <span className="block text-indigo-400 mt-3">Theory to Practice</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Bridge the gap between computer science theory and practical coding. Find curated resources, tutorials, and guides to help you become a well-rounded developer.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  <div className="rounded-md shadow">
                    <Link href="#resources" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div id="resources" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Learning Resources
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Curated resources to help you start coding with confidence
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
              <p className="text-gray-300 flex-grow">{resource.description}</p>
              <div className="mt-4 text-indigo-400 font-semibold">Learn More →</div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
