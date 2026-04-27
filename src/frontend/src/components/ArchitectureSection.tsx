import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { architectureStages } from "../data/crimeData";

function SectionFade({
  children,
  delay = 0,
}: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ArchitectureSection() {
  return (
    <section
      id="architecture"
      data-ocid="architecture.section"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(180deg, #0a0f2e 0%, #07091d 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionFade>
          <div className="mb-14">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              System Design
            </span>
            <h2 className="section-heading mt-1">
              <span className="gold-underline">System</span> Architecture
            </h2>
            <p className="text-white/50 mt-3">
              End-to-end pipeline from data ingestion to real-time alert
              delivery
            </p>
          </div>
        </SectionFade>

        {/* Pipeline */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {architectureStages.map((stage, i) => (
            <SectionFade key={stage.step} delay={i * 0.08}>
              <div className="relative">
                {/* Card */}
                <div
                  data-ocid={`architecture.stage.item.${i + 1}`}
                  className="glass rounded-xl p-4 card-elevated glass-hover h-full flex flex-col"
                  style={{ borderColor: `${stage.color}33` }}
                >
                  {/* Step badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                      style={{
                        background: `${stage.color}20`,
                        color: stage.color,
                        border: `1px solid ${stage.color}30`,
                      }}
                    >
                      {stage.step}
                    </span>
                    <span className="text-2xl">{stage.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-semibold text-sm mb-3 leading-tight">
                    {stage.title}
                  </h3>

                  {/* Bullets */}
                  <div className="space-y-1.5 mt-auto">
                    {stage.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-1.5">
                        <div
                          className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: stage.color }}
                        />
                        <span className="text-white/50 text-xs leading-snug">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Color accent line */}
                  <div
                    className="h-0.5 rounded-full mt-4"
                    style={{
                      background: `linear-gradient(90deg, ${stage.color}, transparent)`,
                    }}
                  />
                </div>

                {/* Arrow connector (not on last) */}
                {i < architectureStages.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight
                      className="w-5 h-5"
                      style={{ color: stage.color, opacity: 0.7 }}
                    />
                  </div>
                )}
              </div>
            </SectionFade>
          ))}
        </div>

        {/* Tech Stack */}
        <SectionFade delay={0.2}>
          <div className="glass rounded-xl p-6 card-elevated">
            <h3 className="text-white font-semibold mb-5 text-center">
              Technology Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Python 3.10", icon: "🐍", cat: "Language" },
                { name: "TensorFlow", icon: "⚡", cat: "ML Framework" },
                { name: "Keras", icon: "🔥", cat: "Deep Learning" },
                { name: "Django", icon: "🌐", cat: "Web Backend" },
                { name: "OpenCV", icon: "👁️", cat: "Vision" },
                { name: "React.js", icon: "⚛️", cat: "Frontend" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="glass rounded-lg p-3 text-center glass-hover"
                >
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <p className="text-white text-xs font-semibold">
                    {tech.name}
                  </p>
                  <p className="text-white/40 text-xs mt-0.5">{tech.cat}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionFade>

        {/* Dataset Info */}
        <SectionFade delay={0.25}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            {[
              {
                label: "Training Images",
                value: "12,580",
                icon: "🖼️",
                sub: "Violence + Non-violence",
              },
              {
                label: "Video Frames Processed",
                value: "248K",
                icon: "🎬",
                sub: "30fps extraction",
              },
              {
                label: "Training Epochs",
                value: "50",
                icon: "🔄",
                sub: "Early stopping enabled",
              },
            ].map((stat, i) => (
              <div
                key={stat.label}
                data-ocid={`architecture.dataset.item.${i + 1}`}
                className="glass rounded-xl p-5 card-elevated flex items-center gap-4"
              >
                <div className="text-3xl">{stat.icon}</div>
                <div>
                  <p className="text-gold font-display font-bold text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-white/70 text-sm font-medium">
                    {stat.label}
                  </p>
                  <p className="text-white/40 text-xs mt-0.5">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionFade>
      </div>
    </section>
  );
}
