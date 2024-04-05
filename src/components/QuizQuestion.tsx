import { type Question } from "@/pages/Quiz";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const QuizQuestion = (question: Question) => {
  return (
    <div>
      <h2 className="py-3 text-xl font-medium text-primary">
        {question.question}
      </h2>
      <div>
        <RadioGroup>
          {question.options.map((option, index) => {
            return (
              <div className="flex space-x-2" key={index}>
                <RadioGroupItem
                  value={option}
                  id={option + question.question}
                ></RadioGroupItem>
                <Label htmlFor={option + question.question}>{option}</Label>
              </div>
            );
          })}
        </RadioGroup>
      </div>
    </div>
  );
};

export default QuizQuestion;
