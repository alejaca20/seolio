import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Lock, Wifi, Shield, PenTool, Users, Map, Radio, Bot } from "lucide-react";

const features = [
  { icon: Wifi, label: "GSC Integration", desc: "Connect directly" },
  { icon: Shield, label: "SEO Auditor", desc: "Full site audit" },
  { icon: Users, label: "Competitor Analysis", desc: "Spy on rivals" },
  { icon: PenTool, label: "Content Optimizer", desc: "AI writing help" },
  { icon: Bot, label: "SEO Chat", desc: "Ask anything" },
  { icon: Map, label: "SEO Roadmap", desc: "Strategic plan" },
  { icon: Radio, label: "Live Monitoring", desc: "Real-time alerts" },
];

export function FutureFeatures() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.4 }}
    >
      <Card className="shadow-soft border-border/50 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">Coming Soon</h3>
        <p className="text-sm text-muted-foreground mb-5">Premium features on the way</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {features.map((f) => (
            <div
              key={f.label}
              className="relative p-4 rounded-xl bg-surface/50 border border-border/30 text-center group hover:border-gold/30 transition-colors"
            >
              <div className="absolute top-2 right-2">
                <Lock className="h-3 w-3 text-muted-foreground/40" />
              </div>
              <div className="h-10 w-10 mx-auto rounded-xl bg-warm flex items-center justify-center mb-2">
                <f.icon className="h-5 w-5 text-warm-foreground" />
              </div>
              <div className="text-sm font-medium text-foreground">{f.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{f.desc}</div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
