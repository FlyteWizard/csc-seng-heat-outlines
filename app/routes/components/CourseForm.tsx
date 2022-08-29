import CourseSelection from "./CourseSelection";
import Termselection from "./TermSelection";
import YearSelection from "./YearSelection";

const CourseForm = ({ onChange }: { onChange: Function }) => {
  const updateCourse = (event: React.FormEvent) => {
    event.preventDefault();
    onChange(event);
  };

  return (
    <form
      onSubmit={updateCourse}
      className="prose prose-stone mx-auto max-w-7xl space-y-8"
    >
      <div className="flex w-full flex-col gap-x-4 gap-y-8 md:flex-row">
        <CourseSelection />
        <Termselection />
        <YearSelection />
      </div>
      <div className="flex w-full justify-end">
        <button
          type="submit"
          className="rounded bg-violet-800 p-2 text-white focus-within:rounded focus-within:outline-none focus-within:ring-1 focus-within:ring-violet-700 focus-within:ring-offset-2 focus-within:ring-offset-white"
        >
          Generate Heat Outline
        </button>
      </div>
    </form>
  );
};

export default CourseForm;