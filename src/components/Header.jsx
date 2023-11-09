// import React, { useState } from "react";
// import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);

//   return (
//     <div className="inline-flex w-full h-[80px] justify-around mt-1 text-black items-center px-2">
//       {/* menu */}
//       <ul className="hidden text-black mt-6 md:flex gap-x-10">
//         <li className="text-2xl font-semibold flex-1">
//           <Link to="/" smooth={true} duration={500}>
//             Home
//           </Link>
//         </li>
//         <li className="text-black text-2xl font-semibold">
//           <Link to="about" smooth={true} duration={500}>
//             About
//           </Link>
//         </li>

//         <li className="text-black text-2xl font-semibold">
//           <Link to="projects" smooth={true} duration={500}>
//             Projects
//           </Link>
//         </li>
//         <li className="text-black text-2xl font-semibold">
//           <Link to="contact" smooth={true} duration={500}>
//             Contact
//           </Link>
//         </li>
//       </ul>
//       {/* Hamburger */}
//       <div onClick={handleClick} className="md:hidden z-10">
//         {!nav ? <FaBars /> : <FaTimes />}
//       </div>
//       {/* Mobile menu */}
//       <ul
//         className={
//           !nav
//             ? "hidden"
//             : "absolute top-0 left-0 w-full bg-gray-400 p-1 mb-2 text-white h-screen flex flex-col justify-center items-center"
//         }
//       >
//         <li className="py-6 text-3xl font-bold">
//           <Link onClick={handleClick} to="/" smooth={true} duration={500}>
//             Home
//           </Link>
//         </li>
//         <li className="py-6 text-3xl font-bold">
//           {" "}
//           <Link onClick={handleClick} to="about" smooth={true} duration={500}>
//             About
//           </Link>
//         </li>

//         <li className="py-6 text-3xl font-bold">
//           {" "}
//           <Link
//             onClick={handleClick}
//             to="projects"
//             smooth={true}
//             duration={500}
//           >
//             Projects
//           </Link>
//         </li>
//         <li className="py-6 text-3xl font-bold">
//           {" "}
//           <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
//             Contact
//           </Link>
//         </li>
//       </ul>
//       {/* Social icons */}
//       <div className="hidden lg:flex fixed flex-col top-[35%] left-0 p-2">
//         <ul>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="https://www.linkedin.com/in/g3vind/"
//               target="_blank"
//             >
//               Linkedin <FaLinkedin size={30} />
//             </a>
//           </li>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="https://github.com/g3vind"
//               target="_blank"
//             >
//               Github <FaGithub size={30} />
//             </a>
//           </li>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="mailto:g3vind@gmail.com"
//               target="_blank"
//             >
//               Email <HiOutlineMail size={30} />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default Header;

import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className=" w-full h-[80px] flex mt-4 justify-around font-semibold items-center px-4 text-black">
        {/* <div>
          <h1 className=" font-semibold text-xl italic font-serif md:none">
            𝒢𝒪𝒱𝐼𝒩𝒟 𝒦𝒰𝑀𝒜𝑅
          </h1>
        </div> */}
        {/* menu */}
        <ul className="hidden mr-16 md:flex gap-x-8">
          <li className="text-black font-sembold">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="text-black font-sembold">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="text-black font-sembold">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>

          <li className="text-black font-sembold">
            <Link to="certificates" smooth={true} duration={500}>
              Certificates
            </Link>
          </li>
          <li className="text-black font-sembold">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
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
