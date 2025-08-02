import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "  EDS Branding",
    slug: "EDSBranding",
    category: "Graphic Design",
    description: "Complete brand identity for a college club",
    coverImage: "/edscover.png",
    role: "Brand Designer",
    timeline: "Nov 2024 - Dec 2024",
    tools: "Adobe Illustrator, Photoshop, Canva",
    content:
      "I crafted the brand identity for Echelon Dev Society, a hackathon club targeting a Gen Z audience. The brand needed to feel energetic and futuristic while remaining approachable and fun. The identity features a playful cat-bot mascot to embody this balance. The color scheme uses a clean black-and-white base with an electric blue accent for a tech-forward feel, while iridescent gradients add a modern, cutting-edge vibe that connects with its digital-native members.",
    gallery: [
      "/eds1.png",
      "/eds2.png",
      "/eds3.png",
    ],
  },
  {
    id: 2,
    title: "Explainer Video Series",
    slug: "explainervideos",
    category: "Video Editing",
    description: "Motion Graphics, Video Post Production",
    coverImage: "/placeholder.svg?height=600&width=800",
    role: "Video Editor",
    timeline: "July 2025 - PRESENT",
    tools: "CapCut, After Effects, Photoshop",
    content:
      "Edited a multi-part explainer video series for Bhindi AI, focused on clear visual pacing and clean transitions. I handled all post-production: cutting voiceovers to match visuals,chroma keying, adding motion graphics, and ensuring consistency across episodes. The goal was clarity, speed, and keeping viewers engaged without overwhelming them.",
    video:[
      "https://youtu.be/Ofsj9E6i5is",
      "https://www.youtube.com/watch?v=0EpZlmC7f-I",
      "https://www.youtube.com/watch?v=06P5l5Pk9z0"
    ]
  },
  {
    id: 3,
    title: "Event Branding",
    slug: "hackathonpromo",
    category: "Graphic Design",
    description: "Branding & Merch Design",
    coverImage: "/hackwave1.png",
    role: "Lead Designer",
    timeline: "July 2025 - Aug 2025",
    tools: "Adobe Illustrator, Photoshop, Kittl, After Affects",
    content:
      "Created branding and merchandise for Hackwave with a playful, anime-inspired aesthetic. The designs leaned into pastel colors, cute mascot, and clean linework—applied across stickers, badges, tees, and social assets. The goal was to capture an energetic, friendly vibe that resonated with a creative, online-first community.",
    gallery: [
      "/hackwave2.png",
      "/hackwave3.png",
      "/hackwave4.png",
    ],
  },
  {
    id: 4,
    title: "Cinematic Edits",
    slug: "cinematography",
    category: "Video Editing",
    description: "Videography & Post Production",
    coverImage: "/placeholder.svg?height=600&width=800",
    role: "videographer & editor",
    timeline: "May 2025 - PRESENT",
    tools: "After Effects, CapCut",
    content:
      "Shot and edited a series of cinematic videos with a focus on visual storytelling, atmosphere, and emotion. I handled the full production workflow — from planning shots and capturing footage to editing, sound design, and color grading. Each piece was built to feel intentional and immersive, using light, movement, and pacing to carry the mood.",
    video: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },

  {
    id: 5,
    title: "KANBAN BOARD",
    slug: "temple-anti-theft",
    category: "Front-End Development",
    description: "Task Management / Web App / Minimal ",
    coverImage: "/kanban3.png",
    role: " Developer",
    timeline: "July 2025",
    tools: "Next.JS, TailwindCSS, Web Storage API, React",
    content:
      "This project is a client-side Kanban board application that I built using Next.js and React. It provides a straightforward way to manage tasks across different stages (like To Do, In Progress, and Done) with an intuitive drag-and-drop interface for moving tasks around. Core Functionality: Drag-and-Drop, Data Persistence, Task Management Customization. ",
    gallery: [
      "/kanban1.png?height=600&width=800",
      "/kanban2.png?height=600&width=800",
    ],
  }
]
