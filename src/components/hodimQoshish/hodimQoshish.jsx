import { Box, Button, FormControl, FormLabel, Input, useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useRef } from 'react'
const HodimQoshish = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)
  return (
    <Box>
        <Button onClick={onOpen} bg={'#8C52FF'} width={'180px'} height={'50px'} color={'white'} _hover={{bg: '#3A69E9'}}>Hodim qo’shish</Button>

        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            
        >
            <ModalOverlay />
            <ModalContent bg={'#2b2b3b'} color={"white"}>
            <ModalHeader>Hodim Qo'shish</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Rasmi</FormLabel>
                    <Input type={'url'} ref={initialRef} placeholder='rasim...' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Ismi</FormLabel>
                    <Input placeholder='ism...' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Familiyasi</FormLabel>
                    <Input placeholder='familiya...' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Emaili</FormLabel>
                    <Input placeholder='email...' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Telefon Raqami</FormLabel>
                    <Input placeholder='tel...' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Yo'nalishi</FormLabel>
                    <Input placeholder='yonalish...' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Darajasi</FormLabel>
                    <Input placeholder='daraja...' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Telegrami</FormLabel>
                    <Input placeholder='telegram...' />
                </FormControl>

            </ModalBody>

            <ModalFooter>
                <Button onClick={onClose}>Bekor qilish</Button>
                <Button colorScheme='blue' ml={3}>
                Saqlash
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>
  )
}

export default HodimQoshish