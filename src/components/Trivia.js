import { useEffect, useState } from "react";

const Trivia = ({ data, setStopGame, questionNumber, setQuestionNumber }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  // console.log(data);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClickedAnswer = (answer) => {
    setSelectedAnswer(answer);
    setClassName("answer active");

    setTimeout(() => {
      setClassName(answer.correct ? "answer correct" : "answer wrong");
    }, 3000);

    setTimeout(() => {
      if (answer.correct) {
        setQuestionNumber((prev) => prev + 1);
      } else {
        setStopGame(true);
      }
    }, 6000);
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer) => (
          <div
            key={answer.id}
            className={selectedAnswer === answer ? className : "answer"}
            onClick={() => handleClickedAnswer(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
