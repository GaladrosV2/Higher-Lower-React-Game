import { useContext } from "react";
import { gameContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

function SelectLevel() {
  const navigate = useNavigate();

  const { setLevel, setGameValue, setGameLevel } = useContext(gameContext);

  const handleClick = (level) => {
    setLevel(level);
    switch (level) {
      default:
      case 1:
        setGameValue(10);
        setGameLevel("Easy");
        navigate("/game");
        break;
      case 2:
        setGameValue(100);
        setGameLevel("Medium");
        navigate("/game");
        break;
      case 3:
        setGameValue(1000);
        setGameLevel("Hard");
        navigate("/game");
        break;
      case 4:
        setGameValue(10000);
        setGameLevel("Mortal Combat");
        navigate("/game");
        break;
      case 5:
        navigate("/score");
        break;
    }
  };

  return (
    <section>
      <div id="page" className="page" style={{ display: "block" }}>
        <h1>The Higher or Lower Game!</h1>
        <button className="level" onClick={() => handleClick(1)}>
          EASY
        </button>
        <button className="level" onClick={() => handleClick(2)}>
          MEDIUM
        </button>
        <button className="level" onClick={() => handleClick(3)}>
          HARD
        </button>
        <button className="level" onClick={() => handleClick(4)}>
          MORTAL COMBAT
        </button>
        <button onClick={() => handleClick(5)}>SCORE BOARD</button>
      </div>
    </section>
  );
}

export default SelectLevel;
