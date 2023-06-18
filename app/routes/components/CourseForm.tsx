import { useState } from "react";

import { CourseSelection } from "./CourseSelection";
import { DisciplineSelection } from "./DisciplineSelection";
import { TermSelection } from "./TermSelection";
import { YearSelection } from "./YearSelection";

import { startDiscipline } from "../helpers/disciplines";

export const CourseForm = ({ onChange }: { onChange: Function }) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState(startDiscipline);

  const updateHeatOutline = (event: React.FormEvent) => {
    event.preventDefault();
    onChange(event);
  };

  const updateDiscipline = (event: React.SetStateAction<string>) => {
    setSelectedDiscipline(event);
  };

  return (
    <form
      onSubmit={updateHeatOutline}
      className="prose prose-stone mx-auto max-w-7xl space-y-8"
    >
      <div className="flex w-full flex-col gap-x-4 gap-y-8 md:flex-row">
        <DisciplineSelection updateDiscipline={updateDiscipline} />
        <CourseSelection selectedDiscipline={selectedDiscipline} />
        <TermSelection />
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
