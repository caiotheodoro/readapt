import { Container, Flex, Icon, Image, Text, Wrap } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Router from "next/router";
import { useState } from 'react';
import { CardReader } from '../../components/CardReader/CardReader'
import { SearchBox } from '../../components/SearchBox/SearchBox'
import { data } from '../../components/dummy';
import { useBooks } from '../../hooks/useBooks';
import { BiArrowBack } from 'react-icons/bi';



const Reader: NextPage = () => {
    const { books } = useBooks()
    const [search, setSearch] = useState('')
    const [dataEbook, setDataEbook] = useState(books)

    const handleSearch = (value: string) => {
        setSearch(value)
        setDataEbook(books.filter(item => item.title.toLowerCase().includes(value.toLowerCase())))
    }

    return (
        <Container maxW='1000px'>
            <Flex position={"absolute"} left="3%" top="10px" align="center" cursor={"pointer"} onClick={() => Router.push('/')}>
                <Icon as={BiArrowBack} fontSize="35px"  mr="5" />
                <Text fontSize={"22px"}>
                    Voltar
                </Text>
            </Flex>
            <Flex justify={"center"} mt="10" >
                <Image alt="Logo" src="logo.svg" w="100px" />
            </Flex>
            <Flex justify={"center"} mt="10" w="100%">
                <SearchBox onChange={handleSearch} />
            </Flex>
            <Wrap spacing={5} justify="space-around" mt="10" w="100%">
                {dataEbook.map(item => (
                    <CardReader key={item.id} description={item.description} id={item.id} title={item.title} genre={item.genre} pages={item.pages} onClick={() => Router.push(`/reader/${item.id}`)} reference={item.reference} cover={item.cover} />
                ))}
            </Wrap>

        </Container>
    )
}

export default Reader
