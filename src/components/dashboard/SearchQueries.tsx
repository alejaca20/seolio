import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Search, TrendingUp, Sparkles } from "lucide-react";

const queries = [
  { query: "best project management tools", clicks: 2840, impressions: 45200, ctr: "6.3%", position: 8.2, trend: "up", aiInsight: "High commercial intent — great for conversion content." },
  { query: "how to manage remote team", clicks: 1920, impressions: 38100, ctr: "5.0%", position: 12.1, trend: "up", aiInsight: "Growing search trend. You're close to page 1!" },
  { query: "team collaboration software", clicks: 1580, impressions: 29400, ctr: "5.4%", position: 15.3, trend: "stable", aiInsight: "Competitive keyword. Consider a dedicated landing page." },
  { query: "productivity tips for teams", clicks: 1240, impressions: 22800, ctr: "5.4%", position: 11.7, trend: "up", aiInsight: "Create a comprehensive guide to rank higher." },
  { query: "project planning template free", clicks: 980, impressions: 18900, ctr: "5.2%", position: 9.4, trend: "down", aiInsight: "Add a free template download to boost clicks." },
];

export function SearchQueries() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
    >
      <Card className="shadow-soft border-border/50 overflow-hidden">
        <div className="p-6 pb-4 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Search className="h-5 w-5 text-gold" />
              What People Are Searching For
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              These are the search terms bringing people to your site
            </p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-t border-border/50 bg-surface/50">
                <th className="text-left text-xs font-medium text-muted-foreground px-6 py-3">Search Term</th>
                <th className="text-right text-xs font-medium text-muted-foreground px-4 py-3">Clicks</th>
                <th className="text-right text-xs font-medium text-muted-foreground px-4 py-3">Views</th>
                <th className="text-right text-xs font-medium text-muted-foreground px-4 py-3">Click Rate</th>
                <th className="text-right text-xs font-medium text-muted-foreground px-4 py-3">Rank</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-6 py-3">AI Insight</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((q, i) => (
                <tr key={q.query} className="border-t border-border/30 hover:bg-warm/30 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-foreground">{q.query}</span>
                  </td>
                  <td className="text-right px-4 py-4 text-sm font-semibold text-foreground">{q.clicks.toLocaleString()}</td>
                  <td className="text-right px-4 py-4 text-sm text-muted-foreground">{q.impressions.toLocaleString()}</td>
                  <td className="text-right px-4 py-4 text-sm text-foreground">{q.ctr}</td>
                  <td className="text-right px-4 py-4">
                    <span className="text-sm font-medium text-foreground flex items-center justify-end gap-1">
                      {q.position}
                      {q.trend === "up" && <TrendingUp className="h-3 w-3 text-success" />}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-warm-foreground bg-warm/60 px-2.5 py-1 rounded-lg flex items-center gap-1 w-fit">
                      <Sparkles className="h-3 w-3 text-gold" />
                      {q.aiInsight}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </motion.div>
  );
}
