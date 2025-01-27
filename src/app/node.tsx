"use client";
import "./globals.css";
import { useState, useRef } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import Draggable from "react-draggable";

interface NodeProps {
  title: string;
  description: string;
  resourceUrl: string | null;
}

export default function Node({ title, description, resourceUrl }: NodeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dragRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  return (
    <Draggable
      nodeRef={dragRef}
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: 0, y: 0 }}
      scale={0.8}
      defaultClassName="draggable"
      bounds="parent"
    >
      <div
        ref={dragRef}
        data-open={isOpen}
        className="node-drawer flex items-center justify-center border border-amber-400 rounded-full p-10 max-w-xl cursor-move transform-gpu"
      >
        {!isOpen ? (
          <div>
            <div className="flex flex-row space-x-3">
              <h1>{title}</h1>
              <button onClick={() => setIsOpen(!isOpen)}>
                <ChevronDownIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-row space-x-3">
              <h1>{title}</h1>
              <button onClick={() => setIsOpen(!isOpen)}>
                <ChevronUpIcon className="w-6 h-6" />
              </button>
            </div>
            {/* Body */}
            <div>
              <p>{description}</p>
              <p>{resourceUrl}</p>
            </div>
          </div>
        )}
      </div>
    </Draggable>
  );
}
