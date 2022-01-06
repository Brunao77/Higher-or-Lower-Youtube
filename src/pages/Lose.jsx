import { Button, Stack, Text } from "@chakra-ui/react"
import React,{useEffect} from "react"

function Lose({ score, bestScore, setBestScore }) {


  if (score > bestScore) {
    setBestScore(score)
    useEffect(() => {
      localStorage.setItem("score", JSON.stringify(score));
    }, []);
  }

  return (
    <>
      <Stack height="100%" alignItems="center" justifyContent="center">
        <Text fontSize="2vw" lineHeight="0">You scored:</Text>
        <Text fontSize="4vw" fontWeight="800" color="rgb(252, 255, 95)">{score}</Text>
        <Stack direction="row" spacing="2vw">
          <Button
            variant="unstyled"
            width="7vw"
            height="3vw"
            lineHeight={0}
            bg="rgba(133, 133, 133, 0)"
            color="rgb(252, 255, 95)"
            border="2px solid #ffff"
            fontSize="1vw"
            fontWeight="600"
            transition=".2s"
            textAlign="center"
            _hover={{
              backgroundColor: "rgb(255, 255, 255)",
              color: "black",
              cursor: "pointer"
            }}
            _active={{ transform: "scale(97%)" }}
            onClick={() => { window.location.href = '/play' }}>
            PLAY AGAIN
          </Button>
          <Button
            variant="unstyled"
            width="7vw"
            height="3vw"
            lineHeight={0}
            bg="rgba(133, 133, 133, 0)"
            color="rgb(252, 255, 95)"
            border="2px solid #ffff"
            fontSize="1vw"
            fontWeight="600"
            transition=".2s"
            textAlign="center"
            _hover={{
              backgroundColor: "rgb(255, 255, 255)",
              color: "black",
              cursor: "pointer"
            }}
            _active={{ transform: "scale(97%)" }}
            onClick={() => { window.location.href = '/' }}>
            RETURN
          </Button>
        </Stack>
      </Stack>
    </>
  )

}
export default Lose