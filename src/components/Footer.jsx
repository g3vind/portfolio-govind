export default function Footer() {
  return (
    <footer className={`-mb-5 bottom-0 left-0 right`}>
      <div
        style={{ margin: "20px" }}
        className="container mx-auto py-1 text-center"
      >
        <p className={`text-s text-black"`}>
          Designed and Coded with 🖤 by{" "}
          <a
            className="font-bold"
            href="https://www.linkedin.com/in/g3vind/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <em className="yellow">Govind Kumar</em>
          </a>{" "}
        </p>
      </div>
    </footer>
  );
}
