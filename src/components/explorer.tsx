"use client";

import "@/app/globals.css";
import { useState } from "react";

const categories = [
  {
    name: "Programming Languages",
    description: "Languages used to write software applications, such as JavaScript, Python, Java, and C++."
  },
  {
    name: "Web Development",
    description: "The creation of websites and web applications, involving technologies like HTML, CSS, JavaScript, and frameworks like React and Angular."
  },
  {
    name: "Databases",
    description: "Systems for storing and managing data, including SQL databases like MySQL and PostgreSQL, and NoSQL databases like MongoDB."
  },
  {
    name: "DevOps & Cloud",
    description: "Practices and tools for automating software development and deployment, and cloud services like AWS, Azure, and Google Cloud."
  },
  {
    name: "Software Architecture",
    description: "The high-level structure of software systems, including design patterns, microservices, and architectural styles."
  },
  {
    name: "Operating Systems & Networking",
    description: "The software that manages hardware resources and provides services for computer programs, and the interconnection of computers and devices."
  },
  {
    name: "Specialized Development",
    description: "Development in specialized fields such as game development, mobile app development, and embedded systems."
  }
];

export default function Explorer() {
 
 
  return (
    <div className="flex transform-gpu w-screen h-screen border border-amber-400 rounded-lg items-center justify-center">
      
    </div>
  );
}
