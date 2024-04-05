import { ChangeEvent, Dispatch, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { type Fields } from "@/pages/Quiz";

type QuizOptionsPropsType = {
  courses?: string[];
  setCourses: Dispatch<string[]>;
  setFields: Dispatch<Fields>;
};

const QuizOptions = ({ courses = [], setFields }: QuizOptionsPropsType) => {
  const course = useRef<string | undefined>(undefined);
  const limit = useRef<number | undefined>(10);
  const type = useRef<"exam" | "practice" | undefined>(undefined);

  const [error, setError] = useState<boolean>(false);

  function limitInput(event: ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    if (parseInt(value) < 1 || !value.match(/\d/)) {
      if (!value) event.currentTarget.value = "";
      else
        event.currentTarget.value = value.substring(
          value.length,
          value.length - 1,
        );
    } else {
      limit.current = parseInt(value);
    }
  }
  function submitForm() {
    setError(false);
    const fields = [course.current, limit.current, type.current];
    fields.forEach((field) => {
      if (field === undefined) {
        setError(true);
        return;
      }
    });
    setFields({
      course: course.current as string,
      limit: limit.current as number,
      type: type.current as "exam" | "practice",
    });

  }
  return (
    <>
      <h1 className="py-5 text-center text-2xl font-semibold text-primary">
        Fill the fields to start your quiz!
      </h1>
      {error && (
        <div className="flex justify-center text-center font-semibold text-red-500">
          Please fill all the fields!
        </div>
      )}
      <div className="flex justify-center gap-5">
        <div className="flex flex-col items-center">
          <h3 className="py-2 font-medium">Select Course</h3>
          <Select
            value={course.current}
            onValueChange={(value) => {
              course.current = value;
            }}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Subject"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              {courses.length > 0 &&
                courses.map((course) => {
                  return <SelectItem key={course} value={course}>{course}</SelectItem>;
                })}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="py-2 font-medium">Limit of questions</h3>
          <Input
            type="number"
            placeholder="Limit of questions"
            value={limit.current}
            onInput={limitInput}
          />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="py-2 font-medium">Type</h3>
          <Select
            value={type.current}
            defaultValue={type.current}
            onValueChange={(value) => {
              type.current = value as "exam" | "practice";
            }}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Mode"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="exam">Exam</SelectItem>
              <SelectItem value="learning">Learning</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-center pb-3 pt-5">
        <Button className="px-4 font-semibold" onClick={submitForm}>
          Start Exam
        </Button>
      </div>
    </>
  );
};

export default QuizOptions;
