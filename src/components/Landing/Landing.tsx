import { Flex, Icon, Image, Text, useDisclosure } from "@chakra-ui/react";
import { FcCompactCamera } from "react-icons/fc";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import Router from "next/router";
import { FadeInAnimation } from "../../Animations/FadeIn";
import { ScaleAntimation } from "../../Animations/Scale";
import { ModalUpload } from "../ModalUpload";


export function Landing() {


  const { isOpen, onClose, onOpen } = useDisclosure()


  return (
    <>
      <FadeInAnimation>
        <Flex
          bg={'brand.secondary'}
          w={{ base: "330px", lg: "400px", xl: "500px" }}
          h={{ base: "330px", lg: "400px", xl: "500px" }}
          borderRadius={"full"}
          justifyContent="center"
          alignItems="center"
          position={"relative"}
        >
          <Icon as={FcCompactCamera} fontSize={{ base: "120px", lg: "150px", xl: "200px" }} display="flex" position={"absolute"} top={{ base: "-20px", lg: "-40px", xl: "-50px" }} right={"0"} />
          <Text textAlign={"center"} fontSize={{ base: "1xl", lg: "2xl", xl: "3xl" }} p="2" color="brand.black">
            Utilizamos sua foto para tentar adaptar sua interface da melhor maneira possível!
          </Text>

          <>

            <Flex
              bg={'brand.orange'}
              w={{ base: "200px", lg: "220px", xl: "280px" }}
              h={{ base: "200px", lg: "220px", xl: "280px" }}
              borderRadius={"full"}
              justifyContent="center"
              alignItems="center"
              position={"absolute"}
              right={"-22%"}
              bottom={"-22%"}
              opacity={"0.9"}
              transition={'all 0.3s ease-in-out'}
              _hover={{
                transform: 'scale(1.1)',
                opacity: '1'
              }}
              fontSize={{ base: "xl", lg: "1xl", xl: "2xl" }}
              onClick={onOpen}
            >
              Envie sua foto!
            </Flex>
          </>
        </Flex>
      </FadeInAnimation>


      <Image src="human.svg" alt="Humano" sx={{
        position: "absolute",
      }}
        left={{ lg: "12%", xl: "18%" }}
        w={{ base: "0px", md: "0px", lg: "150px", xl: "200px" }}
      />

      <Flex position={"absolute"} bottom="30px" right={"10px"} flexDir="row" w="100px" align={"center"} color={"brand.black"} mr="4" cursor={"pointer"} onClick={(e) => Router.push('/reader')}>
        <ScaleAntimation translateY={[0, -5, 5, -10, 10, -5, 5, 0]}>
          <Text fontSize={"2xl"} mr="2" >
            pular
          </Text>
        </ScaleAntimation>
        <ScaleAntimation translateX={[0, -10, 0]}>
          <Icon as={HiOutlineChevronDoubleRight} fontSize={"45px"} />
        </ScaleAntimation>
      </Flex>
      <ModalUpload isOpen={isOpen} onClose={onClose} />
    </>
  )
}

