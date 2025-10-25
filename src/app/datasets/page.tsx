import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datasets | Anurag Kanade",
  description: "Open-source datasets for ML research and development",
};

const datasets = [
  {
    title: "Aesthetic Images",
    description:
      "7.9k+ carefully filtered, high-aesthetic images collected for training and benchmarking diffusion or image-text alignment models.",
    tags: ["Vision", "Images", "Aesthetics"],
    link: "https://huggingface.co/datasets/edwixx/aesthetic-images",
    highlights: [
      "High-quality visuals spanning people, nature, and concept art",
      "Curated scoring pipeline ensures consistent aesthetic ratings",
      "Ready for downstream captioning or CLIP-style labeling",
    ],
  },
  {
    title: "Gujarati Female Speech",
    description:
      "Single-speaker Gujarati speech dataset featuring 8 hours of clean narration for ASR or TTS experiments.",
    tags: ["Speech", "Gujarati", "Single Speaker"],
    link: "https://huggingface.co/datasets/edwixx/Gujrati_Female_SPeech",
    highlights: [
      "Native Gujarati female voice recorded in controlled conditions",
      "Aligned transcripts for quick ASR fine-tuning",
      "Ideal for voice cloning or speaker adaptation baselines",
    ],
  },
  {
    title: "NSFW Video Links Collection",
    description:
      "Metadata-first dataset with sourced links to NSFW video content for research on content moderation or detection pipelines.",
    tags: ["Vision", "Safety", "Metadata"],
    link: "https://huggingface.co/datasets/edwixx/NsFW-Dataset/tree/main",
    highlights: [
      "Aggregated from multiple high-traffic platforms",
      "Includes contextual metadata to assist filtering strategies",
      "Designed for responsible research with clear content flags",
    ],
  },
  {
    title: "Brazilian Portuguese TTS",
    description:
      "≈150 hours of multi-speaker Brazilian Portuguese recordings curated for high-quality text-to-speech synthesis.",
    tags: ["Speech", "Portuguese", "Multi Speaker"],
    link: "https://huggingface.co/datasets/edwixx/brazilian-portuguese-TTS",
    highlights: [
      "Diverse speaker roster covering accents and speaking styles",
      "Includes normalized scripts for immediate model training",
      "Balanced train/validation splits to speed experimentation",
    ],
  },
];

export default function DatasetsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 space-y-3">
            <h1 className="display-heading text-5xl md:text-6xl">Datasets</h1>
            <p className="section-subtitle text-lg md:text-xl max-w-3xl text-muted-foreground">
              A curated collection of speech, vision, and safety datasets. Clean metadata, consistent formatting, and ready for immediate experimentation.
            </p>
          </div>

          {/* Datasets Grid - Masonry Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {datasets.map((dataset, index) => (
              <article
                key={dataset.title}
                className={`group ${
                  index === 0 ? 'md:col-span-2' : ''
                } ${
                  index === 3 ? 'lg:col-span-2' : ''
                }`}
              >
                <Link
                  href={dataset.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardHeader className="space-y-4 pb-5">
                      <div className="space-y-3">
                        <CardTitle className="text-2xl md:text-3xl display-heading group-hover:text-primary transition-colors duration-200">
                          {dataset.title}
                        </CardTitle>

                        <p className="text-muted-foreground text-base leading-relaxed">
                          {dataset.description}
                        </p>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-5 pt-0">
                      {/* Highlights */}
                      <ul className="space-y-2.5">
                        {dataset.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* View Link */}
                      <div className="pt-2 flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                        <span>View on Hugging Face</span>
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
