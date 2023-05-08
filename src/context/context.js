import { createContext, useState } from "react";

export const gameContext = createContext();

const GameContextProvider = (props) => {
  const [level, setLevel] = useState(0);
  const [gameValue, setGameValue] = useState(0);
  const [gameLevel, setGameLevel] = useState("");
  const [trials, setTrials] = useState(0);
  const [used, setUsed] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [name, setName] = useState("");
  const [scores, setScores] = useState([]);

  const data = {
    level,
    setLevel,
    gameValue,
    setGameValue,
    trials,
    setTrials,
    used,
    setUsed,
    inputValue,
    setInputValue,
    randomNumber,
    setRandomNumber,
    name,
    setName,
    scores,
    setScores,
    gameLevel,
    setGameLevel,
  };

  return (
    <gameContext.Provider value={data}>{props.children}</gameContext.Provider>
  );
};

export default GameContextProvider;
