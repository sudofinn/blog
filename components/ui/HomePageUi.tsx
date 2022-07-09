import React from "react"
import {Fragment} from "react"
import {useState} from "react"
import Image from "next/image"

import { DarkMode, Heading , Text, VStack} from "@chakra-ui/react"

import DarkModeToggle from "./DarkModeToggle"
import SettingsOverlay from "./SettingsOverlay"
import LikeButton from "./LikeButton"
import Dropdown from "./DropDown"
import TopicsUi from "./TopicsUi"

import WomenGray  from "../../public/SittingWomenGray.png"
import classes from "./HomePageUi.module.css"


function HomePageUi() {

  
    return (
        <Fragment>
            <Heading display="flex" justifyContent="center" alignItems="center" fontSize="8xl" marginTop="50px"
            >A Tiny Improvement</Heading>

            <Text className={classes.text} textAlign="center" marginTop="30px" fontSize="2xl">... because daily improvements over time create stunning results.</Text>
            <Text textAlign="center" marginTop="30px" fontSize="2xl">-Robin S. Sharma</Text>

 
            <Dropdown /> 


             <div className={classes.div}>
              {/*<Image src={WomenGray} alt="Women Gray" className={classes.image}/>  */}

             </div>

           
  

            <Heading display="flex" justifyContent="center" alignItems="center" fontSize="7xl" marginTop="100px" >
                About
            </Heading>

            <Text  textAlign="center" marginTop="50px" marginLeft="150px" marginRight="150px"  fontSize="2xl">
                Hi, my name is Finn and  I am a student from Germany.  I love writing and sharing my thoughts with 
                other people, so I decided to make my own little personal block where I talk once every week about 
                all kinds of stuff from productivity and book reviews to programming and climate change.
            </Text>

            <Heading display="flex" justifyContent="center" alignItems="center" fontSize="7xl" marginTop="100px">
                Topics
            </Heading>

            <TopicsUi />




            <Heading display="flex" justifyContent="center" alignItems="center" fontSize="7xl" marginTop="250px">
                Why creating a blog ?
            </Heading>


            <Text  textAlign="center" marginTop="30px" marginLeft="150px" marginRight="150px" fontSize="2xl">
                I generally just love the idea of having something on the internet where people can get value from.
                 It might not be a lot since I am even close to being an expert at anything I talk about. However, 
                 I still believe that it is worth it and maybe it will even help somebody.
            </Text>

            <Heading display="flex" justifyContent="center" alignItems="center" fontSize="7xl" marginTop="100px">
                A TINY Improvement
            </Heading>


            <Text  textAlign="center" marginTop="30px" marginLeft="150px" marginRight="150px" fontSize="2xl">
                I like the idea of getting slightly better everyday. Consistency, I think, is the most  important skill 
                one can ever have. That ´s why I think it is ok to only improve slighly each day. But you got to improve 
                every day.
            </Text>




            


        </Fragment>
    )
}



export default HomePageUi