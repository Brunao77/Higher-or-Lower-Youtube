import { useState, useEffect } from "react";
import { getRandomItems } from "../helpers/getRandomItems";

const get2RandomItems = getRandomItems(2);

function Game(props) {

  const [played, setPlayed] = useState(null)
  const [lose, setLose] = useState(false)

  useEffect(async () => {
    setPlayed(get2RandomItems(props.videos))
  }, []);

  const selectRandomVideo = () => {
    let video
    do{
      video = getRandomItems(1)(props.videos)
    }while(played.includes(video[0]) && played.length<50);

    if(played.length<props.videos.length)
      setPlayed(()=>[video[0],...played])

    console.log(played)
  }

  const checkStatus = (high) =>{
    if(high){
      if(parseInt(firstVideo.statistics.viewCount) >= parseInt(lastVideo.statistics.viewCount)){
        selectRandomVideo();
      }
      else{
        setLose(true)
        console.log("lose")
      }
    }
    else{
      if(parseInt(firstVideo.statistics.viewCount) <= parseInt(lastVideo.statistics.viewCount)){
        selectRandomVideo();
      }
      else{
        setLose(true)
        console.log("lose")
      }
    }
  }
  
  if(!played) return <div>Loading...</div>

  const [firstVideo, lastVideo] = played

  if(!firstVideo.snippet.thumbnails.maxres.url) return <div>Loading...</div>
  if(!lastVideo.snippet.thumbnails.maxres.url) return <div>Loading...</div>

  return (
    <div className="container-all-option">
      <div className="container-first-option" style={{ 
      backgroundImage: `url(${firstVideo.snippet.thumbnails.maxres.url})` 
      }}>
        <div className="container-text-first-option">
          <p className="title-first-option">"{firstVideo.snippet.title}"</p>
          <button onClick={()=>checkStatus(true)} className="higher-button">Higher</button>
          <button onClick={()=>checkStatus(false)} className="lower-button">Lower</button>
          <p className="complement-text">viewers than {lastVideo.snippet.channelTitle}</p>
        </div>
      </div>
      <div className="container-second-option"  style={{ 
      backgroundImage: `url(${lastVideo.snippet.thumbnails.maxres.url})` 
      }}>
        <div className="container-text-second-option">
          <p className="title-second-option">"{lastVideo.snippet.title}"</p>
          <p className="complement-text">has</p>
          <p className="views-second-option">{lastVideo.statistics.viewCount}</p>
          <p className="complement-text">views</p>
        </div>
      </div>
      
    </div>
  )
}
  
export default Game