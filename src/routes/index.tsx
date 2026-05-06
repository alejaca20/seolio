import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BarChart3, Sparkles, ArrowRight, Eye, Target, Lightbulb, TrendingUp,
  FileText, Upload, Brain, CheckCircle, Zap, Shield, Users, Star
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Seolytics — AI-Powered SEO Insights for Business Owners" },
      { name: "description", content: "Understand your Google Search Console data with AI explanations, actionable recommendations, and business-focused insights. No SEO expertise needed." },
    ],
  }),
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 px-6 gradient-hero">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-warm rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-warm-foreground">AI-Powered SEO Intelligence</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
              Finally understand your
              <br />
              <span className="text-gradient">Google search performance</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Upload your Search Console data and get clear, jargon-free insights.
              Our AI explains what's working, what's not, and exactly what to do next.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/onboarding">
                <Button variant="hero" size="xl" className="gap-2">
                  Start Free Analysis
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">See Demo Dashboard</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">No credit card required · Free forever for basic analysis</p>
          </motion.div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 px-6 border-y border-border/50 bg-surface/50">
        <div className="mx-auto max-w-5xl flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          {["2,400+ businesses", "50K+ analyses", "4.9/5 rating"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <Star className="h-4 w-4 text-gold fill-gold" />
              <span className="text-sm font-medium">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              SEO made simple for business owners
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              No technical knowledge required. We translate complex data into clear actions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Brain, title: "AI Explanations", desc: "Every metric explained in plain language. Understand what impressions, CTR, and position actually mean for your business." },
              { icon: Target, title: "Opportunity Detection", desc: "We find keywords close to page 1 and pages with untapped potential so you know exactly where to focus." },
              { icon: Lightbulb, title: "Content Ideas", desc: "Get AI-generated content suggestions based on what your audience is actually searching for." },
              { icon: TrendingUp, title: "Growth Recommendations", desc: "Prioritized action items ranked by potential impact. Always know your next best move." },
              { icon: FileText, title: "PDF Reports", desc: "Export beautiful, client-ready reports that explain your SEO performance in business terms." },
              { icon: Shield, title: "Google Ads Insights", desc: "Discover which of your organic keywords would be profitable to run as Google Ads." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 shadow-soft border-border/50 hover:shadow-glow transition-shadow duration-300 h-full">
                  <div className="h-11 w-11 rounded-xl gradient-gold flex items-center justify-center mb-4">
                    <f.icon className="h-5 w-5 text-gold-foreground" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 px-6 bg-surface/50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Three steps to clarity
            </h2>
            <p className="text-muted-foreground mt-3">From data to action in under 2 minutes</p>
          </div>
          <div className="space-y-8">
            {[
              { step: "1", icon: Upload, title: "Upload your data", desc: "Export a CSV from Google Search Console and drop it here. We'll handle the rest." },
              { step: "2", icon: Sparkles, title: "AI analyzes everything", desc: "Our AI reads every metric, finds patterns, and generates personalized insights." },
              { step: "3", icon: CheckCircle, title: "Get your action plan", desc: "Receive clear recommendations ranked by impact. Know exactly what to do first." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex gap-5 items-start"
              >
                <div className="h-12 w-12 rounded-2xl gradient-gold flex items-center justify-center shrink-0 text-lg font-bold text-gold-foreground">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="gradient-warm rounded-3xl p-12 shadow-soft">
            <h2 className="text-3xl font-bold text-foreground tracking-tight mb-4">
              Ready to understand your SEO?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Join thousands of business owners who make smarter SEO decisions with AI-powered insights.
            </p>
            <Link to="/onboarding">
              <Button variant="hero" size="xl" className="gap-2">
                Start Your Free Analysis
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-10 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-gold flex items-center justify-center">
              <BarChart3 className="h-4 w-4 text-gold-foreground" />
            </div>
            <span className="text-sm font-bold text-foreground">Seolytics</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Seolytics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
