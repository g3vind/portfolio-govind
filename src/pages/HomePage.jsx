import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import me from "../assets/me.png";
import { Link } from "react-scroll";
import Projects from "../pages/Projects";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

const Home = () => {
  return (
    <>
      <div name="home" className="h-screen w-full ">
        <div className="max-w-screen-lg mx-auto -mt-10 flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-black">
              I'm a Full Stack Web Developer
            </h2>
            <p className=" py-4 max-w-md text-black">
              I have 4 years of experience in graphics design and web
              development. Currently, I love to work on web application using
              technologies like React, Tailwind, Next.js and Mongodb.
            </p>
            <div>
              <Link
                to="about"
                smooth
                duration={500}
                className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Hire Me :)
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight size={25} className="ml-3" />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={me}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
      <Projects />
      <AboutPage />
      <ContactPage />
    </>
  );
};
export default Home;
