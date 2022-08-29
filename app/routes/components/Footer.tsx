const Footer = () => {
  return (
    <footer>
      <nav className="relative flex flex-wrap items-center justify-between gap-2 bg-violet-50 py-2 px-4">
        <p>
          Source:{" "}
          <a
            href="https://heat.csc.uvic.ca/coview/"
            className="text-stone-800 underline focus-within:rounded focus-within:outline-none focus-within:ring-1 focus-within:ring-violet-700 focus-within:ring-offset-2 focus-within:ring-offset-violet-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://heat.csc.uvic.ca/coview/
          </a>
        </p>
        <p>
          CourseUp:{" "}
          <a
            href="https://courseup.vikelabs.ca/"
            className="text-stone-800 underline focus-within:rounded focus-within:outline-none focus-within:ring-1 focus-within:ring-violet-700 focus-within:ring-offset-2 focus-within:ring-offset-violet-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://courseup.vikelabs.ca/
          </a>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
