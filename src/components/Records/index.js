import { useContext, useEffect } from "react";
import { getScores, addScore } from "../../database/firebase";
import { gameContext } from "../../context/context";

const Records = () => {
  const { name, setName, scores, setScores, trials, gameLevel } =
    useContext(gameContext);

  useEffect(() => {
    getScores().then((scores) => setScores(scores));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    addScore(name, gameLevel, trials).then((score) => {
      setScores([...scores, score]);
      setName("");
    });
  }

  return (
    <div id="records" className="page">
      <h2>SCORE BOARD</h2>
      <ul>
        {scores.map((score) => (
          <li key={score.id}>
            {score.name} : {score.level} : {score.score}
          </li>
        ))}
      </ul>
      {trials !== 0 && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Add name"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
export default Records;
