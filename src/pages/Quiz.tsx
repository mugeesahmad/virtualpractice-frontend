import Navbar from "@/components/navbar";
import QuizOptions from "@/components/QuizOptions";
import QuizQuestions from "@/components/QuizQuestions";
import { useEffect, useState } from "react";

export type Question = {
  question: string;
  options: string[];
};

export type Fields = {
  course: string;
  limit: number;
  type: "exam" | "practice";
};

const QuizPage = () => {
  const [fields, setFields] = useState<Fields | undefined>(undefined);
  const [courses, setCourses] = useState(["hell", "world"]);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    setQuestions([
      { options: ["one", "two", "three", "four"], question: "Question One" },
      { options: ["one", "two", "three", "four"], question: "Question Two" },
      { options: ["one", "two", "three", "four"], question: "Question Three" },
    ]);
  }, [fields]);

  console.log(fields);
  console.log(questions);

  return (
    <>
      <Navbar />
      <main className="mx-auto w-3/4 pt-10">
        {questions.length >= 1 ? (
          <QuizQuestions questions={questions} />
        ) : (
          <QuizOptions
            courses={courses}
            setCourses={setCourses}
            setFields={setFields}
          ></QuizOptions>
        )}
      </main>
    </>
  );
};

export default QuizPage;
