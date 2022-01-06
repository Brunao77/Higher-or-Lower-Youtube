import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Game from "./pages/Game";
import Initial from "./pages/Initial";
import Lose from "./pages/Lose"
import { useVideos } from './hooks/useVideos'
import "./styles/game.css"

function App() {

  const [score, setScore] = useState(0)
  const [bestScore,setBestScore] = useState(0)

  useEffect(() => {
    const storedScore = JSON.parse(localStorage.getItem("score"));
    if (storedScore) {
      setBestScore(storedScore);
    }
  }, []);

  const videos = useVideos()
  if(!videos) return null;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> <Initial bestScore={bestScore} /> </Route>
        <Route exact path="/play" > <Game videos={videos} score={score} setScore={setScore} bestScore={bestScore} /></Route>
        <Route exact path="/lose" > <Lose score={score} bestScore={bestScore} setBestScore={setBestScore} /> </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App