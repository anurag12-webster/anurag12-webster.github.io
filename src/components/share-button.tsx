'use client';

import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  url: string;
  iconOnly?: boolean;
}

export function ShareButton({ title, url, iconOnly = false }: ShareButtonProps) {
  const handleShare = () => {
    const tweetText = encodeURIComponent(title);
    const tweetUrl = encodeURIComponent(url);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleShare}
      variant="outline"
      size={iconOnly ? "icon" : "sm"}
      className={iconOnly ? "rounded-full" : "gap-2 rounded-full"}
    >
      <Share2 className="h-4 w-4" />
      {!iconOnly && <span className="hidden sm:inline">Share on X</span>}
    </Button>
  );
}
