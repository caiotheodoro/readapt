import { Box, Button, Container, Flex, Icon, Image, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { ReactReader } from 'react-reader';
import { BiArrowBack } from 'react-icons/bi'
import { data, DataEbook } from '../../components/dummy';



const EpubReader: NextPage = () => {
    const [readButton, setReadButton] = useState(false)
    const [dataEbook, setDataEbook] = useState<DataEbook>()
    useEffect(() => {
        (async () => {
            const { id } = Router.query
            const response = data.find(item => item.id === Number(id))
            setDataEbook(response)
        })()
    }, []);


    return (
        <>
            {!readButton ?

                (
                    <Container maxW='1000px'>
                        <Flex position={"absolute"} left="3%" top="10px" align="center" cursor={"pointer"} onClick={() => Router.push('/reader')}>
                            <Icon as={BiArrowBack} fontSize="35px" onClick={() => Router.push('/')} mr="5" />
                            <Text fontSize={"22px"}>
                                Voltar
                            </Text>
                        </Flex>
                        <Flex justify={"center"} mt="10" >
                            <Image alt="Logo" src="../logo.svg" w="100px" />
                        </Flex>
                        <Box mt="20">
                            <Flex justify={"center"} flexDirection={{ base: "column", md: "row" }} alignItems={"center"} >
                                <Flex w="100%" justifyContent={"space-around"} position="relative" flexDirection={{ base: "column", md: "row" }}>
                                    <>
                                        <Image alt="Capa do livro" src={dataEbook?.cover} w="350px" h="auto" _hover={{
                                            WebkitFilter: 'blur(2px)', /* Chrome, Safari, Opera */
                                            filter: 'blur(2px)',
                                            transition: 'all .2s ease-in-out',


                                        }}

                                            maxH="500px"
                                        />
                                    </>
                                    <Box h="100%" ml={{ base: "0", md: "20" }} >
                                        <Text color={"brand.black"} fontSize={{ base: "2xl", md: "2xl" }} fontWeight={"bold"} mb="20" textAlign={{ base: "center", md: "initial" }} mt={{ base: "10", md: "0" }}>
                                            {dataEbook?.title}
                                        </Text>
                                        <Text color={"brand.black"} fontSize={"1xl"} fontWeight={"medium"} textAlign={"justify"} mb="10">
                                            {dataEbook?.description}
                                        </Text>
                                        <Button colorScheme={"blackAlpha"} transition={'all .2s ease-in-out'} zIndex={0} onClick={() => setReadButton(true)} mb={{ base: "10", md: "0" }}>
                                            Ler Ebook
                                        </Button>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Box>
                    </Container>
                )
                : (
                    <Box h="100vh" w="100vw">
                        <Button position={"absolute"} zIndex={9999} left="3%" top={{ base: "4px", md: "3px" }} leftIcon={<BiArrowBack />} size="sm" colorScheme={"blackAlpha"} onClick={() => setReadButton(false)} >
                            <Text fontSize={{ base: "xs", md: "2xl" }}>
                                Voltar
                            </Text>
                        </Button>
                        <ReactReader
                            url={dataEbook?.url ? dataEbook.url : 'https://www.google.com'}
                        />
                    </Box>
                )}
        </>

    )
}

export default EpubReader

