import { useContext } from "react";
import { gameContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

const WinPage = () => {
  const { trials, setTrials, setUsed } = useContext(gameContext);
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    setTrials(0);
    setUsed([]);
    navigate("/");
  };

  const handleScoreBoard = () => {
    navigate("/score");
  };

  return (
    <div id="win" className="page">
      <h2>
        <p>CONGRATULATIONS!</p>
        <span>YOU WIN!</span>
      </h2>
      <p>
        It only took you... <span>{trials}</span> tries!
      </p>
      <p className="tip">Not bad, but can u set new record?</p>
      <button className="win" onClick={handleScoreBoard}>
        Check scoreboard!
      </button>
      <button onClick={handlePlayAgain}>Play again</button>
    </div>
  );
};

export default WinPage;
