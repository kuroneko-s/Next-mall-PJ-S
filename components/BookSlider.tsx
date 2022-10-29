import Link from "next/link";

interface BookSliderProps {
  more?: boolean;
}

export default function BookSlider({ more = false }: BookSliderProps) {
  return (
    <section className="common py-4 space-y-3">
      <div className="flex justify-between">
        <p className="font-extrabold text-2xl">Title</p>
        {more ? (
          <Link href={"/ebook"}>
            <a className="font-semibold text-gray-500">
              <p>더보기</p>
            </a>
          </Link>
        ) : null}
      </div>
      <div className="flex space-x-2">
        <div className="w-1/5 h-72">
          <div className="bg-slate-400 w-full h-full"></div>
          <p>Book Name</p>
        </div>
        <div className="w-1/5 h-72">
          <div className="bg-slate-400 w-full h-full"></div>
          <p>Book Name</p>
        </div>
        <div className="w-1/5 h-72">
          <div className="bg-slate-400 w-full h-full"></div>
          <p>Book Name</p>
        </div>
        <div className="w-1/5 h-72">
          <div className="bg-slate-400 w-full h-full"></div>
          <p>Book Name</p>
        </div>
        <div className="w-1/5 h-72">
          <div className="bg-slate-400 w-full h-full"></div>
          <p>Book Name</p>
        </div>
      </div>
    </section>
  );
}
