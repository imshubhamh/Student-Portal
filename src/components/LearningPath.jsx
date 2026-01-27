import React, { useState } from 'react'

const sections = [
  {
    id: 'foundations',
    title: 'Master the Foundations',
    description:
      'Build a rock-solid base in core subjects so every next concept feels natural instead of confusing.',
    icon: '📘',
    image:
       'https://images.pexels.com/photos/6696154/pexels-photo-6696154.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'projects',
    title: 'Build Real Projects',
    description:
      'Turn theory into practice with guided mini-projects, labs, and real-world examples from your syllabus.',
    icon: '🧩',
    image:
       'https://images.pexels.com/photos/6696154/pexels-photo-6696154.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'revision',
    title: 'Smart Revision',
    description:
      'Use spaced revision, flashcards, and curated notes so you remember more in less time before exams.',
    icon: '🧠',
    image:
       'https://images.pexels.com/photos/6696154/pexels-photo-6696154.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'tracking',
    title: 'Track Your Progress',
    description:
      'See your completion, upcoming topics, and deadlines at a glance so you always know what to do next.',
    icon: '📊',
    image:
      'https://images.pexels.com/photos/6696154/pexels-photo-6696154.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
]

const LearningPath = () => {
  const [activeId, setActiveId] = useState(sections[0].id)
  const activeSection = sections.find((s) => s.id === activeId)

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2BBBAD]">
            Learning path
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Design your journey, one step at a time
          </h2>
          <p className="mt-4 text-sm text-gray-500 max-w-2xl mx-auto">
            Move from confusion to clarity with a guided flow of sections. Click any step on the left to
            preview what you&apos;ll focus on.
          </p>
        </div>

        {/* Main card */}
        <div className="rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)]">
            {/* Left column – sections list */}
            <div className="">
              <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                  Your learning flow
                </p>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  Choose a step to see how it looks.
                </p>
              </div>

              <ul className="divide-y divide-gray-100">
                {sections.map((section) => {
                  const isActive = section.id === activeId
                  return (
                    <li key={section.id}>
                      <button
                        type="button"
                        onClick={() => setActiveId(section.id)}
                        className={`flex w-full items-start gap-4 px-6 py-5 text-left transition ${
                          isActive
                            ? ' bg-gradient-to-r from-white to-[#F9FBFF]'
                            : 'hover:bg-white/70 focus-visible:bg-white/70'
                        }`}
                      >
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-2xl text-lg transition ${
                            isActive
                              ? 'bg-[#2BBBAD]/10 text-[#2BBBAD]'
                              : 'bg-gradient-to-r from-white to-[#F9FBFF] text-gray-400 ring-1 ring-gray-100'
                          }`}
                        >
                          <span aria-hidden="true">{section.icon}</span>
                        </div>
                        <div className="flex-1">
                          <p
                            className={`text-sm font-semibold ${
                              isActive ? 'text-gray-900' : 'text-gray-700'
                            }`}
                          >
                            {section.title}
                          </p>
                          <p className="mt-1 text-xs text-gray-500">
                            {section.description}
                          </p>
                        </div>
                        <span
                          className={`mt-1 h-6 w-6 rounded-full border text-[10px] flex items-center justify-center ${
                            isActive
                              ? 'border-[#2BBBAD]/40 bg-[#2BBBAD]/10 text-[#2BBBAD]'
                              : 'border-transparent text-gray-300'
                          }`}
                        >
                          {isActive ? '●' : ''}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Right column – layered illustration + dashboard card like reference */}
            <div className="relative bg-gradient-to-br from-[#F9FBFF] via-white to-[#ffffff]">
              {/* Background illustration that changes per step */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                  key={activeSection.id}
                  className="lp-fade-in absolute inset-0 bg-cover bg-center opacity-90"
                  style={{ backgroundImage: `url(${activeSection.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/70 to-transparent" />
              </div>

              {/* Foreground content */}
              <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col">
                <div
                  key={activeSection.id + '-content'}
                  className="lp-fade-up flex flex-col gap-6 flex-1"
                >
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-gray-500 shadow-sm ring-1 ring-gray-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2BBBAD]" />
                      {activeSection.id === 'foundations' && 'Overview'}
                      {activeSection.id === 'projects' && 'Project board'}
                      {activeSection.id === 'revision' && 'Revision view'}
                      {activeSection.id === 'tracking' && 'Progress dashboard'}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                      {activeSection.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 max-w-md">
                      {activeSection.description}
                    </p>
                  </div>

                  {/* Fake dashboard card floating over the illustration */}
                  <div className="lp-fade-in mt-2 rounded-[28px] bg-white/95 shadow-[0_22px_60px_rgba(15,23,42,0.18)] ring-1 ring-gray-100/80 overflow-hidden">
                    {/* Card header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[#2BBBAD]/10 text-[#2BBBAD] text-sm font-semibold">
                          LP
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-500">Active step</p>
                          <p className="text-sm font-semibold text-gray-900">
                            {activeSection.title}
                          </p>
                        </div>
                      </div>
                      <button className="rounded-full bg-gray-50 px-3 py-1 text-[11px] font-medium text-gray-500 border border-gray-100">
                        Preview
                      </button>
                    </div>

                    {/* Card body – simple metrics layout like UI screenshot */}
                    <div className="px-6 py-4 grid grid-cols-2 gap-4 text-xs">
                      <div className="rounded-2xl bg-gray-50 px-4 py-3">
                        <p className="text-[11px] font-medium text-gray-500">Estimated focus</p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">
                          {activeSection.id === 'projects' ? '45 min' : '25 min'}
                        </p>
                        <p className="mt-1 text-[11px] text-emerald-600">
                          +18% better retention
                        </p>
                      </div>
                      <div className="rounded-2xl bg-gray-50 px-4 py-3">
                        <p className="text-[11px] font-medium text-gray-500">Completion</p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">
                          {activeSection.id === 'foundations' && '40%'}
                          {activeSection.id === 'projects' && '25%'}
                          {activeSection.id === 'revision' && '10%'}
                          {activeSection.id === 'tracking' && '0%'}
                        </p>
                        <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-[#2BBBAD] to-[#5C7CFD]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Static meta chips at bottom */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-100">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-xl bg-[#2BBBAD]/10 text-[#2BBBAD] text-xs">
                      ✓
                    </span>
                    Guided steps
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-100">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-xl bg-[#2BBBAD]/10 text-[#2BBBAD] text-xs">
                      ⏱
                    </span>
                    20–30 min per section
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearningPath
