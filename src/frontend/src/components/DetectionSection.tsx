import { Activity, AlertCircle, Bell, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { alertLog } from "../data/crimeData";

const cams = ["CAM 01", "CAM 02", "CAM 03", "CAM 04"];
const camColors = [
  "rgba(239,68,68,0.15)",
  "rgba(59,130,246,0.1)",
  "rgba(59,130,246,0.1)",
  "rgba(16,185,129,0.1)",
];

const zones = [
  { name: "Anna Nagar", x: 2, y: 1, alert: true },
  { name: "T. Nagar", x: 4, y: 3, alert: false },
  { name: "Velachery", x: 5, y: 5, alert: false },
  { name: "Adyar", x: 3, y: 6, alert: false },
  { name: "Central", x: 3, y: 2, alert: false },
  { name: "Porur", x: 1, y: 4, alert: false },
];

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

export function DetectionSection() {
  const [currentTime, setCurrentTime] = useState("");
  const [scanLine, setScanLine] = useState(0);

  useEffect(() => {
    const tick = () => setCurrentTime(new Date().toLocaleTimeString("en-IN"));
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setScanLine((p) => (p + 1) % 4), 800);
    return () => clearInterval(iv);
  }, []);

  return (
    <section
      id="sentinel"
      data-ocid="sentinel.section"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(180deg, #07091d 0%, #0a0f2e 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionFade>
          <div className="mb-12">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              Live Detection
            </span>
            <h2 className="section-heading mt-1">
              <span className="gold-underline">Sentinel View</span> — Live
              Detection
            </h2>
            <p className="text-white/50 mt-3">
              Real-time CNN inference on CCTV feeds — automated violence
              detection and instant alerts
            </p>
          </div>
        </SectionFade>

        {/* 3-panel layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          {/* Panel 1: Camera Feed */}
          <SectionFade delay={0.05}>
            <div
              data-ocid="sentinel.camera_feed.panel"
              className="glass rounded-xl overflow-hidden card-elevated"
            >
              {/* Header */}
              <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-red-400" />
                  <span className="text-white text-sm font-medium">
                    Camera Feed
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-red-500/20 px-2.5 py-1 rounded-full border border-red-500/30">
                  <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse-red" />
                  <span className="text-red-400 text-xs font-bold">LIVE</span>
                </div>
              </div>

              {/* Camera grid */}
              <div className="p-3 grid grid-cols-2 gap-2">
                {cams.map((cam, i) => (
                  <div
                    key={cam}
                    className="relative h-24 rounded-lg overflow-hidden border border-white/10"
                    style={{ background: camColors[i] }}
                  >
                    {/* Scan line effect */}
                    {i === 0 && (
                      <div
                        className="absolute left-0 right-0 h-0.5 bg-red-400/60"
                        style={{
                          top: `${scanLine * 25}%`,
                          transition: "top 0.3s linear",
                        }}
                      />
                    )}
                    {/* Camera label */}
                    <div className="absolute top-1.5 left-1.5 bg-black/50 px-1.5 py-0.5 rounded text-white text-xs font-mono">
                      {cam}
                    </div>
                    {/* Alert indicator */}
                    {i === 0 && (
                      <div className="absolute inset-0 border-2 border-red-500/50 rounded-lg animate-pulse" />
                    )}
                    {/* Grid lines */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    {/* Person silhouette for cam 01 */}
                    {i === 0 && (
                      <div className="absolute bottom-3 left-1/3 w-3 h-6 bg-red-400/40 rounded-t-full" />
                    )}
                  </div>
                ))}
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-white/40 text-xs">
                  Processing: 30 fps
                </span>
                <span className="text-red-400 text-xs font-medium">
                  ⚠ Activity Detected
                </span>
              </div>
            </div>
          </SectionFade>

          {/* Panel 2: Detection Result */}
          <SectionFade delay={0.1}>
            <div
              data-ocid="sentinel.detection_result.panel"
              className="glass rounded-xl overflow-hidden card-elevated"
              style={{ borderColor: "rgba(239,68,68,0.3)" }}
            >
              {/* Alert header */}
              <div
                className="px-4 py-3 border-b border-red-500/20 flex items-center justify-between"
                style={{ background: "rgba(239,68,68,0.1)" }}
              >
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 animate-pulse-red" />
                  <span className="text-red-400 text-sm font-bold">
                    ⚠ ALERT DETECTED
                  </span>
                </div>
                <Bell className="w-4 h-4 text-red-400 animate-pulse-red" />
              </div>

              <div className="p-5 space-y-4">
                {/* Confidence ring */}
                <div className="flex items-center gap-4">
                  <div
                    className="relative w-20 h-20 rounded-full flex-shrink-0"
                    style={{
                      background:
                        "conic-gradient(#ef4444 277deg, rgba(239,68,68,0.1) 0deg)",
                    }}
                  >
                    <div
                      className="absolute inset-2 rounded-full flex flex-col items-center justify-center"
                      style={{ background: "#0d1540" }}
                    >
                      <span className="text-white font-bold text-xl">0.77</span>
                      <span className="text-white/40 text-xs">conf</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">
                      Criminal Activity
                    </p>
                    <p className="text-white/50 text-sm">Violence / Assault</p>
                    <div className="mt-2 bg-red-500/20 border border-red-500/30 px-2.5 py-1 rounded-full inline-flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                      <span className="text-red-400 text-xs font-bold">
                        HIGH SEVERITY
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2.5 py-3 border-t border-white/10">
                  {[
                    {
                      label: "Location",
                      value: "Anna Nagar, Chennai",
                      icon: "📍",
                    },
                    { label: "Camera", value: "CAM 01 — Block Z", icon: "📹" },
                    { label: "Time", value: currentTime, icon: "⏱" },
                    { label: "Model", value: "VGG16 (92.7% acc)", icon: "🧠" },
                  ].map(({ label, value, icon }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between"
                    >
                      <span className="text-white/40 text-xs flex items-center gap-1.5">
                        <span>{icon}</span>
                        {label}
                      </span>
                      <span className="text-white text-xs font-medium">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-1">
                  <button
                    type="button"
                    data-ocid="sentinel.notify_button"
                    className="w-full py-2.5 rounded-lg text-sm font-semibold transition-smooth text-white"
                    style={{
                      background: "linear-gradient(135deg, #ef4444, #dc2626)",
                      boxShadow: "0 4px 16px rgba(239,68,68,0.3)",
                    }}
                  >
                    🚨 Notify Authorities
                  </button>
                  <button
                    type="button"
                    data-ocid="sentinel.review_button"
                    className="w-full py-2.5 rounded-lg text-sm font-medium glass text-white/70 hover:text-white transition-smooth"
                  >
                    <CheckCircle className="w-4 h-4 inline mr-1.5" />
                    Mark as Reviewed
                  </button>
                </div>
              </div>
            </div>
          </SectionFade>

          {/* Panel 3: Location Map */}
          <SectionFade delay={0.15}>
            <div
              data-ocid="sentinel.location_map.panel"
              className="glass rounded-xl overflow-hidden card-elevated"
            >
              <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-white text-sm font-medium">
                  📍 Location Map — Chennai
                </span>
                <span className="text-gold text-xs">Live</span>
              </div>

              {/* CSS Map */}
              <div className="p-4">
                <div
                  className="relative rounded-lg overflow-hidden"
                  style={{
                    height: "200px",
                    background:
                      "linear-gradient(135deg, #0d1b4b 0%, #1a237e 100%)",
                    backgroundImage:
                      "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                >
                  {/* Zone blocks */}
                  {zones.map((zone) => (
                    <div
                      key={zone.name}
                      className="absolute"
                      style={{
                        left: `${zone.x * 15}%`,
                        top: `${zone.y * 12}%`,
                      }}
                    >
                      <div
                        className="relative rounded-md px-2 py-1 text-xs font-medium border"
                        style={{
                          background: zone.alert
                            ? "rgba(239,68,68,0.15)"
                            : "rgba(59,130,246,0.1)",
                          borderColor: zone.alert
                            ? "rgba(239,68,68,0.4)"
                            : "rgba(59,130,246,0.2)",
                          color: zone.alert
                            ? "#ef4444"
                            : "rgba(255,255,255,0.5)",
                        }}
                      >
                        {zone.name}
                        {zone.alert && (
                          <>
                            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 animate-ping-gold" />
                          </>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Roads */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute w-full h-px bg-blue-400"
                      style={{ top: "35%" }}
                    />
                    <div
                      className="absolute h-full w-px bg-blue-400"
                      style={{ left: "42%" }}
                    />
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 mt-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-red-500/30 border border-red-500/50" />
                    <span className="text-white/50">Alert Zone</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-blue-500/20 border border-blue-500/30" />
                    <span className="text-white/50">Monitored</span>
                  </div>
                  <div className="flex items-center gap-1.5 ml-auto">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-400 text-xs">Active Alert</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionFade>
        </div>

        {/* Alert Log Table */}
        <SectionFade delay={0.2}>
          <div
            data-ocid="sentinel.alert_log.table"
            className="glass rounded-xl card-elevated overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-white font-semibold">Alert Log</h3>
              <span className="text-xs text-white/40">
                Last 24 hours — 5 events
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    {["Time", "Location", "Type", "Confidence", "Status"].map(
                      (h) => (
                        <th
                          key={h}
                          className="px-5 py-3 text-left text-white/40 text-xs font-medium uppercase tracking-wider"
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {alertLog.map((log, i) => (
                    <tr
                      key={log.time}
                      data-ocid={`sentinel.alert.item.${i + 1}`}
                      className="border-b border-white/5 hover:bg-white/3 transition-smooth"
                    >
                      <td className="px-5 py-3 text-white/70 font-mono text-xs">
                        {log.time}
                      </td>
                      <td className="px-5 py-3 text-white/80">
                        {log.location}
                      </td>
                      <td className="px-5 py-3">
                        <span className="text-white/70 text-xs px-2 py-0.5 rounded-full border border-white/10 bg-white/5">
                          {log.type}
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${log.confidence * 100}%`,
                                background:
                                  log.confidence > 0.8
                                    ? "#ef4444"
                                    : log.confidence > 0.7
                                      ? "#f9a825"
                                      : "#3b82f6",
                              }}
                            />
                          </div>
                          <span className="text-white/60 text-xs font-mono">
                            {log.confidence.toFixed(2)}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-3">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                            log.status === "Active"
                              ? "bg-red-500/20 text-red-400 border border-red-500/30"
                              : "bg-green-500/20 text-green-400 border border-green-500/30"
                          }`}
                        >
                          {log.status}
                        </span>
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
