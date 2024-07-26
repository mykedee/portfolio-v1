import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import Projects from "../components/Projects";

const HomeScreen = () => {
  return (
    <div className="sticky lg:overflow-x-hidden overflow-x-auto pt-[5%] pb-[1%] min-h-[100vh]">
      <div className="my-12 lg:my-auto w-full mx-auto">
        <div className="flex md:flex-row justify-center items-center flex-col">
          <div className="w-11/12 md:w-4/6 mx-auto my-1 ">
            <h1 className="font-heading font-bold text-6xl md:text-6xl text-center lg:text-8xl my-4 lg:w-full">
              Olalekan Adedeji
            </h1>
            <p className="font-body text-left w-full lg:w-3/5 mx-auto md:text-center text-base font-light my-2">
            I am a Frontend Developer skilled at creating visually pleasing,
              high-performance, and scalable web applications using modern web
              technologies.
            </p>
            <p className="font-body block text-left text-base w-full lg:w-3/5 mx-auto md:text-center font-light my-2">
              Tools and technologies I work with include
              <span className="font-bold"> Javascript</span> |
              <span className="font-bold"> React</span> |
              <span className="font-bold"> Next</span> |
              <span className="font-bold"> Vue</span> |
              <span className="font-bold"> Nuxt</span> |
              <span className="font-bold"> Express</span> |
              <span className="font-bold"> NodeJS</span> |
              <span className="font-bold"> MongoDB</span> |
              <span className="font-bold"> SQL</span> |
              <span className="font-bold"> Git </span> |
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
                <a href="/">
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

        <div className="mt-16 w-11/12 lg:w-10/12 mx-auto text-center">
          <h1 className=" bg-gradient-to-r from-[#020024] via-[#241401] to-[#4c0c00] inline-block text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-[#871701] dark:via-[#b87c39] dark:to-[#771300]  text-center font-bold text-3xl">
            Stuff I have built...
          </h1>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
