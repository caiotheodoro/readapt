import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { FcCompactCamera } from 'react-icons/fc'
import { HiOutlineChevronDoubleRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
const Home: NextPage = () => {

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

      >
        <Flex
          bg={'brand.secondary'}
          w="500px"
          h="500px"
          borderRadius={"full"}
          justifyContent="center"
          alignItems="center"
          position={"relative"}
        >
          <Icon as={FcCompactCamera} fontSize={"200px"} display="flex" position={"absolute"} top="-50px" right={"0"} />
          <Text textAlign={"center"} fontSize={"3xl"} p="2" color="brand.black">
            Utilizamos a câmera para tentar adaptar sua interface da melhor maneira possível!
          </Text>
        </Flex>
        <Image src="human.svg" alt="Camera" sx={{
          position: "absolute",
          left: "20%",
          width: "210px",
        }} />
        <Image src="arrow.png" alt="Camera" position={"absolute"} top="0" left="7%" w="140px" />
        <Text position={"absolute"} top="1%" left="12%" fontSize={"2xl"} color="brand.black">
          habilite sua camera!
        </Text>
        <Flex position={"absolute"} bottom="30px" right={"10px"} flexDir="row" w="100px" align={"center"} color={"brand.black"} mr="4">
        <motion.div
            animate={{
              translateY: [0, -5, 5, -10, 10, -5, 5, 0],
              scale: 1,	
              
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: 5,
              repeatDelay: 1
            }}
          >
          <Text fontSize={"2xl"} mr="2" >
            pular
          </Text>
          </motion.div>
          <motion.div
            animate={{
              translateX: [0, -10, 0],
              scale: 1,
              
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: 5,
              repeatDelay: 1
            }}
          >
            <Icon as={HiOutlineChevronDoubleRight} fontSize={"45px"} />
          </motion.div>
        </Flex>
      </Flex>
    </>
  )
}

export default Home
