"use client";

import { useEffect, useState, memo } from "react";
import { Eye } from "lucide-react";

interface ViewCounterProps {
  slug: string;
}

export const ViewCounter = memo(function ViewCounter({ slug }: ViewCounterProps) {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const viewKey = `viewed-${slug}`;
    const hasViewed = sessionStorage.getItem(viewKey);

    // Fetch current view count
    fetch(`/api/views/${slug}`)
      .then((res) => res.json())
      .then((data) => setViews(data.views))
      .catch(() => {/* Silent fail */});

    // Increment only if not viewed in this session
    if (!hasViewed) {
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      })
        .then((res) => res.json())
        .then((data) => {
          setViews(data.views);
          sessionStorage.setItem(viewKey, 'true');
        })
        .catch(() => {/* Silent fail */});
    }
  }, [slug]);

  return (
    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
      <Eye className="h-4 w-4" />
      <span>{views} views</span>
    </div>
  );
});
