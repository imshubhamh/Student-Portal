import React from 'react'

const instructors = [
  {
    id: 1,
    name: 'Aarav Mehta',
    role: 'Senior Software Engineer · Ex-FAANG',
    experience: '8+ years · Backend & System Design',
    avatar:
      'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    highlights: ['DSA', 'System Design', 'Internship prep'],
  },
  {
    id: 2,
    name: 'Sara Khan',
    role: 'Data Scientist · FinTech',
    experience: '5+ years · ML & Analytics',
    avatar:
      'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    highlights: ['Machine Learning', 'Python', 'Case Studies'],
  },
  {
    id: 3,
    name: 'Rohan Verma',
    role: 'Full‑Stack Mentor · Startup CTO',
    experience: '7+ years · Web & Product',
    avatar:
      'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    highlights: ['React', 'Node.js', 'Project reviews'],
  },
  {
    id: 4,
    name: 'Nisha Patel',
    role: 'Assistant Professor · University',
    experience: '6+ years · Core CS',
    avatar:
      'https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400',
    highlights: ['DBMS', 'OS', 'Exam strategy'],
  },
  {
    id: 5,
    name: 'Aditya Rao',
    role: 'Placement Coach',
    experience: 'Helped 300+ students get offers',
    avatar:
      'https://images.pexels.com/photos/2837009/pexels-photo-2837009.jpeg?auto=compress&cs=tinysrgb&w=400',
    highlights: ['Interview prep', 'Resume', 'Mock interviews'],
  },
]

const InstructorsSection = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2BBBAD]">
              Expert instructors
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Learn from people who&apos;ve already done it
            </h2>
            <p className="mt-3 text-sm text-gray-500 max-w-xl">
              Every instructor has real industry or teaching experience—so you get practical shortcuts,
              not just theory from slides.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs text-gray-500">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-[#2BBBAD] text-[11px] font-semibold">
              10+
            </span>
            <span>Mentors across different domains</span>
          </div>
        </div>

        {/* Scrollable instructors row */}
        <div className="relative">
          {/* left gradient */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
          {/* right gradient */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white via-white/70 to-transparent z-10" />

          <div className="flex gap-5 overflow-x-auto pb-4 pr-4 -ml-4 pl-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {instructors.map((instructor) => (
              <article
                key={instructor.id}
                className="snap-start min-w-[260px] max-w-[280px] flex-1 rounded-2xl border border-gray-100 bg-white/90 shadow-[0_16px_40px_rgba(15,23,42,0.06)] p-5 transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-emerald-50">
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {instructor.name}
                    </h3>
                    <p className="text-[11px] font-medium text-emerald-600">
                      {instructor.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mb-4">{instructor.experience}</p>

                <div className="flex flex-wrap gap-2">
                  {instructor.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-1 text-[10px] font-medium text-gray-600 border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstructorsSection

