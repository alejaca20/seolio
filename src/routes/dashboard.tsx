import { createFileRoute } from "@tanstack/react-router";
import { DashboardNav } from "@/components/DashboardNav";
import { MetricCards } from "@/components/dashboard/MetricCards";
import { SearchQueries } from "@/components/dashboard/SearchQueries";
import { Opportunities } from "@/components/dashboard/Opportunities";
import { AiInsights } from "@/components/dashboard/AiInsights";
import { FutureFeatures } from "@/components/dashboard/FutureFeatures";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Dashboard — Seolytics" },
      { name: "description", content: "Your AI-powered SEO dashboard with actionable insights and recommendations." },
    ],
  }),
});

function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <main className="mx-auto max-w-[1400px] px-6 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Welcome back 👋</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Here's how your website is performing in Google Search
          </p>
        </div>

        <MetricCards />

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <SearchQueries />
            <Opportunities />
          </div>
          <div className="lg:col-span-2">
            <AiInsights />
          </div>
        </div>

        <FutureFeatures />
      </main>
    </div>
  );
}
