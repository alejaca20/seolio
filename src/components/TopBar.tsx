import { BarChart3, History, Globe, User, ChevronDown } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
];

export function TopBar() {
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-border/50 h-14">
      <div className="h-full px-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg gradient-gold flex items-center justify-center">
            <BarChart3 className="h-4 w-4 text-gold-foreground" />
          </div>
          <span className="text-base font-bold text-foreground tracking-tight">Seolytics</span>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Language */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>{currentLang.flag}</span>
              <span className="hidden sm:inline">{currentLang.code.toUpperCase()}</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 top-10 z-50 bg-card border border-border rounded-xl shadow-soft p-1 min-w-[140px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setCurrentLang(lang); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                        currentLang.code === lang.code ? "bg-warm text-foreground" : "text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* History */}
          <button className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <History className="h-4 w-4" />
          </button>

          {/* Account */}
          <button className="h-8 w-8 rounded-lg gradient-gold flex items-center justify-center text-sm font-semibold text-gold-foreground">
            U
          </button>
        </div>
      </div>
    </header>
  );
}
