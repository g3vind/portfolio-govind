function Certificate({ title, link, imageUrl }) {
  const handleRedirect = () => {
    window.open(link, "_blank");
  };

  return (
    <article
      className="flex items-center flex-col rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900 min-w-260 hover:shadow-lg transition-transform transform hover:scale-105 md:max-w-100"
      onClick={handleRedirect}
    >
      <img
        className="flex items-center"
        style={{ height: "180px", width: "auto" }}
        src={imageUrl}
        alt={title}
        loading="lazy"
      />
      <div className="dark:bg-dark-card p-4">
        <h1 className="dark:text-light-heading text-center font-semibold text-lg pt-1">
          {title}
        </h1>
      </div>
    </article>
  );
}

export default Certificate;
