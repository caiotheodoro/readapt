import { Box, Container, HStack, Image, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HowWorks() {
    const [current, setCurrent] = useState<number[]>([1, 2, 3]);

    useEffect(() => {

            function generateRandom(){
                const random = [Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1];
                setCurrent(random);
                setTimeout(generateRandom, 1500);
            }
            generateRandom();

    }, []);



    return (
        <Box  >
            <Container maxW='980px'>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: "100%" }}
                >
                    <Box mb="20" >
                        <Text fontSize={"2xl"} textAlign="justify">
                            Utilizando sua foto e diversas outras, conseguimos por meio de um <Link href="https://www.ibm.com/br-pt/analytics/machine-learning" target={"_blank"}  textDecor="underline">algoritmo de aprendizagem</Link> gerar uma interface mais personalizada e contribuir com uma experiência mais agradável para você!
                        </Text>
                    </Box>
                    <HStack spacing={20} justify="center">
                        <Image src={`avatars/Ativo ${current[0]}.svg`} alt="Camera" w="250px" />
                        <Image src={`avatars/Ativo ${current[1]}.svg`} alt="Camera" w="250px" />
                        <Image src={`avatars/Ativo ${current[2]}.svg`} alt="Camera" w="250px" />
                    </HStack>
                </motion.div>
            </Container>
        </Box>
    )
}