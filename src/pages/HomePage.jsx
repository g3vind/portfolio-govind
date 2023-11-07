import React from "react";
import AboutPage from "../pages/AboutPage";
import Projects from "../pages/Projects";
import Contact from "../pages/ContactPage";
import { HiArrowNarrowRight } from "react-icons/hi";
import me from "../assets/Profile.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div name="home" className="h-screen w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-2xl sm:text-7xl font-bold text-black">
              Hola 👋, I'm Govind Kumar
            </h3>
            <p className="text-gray-600 py-4 text-2xl max-w-md">
              Currently looking for internship or full-time opportunities :)
            </p>
            <div>
              <Link
                to="/resume"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-600 cursor-pointer font-semibold"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/drive/folders/1YaO5KXjJPQhBlXwYz9pm8s61T-12Bfi0?usp=drive_link",
                    "_blank"
                  );
                }}
              >
                Hire Me
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
              className="rounded-1xl p-8 mx-auto w-1/3 md:w-full"
            />
          </div>
        </div>
      </div>
      <AboutPage />
      <Projects />
      <Contact />
    </>
  );
};
export default Home;
