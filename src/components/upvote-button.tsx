"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

interface UpvoteButtonProps {
  slug: string;
}

export function UpvoteButton({ slug }: UpvoteButtonProps) {
  const [upvotes, setUpvotes] = useState<number>(0);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Fetch initial upvote count
    fetch(`/api/upvote/${slug}`)
      .then((res) => res.json())
      .then((data) => setUpvotes(data.upvotes))
      .catch(() => {/* Silent fail */});

    // Check if user has already upvoted (using localStorage)
    if (typeof window !== 'undefined') {
      const upvoted = localStorage.getItem(`upvoted-${slug}`);
      if (upvoted === 'true') {
        setIsUpvoted(true);
      }
    }
  }, [slug]);

  const handleUpvote = async () => {
    if (isUpvoted || isLoading) return;

    setIsLoading(true);
    setIsAnimating(true);

    // Optimistic update
    setUpvotes(prev => prev + 1);

    try {
      const res = await fetch(`/api/upvote/${slug}`, {
        method: 'POST',
      });
      const data = await res.json();
      setUpvotes(data.upvotes);
      setIsUpvoted(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem(`upvoted-${slug}`, 'true');
      }
    } catch (error) {
      console.error('Error upvoting:', error);
      // Revert optimistic update on error
      setUpvotes(prev => prev - 1);
    } finally {
      setIsLoading(false);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={handleUpvote}
        disabled={isUpvoted || isLoading}
        variant={isUpvoted ? "default" : "outline"}
        size="sm"
        className={`gap-2 transition-all duration-200 rounded-full ${
          isUpvoted
            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
            : 'hover:bg-primary/10 hover:border-primary'
        } ${isAnimating ? 'scale-110' : 'scale-100'}`}
      >
        <ArrowUp
          className={`h-4 w-4 transition-all duration-200 ${
            isUpvoted ? 'fill-current' : ''
          } ${isAnimating ? 'scale-125' : 'scale-100'}`}
        />
        <span className="font-semibold">{upvotes}</span>
        {isUpvoted && <span className="text-xs">Upvoted</span>}
      </Button>
    </div>
  );
}
