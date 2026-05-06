import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Sparkles, MessageSquare, TrendingUp, BookOpen, DollarSign, Megaphone } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    title: "Your site is trending up",
    text: "Overall traffic grew 12% this month. Your blog posts about productivity are your strongest performers.",
    type: "positive",
  },
  {
    icon: BookOpen,
    title: "Content gap found",
    text: "Competitors rank for \"team building activities\" — you don't have content on this topic yet. It gets 8,100 searches/month.",
    type: "opportunity",
  },
  {
    icon: DollarSign,
    title: "Google Ads opportunity",
    text: "Your top 3 organic keywords have high ad value ($4.20 avg CPC). Consider running ads for immediate visibility boost.",
    type: "insight",
  },
  {
    icon: Megaphone,
    title: "Quick win available",
    text: "Your pricing page ranks #11 for \"affordable project management\". A small title update could push it to page 1.",
    type: "action",
  },
];

export function AiInsights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
    >
      <Card className="shadow-soft border-border/50 p-6 bg-gradient-to-br from-card to-warm/30">
        <div className="flex items-center gap-2 mb-5">
          <div className="h-8 w-8 rounded-lg gradient-gold flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-gold-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">AI Business Insights</h3>
            <p className="text-xs text-muted-foreground">Personalized recommendations for your business</p>
          </div>
        </div>

        <div className="space-y-3">
          {insights.map((ins, i) => (
            <div
              key={ins.title}
              className="flex gap-3 p-3 rounded-xl bg-card/80 hover:bg-card transition-colors cursor-pointer"
            >
              <div className="h-8 w-8 rounded-lg bg-warm flex items-center justify-center shrink-0">
                <ins.icon className="h-4 w-4 text-warm-foreground" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">{ins.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{ins.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 p-4 rounded-xl border border-border/50 bg-card/50">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <MessageSquare className="h-3.5 w-3.5" />
            Ask your AI SEO advisor
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="E.g. How can I improve my blog traffic?"
              className="flex-1 text-sm bg-surface rounded-lg px-3 py-2 text-foreground placeholder:text-muted-foreground/50 outline-none border border-border/30 focus:border-gold transition-colors"
            />
            <button className="h-9 px-4 rounded-lg gradient-gold text-gold-foreground text-sm font-medium">
              Ask
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
