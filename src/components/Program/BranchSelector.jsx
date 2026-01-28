import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ComputerDesktopIcon, Cog6ToothIcon, BoltIcon } from "@heroicons/react/20/solid"; 
import { useEffect } from "react";
import { useProgram } from "./index";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BranchSelector({ branches }) {
  const { branch, setBranch, setYear, setSemester } = useProgram();

  // Map branch names to icons
  const branchIcons = {
    "Computer Science": ComputerDesktopIcon,
    "Mechanical": Cog6ToothIcon,
    "Electrical": BoltIcon,
  };

  // Set first branch active by default
  useEffect(() => {
    if (!branch && branches.length > 0) {
      setBranch(branches[0]);
      setYear(null);
      setSemester(null);
    }
  }, [branch, branches, setBranch, setYear, setSemester]);

  return (
    <div>
      {/* Mobile view: select dropdown */}
      <div className="grid grid-cols-1 sm:hidden">
        <select
          defaultValue={branch}
          aria-label="Select a branch"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          onChange={(e) => {
            setBranch(e.target.value);
            setYear(null);
            setSemester(null);
          }}
        >
          {branches.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 h-5 w-5 self-center justify-self-end text-gray-500"
        />
      </div>

      {/* Desktop view: tab bar */}
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Branches" className="-mb-px flex space-x-6">
            {branches.map((b) => {
              const Icon = branchIcons[b]; // get the icon for this branch
              return (
                <div
                  key={b}
                  onClick={() => {
                    setBranch(b);
                    setYear(null);
                    setSemester(null);
                  }}
                  className={classNames(
                    branch === b
                      ? "border-[#2BBBAD] text-[#2BBBAD]"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "cursor-pointer group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium transition-colors duration-200"
                  )}
                >
                  {Icon && (
                    <Icon
                      className={classNames(
                        branch === b ? "text-[#2BBBAD]" : "text-gray-400 group-hover:text-gray-500",
                        "mr-2 h-3.5 w-3.5 mt-0.5"
                      )}
                      aria-hidden="true"
                    />
                  )}
                  <span>{b}</span>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
