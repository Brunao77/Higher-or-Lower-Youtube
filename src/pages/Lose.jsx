import { useState } from "react";
import { Button, Stack, Text, Image } from "@chakra-ui/react"
import React, { useEffect } from "react"
import logoWhite from "../assets/logoWhite.png"
import { motion } from 'framer-motion'

const MotionStack = motion(Stack)

function Lose({ score, bestScore, setBestScore, setPages }) {

  const [playAnimation, setplayAnimation] = useState(false)

  if (score > bestScore) {
    setBestScore(score)
    useEffect(() => {
      localStorage.setItem("score", JSON.stringify(score));
    }, []);
  }

  return (
    <>
      <MotionStack
        initial={playAnimation ? { scale: 1 } : { scale: 0 }}
        animate={playAnimation ? { scale: 0 } : { scale: 1 }}
        transition={{
          duration: 0.5,
        }}
        height="100%"
        alignItems="center"
        justifyContent="center">
        <Image src={logoWhite} position="absolute" top="5vw" width="max(25vw,300px)" height="max(10vw,200px)" />
        <Text fontSize="max(2vw,10px)" lineHeight="0">You scored:</Text>
        <Text fontSize="max(4vw,30px)" fontWeight="800" color="rgb(252, 255, 95)">{score}</Text>
        <Stack direction="row" spacing="2vw">
          <Button
            variant="unstyled"
            width="max(7vw,80px)"
            height="max(3vw,40px)"
            lineHeight={0}
            bg="rgba(133, 133, 133, 0)"
            color="rgb(252, 255, 95)"
            border="2px solid #ffff"
            fontSize="max(1vw,10px)"
            fontWeight="600"
            transition=".2s"
            textAlign="center"
            _hover={{
              backgroundColor: "rgb(255, 255, 255)",
              color: "black",
              cursor: "pointer"
            }}
            _active={{ transform: "scale(97%)" }}
            onClick={() => { setplayAnimation(true), setTimeout(function () {
              setPages(1)
            }, 500); }}>
            PLAY AGAIN
          </Button>
          <Button
            variant="unstyled"
            width="max(7vw,80px)"
            height="max(3vw,40px)"
            lineHeight={0}
            bg="rgba(133, 133, 133, 0)"
            color="rgb(252, 255, 95)"
            border="2px solid #ffff"
            fontSize="max(1vw,10px)"
            fontWeight="600"
            transition=".2s"
            textAlign="center"
            _hover={{
              backgroundColor: "rgb(255, 255, 255)",
              color: "black",
              cursor: "pointer"
            }}
            _active={{ transform: "scale(97%)" }}
            onClick={() => { setplayAnimation(true), setTimeout(function () {
              setPages(0)
            }, 500); }}>
            RETURN
          </Button>
        </Stack>
      </MotionStack>
    </>
  )

}
export default Lose