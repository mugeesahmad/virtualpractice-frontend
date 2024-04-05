import { type Question } from "@/pages/Quiz";
import QuizQuestion from "./QuizQuestion";

type QuizQuestionProps = {
  questions: Question[];
};

const QuizQuestions = ({ questions }: QuizQuestionProps) => {
  return (
    <>
      {questions.map((question, index) => {
        return (
          <QuizQuestion
            key={index}
            question={question.question}
            options={question.options}
          ></QuizQuestion>
        );
      })}
    </>
  );
};
export default QuizQuestions;
