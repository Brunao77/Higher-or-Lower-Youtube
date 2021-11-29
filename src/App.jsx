import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Game from "./pages/Game";
import Initial from "./pages/Initial";
import { useVideos } from './hooks/useVideos'
import "./styles/game.css"

function App() {
  
  const videos = useVideos()
  if(!videos) return null;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Initial}/>
        <Route exact path="/play" > <Game videos={videos}/></Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App