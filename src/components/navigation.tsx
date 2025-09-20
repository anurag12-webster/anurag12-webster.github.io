"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="fixed top-4 left-4 z-50">
      <div className="bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "default" : "ghost"}
                size="sm"
                className="rounded-full"
                asChild
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </div>
          
          <div className="h-6 w-px bg-border" />
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
