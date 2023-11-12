"use client";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="w-[1799px] mx-auto">
      <div id="Header" className="flex justify-between my-6 mx-5 items-center">
        <a href="/" className="header__logo">
          <img src="@img/logo.svg" alt="" />
          <span>TechFlex</span>
        </a>
        <div className="header__menu menu">
          <nav className="menu__body">
            <ul className="flex gap-5">
              <li className="menu__item">
                <a
                  href=""
                  className="hover:text-green-200 transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-green-200 transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-green-200 transition-all duration-300"
                >
                  Services
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__actions">
          <button type="button" className="menu__icon icon-menu">
            <span></span>
          </button>
          <button className="text-white rounded-full border-2 pt-[22px] pb-[22px] pr-[55px] pl-[22px] border-white">
            Contact Us
          </button>
        </div>
      </div>
      <div id="Home" className="my-[70px]">
        <div className="flex gap-[15px] rounded-full items-center border-[1px] h-[66px] w-[300px] justify-center">
          <img src="stack-development-icon.svg" alt="Icon" />
          <span>2023 stack Development</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
