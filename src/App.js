import { Routes, Route } from "react-router-dom";

import GameContextProvider from "./context/context";
import Game from "./components/Game";
import WinPage from "./components/Win";
import SelectLevel from "./components/SelectLevel";
import Records from "./components/Records";
import "./styles/global.scss";

const App = () => {
  return (
    <GameContextProvider>
      <div className="App">
        <Routes>
          <Route index path="/" element={<SelectLevel />} />
          <Route path="/game" element={<Game />} />
          <Route path="/win" element={<WinPage />} />
          <Route path="/score" element={<Records />} />
        </Routes>
      </div>
    </GameContextProvider>
  );
};

export default App;
