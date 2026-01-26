// import { useState } from "react";
// import {
//   BookOpen,
//   BarChart3,
//   LifeBuoy,
//   GraduationCap,
//   StickyNote,
//   ClipboardList,
//   FileText,
//   TrendingUp,
//   CalendarCheck,
//   Users,
//   HelpCircle,
//   UserCircle,
//   ChevronDown,
//   Menu,
// } from "lucide-react";

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const navItems = [
//     {
//       label: "Learning",
//       icon: BookOpen,
//       items: [
//         {
//           title: "Courses",
//           desc: "Access enrolled courses and lectures",
//           icon: GraduationCap,
//         },
//         {
//           title: "Notes",
//           desc: "Download and manage study notes",
//           icon: StickyNote,
//         },
//         {
//           title: "Assignments",
//           desc: "View tasks, deadlines and submissions",
//           icon: ClipboardList,
//         },
//       ],
//     },
//     {
//       label: "Progress",
//       icon: BarChart3,
//       items: [
//         {
//           title: "Exams",
//           desc: "Upcoming exams and schedules",
//           icon: FileText,
//         },
//         {
//           title: "Results",
//           desc: "Check marks and performance",
//           icon: TrendingUp,
//         },
//         {
//           title: "Attendance",
//           desc: "Track your attendance record",
//           icon: CalendarCheck,
//         },
//       ],
//     },
//     {
//       label: "Support",
//       icon: LifeBuoy,
//       items: [
//         {
//           title: "Community",
//           desc: "Ask doubts and discuss with peers",
//           icon: Users,
//         },
//         {
//           title: "Help Center",
//           desc: "FAQs and student support",
//           icon: HelpCircle,
//         },
//         {
//           title: "Contact Mentor",
//           desc: "Connect with teachers or mentors",
//           icon: UserCircle,
//         },
//       ],
//     },
//   ];

//   return (
//     <header className="relative">
//       {/* MAIN BAR */}
//       <div className="flex items-center justify-between">
//         {/* LOGO */}
//         <div className="font-bold text-dark text-lg">
//           SPYIschool
//         </div>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
//           {navItems.map((nav, idx) => {
//             const NavIcon = nav.icon;
//             return (
//               <div key={idx} className="relative group">
//                 <button className="flex items-center gap-2 hover:text-dark">
//                   <NavIcon size={16} />
//                   {nav.label}
//                   <ChevronDown size={14} />
//                 </button>

//                 {/* DROPDOWN */}
//                 <div
//                     className="
//                         absolute top-full left-0 mt-3 w-80
//                         bg-white
//                         rounded-2xl
//                         border border-gray-200
//                         shadow-xl
//                         z-50
//                         opacity-0 invisible
//                         group-hover:opacity-100 group-hover:visible
//                         transition-all duration-200
//                     "
//                     >
//                   <div className="p-4 space-y-3">
//                     {nav.items.map((item, i) => {
//                       const ItemIcon = item.icon;
//                       return (
//                         <div
//                           key={i}
//                           className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer"
//                         >
//                           <div className="bg-gray-100 p-2 rounded-lg">
//                             <ItemIcon size={16} className="text-gray-600" />
//                           </div>
//                           <div>
//                             <p className="font-medium text-dark text-sm">
//                               {item.title}
//                             </p>
//                             <p className="text-xs text-muted mt-0.5">
//                               {item.desc}
//                             </p>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}

//           <a href="#" className="hover:text-dark">
//             Pricing
//           </a>
//           <a href="#" className="hover:text-dark">
//             FAQs
//           </a>
//         </nav>

//         {/* RIGHT BUTTON */}
//         <div className="hidden md:block">
//           <button className="bg-accent text-white px-5 py-2 rounded-full text-sm shadow-sm">
//             Login
//           </button>
//         </div>

//         {/* MOBILE TOGGLE */}
//         <button
//           className="md:hidden"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           <Menu size={24} />
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {mobileOpen && (
//         <div className="md:hidden mt-6 bg-white rounded-2xl border border-gray-200 shadow-lg p-4 space-y-4">
//           {navItems.map((nav, idx) => {
//             const NavIcon = nav.icon;
//             return (
//               <div key={idx}>
//                 <button
//                   onClick={() =>
//                     setOpenDropdown(openDropdown === idx ? null : idx)
//                   }
//                   className="w-full flex justify-between items-center font-medium text-dark"
//                 >
//                   <span className="flex items-center gap-2">
//                     <NavIcon size={16} />
//                     {nav.label}
//                   </span>
//                   <ChevronDown size={14} />
//                 </button>

//                 {openDropdown === idx && (
//                   <div className="mt-3 space-y-3 pl-2">
//                     {nav.items.map((item, i) => {
//                       const ItemIcon = item.icon;
//                       return (
//                         <div key={i} className="flex gap-2">
//                           <ItemIcon size={14} className="text-gray-500 mt-1" />
//                           <div>
//                             <p className="text-sm font-medium">
//                               {item.title}
//                             </p>
//                             <p className="text-xs text-muted">
//                               {item.desc}
//                             </p>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             );
//           })}

//           <div className="pt-4 border-t">
//             <button className="w-full bg-accent text-white py-2 rounded-full">
//               Login
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BookOpen,
  BarChart3,
  LifeBuoy,
  GraduationCap,
  StickyNote,
  ClipboardList,
  FileText,
  TrendingUp,
  CalendarCheck,
  Users,
  HelpCircle,
  UserCircle,
  ChevronDown,
  Menu,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    {
      label: "Learning",
      icon: BookOpen,
      items: [
        {
          title: "Courses",
          desc: "Access enrolled courses and lectures",
          icon: GraduationCap,
          path: "/courses",
        },
        {
          title: "Notes",
          desc: "Download and manage study notes",
          icon: StickyNote,
          path: "/notes",
        },
        {
          title: "Assignments",
          desc: "View tasks, deadlines and submissions",
          icon: ClipboardList,
          path: "/assignments",
        },
      ],
    },
    {
      label: "Progress",
      icon: BarChart3,
      items: [
        {
          title: "Exams",
          desc: "Upcoming exams and schedules",
          icon: FileText,
          path: "/exams",
        },
        {
          title: "Results",
          desc: "Check marks and performance",
          icon: TrendingUp,
          path: "/results",
        },
        {
          title: "Attendance",
          desc: "Track your attendance record",
          icon: CalendarCheck,
          path: "/attendance",
        },
      ],
    },
    {
      label: "Support",
      icon: LifeBuoy,
      items: [
        {
          title: "Community",
          desc: "Ask doubts and discuss with peers",
          icon: Users,
          path: "/community",
        },
        {
          title: "Help Center",
          desc: "FAQs and student support",
          icon: HelpCircle,
          path: "/help",
        },
        {
          title: "Contact Mentor",
          desc: "Connect with teachers or mentors",
          icon: UserCircle,
          path: "/mentor",
        },
      ],
    },

      {
      label: "Youtube",
      icon: LifeBuoy,
      items: [
        {
          title: "Youtube",
          desc: "Learn from youtube lectures.",
          icon: Users,
          path: "/youtube",
        },
      ],
    },
  ];

  return (
    <header className="relative">
      {/* MAIN BAR */}
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <NavLink to="/" className="font-bold text-dark text-lg">
          SPYIschool
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          {navItems.map((nav, idx) => {
            const NavIcon = nav.icon;
            return (
              <div key={idx} className="relative group">
                <button className="flex items-center gap-2 hover:text-dark">
                  <NavIcon size={16} />
                  {nav.label}
                  <ChevronDown size={14} />
                </button>

                {/* DROPDOWN */}
                <div
                  className="
                    absolute top-full left-0 mt-3 w-80
                    bg-white rounded-2xl border border-gray-200
                    shadow-xl z-50
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-200
                  "
                >
                  <div className="p-4 space-y-3">
                    {nav.items.map((item, i) => {
                      const ItemIcon = item.icon;
                      return (
                        <NavLink
                          key={i}
                          to={item.path}
                          className="flex gap-3 p-3 rounded-xl hover:bg-gray-50"
                        >
                          <div className="bg-gray-100 p-2 rounded-lg">
                            <ItemIcon size={16} className="text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium text-dark text-sm">
                              {item.title}
                            </p>
                            <p className="text-xs text-muted mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* RIGHT BUTTON */}
        <div className="hidden md:block">
          <NavLink
            to="/login"
            className="bg-accent text-white px-5 py-2 rounded-full text-sm shadow-sm"
          >
            Login
          </NavLink>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden mt-6 bg-white rounded-2xl border border-gray-200 shadow-lg p-4 space-y-4">
          {navItems.map((nav, idx) => {
            const NavIcon = nav.icon;
            return (
              <div key={idx}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === idx ? null : idx)
                  }
                  className="w-full flex justify-between items-center font-medium text-dark"
                >
                  <span className="flex items-center gap-2">
                    <NavIcon size={16} />
                    {nav.label}
                  </span>
                  <ChevronDown size={14} />
                </button>

                {openDropdown === idx && (
                  <div className="mt-3 space-y-3 pl-2">
                    {nav.items.map((item, i) => {
                      const ItemIcon = item.icon;
                      return (
                        <NavLink
                          key={i}
                          to={item.path}
                          className="flex gap-2"
                          onClick={() => setMobileOpen(false)}
                        >
                          <ItemIcon
                            size={14}
                            className="text-gray-500 mt-1"
                          />
                          <div>
                            <p className="text-sm font-medium">
                              {item.title}
                            </p>
                            <p className="text-xs text-muted">
                              {item.desc}
                            </p>
                          </div>
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-4 border-t">
            <NavLink
              to="/login"
              className="block text-center bg-accent text-white py-2 rounded-full"
            >
              Login
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
