'use client';

import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  url: string;
}

export function ShareButton({ title, url }: ShareButtonProps) {
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
      size="sm"
      className="gap-2"
    >
      <Share2 className="h-4 w-4" />
      Share on X
    </Button>
  );
}
