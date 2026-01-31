import { useState } from 'react'
import {
  AcademicCapIcon,
  CubeIcon,
  ArrowPathIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  BoltIcon,
  TrophyIcon,
} from '@heroicons/react/20/solid'

const steps = [
  {
    id: 'foundations',
    name: 'Master the foundations',
    description:
      'Build a rock-solid base so advanced topics feel natural.',
    icon: AcademicCapIcon,
    image:
      'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
  },
  {
    id: 'concepts',
    name: 'Understand core concepts',
    description:
      'Break down complex topics into simple, visual explanations.',
    icon: BoltIcon,
    image:
      'https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'projects',
    name: 'Build real projects',
    description:
      'Apply concepts using real-world mini projects.',
    icon: CubeIcon,
    image:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'practice',
    name: 'Hands-on practice',
    description:
      'Practice with guided exercises and real interview-style problems.',
    icon: ChatBubbleLeftRightIcon,
    image:
      'https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png',
  },
  {
    id: 'revision',
    name: 'Smart revision',
    description:
      'Retain more with spaced repetition and quick summaries.',
    icon: ArrowPathIcon,
    image:
      'https://images.pexels.com/photos/4144223/pexels-photo-4144223.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'assessment',
    name: 'Assess your skills',
    description:
      'Check understanding with quizzes and milestone tests.',
    icon: TrophyIcon,
    image:
      'https://images.pexels.com/photos/7648508/pexels-photo-7648508.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },

]

export default function LearningPath() {
  const [active, setActive] = useState(steps[0])

  return (
    <section className="pb-24">
      <div className="mb-14 text-center">
        <p className="text-xs font-semibold tracking-[0.25em] text-[#2BBBAD] uppercase">
          Learning Path
        </p>
        <h2 className="mt-2 text-4xl font-semibold text-gray-900">
          Design your journey, one step at a time
        </h2>
        <p className="mt-4 text-sm text-gray-500 max-w-2xl mx-auto">
          Move from confusion to clarity with a guided flow of sections. Click any step on the left to preview what you&apos;ll focus on.
        </p>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden bg-gray-200/40 border border-gray-200 px-6 py-10 sm:rounded-xl sm:px-10 xl:px-24">

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">

            {/* LEFT CONTENT */}
            <div className="lg:max-w-md">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#2BBBAD]">
                  step process
                </p>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  How your learning flows
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Follow a proven structure designed to reduce confusion and improve retention.
                </p>
              </div>

              <dl className="mt-10 space-y-8 text-base text-gray-300">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    onClick={() => setActive(step)}
                    className={`relative cursor-pointer transition-all duration-300 ${active.id === step.id
                        ? 'translate-x-2'
                        : 'opacity-70 hover:opacity-100'
                      }`}
                  >
                    <dt className="ml-9 inline-block font-semibold text-black">
                      <step.icon
                        className={`absolute top-1 left-1 size-5 ${active.id === step.id
                            ? 'text-[#2BBBAD]'
                            : 'text-gray-500'
                          }`}
                      />
                      {step.name}
                    </dt>{' '}
                    <dd className="inline text-gray-800">{step.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* RIGHT IMAGE*/}
            <img
              key={active.id}
              alt="Learning preview"
              src={active.image}
              className="relative -z-20 max-w-xl min-w-full rounded-xl shadow-xl ring-1 ring-white/10
                         lg:row-span-4 lg:w-[52rem] lg:max-w-none
                         transition-all duration-700 ease-out animate-imageFade mt-28"
            />
          </div>

          {/* GRADIENT BLOB */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-12 -z-10 -translate-y-1/2 blur-3xl lg:-bottom-48 lg:top-auto lg:translate-y-0"
          >
            <div
              className="aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-[#12514a] to-[#2BBBAD] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* image animation */}
      <style jsx>{`
        @keyframes imageFade {
          0% {
            opacity: 0;
            transform: translateY(16px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-imageFade {
          animation: imageFade 0.7s ease forwards;
        }
      `}</style>
    </section>
  )
}
