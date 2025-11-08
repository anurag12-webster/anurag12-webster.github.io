import { DEFAULTS } from "@/lib/constants";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {DEFAULTS.AUTHOR}. All rights reserved.
            </div>
            <SocialLinks
              className="flex items-center gap-6"
              iconClassName="w-5 h-5 text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
