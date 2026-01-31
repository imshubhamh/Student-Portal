import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  FileSpreadsheet,
  CreditCard,
  Megaphone,
  Users,
  Headphones,
  BarChart3,
} from "lucide-react";

const peoples = [
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
    desc: "Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time."
  },
  {
    name: 'Leonard Krasner',
    role: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
    desc: "Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time."
  },
  {
    name: 'Floyd Miles',
    role: 'Principal Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
    desc: "Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time."
  },
  {
    name: 'Emily Selman',
    role: 'VP, User Experience',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
    desc: "Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time."
  },
  {
    name: 'Kristin Watson',
    role: 'VP, Human Resources',
    imageUrl:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
    desc: "Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time."
  },
  {
    name: 'Emma Dorsey',
    role: 'Senior Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
    desc: "Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time. Automate tasks, timelines and workflows in real time."
  },
]

export default function TeamsSection() {
  const [index, setIndex] = useState(0);
  const people = peoples[index];

  const prev = () => setIndex((i) => (i === 0 ? peoples.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === peoples.length - 1 ? 0 : i + 1));

  return (
    <section className="py-10 border rounded-lg border-gray-300 max-w-7xl mx-auto overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-medium text-gray-900">
            About the Team
          </h2>

          <div className="flex gap-2">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-200/50"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-200/50"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Feature content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div key={people.title} className="animate-fade-in-left">
            <div className="flex items-center gap-4" >

              <h3 className="text-2xl font-medium text-gray-900">
                {people.name}
              </h3>

              <span className=" border text-[#2BBBAD] border-[#2BBBAD] rounded-full p-1 px-3.5 text-xs" >
                {people.role}
              </span>
            </div>

            <p className="mt-4 text-base text-gray-600 max-w-xl">
              AAA-{people.desc}-AAA
            </p>

          </div>

          {/* Right visual */}
          <div key={index}>
            <img
              src={people.imageUrl}
              alt=""
              className="h-80 w-full max-w-xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
