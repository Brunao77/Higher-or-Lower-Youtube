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