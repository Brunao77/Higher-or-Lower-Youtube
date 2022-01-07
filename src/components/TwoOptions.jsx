import { Button, Stack, Text } from "@chakra-ui/react"

function TwoOptions({ firstVideo, checkStatus, lastVideo, score, bestScore, buttonDisabled }) {

    return (
        <>
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
                            isDisabled={buttonDisabled}
                            width="max(6vw,60px)"
                            height="max(3vw,40px)"
                            fontSize="max(1vw,10px)"
                            bg="rgba(133, 133, 133, 0)"
                            onClick={() => checkStatus(true)}>Higher</Button>
                        <Button
                            isDisabled={buttonDisabled}
                            width="max(6vw,60px)"
                            height="max(3vw,40px)"
                            fontSize="max(1vw,10px)"
                            bg="rgba(133, 133, 133, 0)"
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
                userSelect="none"
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
        </>
    )

}
export default TwoOptions




