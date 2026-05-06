import { useState } from "react";
import { BarChart3, Search, FileText, Lightbulb, TrendingUp, Download, LayoutDashboard } from "lucide-react";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "queries", label: "Search Queries", icon: Search },
  { id: "pages", label: "Pages", icon: FileText },
  { id: "opportunities", label: "Oportunidades", icon: Lightbulb },
  { id: "recommendations", label: "Recomendaciones", icon: TrendingUp },
];

interface DashboardTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function DashboardTabs({ activeTab, onTabChange }: DashboardTabsProps) {
  return (
    <div className="flex items-center justify-between border-b border-border/50 px-1">
      <div className="flex items-center gap-0.5 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? "border-gold text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
            }`}
          >
            <tab.icon className="h-3.5 w-3.5" />
            {tab.label}
          </button>
        ))}
      </div>
      <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0">
        <Download className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Descargar</span>
      </button>
    </div>
  );
}
