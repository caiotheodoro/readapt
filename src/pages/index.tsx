import { Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Landing } from '../components/Landing/Landing'
import { HowWorks } from '../components/HowWorks/HowWorks'

const components = [
  {
    component: <Landing />,
    color: 'brand.primary',
    text: 'como funciona'
  },
  {
    component: <HowWorks />,
    color: 'brand.blue',
    text: 'retornar'
  }
]

const Home: NextPage = () => {

  const [current, setCurrent] = useState(components[0])

  useEffect(() => {
    const video = document.createElement("video");
    video.setAttribute("playsinline", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("muted", "");
    video.style.width = "200px";
    video.style.height = "200px";

    const facingMode = "user";
    const constraints = {
      audio: false,
      video: {
        facingMode
      }
    };

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
    });

    document.body.appendChild(video);
  }, [])


  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        top={{base: 3,lg: 1,xl:0}}
        left={0}
        right={0}
        bottom={0}
        position="fixed"
        bg={current.color}
      >
        {current.component}
        <Flex position={"absolute"} top="-50px" right={{base: '1%',lg: '7%',xl:'10%'}}>
          <motion.div whileHover={{ scale: 1.1 }} onClick={
            () => {
              setCurrent(current === components[0] ? components[1] : components[0])
            }
          }>
            <Flex w={{base: "100px",lg: "120px",xl:"150px"}} h={{base: "100px",lg: "120px",xl:"150px"}} bgColor={current.color === 'brand.primary' ? 'brand.blue' : 'brand.primary'} borderRadius="full" alignItems="center" justifyContent={"center"} cursor="pointer" fontSize={{base: 'xs',lg: 'sm',xl:'1xl'}}>
         
              <Text>
                {current.text}
              </Text>
            </Flex>
          </motion.div>
        </Flex>
      </Flex>
    </>
  )
}

export default Home
