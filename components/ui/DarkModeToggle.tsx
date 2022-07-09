import {Icon, useColorMode} from "@chakra-ui/react"
import {IconButton} from "@chakra-ui/react"
import {FaSun, FaMoon} from "react-icons/fa"



import {Fragment} from "react"

import {motion} from "framer-motion"



function DarkModeToggle() {
    const {colorMode, toggleColorMode} = useColorMode()
   

    const MotionIconButton = motion(IconButton)

    return (
        <div>
            <MotionIconButton
             icon={colorMode === "light" ? <FaSun/> : <FaMoon />} 
             isRound="true"
             size="lg"
             onClick={toggleColorMode}
             //marginTop="-650px"
             //marginLeft="60px"
            float="left"
            ></MotionIconButton>
        </div>
    )
  
}

export default DarkModeToggle