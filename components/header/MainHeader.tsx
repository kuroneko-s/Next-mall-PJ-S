import { NextPage } from "next";

const MainHeader: NextPage = () => {
  return (
    <section className="common py-2 px-1 flex justify-between text-gray-500 font-bold">
      <div className="">
        <ul className="flex space-x-2">
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
