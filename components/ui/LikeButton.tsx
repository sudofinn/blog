import React from "react"
import {Fragment} from "react"

import {IconButton, useToast} from "@chakra-ui/react"
import {Button} from "@chakra-ui/react"

import {AiFillLike} from "react-icons/ai"

import {motion} from "framer-motion"


function LikeButton() {
    const MotionIconButton = motion(IconButton)

    const toast = useToast()

    return (
        <div>
            <MotionIconButton
            icon={<AiFillLike />} 
              size="lg"
              isRound="true"
              //marginTop="-350px"
              //marginLeft="-60px" 
              whileHover={{scale:2}}
               animate={{ rotate: 360 , y:[0,105,40]}}
               transition={{ duration: 1 }} 

               onClick={() =>
                toast({
                title: 'Thanks for liking.',
                description: "I hope you like it.",
                
                duration: 9000,
                isClosable: true,
                })
                }
                >
                Show Toast

               
            </MotionIconButton>

        </div>

    )
}

export default LikeButton