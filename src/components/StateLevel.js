import { useContext, useState } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const StateLevels = () => {
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
                You've got {quizState.correctAnswersCount} of &nbsp;
                {quizState.questions.length} right.
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
        {  <div className="score">
            Questions {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>}
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

export default StateLevels;
