import type { Metadata } from "next"
import { projects } from "@/data/projects"
import ProjectClientPage from "./ProjectClientPage"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)

  return {
    title: `${project?.title || "Project"} | Tanishka's Portfolio`,
    description: project?.description || "Tanishka's design project",
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectClientPage slug={params.slug}/>
}
