import React, { useState, useEffect } from "react";
import { getRandomItems } from "../helpers/getRandomItems";
import { Redirect } from 'react-router-dom';
import { Stack, Text, Image, Button } from "@chakra-ui/react";

const get2RandomItems = getRandomItems(2);
const get1RandomItem = getRandomItems(1);

function Game({ score, videos, setScore, bestScore }) {

  const [played, setPlayed] = useState(null)
  const [lose, setLose] = useState(false)

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

  return (
    <>
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
        <Stack direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={0} height="100%">
          <Stack
            bgImage={firstVideo.snippet.thumbnails.high.url}
            bgRepeat="no-repeat"
            bgSize={{ base: 'column', sm: 'cover', md: 'contain', lg: 'contain' }}
            bgPosition="center"
            width="100%"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Stack position="relative" textAlign="center" alignItems="center">
              <Text size="md">{firstVideo.snippet.title}</Text>
              <Button
                width="max(6vw,60px)"
                height="max(3vw,40px)"
                fontSize="max(1vw,10px)"
                bg="rgba(133, 133, 133, 0)"
                onKeyPress={(e) =>
                  ["Enter", "Space"].includes(e.code) && checkStatus(true)
                }
                onClick={() => checkStatus(true)}>Higher</Button>
              <Button
                width="max(6vw,60px)"
                height="max(3vw,40px)"
                fontSize="max(1vw,10px)"
                bg="rgba(133, 133, 133, 0)"
                onKeyPress={(e) =>
                  ["Enter", "Space"].includes(e.code) && checkStatus(false)
                }
                onClick={() => checkStatus(false)}>Lower</Button>
              <Text size="sm">viewers than {lastVideo.snippet.channelTitle}</Text>
            </Stack>
          </Stack>
          <Stack
            bgImage={lastVideo.snippet.thumbnails.high.url}
            bgRepeat="no-repeat"
            bgSize={{ sm: 'cover', md: 'contain', lg: 'contain' }}
            bgPosition="center"
            width="100%"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Stack position="relative" textAlign="center" alignItems="center">
              <Text size="md">{lastVideo.snippet.title}</Text>
              <Text size="sm">has</Text>
              <Text size="lg" color="rgb(252, 255, 95)">{new Intl.NumberFormat("en-US").format(lastVideo.statistics.viewCount)}</Text>
              <Text size="sm">views</Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          position={{ base: 'absolute', sm: 'absolute', md: 'relative', lg: 'relative' }}
          top={{ base: '50%', sm: '50%', md: '0', lg: '0' }} left={{ base: '50%', sm: '50%', md: '50%', lg: '50%' }}
          transform="translate(-50%,-50%)"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          spacing={0}>
          <Text size="lg" position="relative" color="white">{score}</Text>
          <Text size="sm" color="white">High Score: {bestScore}</Text>
        </Stack>
        {
          (lose || played.length === 50) && <Redirect to="/lose" />
        }
      </Stack>
    </>
  )
}

export default Game