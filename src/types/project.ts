export type Project = {
  id: number
  categoryId: 'work' | 'personal' | 'team'
  title: string
  shortDescription: string
  period: string
  description: string
  teamStructure?: string
  technicalExperience?: string[]
  learnings?: string
  technologies: string[]
  features?: string[]
  images?: {
    src: string
    alt: string
    description?: string
  }[]
  xPosts?: {
    url: string
    description?: string
  }[]
}

export type Category = {
  id: 'work' | 'personal' | 'team'
  name: string
}
