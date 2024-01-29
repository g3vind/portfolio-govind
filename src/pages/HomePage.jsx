import { HiArrowNarrowRight } from "react-icons/hi";
import ai from "../assets/ai.jpg";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className="md:flex items-center m-4 md:m-10 mb-6 md:mb-28 px-4 py-4 md:py-8 lg:px-8 xl:px-16">
        {/* left */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0 mb-4 md:mb-0 md:mr-4">
          <img
            src={ai}
            alt="AI Image"
            className="rounded-2xl h-48 md:h-80 w-full object-contain mb-4 md:mb-0 md:mr-0"
          />
        </div>

        {/* right */}
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            Hi There👋,
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            I am Govind Kumar
          </h1>
          <h2 className="text-sm md:text-xl mb-4 md:mb-6 flex items-center">
            <span className="text-blue-500">I am into&nbsp; </span>
            <Typewriter
              options={{
                strings: [
                  "Core Java",
                  "Reactjs",
                  "Nodejs",
                  "Redux Toolkit",
                  "JavaScript",
                  "React Native",
                ],
                autoStart: true,
                loop: true,
              }}
              className="ml-2 md:ml-4 font-bold"
            />
          </h2>

          <div className="flex flex-col md:flex-row flex-wrap gap-2">
            <NavLink
              to="/resume"
              className="bg-blue-500 text-white py-2 px-4 rounded-full text-center mb-2 md:mb-0 hover:bg-blue-600 transition duration-300"
            >
              Hire Me <HiArrowNarrowRight className="inline-block ml-2" />
            </NavLink>
            <NavLink
              to="https://www.github.com/g3vind"
              className="bg-blue-500 text-white py-2 px-4 rounded-full text-center mb-2 md:mb-0 hover:bg-blue-600 transition duration-300"
            >
              <FaGithub size={20} className="" />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/g3vind"
              className="bg-blue-500 text-white py-2 px-4 rounded-full text-center mb-2 md:mb-0 hover:bg-blue-600 transition duration-300 flex-1 md:flex-initial"
            >
              <FaLinkedin size={20} className="" />
            </NavLink>
            <NavLink
              to="https://www.twitter.com/g3vind"
              target="_blank"
              className="bg-blue-500 text-white py-2 px-4 rounded-full text-center mb-2 md:mb-0 hover:bg-blue-600 transition duration-300"
            >
              <FaTwitter size={20} className="" />
            </NavLink>
            <NavLink
              target="_blank"
              to="mailto://g3vind@gmail.com"
              className="bg-blue-500 text-white py-2 px-4 rounded-full text-center mb-2 md:mb-0 hover:bg-blue-600 transition duration-300"
            >
              <MdOutlineMailOutline size={20} className="" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
