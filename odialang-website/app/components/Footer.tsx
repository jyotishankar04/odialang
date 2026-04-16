import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50 overflow-hidden">
      {/* Enhanced Pattachitra border with repeating motifs */}
      <div className="h-[3px] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        {/* Repeating pattern dots */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-terracotta" />
            <div className="w-1 h-1 rounded-full bg-accent" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            {/* Lotus center */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary mx-1">
              <ellipse cx="12" cy="14" rx="5" ry="2.5" fill="none" stroke="currentColor" strokeWidth="1"/>
              <ellipse cx="12" cy="12" rx="3" ry="1.5" fill="none" stroke="currentColor" strokeWidth="0.75"/>
              <circle cx="12" cy="11" r="1.5" fill="currentColor"/>
            </svg>
            <div className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-1 h-1 rounded-full bg-accent" />
            <div className="w-2 h-2 rounded-full bg-terracotta" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        </div>
      </div>
      
      {/* Corner ornaments with lotus motif */}
      <div className="absolute bottom-8 left-4 w-20 h-20 opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 60 60" className="w-full h-full text-primary">
          <path d="M2 58 L2 30 Q2 2 30 2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 52 L8 30 Q8 8 30 8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <ellipse cx="18" cy="18" rx="6" ry="3" fill="none" stroke="currentColor" strokeWidth="1"/>
          <ellipse cx="18" cy="16" rx="4" ry="2" fill="none" stroke="currentColor" strokeWidth="0.75"/>
          <circle cx="18" cy="15" r="1.5" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute bottom-8 right-4 w-20 h-20 opacity-[0.05] pointer-events-none transform scale-x-[-1]">
        <svg viewBox="0 0 60 60" className="w-full h-full text-primary">
          <path d="M2 58 L2 30 Q2 2 30 2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 52 L8 30 Q8 8 30 8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <ellipse cx="18" cy="18" rx="6" ry="3" fill="none" stroke="currentColor" strokeWidth="1"/>
          <ellipse cx="18" cy="16" rx="4" ry="2" fill="none" stroke="currentColor" strokeWidth="0.75"/>
          <circle cx="18" cy="15" r="1.5" fill="currentColor"/>
        </svg>
      </div>
      
      {/* Wave pattern accent */}
      <div className="absolute top-4 left-0 right-0 h-8 pointer-events-none opacity-[0.03]">
        <svg viewBox="0 0 400 30" className="w-full h-full text-primary">
          <path d="M0 15 Q50 5 100 15 T200 15 T300 15 T400 15" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M0 22 Q50 12 100 22 T200 22 T300 22 T400 22" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span> by <a target="_blank" href="https://suvam.qwikish.com">
              <span className="text-primary hover:text-foreground transition-colors">Jyotiahankar</span>
            </a> </span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/jyotishankar04/Odialang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <Link 
              href="/docs" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-marker"
            >
              Docs
            </Link>
            <Link 
              href="/examples" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-marker"
            >
              Examples
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Odialang. MIT License.
          </p>
        </div>
      </div>
      
      {/* Bottom accent with gradient */}
      <div className="h-[2px] w-full bg-gradient-to-r from-terracotta/30 via-accent/20 to-primary/30" />
    </footer>
  );
}
