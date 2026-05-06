import { Link, useLocation } from "@tanstack/react-router";
import { BarChart3, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How it Works", href: "/#how" },
  { label: "Pricing", href: "/#pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl gradient-gold flex items-center justify-center">
            <BarChart3 className="h-5 w-5 text-gold-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground tracking-tight">Seolytics</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/onboarding">
            <Button variant="outline" size="sm">Log in</Button>
          </Link>
          <Link to="/onboarding">
            <Button variant="hero" size="sm">Get Started Free</Button>
          </Link>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-card p-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block text-sm text-muted-foreground py-2"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Link to="/onboarding" onClick={() => setOpen(false)}>
            <Button variant="hero" size="default" className="w-full">Get Started Free</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
