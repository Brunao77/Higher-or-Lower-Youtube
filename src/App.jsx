import React, {useState, useEffect} from "react";
import Game from "./pages/Game";
import Initial from "./pages/Initial";
import Lose from "./pages/Lose"
import { useVideos } from './hooks/useVideos'

function App() {

  const [score, setScore] = useState(0)
  const [bestScore,setBestScore] = useState(0)
  const [pages,setPages] = useState(0)

  useEffect(() => {
    const storedScore = JSON.parse(localStorage.getItem("score"));
    if (storedScore) {
      setBestScore(storedScore);
    }
  }, []);

  const videos = useVideos()
  if(!videos) return null;

  return (
    pages===0 ?
      <Initial setPages={setPages} /> :
      pages===1 ? <Game videos={videos} score={score} setScore={setScore} bestScore={bestScore} setPages={setPages} /> :
      <Lose score={score} bestScore={bestScore} setBestScore={setBestScore} setPages={setPages} />
  )
}

export default App