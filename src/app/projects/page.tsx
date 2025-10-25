import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Anurag Kanade",
  description: "Open-source projects and tools for ML and AI development",
};

const projects = [
  {
    title: "RVC Trainer",
    description:
      "Self-hostable REST API for training RVC (Retrieval-based Voice Conversion) models with GPU acceleration and automated HuggingFace integration.",
    link: "https://github.com/anurag12-webster/RVC_Trainer",
    highlights: [
      "Async task processing with Celery and Redis for scalable training",
      "Multi-GPU support with real-time training status monitoring",
      "Automatic dataset download and model upload to HuggingFace Hub",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 space-y-3">
            <h1 className="display-heading text-5xl md:text-6xl">Projects</h1>
            <p className="section-subtitle text-lg md:text-xl max-w-3xl text-muted-foreground">
              projects i&apos;ve built
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardHeader className="space-y-4 pb-5">
                      <div className="space-y-3">
                        <CardTitle className="text-2xl md:text-3xl display-heading group-hover:text-primary transition-colors duration-200">
                          {project.title}
                        </CardTitle>

                        <p className="text-muted-foreground text-base leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-5 pt-0">
                      {/* Highlights */}
                      <ul className="space-y-2.5">
                        {project.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* View Link */}
                      <div className="pt-2 flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                        <span>View Project</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
