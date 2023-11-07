function Project({ title, image, description, githubLink }) {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <article
      className="rounded-xl mt-10 overflow-hidden shadow-xl  min-w-260 hover:shadow-lg transition-transform transform hover:scale-110 md:max-w-100"
      onClick={() => handleRedirect(githubLink)}
    >
      <img
        style={{ imageRendering: "auto" }}
        src={image}
        alt="Project Image"
        loading="lazy"
      />
      <div className="dark:bg-dark-card p-2">
        <h1 className="dark:text-light-heading text-center font-semibold text-lg pt-1">
          {title}
        </h1>
        <p className="text-content text-center pt-4 pb-4 font-semibold">
          {description}
        </p>
      </div>
    </article>
  );
}

export default Project;
