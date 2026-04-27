import { ArrowRight, Brain, MapPin, Shield } from "lucide-react";
import { motion } from "motion/react";

const floatingDots = [
  { size: 4, color: "#f9a825", opacity: 0.35, top: 15, left: 20, dur: 3.5 },
  { size: 3, color: "#3b82f6", opacity: 0.2, top: 25, left: 75, dur: 4.0 },
  { size: 5, color: "#f9a825", opacity: 0.25, top: 70, left: 10, dur: 4.5 },
  { size: 2, color: "#3b82f6", opacity: 0.3, top: 60, left: 85, dur: 3.0 },
  { size: 4, color: "#3b82f6", opacity: 0.2, top: 40, left: 90, dur: 5.0 },
  { size: 3, color: "#f9a825", opacity: 0.4, top: 80, left: 55, dur: 3.8 },
  { size: 2, color: "#3b82f6", opacity: 0.15, top: 30, left: 40, dur: 4.2 },
  { size: 5, color: "#f9a825", opacity: 0.2, top: 85, left: 30, dur: 3.3 },
  { size: 3, color: "#3b82f6", opacity: 0.25, top: 18, left: 60, dur: 4.8 },
  { size: 4, color: "#f9a825", opacity: 0.3, top: 55, left: 15, dur: 3.6 },
  { size: 2, color: "#3b82f6", opacity: 0.2, top: 45, left: 70, dur: 5.2 },
  { size: 3, color: "#f9a825", opacity: 0.25, top: 75, left: 45, dur: 4.1 },
];

const highlights = [
  { icon: Brain, label: "CNN Deep Learning" },
  { icon: MapPin, label: "GIS Hotspot Mapping" },
  { icon: Shield, label: "Real-Time Detection" },
];

export function HeroSection() {
  const handleScrollToDashboard = () => {
    document
      .getElementById("dashboard")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #050a1c 0%, #0a0f2e 40%, #0d1540 100%)",
      }}
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(/assets/generated/hero-crime-analytics.dim_1600x900.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,168,37,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,168,37,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #1a237e 0%, transparent 70%)",
        }}
      />

      {/* Floating dots */}
      {floatingDots.map((dot, i) => (
        <div
          key={`dot-${dot.top}-${dot.left}`}
          className="absolute rounded-full"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            background: dot.color,
            opacity: dot.opacity,
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            animation: `float ${dot.dur}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-gold text-sm font-medium tracking-wide">
            Final Year Project Review · Data Analytics · SVCE
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
        >
          Data-Driven <span className="text-gold">Crime Analysis</span>
          <br />
          and Visualization for <span className="text-gold">Public Safety</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/60 text-lg mb-8 max-w-2xl mx-auto"
        >
          CNN-based violence detection using{" "}
          <strong className="text-white/80">AlexNet</strong>,{" "}
          <strong className="text-white/80">LeNet</strong> &{" "}
          <strong className="text-white/80">VGG16</strong> architectures —
          real-time alert system for Chennai, Tamil Nadu
        </motion.p>

        {/* Highlights row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 glass px-4 py-2 rounded-full"
            >
              <Icon className="w-4 h-4 text-gold" />
              <span className="text-white/80 text-sm">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.button
          data-ocid="hero.primary_button"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={handleScrollToDashboard}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-smooth group"
          style={{
            background: "linear-gradient(135deg, #f9a825, #e0a020)",
            color: "#0a0f2e",
            boxShadow: "0 8px 32px rgba(249, 168, 37, 0.35)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 12px 40px rgba(249, 168, 37, 0.55)";
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 8px 32px rgba(249, 168, 37, 0.35)";
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translateY(0)";
          }}
        >
          View Analytics Dashboard
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
