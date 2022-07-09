import React from 'react'
import Link from "next/link"

import {Icon, useColorMode} from "@chakra-ui/react"
import {IconButton} from "@chakra-ui/react"

import {AiFillHome} from "react-icons/ai"

import DarkModeToggle from "./DarkModeToggle"
import SettingsOverlay from './SettingsOverlay'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
} from '@chakra-ui/react'


import {motion} from "framer-motion"



function Dropdown() {
  const MotionMenuButton = motion(MenuButton)
  const MotionMenuItem =  motion(MenuItem)
  const MotionIconButton = motion(IconButton)

  return (
    


    <Menu  >

      <MotionMenuButton as={Button} 
       float="right" marginTop="-210px" marginRight="30px"
       whileHover= {{scale:0.97}}
       >
        Actions
      </MotionMenuButton>


      <MenuList >
        
        <MotionMenuItem
        whileHover={{scale:0.97}}>
        
            <Link href ="/">
        <MotionIconButton icon={<AiFillHome />} size="lg"  whileHover={{scale:1.5}} />
        </Link>
        </MotionMenuItem>

        <MotionMenuItem
          whileHover={{scale:0.97}}
        >
        <DarkModeToggle />

        </MotionMenuItem>


        <MotionMenuItem 
         whileHover={{scale:0.97}} 
        >
          <SettingsOverlay />
         
        </MotionMenuItem>
      
        

        
      

      </MenuList>

    </Menu>
  )
  

  

}

export default Dropdown