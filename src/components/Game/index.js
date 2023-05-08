import { useContext } from "react";
import { gameContext } from "../../context/context";
import Layout from "../Layout/index.js";

function Game() {
  const { level } = useContext(gameContext);

  if (level === 1 || level === 2 || level === 3 || level === 4) {
    return <Layout />;
  }
}

export default Game;
