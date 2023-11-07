import React from "react";
import Project from "../components/Project";
import { projectDetails } from "../details";

function Projects() {
  return (
    <div className="container mx-auto max-width pt-10 md:mb-16 min-w-450">
      <section>
        <h1 className="text-3xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-3xl xl:leading-tight font-bold text-center mt-8 mb-4 ">
          <span className="yellow">My</span> Projects
        </h1>
        <p className="py-4 text-center text-gray-500 text-2xl">
          Checkout my recent work :)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            projectDetails.map(
              ({
                title,
                image,
                description,
                techstack,
                previewLink,
                githubLink,
              }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default Projects;
