import React, { useState } from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const HomeScreen = (props) => {
  return (
    <div
      className={`sticky lg:overflow-x-hidden overflow-x-auto pt-[5%] pb-[1%] min-h-[100vh] ${
        props.showDarkMode ? "dark" : "bg-dash-bg"
      } `}
    >
      <div className="flex">
        <div className="absolute p-1 border rounded-full border-slate-800 dark:border-wheat  right-0 top-0 mx-5 md:mx-10 my-5">
          <span
            className="flex justify-center items-center  cursor-pointer"
            onClick={props.handleMode}
          >
            {props.showDarkMode ? (
              <MdOutlineDarkMode size={25} />
            ) : (
              <MdOutlineLightMode size={25} />
            )}
          </span>
        </div>
      </div>
      <div className="my-12 lg:my-auto w-full mx-auto">
        <div className="flex md:flex-row justify-center items-center flex-col">
          <div className="w-11/12 md:w-4/6 mx-auto my-1 ">
            <h1 className="font-heading font-bold text-6xl md:text-6xl text-center lg:text-8xl my-4 lg:w-full">
              Olalekan Adedeji
            </h1>
            <p className="font-body text-left w-full lg:w-3/5 mx-auto md:text-center text-base font-light my-2">
              I am a Front-end Engineer skilled at creating visually pleasing,
              high-performance, and scalable web applications using modern web
              technologies.
            </p>
            <p className="font-body block text-left text-base w-full lg:w-3/5 mx-auto md:text-center font-light my-2">
              Tools and technologies I work with include
              <span className="font-bold"> Javascript</span> |
              <span className="font-bold"> React</span> |
              <span className="font-bold"> Vue</span> |
              <span className="font-bold"> Nuxt</span> |
              <span className="font-bold"> Express</span> |
              <span className="font-bold"> NodeJS</span> |
              <span className="font-bold"> MongoDB</span> |
              <span className="font-bold"> SQL</span> |
              <span className="font-bold"> GIT </span> |
              <span className="font-bold"> Figma</span>
            </p>

            <p className="relative mt-8 md:mt-16 right-0 left-0 bottom-0 text-center">
              <div className="flex items-center justify-center text-base font-body">
                <span className="rounded-full w-10 h-10 border border-slate-500 dark:border-[#b87c39] mx-2">
                  <img src="/images/lakes.gif" alt="logo" />
                </span>
                <span>I am social 😉</span>
              </div>

              <p className="flex justify-center gap-2 my-6">
                <a href="#">
                  <FaXTwitter size={20} />
                </a>
                <a
                  href="http://www.linkedin.com/in/olalekan-adedeji-2053b4196"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <FaLinkedinIn size={20} />
                </a>
                <a
                  href="http://www.instagram.com/mista_lakes"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <FaInstagram size={20} />
                </a>
              </p>
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center">
            <h1 className="bg-gradient-to-r from-[#020024] via-[#241401] to-[#4c0c00] inline-block text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-[#871701] dark:via-[#b87c39] dark:to-[#771300]  text-center font-bold text-3xl">
              Stuff I have built...
            </h1>
            <div className="w-11/12 lg:w-6/12 mx-auto my-5  ">
              <p className="text-sm">
                I specialize in building accessible, highly responsive websites
                using modern technologies and HTML email templates that are
                responsive across all email clients.
              </p>
            </div>
          </div>

          <div className="w-11/12 mx-auto mt-8 xl:w-9/12">
            <div className="grid grid-rows-1 lg:grid-cols-2 grid-cols-1 gap-16">
              <div className="container rounded">
                <a
                  href="https://bsomintegrated.com.ng/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/bsom-home.png" alt="bsom"
                    alt="sample work image"
                    className="image h-[350px] lg:h-[450px] w-full object-cover rounded"
                  />
                </a>
                <div className="middle">
                  <div className="text py-4 px-3">
                    <p className="font-bold text-sm md:text-base">
                      Fullstack Ecommerce Website
                    </p>
                    <p className="text-sm md:text-base">
                      Technologies: React, Tailwind CSS, ReduxToolKit, Express,
                      NodeJS
                    </p>
                  </div>
                </div>
              </div>
              <div className="container rounded">
                <a
                  href="https://app-dolla.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/dolla-app.png" alt="fintect page"
                    className="image h-[350px] lg:h-[450px] w-full object-cover rounded"
                  />
                </a>
                <div className="middle">
                  <div className="text py-4 px-3">
                    <p className="font-bold text-sm md:text-base">
                      Fintech Landing Page
                    </p>
                    <p className="text-sm md:text-base">
                      Technologies: React, React Styled Components, React Smooth
                      Scroll
                    </p>
                  </div>
                </div>
              </div>

              <div className="container rounded">
                <a
                  href="https://thefittery.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/the-fittery.png" alt="the-fittery"
                    className="image h-[350px] lg:h-[450px] w-full object-cover rounded"
                  />
                </a>
                <div className="middle">
                  <div className="text py-4 px-3">
                    <p className="font-bold text-sm md:text-base">
                      Fullstack Ecommerce Website
                    </p>
                    <p className="text-sm md:text-base">
                      Technologies: React, Tailwind CSS, ReduxToolKit, Express,
                      NodeJS
                    </p>
                  </div>
                </div>
              </div>
              <div className="container rounded">
                <a
                  href="https://thefittery.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/the-fittery.png" alt="the-fittery"
                    className="image h-[350px] lg:h-[450px] w-full object-cover rounded"
                  />
                </a>
                <div className="middle">
                  <div className="text py-4 px-3">
                    <p className="font-bold text-sm md:text-base">
                      Fullstack Ecommerce Website
                    </p>
                    <p className="text-sm md:text-base">
                      Technologies: React, Tailwind CSS, ReduxToolKit, Express,
                      NodeJS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
