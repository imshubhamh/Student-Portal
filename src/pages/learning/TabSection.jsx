import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import {
  ClockFading,
  FileSpreadsheet,
  CreditCard,
  Megaphone,
  Users,
  Headphones,
  Briefcase,
  BarChart3,
  Globe,
} from "lucide-react";

const tabs = [
  { name: "Courses", slug: "courses", icon: ClockFading },
  { name: "Notes", slug: "notes", icon: FileSpreadsheet },
  { name: "Assignments", slug: "assignments", icon: CreditCard },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabsSection({ slug }) {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:hidden">
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          value={slug}
          onChange={(e) =>
            (window.location.href = `/features/${e.target.value}`)
          }
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav
            aria-label="Tabs"
            className="-mb-px flex justify-center space-x-8"
          >
            {tabs.map((tab) => {
              const isActive = tab.slug === slug;
              return (
                <Link
                  key={tab.slug}
                  to={`/learning/${tab.slug}`}
                  className={classNames(
                    isActive
                      ? "border-[#2BBBAD] text-[#2BBBAD]"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium",
                  )}
                >
                  <tab.icon
                    className={classNames(
                      isActive
                        ? "text-[#2BBBAD]"
                        : "text-gray-400 group-hover:text-gray-500",
                      "mr-2 -ml-0.5 size-5",
                    )}
                  />
                  <span>{tab.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
