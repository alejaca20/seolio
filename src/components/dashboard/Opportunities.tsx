import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Lightbulb, ArrowRight, Star, Zap, Target } from "lucide-react";

const opportunities = [
  {
    title: "Move 5 keywords to Page 1",
    description: "You have 5 keywords ranking between positions 11-15. With small content improvements, they could reach page 1 and drive 2x more traffic.",
    impact: "High",
    effort: "Low",
    icon: Star,
    potential: "+3,200 clicks/month",
  },
  {
    title: "Fix underperforming pages",
    description: "3 pages have high impressions but low click rates. Improving their titles and descriptions could double their traffic.",
    impact: "High",
    effort: "Medium",
    icon: Zap,
    potential: "+1,800 clicks/month",
  },
  {
    title: "Target 12 new keywords",
    description: "We found 12 related searches your competitors rank for but you don't. Creating content for these could capture new audience.",
    impact: "Medium",
    effort: "Medium",
    icon: Target,
    potential: "+5,400 clicks/month",
  },
];

export function Opportunities() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
    >
      <Card className="shadow-soft border-border/50 p-6">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-gold" />
              SEO Opportunities
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Prioritized actions to grow your organic traffic
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {opportunities.map((o, i) => (
            <div
              key={o.title}
              className="flex items-start gap-4 p-4 rounded-xl bg-surface/50 hover:bg-warm/40 transition-colors group cursor-pointer"
            >
              <div className="h-10 w-10 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                <o.icon className="h-5 w-5 text-gold-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-semibold text-foreground">{o.title}</h4>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    o.impact === "High" ? "bg-success/10 text-success" : "bg-gold/20 text-gold-foreground"
                  }`}>
                    {o.impact} Impact
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{o.description}</p>
                <span className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-gold-foreground">
                  Potential: {o.potential}
                </span>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 mt-1" />
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
