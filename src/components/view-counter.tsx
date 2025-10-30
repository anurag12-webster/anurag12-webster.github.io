"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface ViewCounterProps {
  slug: string;
}

export function ViewCounter({ slug }: ViewCounterProps) {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const viewKey = `viewed-${slug}`;
    const hasViewed = sessionStorage.getItem(viewKey);

    // Fetch current view count
    fetch(`/api/views/${slug}`)
      .then((res) => res.json())
      .then((data) => setViews(data.views))
      .catch((err) => console.error('Error fetching views:', err));

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
        .catch((err) => console.error('Error tracking view:', err));
    }
  }, [slug]);

  return (
    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
      <Eye className="h-4 w-4" />
      <span>{views} views</span>
    </div>
  );
}
