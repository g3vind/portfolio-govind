import React from "react";

const Skills = () => {
  return (
    <div name="skills" className="-mt-20 w-full h-screen text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" w-full flex justify-center items-center mt-16 flex-col">
          <p class="text-3xl text-dark-heading dark:text-light-heading md:text-3xl s xl:text-3xl xl:leading-tight font-bold text-center mt-16 md:mt-30 mb-6">
            My <span className="yellow">Skills</span>
          </p>
          <p className="py-2 text-gray-500 mb-2 text-2xl">
            Here's a list of technologies I've worked with :)
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4">
          <div className="shadow-md shadow-[#FFA500] hover:scale-110 duration-500">
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#FFA500] hover:scale-110 duration-500">
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#FFA500] hover:scale-110 duration-500">
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#FFA500] hover:scale-110 duration-500">
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#FFA500] hover:scale-110 duration-500">
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#FFA500] hover:scale-110 duration-500">
            <p className="my-4">REDUX</p>
          </div>

          <div className="shadow-md shadow-[#FFA500] hover:scale-110 duration-500">
            <p className="my-4">NODE JS</p>
          </div>

          <div className="shadow-md shadow-[#FFA500] hover:scale-110 duration-500">
            <p className="my-4">EXPRESS JS</p>
          </div>
          <div className="shadow-md shadow-[#FFA500] hover:scale-110 duration-500">
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#FFA500] hover:scale-110 duration-500">
            <p className="my-4">POSTGRES</p>
          </div>
          <div className="shadow-md shadow-[#FFA500] hover:scale-110 duration-500">
            <p className="my-4">GIT</p>
          </div>
          <div className="shadow-md shadow-[#FFA500] hover:scale-110 duration-500">
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#FFA500] hover:scale-110 duration-500">
            <p className="my-4">JAVA</p>
          </div>
          <div className="shadow-md shadow-[#FFA500] hover:scale-110 duration-500">
            <p className="my-4">FIREBASE</p>
          </div>
          <div className="shadow-md shadow-[#FFA500] hover:scale-110 duration-500">
            <p className="my-4">POSTMAN</p>
          </div>

          <div className="shadow-md shadow-[#FFA500] hover:scale-110 duration-500">
            <p className="my-4">BOTPRESS</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
