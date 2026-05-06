import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Sparkles, CheckCircle, Loader2, Plus, FileSpreadsheet } from "lucide-react";

const analysisSteps = [
  "Leyendo tu archivo XLSX...",
  "Identificando consultas de búsqueda...",
  "Analizando rendimiento de páginas...",
  "Detectando oportunidades de crecimiento...",
  "Generando recomendaciones con IA...",
  "Construyendo tu dashboard...",
];

export function AnalysisPanel() {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  const handleFile = useCallback((f: File) => {
    setFile(f);
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
    setProgress(0);
    setDone(false);
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 15 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => {
          setAnalyzing(false);
          setDone(true);
        }, 800);
      }
      setProgress(Math.min(p, 100));
    }, 600);
  }, []);

  const reset = useCallback(() => {
    setFile(null);
    setAnalyzing(false);
    setProgress(0);
    setDone(false);
  }, []);

  const currentStep = Math.min(
    Math.floor(progress / (100 / analysisSteps.length)),
    analysisSteps.length - 1
  );

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-border/50">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <Plus className="h-4 w-4 text-gold" />
          Nuevo Análisis
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          Sube tu archivo de Google Search Console
        </p>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {!analyzing && !done && (
          <>
            {/* Upload area */}
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => document.getElementById("xlsx-input")?.click()}
              className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-gold/50 hover:bg-warm/20 transition-all cursor-pointer"
            >
              <FileSpreadsheet className="h-8 w-8 text-gold mx-auto mb-2" />
              {file ? (
                <>
                  <p className="text-sm font-medium text-foreground">{file.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">Listo para analizar</p>
                </>
              ) : (
                <>
                  <p className="text-xs font-medium text-foreground mb-0.5">
                    Arrastra tu archivo XLSX aquí
                  </p>
                  <p className="text-[11px] text-muted-foreground">o haz clic para buscar</p>
                </>
              )}
              <input
                id="xlsx-input"
                type="file"
                accept=".xlsx,.xls,.csv"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />
            </div>

            {/* Instructions */}
            <div className="p-3 rounded-xl bg-warm/40">
              <h4 className="text-[11px] font-semibold text-warm-foreground mb-1.5">Cómo exportar desde GSC:</h4>
              <ol className="text-[11px] text-muted-foreground space-y-0.5 list-decimal list-inside leading-relaxed">
                <li>Ve a Google Search Console</li>
                <li>Haz clic en "Rendimiento"</li>
                <li>Selecciona rango de fechas</li>
                <li>Exportar → Descargar XLSX</li>
              </ol>
            </div>

            {/* Action buttons */}
            <Button
              variant="hero"
              size="default"
              className="w-full gap-2"
              disabled={!file}
              onClick={startAnalysis}
            >
              <Sparkles className="h-4 w-4" />
              Iniciar Análisis IA
            </Button>

            <button
              onClick={() => {
                setFile(new File(["demo"], "demo-data.xlsx"));
              }}
              className="w-full text-xs text-gold-foreground hover:underline text-center"
            >
              O prueba con datos de ejemplo →
            </button>
          </>
        )}

        {analyzing && (
          <div className="space-y-4">
            <div className="text-center">
              <div className="h-12 w-12 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-3 animate-pulse">
                <Sparkles className="h-6 w-6 text-gold-foreground" />
              </div>
              <p className="text-sm font-semibold text-foreground">Analizando...</p>
            </div>

            <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
              <div
                className="h-full gradient-gold rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="space-y-2">
              {analysisSteps.map((s, i) => (
                <div key={s} className="flex items-center gap-2 text-xs">
                  {i < currentStep ? (
                    <CheckCircle className="h-3.5 w-3.5 text-success shrink-0" />
                  ) : i === currentStep ? (
                    <Loader2 className="h-3.5 w-3.5 text-gold animate-spin shrink-0" />
                  ) : (
                    <div className="h-3.5 w-3.5 rounded-full border border-border shrink-0" />
                  )}
                  <span className={i <= currentStep ? "text-foreground" : "text-muted-foreground/40"}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {done && (
          <div className="text-center space-y-4">
            <div className="h-12 w-12 rounded-xl bg-success/10 flex items-center justify-center mx-auto">
              <CheckCircle className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">¡Análisis completado!</p>
              <p className="text-xs text-muted-foreground mt-1">
                El dashboard se ha actualizado con los nuevos datos.
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={reset} className="w-full">
              Analizar otro archivo
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
