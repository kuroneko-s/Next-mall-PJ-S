import SearchInput from "@components/common/SearchInput";
import { NextPage } from "next";
import Link from "next/link";

const SubHeader: NextPage = () => {
  return (
    <section className="common flex justify-between h-9">
      <div className="flex space-x-1 my-auto">
        <Link href={"/"}>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="23"
              viewBox="0 0 61 23"
              fill="none"
            >
              <path
                d="M19.0997 7.95186V7.89223C19.0997 3.30501 15.9094 0.455566 10.773 0.455566H0V22.5569H5.44744V15.7506H9.20096L13.6985 22.5526H20.1001L14.8207 14.7369C17.5823 13.5102 19.0997 11.1208 19.0997 7.95186ZM13.5934 8.19464C13.5934 9.81316 12.4249 11.2017 10.4704 11.2017H5.44744V5.09816H10.3821C11.849 5.09816 13.5934 5.97131 13.5934 8.13501V8.19464V8.19464Z"
                fill="#1E9EFF"
              />
              <path
                d="M28.3888 0.455566H22.9414V22.5569H28.3888V0.455566Z"
                fill="#1E9EFF"
              />
              <path
                d="M42.3979 0.455566H32.373V22.5569H42.3979C49.0979 22.5569 52.4983 17.91 52.4983 11.5083V11.4487C52.4983 5.07686 49.0979 0.455566 42.3979 0.455566ZM46.8449 11.5637C46.8449 15.1074 45.3107 17.7439 41.7758 17.7439H37.8205V5.26427H41.7758C45.3107 5.26427 46.8449 7.92205 46.8449 11.5041V11.5637Z"
                fill="#1E9EFF"
              />
              <path
                d="M60.9299 0.455566H55.4824V22.5569H60.9299V0.455566Z"
                fill="#1E9EFF"
              />
            </svg>
          </a>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="114"
          height="23"
          viewBox="0 0 114 23"
          fill="none"
        >
          <path
            d="M19.2618 16.415C19.2618 20.0822 16.3358 22.5441 11.4464 22.5441H0V0.485352H10.8047C15.5293 0.485352 18.2949 2.75554 18.2949 6.35887C18.2949 8.40331 17.1676 10.5116 15.2718 11.1931C17.9444 11.7766 19.2618 14.0468 19.2618 16.415ZM5.434 9.47239H9.93489C11.9911 9.47239 13.1184 8.53109 13.1184 7.10424C13.1184 5.71146 12.0249 4.96183 9.93489 4.96183H5.434V9.47239ZM10.7076 18.0037C12.958 18.0037 13.9544 16.9985 13.9544 15.6994C13.9544 14.3365 12.8271 13.655 10.8342 13.655H5.42978V18.0037H10.7076Z"
            fill="#141414"
          />
          <path
            d="M44.3129 11.5171C44.3129 17.9401 39.3307 23.0001 32.7355 23.0001C26.1404 23.0001 21.1582 17.9401 21.1582 11.5171C21.1582 5.09418 26.1404 0.0341797 32.7355 0.0341797C39.3307 0.0341797 44.3129 5.09418 44.3129 11.5171ZM38.8155 11.5171C38.8155 8.04585 36.2738 5.12825 32.7398 5.12825C29.2058 5.12825 26.664 8.04585 26.664 11.5171C26.664 14.9884 29.2058 17.906 32.7398 17.906C36.2738 17.906 38.8155 14.9884 38.8155 11.5171Z"
            fill="#141414"
          />
          <path
            d="M69.7972 11.5171C69.7972 17.9401 64.815 23.0001 58.2199 23.0001C51.6248 23.0001 46.6426 17.9401 46.6426 11.5171C46.6426 5.09418 51.6248 0.0341797 58.2199 0.0341797C64.815 0.0341797 69.7972 5.09418 69.7972 11.5171ZM64.2999 11.5171C64.2999 8.04585 61.7581 5.12825 58.2241 5.12825C54.6901 5.12825 52.1483 8.04585 52.1483 11.5171C52.1483 14.9884 54.6901 17.906 58.2241 17.906C61.7581 17.906 64.2999 14.9884 64.2999 11.5171Z"
            fill="#141414"
          />
          <path
            d="M78.4535 18.0676V22.5441H73.0195V0.485352H78.4535V10.5074L87.1682 0.485352H93.5986L85.2724 10.1539L94.308 22.5441H87.6833L81.5737 14.4344L78.4535 18.0676Z"
            fill="#141414"
          />
          <path
            d="M113.954 7.33019H108.487C108.195 5.67759 107.199 4.34444 104.885 4.34444C102.955 4.34444 101.701 5.18778 101.701 6.61463C101.701 7.87963 102.601 8.43333 104.336 8.78685L107.393 9.50241C111.413 10.3798 113.984 12.0324 113.984 15.8274C113.984 20.24 110.382 22.9957 104.915 22.9957C99.9956 22.9957 95.5581 20.5935 95.043 15.1459H100.511C100.865 17.0924 102.504 18.3574 105.079 18.3574C107.009 18.3574 108.166 17.578 108.166 16.347C108.166 15.5676 107.748 14.7583 105.852 14.4006L102.25 13.6211C97.9394 12.6798 95.917 10.7035 95.917 7.19815C95.917 2.78981 99.451 0 104.598 0C108.136 0 113.41 1.39278 113.954 7.33019Z"
            fill="#141414"
          />
        </svg>
      </div>
      <div className="flex my-auto space-x-3">
        <SearchInput />
        <ul className="flex space-x-3 items-center">
          <li className="cursor-pointer">
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
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </li>
          <li className="cursor-pointer">
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </li>
          <li className="cursor-pointer">
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
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SubHeader;
