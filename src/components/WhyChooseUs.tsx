"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Learn from the Best",
    description:
      "Get guided by professional musicians and experienced instructors who help you master your instrument step by step. Learn techniques, rhythm, and performance skills directly from the experts.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Learn from the Best
      </div>
    ),
  },
  {
    title: "Interactive Lessons",
    description:
      "Join live, hands-on classes designed to keep you engaged. Watch demonstrations, play along with your instructor, and receive instant feedback to improve faster than ever.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] w-full h-full flex items-center justify-center">
          Interactive Lessons
        </div>
      </div>
    ),
  },
  {
    title: "Track Your Progress",
    description:
      "Stay motivated with progress tracking tools that record your lessons, milestones, and achievements. See how your skills evolve week by week as you practice and perform.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Track Your Progress
      </div>
    ),
  },
  {
    title: "Join the Community",
    description:
      "Connect with other passionate learners, collaborate on creative projects, and participate in music challenges. Share your recordings, get feedback, and grow together as artists.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Join the Community
      </div>
    ),
  },
];
function WhyChooseUs() {
  return (
    <div className="px-4">
      <StickyScroll content={content} />
    </div>
  );
}
export default WhyChooseUs;