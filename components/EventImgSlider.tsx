import { motion } from "framer-motion";

export default function EventImgSlider() {
  return (
    <section className="common">
      <div className="flex items-center space-x-4 font-bold text-lg mb-4 ">
        <p className="bg-sky-500 text-white px-3 py-1 rounded-3xl">추천</p>
        <p>기획전</p>
      </div>
      <div className="h-96 w-full flex space-x-2 justify-center">
        <motion.div
          className="h-40 w-40 bg-slate-300"
          animate={{ x: [0, 100, 0] }}
        />
      </div>
    </section>
  );
}
