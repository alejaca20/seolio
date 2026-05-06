import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { DashboardTabs } from "@/components/DashboardTabs";
import { AnalysisPanel } from "@/components/AnalysisPanel";
import { MetricCards } from "@/components/dashboard/MetricCards";
import { SearchQueries } from "@/components/dashboard/SearchQueries";
import { Opportunities } from "@/components/dashboard/Opportunities";
import { AiInsights } from "@/components/dashboard/AiInsights";
import { FutureFeatures } from "@/components/dashboard/FutureFeatures";
import { Calendar, FileSpreadsheet, PanelRightClose, PanelRightOpen } from "lucide-react";

export const Route = createFileRoute("/")({
  component: MainApp,
  head: () => ({
    meta: [
      { title: "Seolytics — AI-Powered SEO Dashboard" },
      { name: "description", content: "Understand your Google Search Console data with AI explanations and actionable recommendations." },
    ],
  }),
});

function MainApp() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [panelOpen, setPanelOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />

      <div className="flex-1 flex overflow-hidden">
        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Analysis info bar + tabs */}
          <div className="border-b border-border/50 bg-surface/30">
            <div className="px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-warm flex items-center justify-center">
                  <FileSpreadsheet className="h-4 w-4 text-warm-foreground" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-foreground">Análisis: Mi Sitio Web</h2>
                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>Último análisis: 5 Mayo, 2026 · 14:30</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setPanelOpen(!panelOpen)}
                className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors lg:hidden"
              >
                {panelOpen ? <PanelRightClose className="h-4 w-4" /> : <PanelRightOpen className="h-4 w-4" />}
              </button>
            </div>
            <DashboardTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Dashboard content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-5 space-y-5">
              {activeTab === "dashboard" && (
                <>
                  <MetricCards />
                  <div className="grid lg:grid-cols-5 gap-5">
                    <div className="lg:col-span-3 space-y-5">
                      <SearchQueries />
                      <Opportunities />
                    </div>
                    <div className="lg:col-span-2">
                      <AiInsights />
                    </div>
                  </div>
                  <FutureFeatures />
                </>
              )}
              {activeTab === "queries" && <SearchQueries />}
              {activeTab === "pages" && (
                <div className="space-y-5">
                  <MetricCards />
                  <Opportunities />
                </div>
              )}
              {activeTab === "opportunities" && <Opportunities />}
              {activeTab === "recommendations" && <AiInsights />}
            </div>
          </div>
        </div>

        {/* Right panel - New Analysis */}
        {panelOpen && (
          <aside className="w-[300px] border-l border-border/50 bg-card shrink-0 hidden lg:flex flex-col">
            <AnalysisPanel />
          </aside>
        )}
      </div>

      {/* Mobile panel overlay */}
      {panelOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="flex-1 bg-foreground/20" onClick={() => setPanelOpen(false)} />
          <aside className="w-[300px] bg-card shadow-soft flex flex-col">
            <AnalysisPanel />
          </aside>
        </div>
      )}
    </div>
  );
}
