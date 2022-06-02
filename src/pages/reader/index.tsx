import { Container, Flex, Image, Wrap } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Router from "next/router";
import { useState } from 'react';
import { CardReader } from '../../components/CardReader/CardReader'
import { SearchBox } from '../../components/SearchBox/SearchBox'
import { data } from '../../components/dummy';



const Reader: NextPage = () => {
    const [search, setSearch] = useState('')
    const [dataEbook, setDataEbook] = useState(data)

    const handleSearch = (value: string) => {
        setSearch(value)
        setDataEbook(data.filter(item => item.title.toLowerCase().includes(value.toLowerCase())))
    }

    return (
        <Container maxW='1000px'>
            <Flex justify={"center"} mt="10" >
                <Image alt="Logo" src="logo.svg" w="100px" />
            </Flex>
            <Flex justify={"center"} mt="10" w="100%">
                <SearchBox onChange={handleSearch} />
            </Flex>
            <Wrap spacing={5} justify="space-around" mt="10" w="100%">
                {dataEbook.map(item => (
                        <CardReader key={item.id} description={item.description}   title={item.title} genre={item.genre} time={item.time} onClick={() => Router.push(`/reader/${item.id}`)} url={item.url} cover={item.cover} />
                ))}
            </Wrap>

        </Container>
    )
}

export default Reader
