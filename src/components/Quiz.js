import { useContext, useState } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";
import StateLevel from "./StateLevel";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [level, setLevel] = useState(true);
  return (
    <div className="quiz">
      { (
        quizState.showResults && (
          <div className="results">
            <div className="congratulations">Congratulations!</div>
            <div className="results-info">
              <div>You have completed the quiz.</div>
              <div>
                You've got {quizState.correctAnswersCount> 8 ? quizState.correctAnswersCount - 2 : quizState.correctAnswersCount} of &nbsp;
                {quizState.questions.length - 2} right.
              </div>
            </div>
            <div
              onClick={() => dispatch({ type: "RESTART" })}
              className="next-button"
            >
              Restart
            </div>
          </div>
        )
      )}
      {!quizState.showResults && (
        <div>
       {quizState.currentQuestionIndex > 1 && 
        <div className="score">
            Question {quizState.currentQuestionIndex - 1}/
            {quizState.questions.length - 2}
          </div>
          }
          <Question />
          {quizState.currentAnswer && (
            <div
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
              className="next-button"
            >
              Next question
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
