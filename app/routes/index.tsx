import { useState } from "react";

import { getCalendarEntryLink, getHeatOutlineLink } from "./helpers/links";
import { getCurrentTerm, getCurrentYear } from "./helpers/time";

import CourseForm from "./components/CourseForm";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Index() {
  const [selectedCourse, setSelectedCourse] = useState("CSC 110");
  const [selectedTerm, setSelectedTerm] = useState(getCurrentTerm());
  const [selectedYear, setSelectedYear] = useState(getCurrentYear());

  const handleChange = (event: React.FormEvent) => {
    const target = event.target as typeof event.target & {
      course: HTMLInputElement;
      term: HTMLInputElement;
      year: HTMLInputElement;
    };

    setSelectedCourse(target.course.value);
    setSelectedTerm(target.term.value);
    setSelectedYear(target.year.value);
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-20">
        <section
          aria-describedby="information"
          className="prose prose-stone mx-auto max-w-7xl prose-h1:mb-2 prose-a:break-words prose-a:text-violet-800 focus-within:prose-a:rounded focus-within:prose-a:outline-none focus-within:prose-a:ring-1 focus-within:prose-a:ring-violet-700 focus-within:prose-a:ring-offset-2 focus-within:prose-a:ring-offset-white"
        >
          <h1 id="information">UVic CSC and SENG Heat Outlines</h1>
          <p>
            Select a course, term, and year to view its heat outline.<br></br>
            List of courses provided by:{" "}
            <a
              href="https://heat.csc.uvic.ca/colinks/sl/CSC,SENG"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://heat.csc.uvic.ca/colinks/sl/CSC,SENG
            </a>
          </p>
        </section>

        <CourseForm onChange={handleChange} />

        <section
          aria-describedby="links"
          className="prose prose-stone mx-auto max-w-7xl prose-a:break-words prose-a:text-violet-800 focus-within:prose-a:rounded focus-within:prose-a:outline-none focus-within:prose-a:ring-1 focus-within:prose-a:ring-violet-700 focus-within:prose-a:ring-offset-2 focus-within:prose-a:ring-offset-white"
        >
          <h2 id="links">
            {selectedCourse} - {selectedTerm} {selectedYear}
          </h2>
          <p>
            Heat Outline:{" "}
            <a
              href={getCalendarEntryLink(selectedCourse)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {getCalendarEntryLink(selectedCourse)}
            </a>
            <br></br>
            Calendar Entry:{" "}
            <a
              href={getHeatOutlineLink(
                selectedCourse,
                selectedTerm,
                selectedYear
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {getHeatOutlineLink(selectedCourse, selectedTerm, selectedYear)}
            </a>
          </p>
        </section>
        <section
          aria-describedby="preview"
          className="prose prose-stone mx-auto max-w-7xl prose-a:break-words prose-a:text-violet-800 focus-within:prose-a:rounded focus-within:prose-a:outline-none focus-within:prose-a:ring-1 focus-within:prose-a:ring-violet-700 focus-within:prose-a:ring-offset-2 focus-within:prose-a:ring-offset-white"
        >
          <h2 id="preview">Heat Outline Preview</h2>
          <iframe
            title="Heat Outline Preview"
            src={getHeatOutlineLink(selectedCourse, selectedTerm, selectedYear)}
            frameBorder="0"
            allowFullScreen
            className="h-96 w-full"
          ></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
}
