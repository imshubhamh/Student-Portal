import PageHeader from "../../components/common/PageHeader";

export default function CourseDetail() {
  return (
    <div className="space-y-12">
      
      {/* 🔹 HERO / COURSE OVERVIEW */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          <PageHeader
            title="Web Development Mastery"
            desc="Become a full-stack web developer with hands-on projects."
          />

          {/* COURSE BANNER */}
          <div className="rounded-2xl overflow-hidden border">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Web Development"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* COURSE META */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <span>⭐ 4.8 Rating</span>
            <span>👨‍🎓 3,200 Students</span>
            <span>⏱ 45+ Hours</span>
            <span>📁 6 Projects</span>
          </div>

          {/* ABOUT COURSE */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-[#1F2937] mb-3">
              About this course
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              This course is designed to take you from zero to
              production-ready web developer. You will learn HTML,
              CSS, JavaScript, React, and backend basics with
              real-world projects.
            </p>
          </div>

          {/* CURRICULUM */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-[#1F2937] mb-4">
              Course Curriculum
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>📘 HTML & CSS Fundamentals</li>
              <li>📘 JavaScript Core Concepts</li>
              <li>📘 Advanced JavaScript</li>
              <li>📘 React Fundamentals</li>
              <li>📘 Mini Projects</li>
              <li>📘 Final Full Stack Project</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDEBAR (PAID CARD) */}
        <div className="bg-white border rounded-2xl p-6 shadow-lg h-fit sticky top-24">
          <p className="text-3xl font-bold text-[#1F2937] mb-2">
            ₹2,999
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Lifetime access
          </p>

          {/* ACTION BUTTONS */}
          <div className="space-y-3">
            <button className="w-full bg-[#2BBBAD] text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
              Buy Now
            </button>

            <button className="w-full border border-[#E5E7EB] py-3 rounded-xl font-medium hover:bg-gray-50 transition">
              Enroll Now
            </button>
          </div>

          {/* BENEFITS */}
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p>✔ Full lifetime access</p>
            <p>✔ Downloadable resources</p>
            <p>✔ Certificate of completion</p>
            <p>✔ Access on mobile & desktop</p>
            <p>✔ Mentor support</p>
          </div>
        </div>
      </div>

      {/* 🔹 INSTRUCTOR SECTION */}
      <div className="bg-white border rounded-2xl p-6 shadow-sm">
        <h3 className="font-semibold text-lg text-[#1F2937] mb-4">
          Instructor
        </h3>

        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Instructor"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">Rahul Sharma</p>
            <p className="text-sm text-gray-500">
              Senior Full Stack Developer
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Rahul has 8+ years of experience in building scalable
          web applications and has mentored 5,000+ students.
        </p>
      </div>
    </div>
  );
}
