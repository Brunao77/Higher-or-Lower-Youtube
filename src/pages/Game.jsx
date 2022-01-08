import React, { useState, useEffect } from "react";
import { getRandomItems } from "../helpers/getRandomItems";
import { Stack, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion'
import TwoOptions from "../components/TwoOptions";

const MotionStack = motion(Stack)

const get2RandomItems = getRandomItems(2);
const get1RandomItem = getRandomItems(1);

function Game({ score, videos, setScore, bestScore, setPages }) {

  const [played, setPlayed] = useState(null)
  const [lose, setLose] = useState(false)
  const [win, setWin] = useState(false)

  useEffect(() => {
    setPlayed(get2RandomItems(videos))
  }, []);

  const selectRandomVideo = () => {
    let video
    do {
      video = get1RandomItem(videos)
    } while (played.includes(video[0]) && played.length < 50);
    
    if (played.length < videos.length)
      setPlayed(() => [video[0], ...played])

  }

  const checkStatus = (high) => {
    high ?
      parseInt(firstVideo.statistics.viewCount) >= parseInt(lastVideo.statistics.viewCount) ?
        selectRandomVideo()
        : setLose(true)
      : parseInt(firstVideo.statistics.viewCount) <= parseInt(lastVideo.statistics.viewCount) ?
        selectRandomVideo()
        : setLose(true)
  }

  if (!played) return <div>Loading...</div>

  const [firstVideo, lastVideo] = played

  setScore(played.length - 2)

  function redirectAfterAnimation() {

    setTimeout(function () {
      setPages(2)
    }, 2000);
  }

  return (
    !(lose || played.length === 50) ?
      <Stack
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.671)"
        _before={{
          content: "''",
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          backgroundColor: "rgba(0, 0, 0, 0.671)"
        }}>
        <TwoOptions firstVideo={firstVideo} lastVideo={lastVideo} checkStatus={checkStatus} score={score} bestScore={bestScore} buttonDisabled={false} />
        <Stack
          userSelect="none"
          bg="white"
          borderRadius="999px"
          position="absolute"
          top="40%"
          alignSelf="center"
          width="max(4vw,40px)"
          height="max(4vw,40px)"
          justifyContent="center"
          alignItems="center">
          <Text color="black">VS</Text>
        </Stack>
      </Stack> 
      
      :

      <Stack
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.671)"
        _before={{
          content: "''",
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          backgroundColor: "rgba(0, 0, 0, 0.671)"
        }}>
        <TwoOptions firstVideo={firstVideo} lastVideo={lastVideo} checkStatus={checkStatus} score={score} bestScore={bestScore} buttonDisabled={true} />
        <MotionStack
          initial={{ scale: 0 }}
          animate={{ backgroundColor: ["#FFFFFF", "#FFB3B3", '#FF6A6A'], scale: 1 }}
          transition={{
            duration: 1,
          }}
          userSelect="none"
          borderRadius="999px"
          position="absolute"
          top="40%"
          alignSelf="center"
          width="max(4vw,40px)"
          height="max(4vw,40px)"
          justifyContent="center"
          alignItems="center">
          <Text color="white">X</Text>
        </MotionStack>
        {
          redirectAfterAnimation()
        }
      </Stack>
  )
}

export default Game