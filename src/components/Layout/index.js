import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gameContext } from "../../context/context";

function Layout() {
  const navigate = useNavigate();

  const {
    gameValue,
    inputValue,
    setInputValue,
    trials,
    setTrials,
    used,
    setUsed,
    randomNumber,
    setRandomNumber,
  } = useContext(gameContext);

  useEffect(
    () => {
      if (gameValue > 0) {
        setRandomNumber(Math.floor(Math.random() * gameValue));
      }
    },
    [gameValue]
    //eslint-disable-next-line react-hooks/exhaustive-deps
  );

  const handleChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  const handleButtonClick = () => {
    setTrials(trials + 1);
    setUsed([...used, inputValue]);
    console.log(randomNumber);
    if (randomNumber === inputValue) {
      console.log("Udało się");
      navigate("/win");
    } else if (randomNumber !== inputValue) {
      console.log("nope");
    }
  };

  return (
    <section className="layout">
      <div id="page" className="page">
        <p className="used">
          Numbers Used: <span>{used.join(", ")}</span>
        </p>
        <p className="tries">
          Tries: <span>{trials}</span>
        </p>
        <h2>Guess number between 0 and {gameValue}</h2>
        <p className="response"></p>
        <input type="number" value={inputValue} onChange={handleChange} />
        <button onClick={handleButtonClick}>Try</button>
      </div>
    </section>
  );
}

export default Layout;
