import { Box, Divider, Icon, Text, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FcInfo } from "react-icons/fc";
import { IBook, useBooks } from "../../hooks/useBooks";
import { DataEbook } from "../dummy";




export function CardReader({ id, description, genre, pages, title, onClick, cover, reference }: IBook) {
  
    const { age,contentDistribution } = useBooks()


    useEffect(() => {
    
    }, [age]);


    return (
        <WrapItem cursor={"pointer"} onClick={onClick}>
            <Box w={contentDistribution.widhtSize} h={contentDistribution.heightSize} bg="white" borderRadius={"2xl"} boxShadow="lg" p="8"
                _hover={{
                    transform: "scale(1.01)",
                    bgColor: "#E2E2E2",
                }} >
                <Text color="brand.black" fontSize={contentDistribution.titleSize} mb="2" overflow={"hidden"} textOverflow={"ellipsis"} whiteSpace={"nowrap"}>
                    {title}
                </Text>
                <Divider />
                <Text color="brand.black" fontSize={contentDistribution.descriptionSize} mt="2" style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "3",
                    WebkitBoxOrient: "vertical"
                }}>
                    {description}
                </Text>
                {/* minutes to read */}
                <Text color="brand.black" fontSize={"sm"} mt="2" alignItems={"center"} display="flex" justifyContent={"flex-end"} marginTop="5">
                    <Icon name="clock" color="brand.black" as={FcInfo} mr="2" /> {genre} · {pages} páginas
                </Text>
            </Box>
        </WrapItem>
    )
}