import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import dp from "../assets/dp.jpg";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Projects from "../pages/Projects";
import ContactPage from "../pages/ContactPage";
import Skills from "../components/Skills";
import Certificates from "./Certificates";

const Home = () => {
  return (
    <>
      <div name="home" className="h-screen w-full flex flex-row ">
        <div className="max-w-screen-lg mx-auto -mt-20  flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div>
            <img src={dp} className="w-80 h-90 rounded-3xl m-10" />
          </div>
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-3xl sm:text-5xl font-bold text-black">
              Hi✋, I'm Govind
            </h1>
            <div className="flex flex-row text-2xl sm:text-2xl font-bold text-black">
              <span className="mt-4 text-2xl">I love to code in&nbsp;</span>
              <span className="font-extrabold fon mt-4">
                <Typewriter
                  options={{
                    strings: [
                      "Java",
                      "Reactjs",
                      "Nodejs",
                      "JavaScript",
                      "TypeScript",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <p className=" py-4 font-medium max-w-md mt-4 text-gray-500">
              Looking for internship or full time opportunities :)
            </p>
            <div className="flex flex-row ">
              <NavLink
                to="/resume"
                smooth
                duration={500}
                className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Hire Me :)
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight size={25} className="ml-3" />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <Skills />
      <Projects />
      <Certificates />
      <ContactPage /> */}
    </>
  );
};
export default Home;
