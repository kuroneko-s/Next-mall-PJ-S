import { NextPage } from "next";
import Image from "next/image";
import newItem from "@images/newItem.png";
import best from "@images/best.png";
import event from "@images/event.png";
import calendar from "@images/calendar.png";
import coupon from "@images/coupon.png";
import rental from "@images/rental.png";
import map from "@images/map.png";
import BookSlider from "@components/BookSlider";
import EventSlider from "@components/EventSlider";
import Item from "@components/Item";
import type { ItemProps } from "@components/Item";
import { sampleCreator } from "@lib/itemSample";

const Recommendation: NextPage = () => {
  const dummy = sampleCreator();
  let dummyData: ItemProps[][] = [];

  for (let index = 0; index < dummy.length; index += 3) {
    dummyData.push(dummy.slice(index, index + 3));
  }

  return (
    <main className="h-[400vh]">
      <section className="common my-4 flex justify-between font-bold">
        <p className="text-2xl text-sky-400">도서</p>
        <p className="flex space-x-2 items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <span className="font-black">전체 카테고리</span>
        </p>
      </section>

      <section className="common">
        <div className="flex items-center space-x-4 font-bold text-lg mb-4 ">
          <p className="bg-sky-500 text-white px-3 py-1 rounded-3xl">추천</p>
          <p>기획전</p>
        </div>
        <div className="bg-slate-300 h-96 rounded-md shadow-md text-center">
          여기에 슬라이드 들어가야함
        </div>
      </section>

      <section className="common my-7">
        <ul className="flex justify-center space-x-3">
          <li>
            <div className="w-24 h-24">
              <Image src={newItem} alt="신간" placeholder="blur" />
            </div>
            <p className="text-center font-semibold">신간</p>
          </li>
          <li>
            <div className="w-24 h-24">
              <Image src={best} alt="베스트" placeholder="blur" />
            </div>
            <p className="text-center font-semibold">베스트</p>
          </li>
          <li>
            <div className="w-24 h-24">
              <Image src={event} alt="이벤트" placeholder="blur" />
            </div>
            <p className="text-center font-semibold">이벤트</p>
          </li>
          <li>
            <div className="w-24 h-24">
              <Image src={calendar} alt="신간 캘린더" placeholder="blur" />
            </div>
            <p className="text-center font-semibold">신간 캘린더</p>
          </li>
          <li>
            <div className="w-24 h-24">
              <Image src={coupon} alt="위클리 쿠폰" placeholder="blur" />
            </div>
            <p className="text-center font-semibold">위클리 쿠폰</p>
          </li>
          <li>
            <div className="w-24 h-24">
              <Image src={rental} alt="대여" placeholder="blur" />
            </div>
            <p className="text-center font-semibold">대여</p>
          </li>
          <li>
            <div className="w-24 h-24">
              <Image src={map} alt="혜택지도" placeholder="blur" />
            </div>
            <p className="text-center font-semibold">혜택지도</p>
          </li>
        </ul>
      </section>

      <BookSlider />
      <BookSlider more={true} />
      <EventSlider />

      <section className="common">
        <div className="flex justify-between">
          <p className="font-extrabold text-2xl">Title</p>
        </div>
        <div className="flex space-x-1">
          <ul className="flex">
            {dummyData.map((arr, i) => {
              return (
                <ol key={i}>
                  {arr.map((item, i) => {
                    return <Item key={i} {...item} />;
                  })}
                </ol>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Recommendation;
