import Link from "next/link";
import { URLS } from "@/lib/constants";
import { EmailIcon, LinkedInIcon, GitHubIcon, HuggingFaceIcon, TwitterIcon } from "@/components/icons/social-icons";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className = "flex items-center gap-4", iconClassName = "h-5 w-5 text-foreground/60 hover:text-foreground transition-colors" }: SocialLinksProps) {
  return (
    <div className={className}>
      <Link href={URLS.EMAIL} aria-label="Email">
        <EmailIcon className={iconClassName} />
      </Link>
      <Link href={URLS.LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <LinkedInIcon className={iconClassName} />
      </Link>
      <Link href={URLS.GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <GitHubIcon className={iconClassName} />
      </Link>
      <Link href={URLS.HUGGINGFACE} target="_blank" rel="noopener noreferrer" aria-label="HuggingFace">
        <HuggingFaceIcon className={iconClassName} />
      </Link>
      <Link href={URLS.TWITTER} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <TwitterIcon className={iconClassName} />
      </Link>
    </div>
  );
}
