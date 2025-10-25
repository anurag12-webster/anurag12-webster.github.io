"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/datasets", label: "Datasets" },
  ];

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="sm:hidden fixed inset-x-0 top-0 z-50 backdrop-blur-sm bg-background/90 border-b border-border/30">
        <div className="h-16" />
      </nav>

      {/* Mobile controls */}
      <div className="sm:hidden">
        {/* Left: hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="fixed top-4 left-4 z-[100] h-10 w-10 rounded-xl flex items-center justify-center hover:bg-accent/50 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Right: theme toggle */}
        <div className="fixed top-4 right-4 z-[100]">
          <ThemeToggle />
        </div>

        {/* Full-screen dropdown menu */}
        {open && (
          <div className="fixed inset-0 bg-background z-[90] overflow-y-auto">
            <div className="container mx-auto px-6 pt-24 pb-12">
              <nav className="flex flex-col items-center gap-1 max-w-md mx-auto">
                {navItems.map((item) => {
                  const isActive = pathname === item.href ||
                                   (item.href === '/blog' && pathname.startsWith('/blog')) ||
                                   (item.href === '/projects' && pathname.startsWith('/projects')) ||
                                   (item.href === '/datasets' && pathname.startsWith('/datasets'));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`w-full text-left px-6 py-4 text-2xl font-medium transition-all duration-200 border-b border-border/30 last:border-b-0 ${
                        isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Desktop nav */}
      <nav className="hidden sm:flex fixed inset-x-0 top-0 z-50 backdrop-blur-sm bg-background/90 border-b border-border/30">
        <div className="w-full py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href ||
                                 (item.href === '/blog' && pathname.startsWith('/blog')) ||
                                 (item.href === '/projects' && pathname.startsWith('/projects')) ||
                                 (item.href === '/datasets' && pathname.startsWith('/datasets'));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-all duration-200 hover:text-primary relative pb-1 ${
                      isActive ? "text-primary" : "text-foreground/70"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
