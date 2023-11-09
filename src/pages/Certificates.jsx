import React from "react";
import Certificate from "../components/Certificate";
import { certificatesData } from "../details";

function Certificates() {
  return (
    <div className="container mx-auto max-width -mt-30 mb-20 min-w-450">
      <section>
        <h1 className="text-3xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-3xl xl:leading-tight font-bold text-center mt-20 mb-6">
          My<span className="yellow"> Certificates</span>
        </h1>
        <p className="py-2 text-gray-500 text-center mb-2 md:text-xl">
          I enjoy diving into and learning new things. Here's some of my
          certificates :)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {certificatesData.map(({ id, title, link, imageUrl }) => (
            <Certificate
              key={id}
              title={title}
              link={link}
              imageUrl={imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Certificates;
