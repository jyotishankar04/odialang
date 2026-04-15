'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Code2,
  GitBranch,
  History,
  Download,
  ChevronRight,
} from "lucide-react";

const sidebarItems = [
  { href: "/docs/installation/", label: "Installation", icon: Download },
  { href: "/docs/tutorial/", label: "Tutorial", icon: BookOpen },
  { href: "/docs/language/", label: "Language Reference", icon: Code2 },
  { href: "/docs/contributing/", label: "Contributing", icon: GitBranch },
  { href: "/docs/changelog/", label: "Changelog", icon: History },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Fixed width, sticky */}
          <nav className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-8 space-y-1">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3">
                Documentation
              </h3>
              {sidebarItems.map((item) => {
                const isActive = pathname === item.href || pathname === item.href.replace(/\/$/, "");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                    {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Main content */}
          <main className="flex-1 min-w-0 max-w-4xl">{children}</main>
        </div>
      </div>
    </div>
  );
}