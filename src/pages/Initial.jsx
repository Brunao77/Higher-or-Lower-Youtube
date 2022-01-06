import { Button, Stack, Text } from "@chakra-ui/react"

function Initial({bestScore}) {

  return (
    <>
      <Stack alignItems="center" justifyContent="center" height="100%">
        <Button
          variant="unstyled"
          width="6vw"
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
          PLAY
        </Button>
      </Stack>
    </>

    /*<div className="container-welcome">
      <button className="play-btn" onClick={() => { window.location.href='/play'
      }}>
        <p>PLAY</p>
      </button>
    </div>*/
  )

}
export default Initial