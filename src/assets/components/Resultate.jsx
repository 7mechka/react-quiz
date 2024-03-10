import Store from "../store";

function Resultate({ results, isShow }) {
  return (
    <section className={`quiz__result ${isShow}`}>
      <h3 className="quiz__summary">
        Ви відповіли правильно на {results} із {Store.quiz.questions.length} запитань
      </h3>
      <button className="quiz__selector" onClick={() => {location.reload()}}>Пройти ще раз</button>
    </section>
  );
}

export default Resultate;
