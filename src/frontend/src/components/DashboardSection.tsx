import {
  AlertTriangle,
  Cpu,
  Database,
  MapPin,
  Minus,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  crimeTypeData,
  heatmapData,
  kpiStats,
  monthlyTrendData,
  riskZones,
  timeSlots,
  violenceDistribution,
} from "../data/crimeData";

const iconMap = {
  database: Database,
  "alert-triangle": AlertTriangle,
  "map-pin": MapPin,
  cpu: Cpu,
};
const kpiColors = {
  blue: {
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.3)",
    icon: "#3b82f6",
    text: "#3b82f6",
  },
  red: {
    bg: "rgba(239,68,68,0.1)",
    border: "rgba(239,68,68,0.3)",
    icon: "#ef4444",
    text: "#ef4444",
  },
  yellow: {
    bg: "rgba(249,168,37,0.1)",
    border: "rgba(249,168,37,0.3)",
    icon: "#f9a825",
    text: "#f9a825",
  },
  green: {
    bg: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.3)",
    icon: "#10b981",
    text: "#10b981",
  },
};

const heatLegendColors = [
  "rgba(59,130,246,0.15)",
  "rgba(59,130,246,0.35)",
  "rgba(249,168,37,0.4)",
  "rgba(249,100,37,0.55)",
  "rgba(239,68,68,0.75)",
] as const;

const heatCellColor = (v: number) => {
  if (v <= 2) return "rgba(59,130,246,0.15)";
  if (v <= 4) return "rgba(59,130,246,0.35)";
  if (v <= 6) return "rgba(249,168,37,0.4)";
  if (v <= 8) return "rgba(249,100,37,0.55)";
  return "rgba(239,68,68,0.75)";
};

const riskBadge = {
  "High Risk": "bg-red-500/20 text-red-400 border border-red-500/30",
  "Medium Risk": "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
  "Low Risk": "bg-green-500/20 text-green-400 border border-green-500/30",
};

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

export function DashboardSection() {
  return (
    <section
      id="dashboard"
      data-ocid="dashboard.section"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(180deg, #0a0f2e 0%, #080c24 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <SectionFade>
          <div className="mb-12">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              Live Analytics
            </span>
            <h2 className="section-heading mt-1">
              <span className="gold-underline">Crime Analytics</span> Dashboard
            </h2>
            <p className="text-white/50 mt-3">
              Real-time crime pattern analysis across Chennai metropolitan area
            </p>
          </div>
        </SectionFade>

        {/* KPI Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpiStats.map((stat, i) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            const c = kpiColors[stat.color as keyof typeof kpiColors];
            return (
              <SectionFade key={stat.label} delay={i * 0.08}>
                <div
                  data-ocid={`dashboard.kpi.item.${i + 1}`}
                  className="glass rounded-xl p-5 card-elevated glass-hover"
                  style={{
                    borderColor: c.border,
                    background: `${c.bg} , rgba(255,255,255,0.03)`,
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: c.bg,
                        border: `1px solid ${c.border}`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: c.icon }} />
                    </div>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{
                        color: c.text,
                        background: c.bg,
                        border: `1px solid ${c.border}`,
                      }}
                    >
                      {stat.trend}
                    </span>
                  </div>
                  <p className="text-white/50 text-xs mb-1">{stat.label}</p>
                  <p
                    className="text-2xl font-display font-bold"
                    style={{ color: c.text }}
                  >
                    {stat.value}
                  </p>
                </div>
              </SectionFade>
            );
          })}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Bar chart - Crime Types */}
          <SectionFade delay={0.1}>
            <div
              data-ocid="dashboard.crime_types.chart"
              className="glass rounded-xl p-5 card-elevated"
            >
              <h3 className="text-white font-semibold mb-1">
                Crime Types Distribution
              </h3>
              <p className="text-white/40 text-xs mb-4">
                Annual breakdown by crime category
              </p>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart
                  data={crimeTypeData}
                  margin={{ top: 5, right: 10, bottom: 5, left: -10 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.06)"
                  />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#1a237e",
                      border: "1px solid rgba(249,168,37,0.3)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#f9a825" }}
                    itemStyle={{ color: "#fff" }}
                  />
                  <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                    {crimeTypeData.map((entry) => (
                      <Cell key={entry.name} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </SectionFade>

          {/* Line chart - Monthly Trend */}
          <SectionFade delay={0.2}>
            <div
              data-ocid="dashboard.monthly_trend.chart"
              className="glass rounded-xl p-5 card-elevated"
            >
              <h3 className="text-white font-semibold mb-1">
                Monthly Crime Trend
              </h3>
              <p className="text-white/40 text-xs mb-4">
                Jan – Dec seasonal analysis
              </p>
              <ResponsiveContainer width="100%" height={240}>
                <LineChart
                  data={monthlyTrendData}
                  margin={{ top: 5, right: 10, bottom: 5, left: -10 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.06)"
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#1a237e",
                      border: "1px solid rgba(249,168,37,0.3)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#f9a825" }}
                    itemStyle={{ color: "#fff" }}
                  />
                  <Legend
                    wrapperStyle={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: 11,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="crimes"
                    stroke="#f9a825"
                    strokeWidth={2.5}
                    dot={{ fill: "#f9a825", r: 3 }}
                    name="Total Crimes"
                  />
                  <Line
                    type="monotone"
                    dataKey="violence"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={{ fill: "#ef4444", r: 2.5 }}
                    name="Violence"
                    strokeDasharray="5 3"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </SectionFade>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Donut chart */}
          <SectionFade delay={0.1}>
            <div
              data-ocid="dashboard.violence_dist.chart"
              className="glass rounded-xl p-5 card-elevated"
            >
              <h3 className="text-white font-semibold mb-1">
                Violence vs Non-Violence
              </h3>
              <p className="text-white/40 text-xs mb-2">
                CNN classification output distribution
              </p>
              <div className="flex items-center justify-center gap-8">
                <ResponsiveContainer width="55%" height={200}>
                  <PieChart>
                    <Pie
                      data={violenceDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={80}
                      strokeWidth={0}
                      dataKey="value"
                    >
                      {violenceDistribution.map((entry) => (
                        <Cell key={entry.name} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        background: "#1a237e",
                        border: "1px solid rgba(249,168,37,0.3)",
                        borderRadius: "8px",
                      }}
                      itemStyle={{ color: "#fff" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-3">
                  {violenceDistribution.map((d) => (
                    <div key={d.name} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ background: d.fill }}
                      />
                      <div>
                        <p className="text-white text-sm font-semibold">
                          {d.value.toLocaleString()}
                        </p>
                        <p className="text-white/50 text-xs">{d.name}</p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-gold text-lg font-bold">24.9%</p>
                    <p className="text-white/40 text-xs">Violence Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionFade>

          {/* Heatmap */}
          <SectionFade delay={0.2}>
            <div
              data-ocid="dashboard.heatmap.chart"
              className="glass rounded-xl p-5 card-elevated"
            >
              <h3 className="text-white font-semibold mb-1">
                Crime Heatmap by Time
              </h3>
              <p className="text-white/40 text-xs mb-4">
                Incident intensity: Day × Time slot
              </p>
              <div className="space-y-1.5">
                {/* Header row */}
                <div
                  className="grid gap-1"
                  style={{ gridTemplateColumns: "40px repeat(6, 1fr)" }}
                >
                  <div />
                  {timeSlots.map((t) => (
                    <div
                      key={t}
                      className="text-center text-white/40 text-[10px]"
                    >
                      {t}
                    </div>
                  ))}
                </div>
                {/* Data rows */}
                {Object.entries(heatmapData).map(([day, values]) => (
                  <div
                    key={day}
                    className="grid gap-1"
                    style={{ gridTemplateColumns: "40px repeat(6, 1fr)" }}
                  >
                    <div className="text-white/50 text-xs flex items-center">
                      {day}
                    </div>
                    {values.map((v, ci) => (
                      <div
                        key={`${day}-${timeSlots[ci]}`}
                        className="h-7 rounded flex items-center justify-center text-[10px] font-mono transition-smooth hover:scale-110"
                        style={{
                          background: heatCellColor(v),
                          border: "1px solid rgba(255,255,255,0.06)",
                          color:
                            v >= 7
                              ? "rgba(255,255,255,0.9)"
                              : "rgba(255,255,255,0.5)",
                        }}
                        title={`${day} ${timeSlots[ci]}: ${v * 12} incidents`}
                      >
                        {v}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              {/* Legend */}
              <div className="flex items-center gap-1 mt-3 justify-end">
                <span className="text-white/30 text-xs">Low</span>
                {heatLegendColors.map((c) => (
                  <div
                    key={c}
                    className="w-5 h-3 rounded-sm"
                    style={{ background: c }}
                  />
                ))}
                <span className="text-white/30 text-xs">High</span>
              </div>
            </div>
          </SectionFade>
        </div>

        {/* Risk Zones Table */}
        <SectionFade delay={0.15}>
          <div
            data-ocid="dashboard.risk_zones.table"
            className="glass rounded-xl card-elevated overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold">
                  Risk Zone Analysis — Chennai
                </h3>
                <p className="text-white/40 text-xs mt-0.5">
                  District-level threat assessment
                </p>
              </div>
              <span className="text-xs text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                Updated Live
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    {["District", "Risk Level", "Incidents", "Trend"].map(
                      (h) => (
                        <th
                          key={h}
                          className="px-6 py-3 text-left text-white/40 text-xs font-medium uppercase tracking-wider"
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {riskZones.map((zone, i) => (
                    <tr
                      key={zone.district}
                      data-ocid={`dashboard.risk_zone.item.${i + 1}`}
                      className="border-b border-white/5 hover:bg-white/3 transition-smooth"
                    >
                      <td className="px-6 py-3 text-white font-medium">
                        {zone.district}
                      </td>
                      <td className="px-6 py-3">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-medium ${riskBadge[zone.risk as keyof typeof riskBadge]}`}
                        >
                          {zone.risk}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-white/80 font-mono">
                        {zone.incidents}
                      </td>
                      <td className="px-6 py-3">
                        {zone.trend === "↑" && (
                          <div className="flex items-center gap-1 text-red-400">
                            <TrendingUp className="w-4 h-4" />
                            <span>Rising</span>
                          </div>
                        )}
                        {zone.trend === "↓" && (
                          <div className="flex items-center gap-1 text-green-400">
                            <TrendingDown className="w-4 h-4" />
                            <span>Falling</span>
                          </div>
                        )}
                        {zone.trend === "→" && (
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Minus className="w-4 h-4" />
                            <span>Stable</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </SectionFade>
      </div>
    </section>
  );
}
