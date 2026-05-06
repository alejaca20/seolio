import { Link, useLocation } from "@tanstack/react-router";
import { BarChart3, Home, Search, FileText, Lightbulb, TrendingUp, Download, History, Settings } from "lucide-react";

const links = [
  { label: "Overview", to: "/dashboard", icon: Home },
  { label: "Search Queries", to: "/dashboard", icon: Search },
  { label: "Pages", to: "/dashboard", icon: FileText },
  { label: "Opportunities", to: "/dashboard", icon: Lightbulb },
  { label: "Recommendations", to: "/dashboard", icon: TrendingUp },
];

export function DashboardNav() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-border/50">
      <div className="mx-auto max-w-[1400px] px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl gradient-gold flex items-center justify-center">
            <BarChart3 className="h-5 w-5 text-gold-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground tracking-tight">Seolytics</span>
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-secondary rounded-xl p-1">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-card transition-all"
            >
              <l.icon className="h-3.5 w-3.5" />
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="h-9 w-9 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Download className="h-4 w-4" />
          </button>
          <button className="h-9 w-9 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <History className="h-4 w-4" />
          </button>
          <div className="h-9 w-9 rounded-xl gradient-gold flex items-center justify-center text-sm font-semibold text-gold-foreground">
            N
          </div>
        </div>
      </div>
    </header>
  );
}
