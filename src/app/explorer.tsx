"use client";

import "./globals.css";
// import { useState } from "react";
// import Node from "./node";

export default function Explorer() {
  // const nodes = [
  //   {
  //     id: 1,
  //     title: "Getting Started with React",
  //     description:
  //       "Learn the fundamentals of React including components, props, and state management",
  //     resourceUrl: "https://react.dev/learn",
  //   },
  //   {
  //     id: 2,
  //     title: "TypeScript Basics",
  //     description:
  //       "Introduction to TypeScript and its core concepts for type-safe JavaScript development",
  //     resourceUrl: "https://www.typescriptlang.org/docs/",
  //   },
  //   {
  //     id: 3,
  //     title: "CSS Flexbox Guide",
  //     description:
  //       "Master CSS flexbox layout with practical examples and use cases",
  //     resourceUrl: null,
  //   },
  //   {
  //     id: 4,
  //     title: "Git Version Control",
  //     description:
  //       "Essential Git commands and workflows for effective version control",
  //     resourceUrl: "https://git-scm.com/doc",
  //   },
  // ];

  return (
    <div className="flex transform-gpu relative items-center justify-center w-screen h-screen border border-amber-400 rounded-lg">
      <h1 className="text-xl text-center">
        Full information explorer{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
          under construction
        </span>
      </h1> 
      {/* {nodes.map((node) => (
        <Node
          key={node.id}
          title={node.title}
          description={node.description}
          resourceUrl={node.resourceUrl}
        />
      ))} */}

    </div>
  );
}
