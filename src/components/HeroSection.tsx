import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-160  w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="gray"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-gradient-to-b from-neutral-50 to bg-neutral-400">Master the art of music</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-500 max-w-lg mx-auto">Join our community of passionate musicians and take your skills to the next level.</p>
        <div className="mt-4"><Link href="/courses" className="inline-block text-white py-2 px-4 rounded-md">
        <HoverBorderGradient
        containerClassName="rounded-full px-6 py-2"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        Explore Courses
      </HoverBorderGradient>
      </Link>
        </div>
      </div>
      
    </div>
  )
}

export default HeroSection
