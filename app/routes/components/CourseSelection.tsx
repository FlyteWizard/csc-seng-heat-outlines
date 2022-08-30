import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";

import { courses } from "../helpers/courses";

const CourseSelection = () => {
  const [selectedCourse, setSelectedCourse] = useState("CSC 110");
  const [query, setQuery] = useState("");

  const filteredCourse =
    query === ""
      ? courses
      : courses.filter((courses) => {
          return courses.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      className="relative w-full"
      value={selectedCourse}
      onChange={setSelectedCourse}
      name="course"
    >
      <Combobox.Label>Course</Combobox.Label>
      <div className="relative cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
        <Combobox.Input
          className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-stone-900 focus:ring-0"
          onChange={(event: any) => setQuery(event.target.value)}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon
            width="20px"
            height="20px"
            className="h-5 w-5 text-stone-400"
            aria-hidden="true"
          />
        </Combobox.Button>
      </div>
      <Combobox.Options className="absolute z-10 mt-1 mb-0 max-h-60 w-full overflow-auto rounded-md bg-white py-1 pl-0 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        {filteredCourse.map((course) => (
          <Combobox.Option
            key={course}
            value={course}
            className={({ active }) =>
              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                active ? "bg-teal-600 text-white" : "text-stone-900"
              }`
            }
          >
            {({ selected, active }) => (
              <>
                <span
                  className={`block truncate ${
                    selected ? "font-medium" : "font-normal"
                  }`}
                >
                  {course}
                </span>
                {selected ? (
                  <span
                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                      active ? "text-white" : "text-teal-600"
                    }`}
                  >
                    <CheckIcon
                      width="20px"
                      height="20px"
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>
                ) : null}
              </>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default CourseSelection;
