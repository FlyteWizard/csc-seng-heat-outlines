export const Footer = () => {
  return (
    <footer>
      <nav className="relative flex flex-wrap items-center justify-between gap-2 break-words bg-violet-50 px-4 py-2">
        <p>
          UVic Course Outlines:{" "}
          <a
            href="https://course-outlines.uvic.ca/"
            className="text-stone-800 underline focus-within:rounded focus-within:outline-none focus-within:ring-1 focus-within:ring-violet-700 focus-within:ring-offset-2 focus-within:ring-offset-violet-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://course-outlines.uvic.ca/
          </a>
        </p>
      </nav>
    </footer>
  );
};
