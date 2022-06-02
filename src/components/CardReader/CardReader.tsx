import { Box, Divider, Icon, Text, WrapItem } from "@chakra-ui/react";
import {  FcInfo } from "react-icons/fc";
import { DataEbook } from "../dummy";


export function CardReader({description,genre,time,title, onClick}: DataEbook) {
    return (
        <WrapItem cursor={"pointer"} onClick={onClick}>
            <Box w="300px" h="220px" bg="white" borderRadius={"2xl"} boxShadow="lg" p="8" 
            _hover={{
                transform: "scale(1.01)",
                bgColor: "#E2E2E2",
            }} >
                <Text color="brand.black" fontSize={"2xl"} mb="2" overflow={"hidden"} textOverflow={"ellipsis"} whiteSpace={"nowrap"}>
                    {title}
                </Text>
                <Divider />
                <Text color="brand.black" fontSize={"1xl"} mt="2" style={{
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
                    <Icon name="clock" color="brand.black" as={FcInfo} mr="2" /> {genre} · {time}
                </Text>
            </Box>
        </WrapItem>
    )
}