import {
    Rocket,
    ShieldCheck,
    DatabaseBackup,
} from "lucide-react";

const features = [
    {
        name: "One-click deployment",
        description:
            "Deploy your apps and services instantly with automated pipelines and zero manual configuration.",
        icon: Rocket,
    },
    {
        name: "Enterprise-grade security",
        description:
            "Built-in authentication, access control, and SSL encryption to keep your data fully protected.",
        icon: ShieldCheck,
    },
    {
        name: "Automatic backups",
        description:
            "Daily encrypted backups with instant restore, ensuring zero data loss and maximum reliability.",
        icon: DatabaseBackup,
    },
];

export default function HeroSection() {
    return (
        <div className="overflow-hidden border-b border-gray-200 py-5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center gap-x-20">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-sm font-medium text-[#2BBBAD] uppercase tracking-wide">
                            Learning
                        </h2>

                        <p className="mt-2 text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl">
                            Everything you need to build, launch & scale
                        </p>

                        <p className="mt-6 text-base text-gray-500">
                            AAA-LaunchXY provides all essential tools to manage deployment,
                            security, and data — so you can focus on building your product.-AAA
                        </p>

                        <dl className="mt-10 space-y-8">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-10">
                                    <dt className="font-semibold text-gray-900 flex items-center gap-3">
                                        <feature.icon className="absolute left-0 top-1 size-5 text-[#2BBBAD]" />
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-1 text-gray-600">
                                        AAA-{feature.description}-AAA
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="sm:px-6 lg:px-0">
                        <div className="relative isolate overflow-hidden bg-gray-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:pt-5 sm:pr-0 sm:pl-5 lg:mx-0 lg:max-w-none">
                            <div
                                aria-hidden="true"
                                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset"
                            />
                            <div className="">
                                <img
                                    alt="Product screenshot"
                                    src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
                                    className="-mb-12 ml-10 w-228 max-w-none h-[70vh] object-cover rounded-tl-lg bg-gray-800 ring-1 ring-white/10"
                                />

                            </div>
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
