import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="w-full h-[80px] flex mt-4 justify-around font-semibold items-center px-4 text-black">
        <div>
          <NavLink
            to="/"
            className=" font-semibold text-xl italic font-serif md:none"
          >
            𝒢𝒪𝒱𝐼𝒩𝒟
          </NavLink>
        </div>
        {/* menu */}
        <ul className="hidden mr-16 md:flex gap-x-8">
          <li className="text-black font-sembold cursor-pointer">
            <NavLink to="home" smooth={true} duration={500}>
              Home
            </NavLink>
          </li>
          <li className="text-black font-sembold cursor-pointer">
            <NavLink to="projects" smooth={true} duration={500}>
              Projects
            </NavLink>
          </li>
          <li className="text-black font-sembold cursor-pointer">
            <NavLink to="skills" smooth={true} duration={500}>
              Skills
            </NavLink>
          </li>

          <li className="text-black font-sembold cursor-pointer">
            <NavLink to="certificates" smooth={true} duration={500}>
              Certificates
            </NavLink>
          </li>
          <li className="text-black font-sembold cursor-pointer">
            <NavLink to="contact" smooth={true} duration={500}>
              Contact
            </NavLink>
          </li>
        </ul>
        {/* Hamburger */}
        {/* <div
          onClick={handleClick}
          className="md:hidden text-2xl mb-4 pb-4 z-10"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div> */}
        {/* Mobile menu */}
        {/* <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen flex flex-col bg-gray-500 align-around items-center"
          }
        >
          <li className="py-2 text-2xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-2 text-2xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-2 text-2xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-2 text-2xl">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-2 text-2xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul> */}

        {/* Social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/g3vind/"
                target="_blank"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/g3vind"
                target="_blank"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="mailto:g3vind@gmail.com"
                target="_blank"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
