import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect'


const UpcomingWebinars = () => {
  const webinars = [
  {
    title: "The Art of Sound Design",
    description:
      "Explore the creative process behind crafting immersive soundscapes for films and music.",
    link: "https://example.com/webinar/sound-design",
  },
  {
    title: "Mastering Digital Illustration",
    description:
      "Learn digital painting techniques, color theory, and composition tips from industry professionals.",
    link: "https://example.com/webinar/digital-illustration",
  },
  {
    title: "Building a Music Brand Online",
    description:
      "Understand how to grow your presence as an independent artist using social media and digital tools.",
    link: "https://example.com/webinar/music-brand",
  },
  {
    title: "Creative Coding for Interactive Art",
    description:
      "Dive into creative coding with JavaScript and explore how technology can enhance artistic expression.",
    link: "https://example.com/webinar/creative-coding",
  },
  {
    title: "Mixing and Mastering Essentials",
    description:
      "A practical session on audio mixing, mastering techniques, and using digital audio workstations effectively.",
    link: "https://example.com/webinar/mixing-mastering",
  },
  {
    title: "AI and the Future of Music",
    description:
      "Discover how artificial intelligence is transforming composition, sound generation, and music production.",
    link: "https://example.com/webinar/ai-in-music",
  },
];

  return (
    <div className="p-16 bg-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-2xl font-bold text-white text-center">Upcoming Webinars</div>
        <div className="mt-10"><HoverEffect items={webinars} /></div>
        <div className="mt-10 text-center">
          <Link href="/webinars" className="text-blue-500 hover:underline">
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
