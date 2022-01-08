import { Button, Stack, Text, Image } from "@chakra-ui/react"
import React, {useEffect} from "react"
import logoWhite from "../assets/logoWhite.png"

function Lose({ score, bestScore, setBestScore, setPages }) {

  if (score > bestScore) {
    setBestScore(score)
    useEffect(() => {
      localStorage.setItem("score", JSON.stringify(score));
    }, []);
  }

  return (
    <>
      <Stack height="100%" alignItems="center" justifyContent="center">
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
            onClick={() => { setPages(1) }}>
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
            onClick={() => { setPages(0)}}>
            RETURN
          </Button>
        </Stack>
      </Stack>
    </>
  )

}
export default Lose