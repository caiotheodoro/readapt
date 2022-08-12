import { Box, Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { ChangeEvent, useRef, useState } from "react";
import Webcam from "react-webcam";
import { BsFillCameraFill } from "react-icons/bs";
import Image from "next/image";
import { useBooks } from "../../hooks/useBooks";
import { api } from "../../services/api";
import Router from "next/router";
import { IoMdRemove, IoMdSend } from "react-icons/io";

interface IModalUploadProps {
    isOpen: boolean;
    onClose: () => void;
}

interface HTMLInputEvent extends ChangeEvent {
    target: HTMLInputElement & EventTarget;
}



export function ModalUpload({ isOpen, onClose }: IModalUploadProps) {
    const webcamRef = useRef<Webcam>(null);
    const fileRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const { setBooks, setAge, setContentDistribution } = useBooks();


    function urltoFile(url: string, filename: string, mimeType: string) {
        return (fetch(url)
            .then(function (res) { return res.arrayBuffer(); })
            .then(function (buf) { return new File([buf], filename, { type: mimeType }); })
        );
    }

    const handleScreenshot = async () => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setImageSrc(imageSrc);
            setFile(await urltoFile(imageSrc, 'screenshot.png', 'image/png'));

        }
    }

    const handleRemoveImage = () => {
        setImageSrc(null);
    }



    const handleUpload = () => {
        fileRef.current?.click()
    }

    const handleFileChange = (e: HTMLInputEvent) => {
        const file = e.target.files?.[0];
        if (file) {
            setFile(file);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImageSrc(reader.result as string);
            }
        }
    }


    const handleSubmit = async () => {

        const formData = new FormData();
        formData.append("image", file as File);

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



    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size={"4xl"} >
            <ModalOverlay />
            <ModalContent maxH={"450px"}>
                <ModalBody>
                    <Flex justifyContent={"space-between"} align="center" margin={'20px 20px'}>
                        <Box maxW={"350px"} height={"auto"} position="relative" w="100%">
                            {
                                imageSrc ? (
                                    <Image src={imageSrc} alt="Screenshot" width={"350px"} height={"265px"} />
                                ) : (
                                    <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" width={"350px"} height={"260px"} style={{ borderRadius: "20px" }} />
                                )
                            }
                            <Box pos={"absolute"} bottom="0" margin={"10px auto"} left="0" right="0" display="flex" justifyContent="center" alignItems="center" position={"absolute"}>
                                {!imageSrc ? (
                                    <Button colorScheme='yellow' onClick={handleScreenshot} display={"flex"} alignItems={"center"} gap="1rem"><BsFillCameraFill /> <span>Tirar foto</span></Button>
                                ) : (
                                    <Button colorScheme='yellow' onClick={handleRemoveImage}><IoMdRemove /></Button>
                                )
                                }
                            </Box>
                        </Box>
                        <Text color={"black"}>ou</Text>

                        <Flex w="40%" justify={"center"}>
                            <Button colorScheme={"yellow"} w="150px" onClick={handleUpload}>
                                Escolher foto
                            </Button>
                        </Flex>
                        <Input
                            ref={fileRef}
                            onChange={handleFileChange}
                            multiple={false}
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            sx={{ border: "none", display: "none" }}
                        />
                    </Flex>

                </ModalBody>

                <ModalFooter padding={"0"} position={"relative"}>
                    <Button variant='solid' colorScheme={"orange"} onClick={handleSubmit} display={"flex"} position="absolute" bottom={"5px"} right={"5px"} gap="10px" ><span>Enviar</span> <IoMdSend /></Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}