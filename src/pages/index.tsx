import {Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Landing } from '../components/Landing/Landing'
import { HowWorks } from '../components/HowWorks/HowWorks'

const components = [
  <Landing />,
  <HowWorks />,
]

const Home: NextPage = () => {

  const [currentComponent, setCurrentComponent] = useState(components[0])
  const [currentColor, setCurrentColor] = useState('brand.primary')
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
        top={0}
        left={0}
        right={0}
        bottom={0}
        position="fixed"
      bg={currentColor}
      >
        {currentComponent}
        <Flex position={"absolute"} top="-50px" right="10%">
          <motion.div whileHover={{ scale: 1.1 }} onClick={
            () => {
              setCurrentColor(currentColor === 'brand.primary' ? 'brand.blue' : 'brand.primary')
              setCurrentComponent(currentComponent === components[0] ? components[1] : components[0])
            }
          }>
            <Flex w="150px" h="150px" bgColor={currentColor === 'brand.primary' ? 'brand.blue' : 'brand.primary'} borderRadius="full" alignItems="center" justifyContent={"center"} cursor="pointer" >
              <Text>
                como funciona
              </Text>
            </Flex>
          </motion.div>
        </Flex>
      </Flex>
    </>
  )
}

export default Home
