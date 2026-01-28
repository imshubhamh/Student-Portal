export default function Hero() {
    return (
      <div className="flex flex-col items-center text-center mt-5 mb-12">
        
        {/* TOP ANNOUNCEMENT PILL */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-xs rounded-full
             border border-[#E5E7EB] shadow-sm text-gray-600">
            <span className="bg-gray-100 px-2 py-0.5 rounded-full text-[10px]">
              New
            </span>
            Make your student journey more organised
          </span>
        </div>
  
        {/* MAIN HEADING */}
        <h1 className="text-[40px] md:text-[52px] leading-tight font-semibold text-[#1F2937] max-w-4xl">
          A student portal that <br />
          works like an{" "}
          <span className="bg-green-100 text-[#2BBBAD] px-4 py-1 rounded-full text-[20px]">
            Organiser
          </span>
        </h1>
  
        {/* SUB TEXT */}
        <p className="mt-4 text-sm md:text-base text-gray-500 max-w-xl">
          Great students deserve a system that does it all —
          from managing courses and notes to tracking
          assignments and performance.
        </p>
  
        {/* CTA BUTTONS */}
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
            Book a Demo
          </button>
        </div>
  
      </div>
    );
  }
  