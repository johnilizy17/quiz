const Answer = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
  control
}) => {
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = !control && isCorrectAnswer ? "correct-answer" : "";
  const correctAnswerClass2 = control && currentAnswer  === answerText ? "correct-answer" : "";
  const wrongAnswerClass = !control && isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";
  return (
    <div
      className={`answer ${correctAnswerClass2} ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => {
        onSelectAnswer(answerText)
      }}
    >
      <div className="answer-letter">{letterMapping[index]}</div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;
