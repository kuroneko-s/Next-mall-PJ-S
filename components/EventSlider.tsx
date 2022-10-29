export default function EventSlider() {
  return (
    <section className="common py-12 space-y-3">
      <div className="flex justify-between">
        <p className="font-extrabold text-2xl">Event Slider Title</p>
      </div>
      <div className="relative flex space-x-1">
        <div className="absolute top-40 -left-4 bg-red-400 rounded-full cursor-pointer p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="w-1/5 h-96">
          <div className="bg-slate-400 w-full h-full"></div>
        </div>
        <div className="w-1/5 h-96">
          <div className="bg-slate-400 w-full h-full"></div>
        </div>
        <div className="w-1/5 h-96">
          <div className="bg-slate-400 w-full h-full"></div>
        </div>
        <div className="w-1/5 h-96">
          <div className="bg-slate-400 w-full h-full"></div>
        </div>
        <div className="w-1/5 h-96">
          <div className="bg-slate-400 w-full h-full"></div>
        </div>
        <div className="absolute top-40 -right-4 bg-red-400 rounded-full cursor-pointer p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
