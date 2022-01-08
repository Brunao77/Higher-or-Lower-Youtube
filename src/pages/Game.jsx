import React, { useState, useEffect } from "react";
import { getRandomItems } from "../helpers/getRandomItems";
import { Icon, Stack, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion'
import TwoOptions from "../components/TwoOptions";
import { BsCheckLg } from "react-icons/bs"

const MotionStack = motion(Stack)
const MotionText = motion(Text)

const get2RandomItems = getRandomItems(2);
const get1RandomItem = getRandomItems(1);

function Game({ score, videos, setScore, bestScore, setPages }) {
  const [played, setPlayed] = useState(null)
  const [lose, setLose] = useState(false)
  const [playFirstAnimation, setPlayFirstAnimation] = useState(false)
  const [playWinAnimation, setPlayWinAnimation] = useState(false)
  const [isInitial, setIsInitial] = useState(true)

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
    if (high) {
      if (parseInt(firstVideo.statistics.viewCount) >= parseInt(lastVideo.statistics.viewCount)) {
        setPlayWinAnimation(true)
        setIsInitial(false)
        setTimeout(function () {
          selectRandomVideo()
          setPlayWinAnimation(false)
        }, 1000);
      }
      else {
        setLose(true)
      }
    }
    else {
      if (parseInt(firstVideo.statistics.viewCount) <= parseInt(lastVideo.statistics.viewCount)) {
        setPlayWinAnimation(true)
        setIsInitial(false)
        setTimeout(function () {
          selectRandomVideo()
          setPlayWinAnimation(false)
        }, 1000);
      }
      else {
        setLose(true)
      }
    }
  }

  if (!played) return <div>Loading...</div>

  const [firstVideo, lastVideo] = played

  setScore(played.length - 2)

  function redirectAfterAnimation() {
    setTimeout(function () {
      setPlayFirstAnimation(true)
    }, 800);
    setTimeout(function () {
      setPages(2)
    }, 1300);
  }

  return (
    (!(lose || played.length === 50) && !playWinAnimation) ?
      <MotionStack
        initial={isInitial && { scale: 0 }}
        animate={isInitial && { scale: 1 }}
        transition={{
          duration: 0.5,
        }}
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
        <TwoOptions firstVideo={firstVideo} lastVideo={lastVideo} checkStatus={checkStatus} score={score} bestScore={bestScore} buttonDisabled={false} animateScore={true} />
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
      </MotionStack>

      :

      playWinAnimation ?
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
          <TwoOptions firstVideo={firstVideo} lastVideo={lastVideo} checkStatus={checkStatus} score={score} bestScore={bestScore} buttonDisabled={true} animateScore={false} />
          <MotionStack
            animate={{ backgroundColor: ["#FFFFFF", "#D2FFB7", '#AAFF76'] }}
            transition={{
              duration: 0.5,
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
            <Icon as={BsCheckLg} />
          </MotionStack>
        </Stack>

        :

        <MotionStack
          initial={playFirstAnimation && { scale: 1 }}
          animate={playFirstAnimation && { scale: 0 }}
          transition={{
            duration: 0.5,
          }}
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
          <TwoOptions firstVideo={firstVideo} lastVideo={lastVideo} checkStatus={checkStatus} score={score} bestScore={bestScore} buttonDisabled={true} animateScore={false} />
          <MotionStack
            animate={{ backgroundColor: ["#FFFFFF", "#FFB3B3", '#FF6A6A']}}
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
            <MotionText
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
              }}
              color="white">X</MotionText>
          </MotionStack>
          {
            redirectAfterAnimation()
          }
        </MotionStack>
  )
}

export default Game