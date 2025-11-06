import { i } from 'motion/react-client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip'

const Instructor = () => {
  const instructors = [
  {
    id: 1,
    name: "Liam Carter",
    designation: "Guitar Instructor",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Sophia Rivera",
    designation: "Digital Artist",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Ethan Brooks",
    designation: "Music Producer",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Ava Mitchell",
    designation: "Piano Instructor",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

  return (
    <div className="h-160 w-full dark:bg-black dark:bg-grid-white/20 relative flex flex-col justify-center overflow-hidden items-center">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center mb-4">
        Meet Our Instructors
      </p>
      <p className="text-center mb-12 text-white">
        Our instructors are industry professionals with a wealth of experience.
      </p>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={instructors} />
    </div>
    </WavyBackground>
    </div>
  )
}

export default Instructor
