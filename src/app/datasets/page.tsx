import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto flex max-w-4xl flex-col gap-12">
          <div className="space-y-3 text-left">
            <h1 className="section-title">Datasets</h1>
            <p className="section-subtitle md:max-w-3xl">
              A compact library of speech, vision, and safety datasets built for practitioners. Clean metadata, consistent formatting, and ready for immediate experimentation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {datasets.map((dataset) => (
              <Card
                key={dataset.title}
                className="p-0 shadow-[0_16px_70px_-40px_rgba(15,23,42,0.45)] transition-colors duration-200 hover:border-primary/35 hover:bg-muted/30 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
              >
                <CardHeader className="space-y-4 border-b border-border/60 px-8 py-8 dark:border-white/10">
                  <CardTitle className="text-2xl font-semibold">{dataset.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 text-muted-foreground">
                    {dataset.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] dark:border-white/20 dark:text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-5 px-8 pb-8 pt-6">
                  <p className="card-subtext leading-7 dark:text-white/80">
                    {dataset.description}
                  </p>
                  <ul className="space-y-2 rounded-2xl border border-dashed border-border/70 bg-muted/40 p-4 dark:border-white/15 dark:bg-white/[0.05]">
                    {dataset.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 card-subtext dark:text-white/80">
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-auto inline-flex items-center gap-2 self-start rounded-full border-border/70 px-5 hover:border-primary/50 hover:bg-primary/10 dark:border-white/20 dark:text-white dark:hover:border-primary/40 dark:hover:bg-white/[0.12]"
                    variant="outline"
                  >
                    <Link href={dataset.link} target="_blank" rel="noopener noreferrer">
                      Explore on Hugging Face
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
