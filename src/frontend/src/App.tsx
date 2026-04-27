import { ArchitectureSection } from "./components/ArchitectureSection";
import { DashboardSection } from "./components/DashboardSection";
import { DetectionSection } from "./components/DetectionSection";
import { HeroSection } from "./components/HeroSection";
import { ModelPerformanceSection } from "./components/ModelPerformanceSection";
import { Navbar } from "./components/Navbar";
import { ProjectInfoSection } from "./components/ProjectInfoSection";

export default function App() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <div className="dark min-h-screen" style={{ background: "#0a0f2e" }}>
      <Navbar />
      <main>
        <HeroSection />
        <DashboardSection />
        <ModelPerformanceSection />
        <ArchitectureSection />
        <DetectionSection />
        <ProjectInfoSection />
      </main>

      {/* Footer */}
      <footer
        className="py-10 px-6 border-t border-white/10 text-center"
        style={{
          background: "linear-gradient(180deg, #050a1c 0%, #03061a 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-6 rounded bg-gold/10 border border-gold/30 flex items-center justify-center">
              <span className="text-gold text-xs">⚡</span>
            </div>
            <span className="text-white font-display font-bold text-sm">
              Crime<span className="text-gold">Analytics</span>
            </span>
          </div>
          <p className="text-white/40 text-sm mb-2">
            Data-Driven Crime Analysis and Visualization for Public Safety
          </p>
          <p className="text-white/30 text-xs mb-1">
            Sri Venkateswara College of Engineering · Department of Data
            Analytics · Batch 7
          </p>
          <p className="text-white/25 text-xs">
            Guide: Dr. T. Rajasekaran M.E, Ph.D
          </p>
          <div className="mt-4 pt-4 border-t border-white/5">
            <p className="text-white/25 text-xs">
              © {year}.{" "}
              <a
                href={utmLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold/60 transition-smooth"
              >
                Built with love using caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
