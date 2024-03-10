import { useState } from "react";
import Store from "../store";
import QuizItem from "./QuizItem";
import ProgressBar from "./ProgressBar";
import Resultate from "./Resultate";

function App() {
  let [results, setResults] = useState(0);
  let [currentQuestion, setCurrentQuestion] = useState(0);

  const selectAnswer = (id) => {
    Store.quiz.questions[currentQuestion].correct === id
      ? setResults(results + 1)
      : null;
    if (currentQuestion < Store.quiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <main className="quiz">
      {currentQuestion < Store.quiz.questions.length && (
        <>
          <h1 className="quiz__title">{Store.quiz.title}</h1>
          <ProgressBar currentWidth={currentQuestion / Store.quiz.questions.length * 100 + '%'} />
          {currentQuestion < Store.quiz.questions.length && (
            <section className={`quiz__wrap`}>
              <QuizItem current={currentQuestion} chooseAnswer={selectAnswer} />
            </section>
          )}
        </>
      )}
      <Resultate results={results} isShow={currentQuestion >= Store.quiz.questions.length ? "--show" : ""}/>
    </main>
  );
}

export default App;
