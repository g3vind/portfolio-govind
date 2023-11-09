import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import me from "../assets/me.png";
import { Link } from "react-scroll";
import Projects from "../pages/Projects";
import ContactPage from "../pages/ContactPage";
import Skills from "../components/Skills";
import Certificates from "./Certificates";

const Home = () => {
  return (
    <>
      <div name="home" className="h-screen w-full ">
        <div className="max-w-screen-lg mx-auto -mt-10 flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div>
            <img
              src={me}
              alt="my profile"
              className="rounded-2xl mx-auto mt-2 w-2/3 md:w-full"
            />
          </div>
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-black">
              I'm a Full Stack Web Developer
            </h2>
            <p className=" py-4 font-medium max-w-md text-gray-500">
              Looking for internship or full time opportunities :)
            </p>
            <div>
              <a
                href="https://drive.google.com/drive/folders/1YaO5KXjJPQhBlXwYz9pm8s61T-12Bfi0?usp=drive_link"
                target="_blank"
                smooth
                duration={500}
                className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Hire Me :)
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight size={25} className="ml-3" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Projects />
      <Certificates />
      <ContactPage />
    </>
  );
};
export default Home;
