import {
  Layers,
  ShieldCheck,
  Code2,
  TrendingUp,
  Zap,
  Globe,
  Users,
  BarChart3,
  Settings,
  LifeBuoy
} from "lucide-react";

const REASONS = [
  {
    title: "One Unified Platform",
    desc: "Operations, billing, marketing, support, security, and data — all managed from a single system with shared context and zero duplication.",
    icon: Layers,
  },
  {
    title: "Enterprise-Grade Security",
    desc: "Built-in authentication, access control, audit logs, IP whitelisting, and compliance-ready architecture from day one.",
    icon: ShieldCheck,
  },
  {
    title: "Developer-First Architecture",
    desc: "Modern APIs, webhooks, logs, and documentation designed for fast integrations and long-term maintainability.",
    icon: Code2,
  },
  {
    title: "Designed to Scale",
    desc: "From early-stage startups to global teams, LaunchXY adapts without rewrites, migrations, or platform limits.",
    icon: TrendingUp,
  },
  {
    title: "Global Ready",
    desc: "Multi-region architecture, localization, timezone handling, and international compliance support built-in.",
    icon: Globe,
  },
  {
    title: "Built for Teams",
    desc: "Roles, permissions, internal notes, collaboration tools, and real-time updates keep everyone aligned.",
    icon: Users,
  },
  
 
  
];


export default function WhyChooseUsAlt() {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT */}
        <div className="lg:sticky lg:top-32 h-fit">
          <p className="text-sm font-medium text-[#2BBBAD]">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 text-3xl font-medium leading-tight text-gray-900">
            Built for teams who care about speed, clarity, and control.
          </h2>

          <p className="mt-6 text-base text-gray-500 max-w-xl">
            AAA-LaunchXY is not just software — it’s infrastructure for modern
            businesses. Every feature is designed to remove friction and help
            teams move faster.-AAA
          </p>
        </div>

        {/* RIGHT */}
        <div className="space-y-12">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className="flex items-start gap-6 group"
            >
              <div className="mt-1 text-[#2BBBAD]">
                <r.icon size={22} />
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900  transition">
                  {r.title}
                </h3>
                <p className="mt-2 text-gray-600 max-w-xl">
                  AAA-{r.desc}-AAA
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
