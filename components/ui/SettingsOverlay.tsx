import {DiCodeigniter} from "react-icons/di"

import {IconButton} from "@chakra-ui/react"
import {Button} from "@chakra-ui/react"
import { useToast } from '@chakra-ui/react'


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'


import {Fragment} from "react"

import {motion} from "framer-motion"


//main overlay on main page

function SettingsOverlay() {
    const {isOpen, onOpen, onClose} = useDisclosure()

    const MotionIconButton = motion(IconButton)

    const toast = useToast()

    return (
        <Fragment>
            <MotionIconButton
              icon={<DiCodeigniter />}
              size="lg"
              isRound="true"
              //marginTop="-350px"
              //marginLeft="-60px"
              onClick={onOpen}
               
            ></MotionIconButton>

            <Modal isOpen={isOpen} onClose={onClose}>

               <ModalOverlay />
               <ModalContent>
                   <ModalHeader> Settings & more</ModalHeader>
                   <ModalCloseButton />
                   
                   <ModalBody>
                       This is a todo-app developed by Sudofinn, a developer from Germany.
                       Use this app whenever you want to get some work done. 
                       It is very minimal so that you have no distractions during your work time.
                       If you want to find out , how I build the app, check out the github repo.
                       Thanks for trying out ! 
                   </ModalBody>

                   <ModalFooter>
                       <Button colorScheme="blue" mr={3} onClick={onClose}>Close </Button>
                       <Button variant="ghost">Keep open and explore</Button>
                   </ModalFooter>
               </ModalContent>

            </Modal>

        </Fragment>
    )
   
}

export default SettingsOverlay