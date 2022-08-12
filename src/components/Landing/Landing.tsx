import { Button, Flex, Icon, Image, Input, Text, toast } from "@chakra-ui/react";
import { FcCompactCamera } from "react-icons/fc";
import { motion } from "framer-motion";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import Router, { useRouter } from "next/router";
import { ChangeEvent, useRef } from "react";
import { api } from "../../services/api";
import { useBooks } from "../../hooks/useBooks";
import { FadeInAnimation } from "../../Animations/FadeIn";
import { ScaleAntimation } from "../../Animations/Scale";
import { useToast } from "@chakra-ui/react";
interface HTMLInputEvent extends ChangeEvent {
  target: HTMLInputElement & EventTarget;
}

export function Landing() {
  const fileRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { setBooks, setAge, setContentDistribution } = useBooks();
  const handleChange = async (e: HTMLInputEvent) => {
    if (!e.target.files?.length) {
      return;
    }
    const formData = new FormData();
    formData.append("image", e.target.files?.[0]);

    try {
      const { data } = await api.post("/upload", formData);

      setBooks(data.books.map((item: any, index: number) => {
        return {
          id: index,
          title: item[0],
          description: item[1],
          genre: item[2],
          pages: Number(item[3]),
          cover: item[4],
          reference: item[5],
        }
      }));

      setAge(data.age);

      setContentDistribution(
        ['(0, 2)', '(4, 6)', '(8, 12)'].includes(data.age) ?
          {
            widhtSize: '450px',
            heightSize: '250px',
            titleSize: '3xl',
            descriptionSize: '20px'
          } : ['(15, 20)', '(25, 32)', '(38, 43)'].includes(data.age) ? {
            widhtSize: '300px',
            heightSize: '220px',
            titleSize: '2xl',
            descriptionSize: '1xl'

          } : {
            widhtSize: '600px',
            heightSize: '300px',
            titleSize: '4xl',
            descriptionSize: '2xl'
          })

      Router.push("/reader");


    }
    catch (err) {
      console.log(err)
    }

  };

  // const toast = useToast()


  // toast({
  //   title: "Selecione uma imagem",
  //   description: "Selecione uma imagem para começar a ler",
  //   status: "info",
  //   duration: 9000,
  //   isClosable: true,
  //   position: "top",
  //   isPositionFixed: true,
  //   isProgress: true,
  //   isHovered: true,
  //   isHoveredAnimated: true,
  //   isHoveredProgress: true,
  //   isHoveredProgressAnimated: true,
  //   isHoveredProgressColor: true,
  //   isHoveredProgressColorAnimated: true,
  //   isHoveredProgressColorDuration: true,
  //   isHoveredProgressColorDurationAnimated: true,
  //   isHoveredProgressColorEasing: true,
  //   isHoveredProgressColorEasingAnimated: true,
  // });
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
              onClick={() => fileRef.current?.click()}
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
      <Input
        ref={fileRef}
        onChange={handleChange}
        multiple={false}
        type="file"
        accept=".png, .jpg, .jpeg"
        sx={{ border: "none", display: "none" }}
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
    </>
  )
}

