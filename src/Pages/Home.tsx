import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../images/ZircLogo.png";
import play from "../images/play.png";
import { Link } from "react-router-dom";
import Countdown from "../Components/Countdown";
import CountdownTimer from "../Components/Countdown";

const Home = () => {
  const targetDate = new Date("2024-12-31T23:59:59");
  const NavLabel = styled.div`
    ${tw`flex items-center relative sm:mb-4 block py-2 px-3 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
  `;
  const Paragraph = styled.div`
    ${tw`py-10 w-80 text-white sm:text-lg text-sm `}
  `;

  return (
    <>
      <div className="bgImg relative w-screen h-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 relative">
          <nav className="border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="/" className="">
                <img src={logo} className="h-10" alt="Zirc-Logo" />
              </a>
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-default"
              >
                <ul className="font-medium lg:text-xl text-lg flex justify-between p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 gap-4 ">
                  <li>
                    <Link to="">
                      <NavLabel>Home</NavLabel>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      {" "}
                      <NavLabel>About</NavLabel>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <NavLabel>FAQ</NavLabel>
                    </Link>
                  </li>

                  <li>
                    <Link to="">
                      {" "}
                      <NavLabel>Contact</NavLabel>
                    </Link>
                  </li>
                  <li>
                    <button
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="dropdown"
                      className="text-white  font-medium rounded-lg text-lg  text-center inline-flex items-center"
                      type="button"
                    >
                      EN
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    <div
                      id="dropdown"
                      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Earnings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Sign out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="flex items-center justify-center h-[90vh]">
            <div className="sm:p-10 p-5">
              <div className="xl:grid xl:grid-cols-4 sm:gap-3 gap-1 justify-items-center mt-6">
                <div className="col-span-2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
                  <h1 className="sm:text-[36px] text-2xl font-bold uppercase text-white">
                    A Resource backed digital{" "}
                  </h1>{" "}
                  <span className="block sm:text-[60px] text-[45px] font-bold uppercase text-white mt-4">
                    currency
                  </span>
                  <Paragraph>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </Paragraph>
                  <div className="flex">
                    <button className="bg-gradient-to-r from-[#00C3FD] to-[#0194FE] text-white px-10 rounded-3xl mr-4">
                      Whitepaper
                    </button>
                    <button className="bg-gradient-to-r from-[#00C3FD] to-[#0194FE] text-white p-6 rounded-full">
                      <img src={play} alt="" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-white text-xl lg:mt-1 mt-12 col-span-2">
                  <div className="box-border w-46 relative border-2 rounded-xl justify-center items-center px-20 py-20 bg-[rgba(255, 255, 255, 0.2)]">
                    <CountdownTimer targetDate={targetDate} />
                  </div>

                  <button className="bg-gradient-to-r from-[#00C3FD] to-[#0194FE] z-10 relative text-white px-10 py-3 rounded-2xl mt-[-28px]">
                    SIGN UP & JOIN OUT NEXT SALE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
