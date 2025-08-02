export interface Project {
  id: number
  title: string
  slug: string
  category: string
  description: string
  coverImage: string
  role: string
  timeline: string
  tools: string
  content: string
  video?: string[];
  gallery?: string[]
}
