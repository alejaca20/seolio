import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Eye, MousePointerClick, ArrowUpRight, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const metrics = [
  {
    label: "Total Impressions",
    value: "284,592",
    change: "+12.3%",
    positive: true,
    icon: Eye,
    explanation: "How many times your pages appeared in Google search results this month.",
  },
  {
    label: "Total Clicks",
    value: "18,247",
    change: "+8.7%",
    positive: true,
    icon: MousePointerClick,
    explanation: "The number of people who clicked through to your website from Google.",
  },
  {
    label: "Avg. Click Rate",
    value: "6.4%",
    change: "+0.5%",
    positive: true,
    icon: ArrowUpRight,
    explanation: "The percentage of people who click your link after seeing it. Industry avg is ~3%.",
  },
  {
    label: "Avg. Position",
    value: "14.2",
    change: "-2.1",
    positive: true,
    icon: Target,
    explanation: "Your average ranking position. Lower is better — top 10 means page 1!",
  },
];

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
        >
          <Card className="p-5 shadow-soft border-border/50 hover:shadow-glow transition-shadow duration-300 group">
            <div className="flex items-start justify-between mb-3">
              <div className="h-10 w-10 rounded-xl bg-warm flex items-center justify-center">
                <m.icon className="h-5 w-5 text-warm-foreground" />
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-lg flex items-center gap-1 ${
                  m.positive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                }`}
              >
                {m.positive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {m.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-foreground tracking-tight">{m.value}</div>
            <div className="text-sm text-muted-foreground mt-0.5">{m.label}</div>
            <p className="text-xs text-surface-foreground mt-3 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {m.explanation}
            </p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
