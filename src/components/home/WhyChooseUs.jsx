import {
  Layers,
  ShieldCheck,
  TrendingUp,
  Globe,
  Users,
BookOpen
} from "lucide-react";

const REASONS = [
  {
    title: "All-in-One Student Portal",
    desc: "Courses, notes, assignments, exams, progress tracking, and announcements — everything students need in one place.",
    icon: Layers,
  },
  {
    title: "Secure Student Access",
    desc: "Role-based login for students and teachers, protected data, secure authentication, and privacy-first architecture.",
    icon: ShieldCheck,
  },
  {
    title: "Structured Learning System",
    desc: "Well-organized modules, chapter-wise notes, downloadable resources, and clear learning paths for every course.",
    icon: BookOpen,
  },
  {
    title: "Progress & Performance Tracking",
    desc: "Track course completion, test scores, attendance, and learning milestones in real time.",
    icon: TrendingUp,
  },
  {
    title: "Anytime, Anywhere Learning",
    desc: "Access courses and notes across devices with a smooth, responsive experience — study on your schedule.",
    icon: Globe,
  },
  {
    title: "Student-Teacher Collaboration",
    desc: "Doubt discussions, announcements, feedback, and shared resources to keep learning interactive and connected.",
    icon: Users,
  },
];



export default function WhyChooseUsAlt() {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT */}
        <div className="lg:sticky lg:top-32 h-fit">
          <p className="text-sm font-medium text-[#2BBBAD] border-b p-2">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 text-3xl font-medium leading-tight text-gray-900">
            Built for teams who care about speed, clarity, and control.
          </h2>

          <p className="mt-6 text-base text-gray-500 max-w-xl">
            AAA-SPYIWEB is not just software — it’s infrastructure for modern
            businesses. Every feature is designed to remove friction and help
            teams move faster.-AAA
          </p>

           <div className="mt-6 flex gap-4">
          <button
            className="flex items-center gap-2 bg-[#2BBBAD] text-white
            px-6 py-2 rounded-full text-sm shadow-md hover:opacity-90 transition"
          >
            Get Started
          </button>
  
          <button
            className="px-6 py-2 rounded-full text-sm border
            border-[#E5E7EB] bg-white shadow-sm hover:bg-gray-50 transition"
          >
            Book a Meetings
          </button>
        </div>
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
