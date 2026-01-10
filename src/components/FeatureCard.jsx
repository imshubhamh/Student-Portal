export default function FeatureCard({ variant, rotate }) {
    return (
      <div
        className={`
          bg-[#F7F8F7]
          rounded-[24px]
          p-6
          border border-[#E6E7E6]
          shadow-[0_20px_40px_rgba(0,0,0,0.08)]
          transform ${rotate}
        `}
      >
        {variant === "event" && (
          <>
            <div className="mb-4">
              <span className="inline-block bg-white px-4 py-1 rounded-full text-xs shadow">
                Create Event
              </span>
            </div>
  
            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
              <button className="bg-[#2BBBAD] text-white text-xs px-3 py-1 rounded-full">
                Create Event
              </button>
            </div>
  
            <p className="text-sm font-semibold text-dark">
              WE MAKE IT EASY
            </p>
            <p className="text-xs text-muted mt-1">
              Click. Type. Your event’s live.
              <br /> No headaches.
            </p>
          </>
        )}
  
        {variant === "chat" && (
          <>
            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
              <div className="text-xs bg-gray-100 p-2 rounded-lg mb-2">
                👋 Hey, thanks for reaching out!
              </div>
              <div className="text-xs bg-green-100 p-2 rounded-lg w-4/5">
                Happy to help you 🙂
              </div>
            </div>
  
            <p className="text-sm font-semibold text-dark">
              WE LISTEN TO YOU
            </p>
            <p className="text-xs text-muted mt-1">
              Just like we did with
              <br /> 1000+ students
            </p>
          </>
        )}
  
        {variant === "graph" && (
          <>
            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
              <div className="flex items-end gap-2 h-20">
                <div className="w-3 bg-gray-200 h-8 rounded"></div>
                <div className="w-3 bg-gray-200 h-12 rounded"></div>
                <div className="w-3 bg-gray-200 h-6 rounded"></div>
                <div className="w-3 bg-[#2BBBAD] h-16 rounded"></div>
              </div>
            </div>
  
            <p className="text-sm font-semibold text-dark">
              WE GIVE YOU TOOLS
            </p>
            <p className="text-xs text-muted mt-1">
              So you know what’s winning
              <br /> and what needs work
            </p>
          </>
        )}
      </div>
    );
  }
  