import { Button, Stack, Image, Text } from "@chakra-ui/react"
import logoWhite from "../assets/logoWhite.png"

function Initial({setPages}) {

  return (
    <>
      <Stack alignItems="center" justifyContent="center" height="100%">
        <Image src={logoWhite} position="absolute" top="10%" width="500px" height="300px" />
        <Button
          variant="unstyled"
          width="max(6vw,60px)"
          height="max(3vw,40px)"
          lineHeight={0}
          bg="rgba(133, 133, 133, 0)"
          color="rgb(252, 255, 95)"
          border="2px solid #ffff"
          fontSize="max(1vw,20px)"
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
          PLAY
        </Button>
      </Stack>
    </>
  )

}
export default Initial