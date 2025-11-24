import type { Project } from "@/types"

export const projects: Project[] = [
  // {
  //   id: 1,
  //   title: "  EDS Branding",
  //   slug: "EDSBranding",
  //   category: "Graphic Design",
  //   description: "Complete brand identity for a college club",
  //   coverImage: "/edscover.png",
  //   role: "Brand Designer",
  //   timeline: "Nov 2024 - Dec 2024",
  //   tools: "Adobe Illustrator, Photoshop, Canva",
  //   content:
  //     "I crafted the brand identity for Echelon Dev Society, a hackathon club targeting a Gen Z audience. The brand needed to feel energetic and futuristic while remaining approachable and fun. The identity features a playful cat-bot mascot to embody this balance. The color scheme uses a clean black-and-white base with an electric blue accent for a tech-forward feel, while iridescent gradients add a modern, cutting-edge vibe that connects with its digital-native members.",
  //   gallery: [
  //     {imageSrc: "/eds1.png", instagramUrl: "https://www.instagram.com/p/DD1DrsrKFYV/?img_index=1"},
  //     {imageSrc: "/eds2.png"}
  //   ],
  // },
   {
    id: 1,
    title: "Alekhya Design Studio",
    slug: "alekhyabranding",
    category: "Graphic Design",
    description: "Complete brand identity for an interior design studio",
    coverImage: "/alekhyacover.png",
    role: "Brand Designer",
    timeline: "Feb 2024 - April 2024",
    tools: "Adobe Illustrator, Photoshop, Canva",
    content:
      "I redesigned the brand identity for Alekya Design Studio, An interior design Studio Based in in the Heart of Pune Maharashtra. The brand needed to feel more welcoming and earthy while remaining trustworthy and modern. The identity features a logo inpired by the co-founder's own rough sketch, to give it a personal touch and a quirk similar to the 2 architects behind the brand. The color scheme uses an earthy beige pallete along with geometric shapes that adds strucure as well as warmth to the over-all aesthetic of the brand",
    gallery: [
      {imageSrc: "/alekhyacover.png", instagramUrl: "https://www.instagram.com/p/DIPABJZSboC/?img_index=3"},
      {imageSrc: "/alekhya2.png"},
      {imageSrc: "/alekhya3.png"},
    ],
  },
  {
    id: 2,
    title: "Explainer Video Series",
    slug: "explainervideos",
    category: "Video Editing",
    description: "Motion Graphics, Video Post Production",
    coverImage: "/expl.png",
    role: "Video Editor",
    timeline: "July 2025 - August 2025",
    tools: "CapCut, After Effects, Photoshop",
    content:
      "Edited a multi-part explainer video series by Mohd Amaan for Bhindi AI, focused on clear visual pacing and clean transitions. I handled all post-production: cutting voiceovers to match visuals,chroma keying, adding motion graphics, and ensuring consistency across episodes. The goal was clarity, speed, and keeping viewers engaged without overwhelming them.",
    video:[
      "https://www.youtube.com/watch?v=0EpZlmC7f-I",
      "https://www.youtube.com/watch?v=Ofsj9E6i5is",
      "https://www.youtube.com/watch?v=06P5l5Pk9z0",
      "https://www.youtube.com/watch?v=SiPvVPP0J78",
      "https://www.youtube.com/watch?v=MyY34c1Y0kI"

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
      "Created branding and merchandise for Hackwave with a playful, anime-inspired aesthetic. The designs leaned into pastel colors, cute mascot, and clean linework—applied across banners, ID's, tees, certificates and social assets. The goal was to capture an energetic, friendly vibe that resonated with a creative, online-first community.",
    gallery: [
      {imageSrc: "/hackwave2.png" , instagramUrl:"https://www.instagram.com/p/DMKAjATSEuE/?img_index=1"},
      {imageSrc: "/hackwave3.png"},
      {imageSrc: "/hackwave4.png" , instagramUrl:"https://www.instagram.com/p/DMfaeHlKFcd/?img_index=1"},
      {imageSrc: "/hackwave5.jpeg"},
      {imageSrc: "/hackwave6.jpeg"},
      {imageSrc: "/hackwave7.jpg"},
    ],
  },

{
    id: 4  ,
    title: "SaaS Motion Graphics ",
    slug: "SaaSdemo",
    category: "Video Editing",
    description: "Motion Graphics",
    coverImage: "/saas.png",
    role: "video editor",
    timeline: "May 2025 - PRESENT",
    tools: "After Effects",
    content:
      "Edited motion graphics to explain product features and user flows. Created UI animations, synced transitions, and kept visuals consistent with brand guidelines. Built for clarity, speed, and easy understanding.",
    video: [
      "https://www.youtube.com/watch?v=p-5awdlWU0U",
      "https://www.youtube.com/watch?v=sPQ7Hnvh4kQ",
    ],
  },

  {
    id: 5,
    title: "Cinematic Edits",
    slug: "cinematography",
    category: "Video Editing",
    description: "Videography & Post Production",
    coverImage: "/cine.png",
    role: "videographer & editor",
    timeline: "May 2025 - PRESENT",
    tools: "After Effects, CapCut",
    content:
      "Shot and edited a series of cinematic videos with a focus on visual storytelling, atmosphere, and emotion. I handled the full production workflow — from planning shots and capturing footage to editing, sound design, and color grading. Each piece was built to feel intentional and immersive, using light, movement, and pacing to carry the mood.",
    video: [
      "https://www.youtube.com/watch?v=kfQEChhYTFA",
    ],
  },

]
