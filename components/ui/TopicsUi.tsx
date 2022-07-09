import React from "react"
import {Fragment} from "react"

import {Stack,HStack, Box, Wrap, WrapItem} from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'

function TopicsUi() {
    return (
        <Fragment>
            
         
        <HStack spacing="40px" display="flex" justifyContent="center" alignItems="center"  marginBottom="100px" marginTop="60px">
        <Button colorScheme='yellow'>Productivity</Button>
        
        <Button colorScheme='green'>All About Books</Button>
        
        
        
        <Button colorScheme='blue'>Programming</Button>
        
        <Button colorScheme='purple'>Meditation and Peace</Button>
        
        
        
        <Button colorScheme='linkedin'>Me and What I think</Button>
      
        
        <Button colorScheme='facebook'>Climate Change</Button>



        </HStack>
    

        
       
  
        </Fragment>


        
    )
}

export default TopicsUi