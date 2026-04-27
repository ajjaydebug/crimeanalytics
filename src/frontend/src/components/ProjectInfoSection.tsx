import { BookOpen, FileText, Lightbulb, Target } from "lucide-react";
import { motion } from "motion/react";
import { literatureReviews } from "../data/crimeData";

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

function InfoCard({
  icon: Icon,
  title,
  children,
  color = "#3b82f6",
  ocid,
}: {
  icon: typeof BookOpen;
  title: string;
  children: React.ReactNode;
  color?: string;
  ocid?: string;
}) {
  return (
    <div
      data-ocid={ocid}
      className="glass rounded-xl p-6 card-elevated h-full"
      style={{ borderColor: `${color}25` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: `${color}18`, border: `1px solid ${color}30` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <div className="text-white/60 text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

export function ProjectInfoSection() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(180deg, #0a0f2e 0%, #050a1c 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionFade>
          <div className="mb-12">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              Project Details
            </span>
            <h2 className="section-heading mt-1">
              <span className="gold-underline">About</span> the Project
            </h2>
            <p className="text-white/50 mt-3">
              Final year project — Department of Data Analytics, Sri
              Venkateswara College of Engineering
            </p>
          </div>
        </SectionFade>

        {/* Main 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Left col */}
          <div className="space-y-6">
            <SectionFade delay={0.05}>
              <InfoCard
                icon={BookOpen}
                title="Introduction"
                color="#3b82f6"
                ocid="about.introduction.card"
              >
                <p>
                  This project addresses the critical need for automated,
                  intelligent crime surveillance systems in urban environments.
                  By integrating Convolutional Neural Networks with real-time
                  CCTV monitoring, we enable proactive public safety management
                  across Chennai.
                </p>
                <p>
                  The system processes video streams, detects violent activity
                  with high confidence, and immediately alerts law enforcement —
                  reducing response time from minutes to seconds.
                </p>
              </InfoCard>
            </SectionFade>

            <SectionFade delay={0.1}>
              <InfoCard
                icon={Target}
                title="Problem Statement"
                color="#ef4444"
                ocid="about.problem.card"
              >
                <p>
                  Traditional crime monitoring systems are{" "}
                  <strong className="text-white/80">reactive</strong>, lacking
                  predictive capabilities. Manual surveillance is prone to human
                  error and significantly delayed response times — often missing
                  incidents entirely.
                </p>
                <p>
                  There is a critical need for an{" "}
                  <strong className="text-white/80">
                    automated, real-time violence detection system
                  </strong>{" "}
                  that can process multiple camera feeds simultaneously,
                  identify criminal activity with high accuracy, and trigger
                  instant alerts with precise location data.
                </p>
                <div className="mt-3 space-y-1.5">
                  {[
                    "85% of crimes go undetected by manual monitoring",
                    "Average human response delay: 8–15 minutes",
                    "Single operator can monitor max 4 feeds effectively",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </InfoCard>
            </SectionFade>
          </div>

          {/* Right col */}
          <div className="space-y-6">
            <SectionFade delay={0.1}>
              <InfoCard
                icon={Lightbulb}
                title="Proposed Work"
                color="#f9a825"
                ocid="about.proposed.card"
              >
                <p>
                  This system leverages{" "}
                  <strong className="text-gold/80">
                    Convolutional Neural Networks
                  </strong>{" "}
                  — specifically{" "}
                  <strong className="text-white/80">AlexNet</strong> and{" "}
                  <strong className="text-white/80">VGG16</strong> — trained on
                  violence/non-violence image and video datasets to
                  automatically detect aggressive behavior in real-time.
                </p>
                <p>
                  Upon detection, the system triggers{" "}
                  <strong className="text-white/80">instant alerts</strong> with
                  precise location data, confidence scores, and severity
                  classification. Integration with GIS enables live hotspot
                  mapping across Chennai districts.
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {[
                    { label: "Detection Speed", value: "< 200ms" },
                    { label: "Accuracy (VGG16)", value: "92.7%" },
                    { label: "Camera Support", value: "16+ feeds" },
                    { label: "Alert Latency", value: "< 5 sec" },
                  ].map(({ label, value }) => (
                    <div key={label} className="glass rounded-lg p-2.5">
                      <p className="text-gold text-sm font-bold">{value}</p>
                      <p className="text-white/40 text-xs">{label}</p>
                    </div>
                  ))}
                </div>
              </InfoCard>
            </SectionFade>

            <SectionFade delay={0.15}>
              <InfoCard
                icon={FileText}
                title="Literature Review"
                color="#10b981"
                ocid="about.literature.card"
              >
                <p className="mb-3">Key papers and methodologies reviewed:</p>
                <div className="space-y-3">
                  {literatureReviews.map((ref, i) => (
                    <div
                      key={ref.title}
                      data-ocid={`about.literature.item.${i + 1}`}
                      className="glass rounded-lg p-3 border-l-2"
                      style={{ borderColor: "#10b981" }}
                    >
                      <p className="text-white/80 text-xs font-semibold">
                        {ref.title}
                      </p>
                      <p className="text-white/40 text-xs mb-1.5">
                        {ref.authors}
                      </p>
                      <p className="text-white/50 text-xs leading-relaxed">
                        {ref.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </InfoCard>
            </SectionFade>
          </div>
        </div>

        {/* Objectives */}
        <SectionFade delay={0.2}>
          <div
            data-ocid="about.objectives.card"
            className="glass rounded-xl p-6 card-elevated"
          >
            <h3 className="text-white font-semibold mb-5 text-center">
              Project Objectives
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  num: "01",
                  title: "Data Collection",
                  desc: "Aggregate CCTV feeds & NCRB crime records for Chennai",
                },
                {
                  num: "02",
                  title: "Model Training",
                  desc: "Train CNN architectures on labeled violence datasets",
                },
                {
                  num: "03",
                  title: "Real-Time Detection",
                  desc: "Deploy model for live video stream inference",
                },
                {
                  num: "04",
                  title: "Alert Dashboard",
                  desc: "Visualize hotspots & trigger instant notifications",
                },
              ].map((obj) => (
                <div key={obj.num} className="glass rounded-lg p-4 text-center">
                  <div className="text-gold font-display font-bold text-2xl mb-2">
                    {obj.num}
                  </div>
                  <p className="text-white text-sm font-semibold mb-1.5">
                    {obj.title}
                  </p>
                  <p className="text-white/45 text-xs leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionFade>
      </div>
    </section>
  );
}
