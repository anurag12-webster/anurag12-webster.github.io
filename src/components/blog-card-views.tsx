"use client";

import { useEffect, useState } from "react";
import { BarChart3 } from "lucide-react";

interface BlogCardViewsProps {
  slug: string;
}

export function BlogCardViews({ slug }: BlogCardViewsProps) {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    fetch(`/api/views/${slug}`)
      .then((res) => res.json())
      .then((data) => setViews(data.views))
      .catch((err) => console.error('Error fetching views:', err));
  }, [slug]);

  return (
    <div className="flex items-center gap-1.5">
      <BarChart3 className="h-4 w-4" />
      <span>{views}</span>
    </div>
  );
}
