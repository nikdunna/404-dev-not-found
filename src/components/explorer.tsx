"use client";

import "../app/globals.css";

export default function Explorer() {
  const nodes = [
    {
      id: 1,
      title: "Getting Started with React",
      description:
        "Learn the fundamentals of React including components, props, and state management",
      resourceUrl: "https://react.dev/learn",
    },
    {
      id: 2,
      title: "TypeScript Basics",
      description:
        "Introduction to TypeScript and its core concepts for type-safe JavaScript development",
      resourceUrl: "https://www.typescriptlang.org/docs/",
    },
    {
      id: 3,
      title: "CSS Flexbox Guide",
      description:
        "Master CSS flexbox layout with practical examples and use cases",
      resourceUrl: null,
    },
    {
      id: 4,
      title: "Git Version Control",
      description:
        "Essential Git commands and workflows for effective version control",
      resourceUrl: "https://git-scm.com/doc",
    },
  ];

  return (
    <div className="flex transform-gpu w-screen h-screen border border-amber-400 rounded-lg">
      <div className="flex transform-gpu relative items-center">
       
      </div>
    </div>
  );
}
