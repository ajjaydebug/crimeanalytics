import { Award, Cpu, Layers } from "lucide-react";
import { motion } from "motion/react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { modelComparisonData, modelDetails } from "../data/crimeData";

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

export function ModelPerformanceSection() {
  return (
    <section
      id="model"
      data-ocid="model.section"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(180deg, #080c24 0%, #0a0f2e 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionFade>
          <div className="mb-12">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              Deep Learning
            </span>
            <h2 className="section-heading mt-1">
              <span className="gold-underline">CNN Model</span> Performance
            </h2>
            <p className="text-white/50 mt-3">
              Comparative analysis of deep learning architectures trained on
              violence detection dataset
            </p>
          </div>
        </SectionFade>

        {/* Main comparison chart */}
        <SectionFade delay={0.1}>
          <div
            data-ocid="model.comparison.chart"
            className="glass rounded-xl p-6 card-elevated mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Architecture Accuracy Comparison
                </h3>
                <p className="text-white/40 text-sm mt-0.5">
                  Training vs Validation accuracy (%)
                </p>
              </div>
              <div className="glass-gold px-4 py-2 rounded-lg">
                <p className="text-gold text-xs font-medium">Best Model</p>
                <p className="text-white font-bold text-sm">VGG16 — 92.7%</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart
                data={modelComparisonData}
                margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                barCategoryGap="35%"
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.06)"
                />
                <XAxis
                  dataKey="model"
                  tick={{
                    fill: "rgba(255,255,255,0.7)",
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[82, 95]}
                  tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  contentStyle={{
                    background: "#1a237e",
                    border: "1px solid rgba(249,168,37,0.3)",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                  labelStyle={{ color: "#f9a825", fontWeight: 600 }}
                  formatter={(value: number) => [`${value}%`]}
                />
                <Legend
                  wrapperStyle={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 12,
                    paddingTop: "12px",
                  }}
                />
                <Bar
                  dataKey="training"
                  name="Training Accuracy"
                  fill="#3b82f6"
                  radius={[6, 6, 0, 0]}
                />
                <Bar
                  dataKey="validation"
                  name="Validation Accuracy"
                  fill="#f9a825"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionFade>

        {/* Model cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modelDetails.map((model, i) => (
            <SectionFade key={model.name} delay={0.1 + i * 0.1}>
              <div
                data-ocid={`model.card.item.${i + 1}`}
                className={`glass rounded-xl p-6 card-elevated glass-hover relative overflow-hidden ${
                  model.best ? "border-gold/40" : ""
                }`}
                style={
                  model.best
                    ? {
                        borderColor: "rgba(249,168,37,0.4)",
                        boxShadow:
                          "0 8px 32px rgba(249,168,37,0.12), 0 2px 8px rgba(0,0,0,0.2)",
                      }
                    : {}
                }
              >
                {/* Best badge */}
                {model.best && (
                  <div className="absolute top-3 right-3 bg-gold text-navy-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    BEST
                  </div>
                )}

                {/* Accuracy ring */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="relative w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: `conic-gradient(${model.best ? "#f9a825" : "#3b82f6"} ${(model.accuracy / 100) * 360}deg, rgba(255,255,255,0.05) 0)`,
                    }}
                  >
                    <div
                      className="absolute inset-1.5 rounded-full flex items-center justify-center"
                      style={{ background: "#0d1540" }}
                    >
                      <span className="text-white font-bold text-sm">
                        {model.accuracy}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-display font-bold text-xl">
                      {model.name}
                    </h3>
                    <p className="text-white/50 text-xs mt-0.5">{model.desc}</p>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="glass rounded-lg p-3">
                    <div className="flex items-center gap-1.5 text-white/40 text-xs mb-1">
                      <Layers className="w-3 h-3" />
                      <span>Layers</span>
                    </div>
                    <p className="text-white font-bold text-lg">
                      {model.layers}
                    </p>
                  </div>
                  <div className="glass rounded-lg p-3">
                    <div className="flex items-center gap-1.5 text-white/40 text-xs mb-1">
                      <Cpu className="w-3 h-3" />
                      <span>Parameters</span>
                    </div>
                    <p className="text-white font-bold text-lg">
                      {model.params}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {model.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2 text-xs text-white/60"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: model.best ? "#f9a825" : "#3b82f6",
                        }}
                      />
                      {feat}
                    </div>
                  ))}
                </div>

                {/* Accuracy bar */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-white/40">Validation Acc</span>
                    <span className="text-white/70 font-mono">
                      {
                        modelComparisonData.find((m) => m.model === model.name)
                          ?.validation
                      }
                      %
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-smooth"
                      style={{
                        width: `${(((modelComparisonData.find((m) => m.model === model.name)?.validation ?? 0) - 82) / (95 - 82)) * 100}%`,
                        background: model.best
                          ? "linear-gradient(90deg, #f9a825, #fdd835)"
                          : "linear-gradient(90deg, #3b82f6, #60a5fa)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>
    </section>
  );
}
