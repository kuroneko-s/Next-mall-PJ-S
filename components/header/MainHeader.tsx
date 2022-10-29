import { NextPage } from "next";

const MainHeader: NextPage = () => {
  return (
    <section className="common bg-red-400 py-2 px-1 flex justify-between xl:w-[1170px]">
      <div className="">
        <ul className="flex space-x-2 text-gray-500 font-bold">
          <li>웹툰/만화</li>
          <span className="opacity-40">•</span>
          <li>웹소설</li>
          <span className="opacity-40">•</span>
          <li>도서</li>
          <span className="opacity-40">•</span>
          <li>셀렉트</li>
        </ul>
      </div>
      <div>
        <p>캐시충전</p>
      </div>
    </section>
  );
};

export default MainHeader;
