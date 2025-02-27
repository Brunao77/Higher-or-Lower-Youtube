import { Button, Stack, Text } from "@chakra-ui/react"
import { motion } from 'framer-motion'

const MotionText = motion(Text)

function TwoOptions({ firstVideo, checkStatus, lastVideo, score, bestScore, buttonDisabled, animateScore }) {

    return (
        <>
            <Stack direction="column" spacing={0} height="100%" fontWeight="600">
                <Stack
                    bgImage={firstVideo.snippet.thumbnails.high.url}
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    bgPosition="center"
                    width="100%"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                >
                    <Stack position="relative" textAlign="center" alignItems="center">
                        <Text size="md" fontWeight="600" style={{margin:"0px"}}>{firstVideo.snippet.title}</Text>
                        <Button
                            isDisabled={buttonDisabled}
                            width="max(6vw,60px)"
                            height="max(3vw,40px)"
                            fontSize="max(1vw,10px)"
                            bg="rgba(133, 133, 133, 0)"
                            onClick={() => checkStatus(true)}
                            style={{margin:"0px"}}>Higher</Button>
                        <Button
                            isDisabled={buttonDisabled}
                            width="max(6vw,60px)"
                            height="max(3vw,40px)"
                            fontSize="max(1vw,10px)"
                            bg="rgba(133, 133, 133, 0)"
                            onClick={() => checkStatus(false)}
                            >Lower</Button>
                        <Text size="sm"  fontWeight="600">viewers than {lastVideo.snippet.channelTitle}</Text>
                    </Stack>
                </Stack>
                <Stack
                    bgImage={lastVideo.snippet.thumbnails.high.url}
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    bgPosition="center"
                    width="100%"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                >
                    <Stack position="relative" textAlign="center" alignItems="center">
                        <Text size="md" fontWeight="600" style={{margin:"0px"}}>{lastVideo.snippet.title}</Text>
                        <Text size="sm" fontWeight="600" style={{margin:"0px"}}>has</Text>
                        <Text size="md" style={{margin:"0px"}} color="rgb(252, 255, 95)">{new Intl.NumberFormat("en-US").format(lastVideo.statistics.viewCount)}</Text>
                        <Text size="sm" fontWeight="600" style={{margin:"0px"}}>views</Text>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
            userSelect="none"
            position="absolute"
            top="0" left="50%"
            transform="translate(-50%,0%)"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            spacing={0}>
                <MotionText
                    initial={animateScore && { scale: 0 }}
                    animate={animateScore && { scale: 1 }}
                    transition={{
                    duration: 0.2,
                    }}
                    size="md"  color="white">{score}</MotionText>
                <Text size="sm" color="white">High Score: {bestScore}</Text>
            </Stack>
        </>
    )

}
export default TwoOptions




