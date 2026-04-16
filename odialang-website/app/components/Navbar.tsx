'use client';

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/playground/", label: "Playground" },
    { href: "/examples/", label: "Examples" },
    { href: "/docs/", label: "Docs" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      {/* Enhanced Pattachitra-style border with repeating motifs */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent relative overflow-hidden">
        {/* Repeating pattern: saffron-terracotta-indigo-saffron */}
        <div className="absolute inset-0 flex items-center justify-around px-4">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80" />
            <div className="w-2 h-2 rounded-full bg-accent/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80" />
            <div className="w-2 h-2 rounded-full bg-primary/80" />
            <div className="w-3 h-[2px] bg-transparent" />
          </div>
          {/* Lotus motif center */}
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary/60">
            <ellipse cx="12" cy="14" rx="5" ry="2.5" fill="none" stroke="currentColor" strokeWidth="0.75"/>
            <ellipse cx="12" cy="12" rx="3.5" ry="1.75" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="12" cy="11" r="1" fill="currentColor"/>
          </svg>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80" />
            <div className="w-2 h-2 rounded-full bg-accent/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80" />
            <div className="w-2 h-2 rounded-full bg-primary/80" />
          </div>
        </div>
      </div>
      
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo with enhanced Konark Chakra */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center">
            <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            {/* Chaka Akhi (Wheel of Eyes) Logo */}
            <svg 
              viewBox="0 0 50 50" 
              className="h-10 w-10 transition-transform duration-300 group-hover:scale-105"
              fill="none"
            >
              {/* Outer ring */}
              <circle cx="25" cy="25" r="23" stroke="currentColor" strokeWidth="1.5" className="text-primary"/>
              
              {/* Eye-like segments (6 petals) */}
              <g stroke="currentColor" strokeWidth="1.2" className="text-primary" opacity="0.8">
                <ellipse cx="25" cy="8" rx="7" ry="13"/>
                <ellipse cx="25" cy="8" rx="7" ry="13" transform="rotate(60, 25, 25)"/>
                <ellipse cx="25" cy="8" rx="7" ry="13" transform="rotate(120, 25, 25)"/>
                <ellipse cx="25" cy="8" rx="7" ry="13" transform="rotate(180, 25, 25)"/>
                <ellipse cx="25" cy="8" rx="7" ry="13" transform="rotate(240, 25, 25)"/>
                <ellipse cx="25" cy="8" rx="7" ry="13" transform="rotate(300, 25, 25)"/>
              </g>
              
              {/* Inner decorative ring */}
              <circle cx="25" cy="25" r="10" stroke="currentColor" strokeWidth="1" className="text-terracotta" opacity="0.6"/>
              
              {/* Center hub */}
              <circle cx="25" cy="25" r="5" fill="currentColor" className="text-primary"/>
              <circle cx="25" cy="25" r="2" fill="currentColor" className="text-terracotta"/>
            </svg>
          </div>
          <span className="text-lg font-semibold text-foreground tracking-tight">
            Odialang
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover-marker transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <ThemeToggle />
          
          <a
            href="https://github.com/jyotishankar04/odialang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="gap-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-base text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-3 py-2">
              <ThemeToggle />
              <span className="text-sm text-muted-foreground">Toggle theme</span>
            </div>
            <a
              href="https://github.com/jyotishankar04/odialang"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-base text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
