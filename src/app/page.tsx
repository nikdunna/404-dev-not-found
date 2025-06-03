import Link from "next/link";
import Image from "next/image";
import Explorer from "../components/explorer";

export default function Home() {
  const resources = [
    {
      title: "Version Control",
      description:
        "Because 'final_final_v3_REAL.py' isn't a sustainable naming convention. Learn Git and GitHub.",
      icon: "🍁",
      link: "https://docs.github.com/en/get-started",
    },
    {
      title: "Web Development",
      description:
        "From 'How to center a div?' to 'How to center a div?' - Master the art of web development.",
      icon: "🌐",
      link: "https://developer.mozilla.org/en-US/docs/Learn",
    },
    {
      title: "Project Ideas",
      description:
        "Your 7th todo app isn't impressing anyone. Find unique project inspirations here, sorted by language.",
      icon: "🔥",
      link: "https://github.com/practical-tutorials/project-based-learning",
    },
    {
      title: "Best Practices",
      description:
        "Learn to write code that won't make your fellow developers cry. Clean code and design patterns.",
      icon: "✨",
      link: "https://refactoring.guru/",
    },
    {
      title: "System Design",
      description: "'I swear it works on my machine'. Scale your applications.",
      icon: "🌳",
      link: "https://github.com/donnemartin/system-design-primer",
    },
    {
      title: "Interview Prep",
      description:
        "Go learn those red black trees, you'll definitely need them. Get ready!",
      icon: "📚",
      link: "https://leetcode.com",
    },
    {
      title: "DevOps Basics",
      description:
        "From 'it's alive!' to 'it's alive! (in production)'. Learn deployment and CI/CD.",
      icon: "🚀",
      link: "https://roadmap.sh/devops",
    },
    {
      title: "Soft Skills",
      description:
        "Yes, you need to interact with humans. Enhance your communication.",
      icon: "🤝",
      link: "https://www.coursera.org/articles/soft-https://medium.com/geekculture/soft-skills-for-software-engineers-part-1-communications-468f0e1f546e",
    },
  ];

  return (
    <main className="min-h-screen grid-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-10 sm:mt-16">
            <div className="float-animation relative w-full max-w-2xl mx-auto pt-4 px-4 sm:px-0">
              <Image
                src="/hero.gif"
                alt="Hero Animation"
                width={800}
                height={400}
                priority
                className="w-full h-auto"
              />
            </div>
            <div className="card-glow-gradient-wrapper mt-6 mx-4 sm:mx-0">
              <p className="card-content max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 backdrop-blur-sm p-3 sm:p-4 rounded-lg">
                From &quot;I know how to balance a binary tree&quot; to
                &quot;World-Class Developer&quot; (or at least &quot;Employable
                Developer&quot; - let&apos;s be real here). Find the resources
                you need to transform your theoretical knowledge into practical
                skills.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <Link
                href="#resources"
                className="px-6 sm:px-8 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 transform hover:scale-105 transition-all duration-200 card-glow"
              >
                &lt;learn /&gt;
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Explorer (under construction spot) */}
      <div className="mt-8 sm:mt-12 flex justify-center items-cente">
        <Explorer />
      </div>





      {/* Resources Grid */}
      <div
        id="resources"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
      >
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 sm:text-4xl">
            &lt;learning_resources /&gt;
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-xl text-gray-300 p-3 sm:p-4 rounded-lg">
            Because actually knowing what you&apos;re doing feels great
          </p>
        </div>
      
        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-4 sm:p-8 bg-gray-900/50 backdrop-blur-sm rounded-lg hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 card-glow border border-orange-500/20"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200 leaf-animation">
                {resource.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-2">
                {resource.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 flex-grow">
                {resource.description}
              </p>
              <div className="mt-3 sm:mt-4 text-sm sm:text-base text-orange-400 font-semibold group-hover:text-amber-400 transition-colors duration-200">
                Learn More →
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
