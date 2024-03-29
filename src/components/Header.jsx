import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className=" w-full h-[80px] flex font-2xl justify-around font-semibold items-center px-10 text-black bg-g=white shadow-lg">
        <p className="cursor-pointer text-xl">𝒢𝑜𝓋𝒾𝓃𝒹</p>
        <ul className="hidden mr-16 md:flex gap-x-8">
          <li className="text-black text-lg font-semibold cursor-pointer flex items-center">
            <NavLink
              to="/home"
              duration={500}
              className="flex items-center hover:border-b-4 hover:border-orange-300 transition"
            >
              Home
            </NavLink>
          </li>

          <li className="text-black text-lg font-sembold cursor-pointer">
            <NavLink
              to="/projects"
              className="flex items-center hover:border-b-4 hover:border-orange-300 transition"
            >
              Projects
            </NavLink>
          </li>
          <li className="text-black text-lg font-sembold cursor-pointer">
            <NavLink
              to="skills"
              className="flex items-center hover:border-b-4 hover:border-orange-300 transition"
            >
              Skills
            </NavLink>
          </li>
          <li className="text-black text-lg font-sembold cursor-pointer">
            <NavLink
              to="resume"
              className="flex items-center hover:border-b-4 hover:border-orange-300 transition"
            >
              Resume
            </NavLink>
          </li>

          <li className="text-black text-lg font-sembold cursor-pointer">
            <NavLink
              to="contact"
              className="flex items-center hover:border-b-4 hover:border-orange-300 transition"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* Hamburger */}
        <div
          onClick={handleClick}
          className="md:hidden justify-between text-3xl mt-2 mb-4 -mr-2 pb-4 z-10"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile menu */}
        <ul
          style={{ zIndex: "200" }}
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen mb-4 flex flex-col bg-gray-300 justify-center font-bold items-center"
          }
        >
          <li className="py-2 text-2xl mt-3">
            <NavLink
              onClick={handleClick}
              className="flex items-center"
              to="home"
              duration={500}
            >
              Home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </NavLink>
          </li>
          <li className="py-2 text-2xl">
            <NavLink
              style={{ zIndex: "190" }}
              onClick={handleClick}
              to="projects"
              duration={500}
              className="flex items-center"
            >
              Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>
            </NavLink>
          </li>
          <li className="py-2 text-2xl">
            <NavLink
              onClick={handleClick}
              to="skills"
              duration={500}
              className="flex items-center"
            >
              Skills
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            </NavLink>
          </li>
          <li className="py-2 text-2xl">
            <NavLink
              onClick={handleClick}
              to="resume"
              duration={500}
              className="flex items-center"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </NavLink>
          </li>

          <li className="py-2 text-2xl">
            <NavLink
              onClick={handleClick}
              to="contact"
              duration={500}
              className="flex items-center"
            >
              Contact
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
