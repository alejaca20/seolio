import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, Upload, FileText, ArrowRight, CheckCircle, Sparkles, Loader2 } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  component: OnboardingPage,
  head: () => ({
    meta: [
      { title: "Get Started — Seolytics" },
      { name: "description", content: "Upload your Google Search Console data and get AI-powered insights in minutes." },
    ],
  }),
});

function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const handleFile = useCallback((f: File) => {
    setFile(f);
    setStep(1);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const f = e.dataTransfer.files[0];
      if (f) handleFile(f);
    },
    [handleFile]
  );

  const startAnalysis = useCallback(() => {
    setAnalyzing(true);
    setStep(2);
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 15 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => navigate({ to: "/dashboard" }), 1200);
      }
      setProgress(Math.min(p, 100));
    }, 600);
  }, [navigate]);

  const analysisSteps = [
    "Reading your CSV data...",
    "Identifying search queries...",
    "Analyzing page performance...",
    "Detecting growth opportunities...",
    "Generating AI recommendations...",
    "Building your dashboard...",
  ];

  const currentAnalysisStep = Math.min(
    Math.floor(progress / (100 / analysisSteps.length)),
    analysisSteps.length - 1
  );

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <Link to="/" className="flex items-center gap-2.5 justify-center mb-10">
          <div className="h-10 w-10 rounded-xl gradient-gold flex items-center justify-center">
            <BarChart3 className="h-5 w-5 text-gold-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground tracking-tight">Seolytics</span>
        </Link>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="shadow-soft border-border/50 p-8">
                <h2 className="text-2xl font-bold text-foreground text-center mb-2">
                  Upload your data
                </h2>
                <p className="text-sm text-muted-foreground text-center mb-6">
                  Export a CSV from Google Search Console and drop it below
                </p>

                <div
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  className="border-2 border-dashed border-border rounded-2xl p-10 text-center hover:border-gold/50 hover:bg-warm/30 transition-all cursor-pointer"
                  onClick={() => document.getElementById("csv-input")?.click()}
                >
                  <Upload className="h-10 w-10 text-gold mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground mb-1">
                    Drag & drop your CSV here
                  </p>
                  <p className="text-xs text-muted-foreground">or click to browse</p>
                  <input
                    id="csv-input"
                    type="file"
                    accept=".csv"
                    className="hidden"
                    onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                  />
                </div>

                <div className="mt-6 p-4 rounded-xl bg-warm/50">
                  <h4 className="text-xs font-semibold text-warm-foreground mb-2">How to export from Google Search Console:</h4>
                  <ol className="text-xs text-muted-foreground space-y-1 list-decimal list-inside">
                    <li>Go to Google Search Console</li>
                    <li>Click "Performance" in the sidebar</li>
                    <li>Set your date range (last 3 months recommended)</li>
                    <li>Click the Export button → Download CSV</li>
                  </ol>
                </div>

                <div className="mt-4 text-center">
                  <button
                    onClick={() => {
                      setFile(new File(["demo"], "demo.csv"));
                      setStep(1);
                    }}
                    className="text-sm text-gold-foreground hover:underline"
                  >
                    Or try with sample data →
                  </button>
                </div>
              </Card>
            </motion.div>
          )}

          {step === 1 && !analyzing && (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="shadow-soft border-border/50 p-8 text-center">
                <div className="h-14 w-14 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-7 w-7 text-success" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">File ready!</h2>
                <p className="text-sm text-muted-foreground mb-1">{file?.name}</p>
                <p className="text-xs text-muted-foreground mb-6">
                  Our AI will analyze your search performance and generate insights
                </p>
                <Button variant="hero" size="lg" onClick={startAnalysis} className="w-full gap-2">
                  <Sparkles className="h-4 w-4" />
                  Start AI Analysis
                </Button>
                <button
                  onClick={() => { setStep(0); setFile(null); }}
                  className="mt-3 text-sm text-muted-foreground hover:text-foreground"
                >
                  Upload a different file
                </button>
              </Card>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="shadow-soft border-border/50 p-8 text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="h-14 w-14 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-5"
                >
                  <Sparkles className="h-7 w-7 text-gold-foreground" />
                </motion.div>
                <h2 className="text-xl font-bold text-foreground mb-4">Analyzing your data...</h2>

                <div className="w-full bg-secondary rounded-full h-2 mb-4 overflow-hidden">
                  <motion.div
                    className="h-full gradient-gold rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="space-y-2 mb-4">
                  {analysisSteps.map((s, i) => (
                    <div key={s} className="flex items-center gap-2 text-sm">
                      {i < currentAnalysisStep ? (
                        <CheckCircle className="h-4 w-4 text-success shrink-0" />
                      ) : i === currentAnalysisStep ? (
                        <Loader2 className="h-4 w-4 text-gold animate-spin shrink-0" />
                      ) : (
                        <div className="h-4 w-4 rounded-full border border-border shrink-0" />
                      )}
                      <span className={i <= currentAnalysisStep ? "text-foreground" : "text-muted-foreground/50"}>
                        {s}
                      </span>
                    </div>
                  ))}
                </div>

                {progress >= 100 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm font-medium text-success"
                  >
                    Analysis complete! Redirecting...
                  </motion.p>
                )}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
