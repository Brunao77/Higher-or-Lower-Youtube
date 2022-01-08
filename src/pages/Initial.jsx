import { useState } from "react";
import { Button, Stack, Image, Text } from "@chakra-ui/react"
import logoWhite from "../assets/logoWhite.png"
import { motion } from 'framer-motion'

const MotionStack = motion(Stack)

function Initial({ setPages }) {

  const [playAnimation, setplayAnimation] = useState(false)

  return (
    <>
      <MotionStack
        initial={playAnimation ? { scale: 1 } : { scale: 0 }}
        animate={playAnimation ? { scale: 0 } : { scale: 1 }}
        transition={{
          duration: 0.5,
        }}
        alignItems="center"
        justifyContent="center"
        height="100%">
        <Image src={logoWhite} position="absolute" top="5vw" width="max(30vw,300px)" height="max(15vw,200px)" />
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
          onClick={() => {
            setplayAnimation(true), setTimeout(function () {
              setPages(1)
            }, 500);
          }}>
          PLAY
        </Button>
      </MotionStack>
    </>
  )

}
export default Initial