"use client";
import { div } from "motion/react-client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <div className="h-160 w-full dark:bg-black dark:bg-grid-white/20 relative flex flex-col justify-center overflow-hidden items-center">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear from Our Students</h2>

      <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Joining this academy completely changed my musical journey. The instructors are incredibly patient and talented, and the lessons are structured to make learning both fun and effective.",
    name: "Arjun Mehta",
    title: "Guitar Student",
  },
  {
    quote:
      "I’ve always dreamed of playing the piano confidently, and now I finally can! The live sessions and personal feedback helped me progress faster than I ever imagined.",
    name: "Riya Sharma",
    title: "Piano Learner",
  },
  {
    quote:
      "The online platform feels just like being in a real studio. The interactive lessons and supportive community keep me inspired every single day.",
    name: "Ananya Patel",
    title: "Vocal Training Student",
  },
  {
    quote:
      "From understanding music theory to composing my first song, the mentors guided me through every step. The course structure is clear, motivating, and creative.",
    name: "Rahul Sen",
    title: "Music Composition Student",
  },
  {
    quote:
      "I joined to learn drumming basics, but ended up performing in a live online concert within months! The energy and encouragement here are unmatched.",
    name: "Neha Verma",
    title: "Drums Enthusiast",
  },
  {
    quote:
      "The lessons are professional yet easy to follow. I love how every class focuses on real progress instead of rushing through topics.",
    name: "Aarav Gupta",
    title: "Violin Student",
  },
];
