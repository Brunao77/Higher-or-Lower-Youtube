import { extendTheme } from "@chakra-ui/react";



export default extendTheme({
    styles: {
        global: {
            "html, body, #root": {
                color: "white",
                height: "100%",
                overflow: "hidden",
            },
            body: {
                backgroundColor:"black"
            },
        },
    },

    /*
    variant="unstyled"
                width="6vw"
                height="3vw"
                lineHeight={0}
                bg="rgba(133, 133, 133, 0)"
                color="rgb(252, 255, 95)"
                border="2px solid #ffff"
                fontSize="1vw"
                font-weight="600"
                transition=".2s"
                textAlign="center"
                _hover={{
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "black",
                  cursor: "pointer"
                }}
                _active={{ transform: "scale(97%)" }}
                onKeyPress={(e) =>
                  ["Enter", "Space"].includes(e.code) && checkStatus(false)
                }
    */

    components: {
        Button: {
            baseStyle:{
                variant:"unstyled",
                lineHeight:"0",
                color:"rgb(252, 255, 95)",
                border:"2px solid #ffff",
                fontWeight:"600",
                transition:".2s",
                textAlign:"center",
                _hover:{
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "black",
                  cursor: "pointer"
                },
                _active:{transform: "scale(97%)"},
            },
        },
        Text: {
            baseStyle:{
                fontWeight:'800'
            },
            sizes: {
                sm: {
                  fontSize: 'max(1vw,10px)',
                },
                md: {
                  fontSize: 'max(2vw,20px)',
                },
                lg: {
                    fontSize: 'max(4vw,30px)'
                }
              },
        },
    }
});