export default function SearchInput() {
  return (
    <div className="relative">
      <label htmlFor="search" className="absolute top-2 left-2 text-slate-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </label>
      <input
        id="search"
        type="text"
        className="bg-slate-200 w-56 py-2 pl-8 h-full rounded-md"
      />
    </div>
  );
}
