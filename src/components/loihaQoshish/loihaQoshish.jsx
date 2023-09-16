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

const LoihaQoshish = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)
  return (
    <Box>
        <Button onClick={onOpen} width={'180px'} height={'50px'} bg={'#7A69E9'} color={'white'} _hover={{bg: '#3A69E9'}}>Loiha qo’shish</Button>

        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            
        >
            <ModalOverlay />
            <ModalContent bg={'#2b2b3b'} color={"white"}>
            <ModalHeader>Loyiha Qo'shish</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Rasmi</FormLabel>
                    <Input type={'url'} ref={initialRef} placeholder='rasim...' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Nomi</FormLabel>
                    <Input placeholder='nomi...' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Ma'lumot</FormLabel>
                    <Input placeholder='malumot...' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Narxi</FormLabel>
                    <Input placeholder='narx...' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Havola</FormLabel>
                    <Input placeholder='havola...' />
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

export default LoihaQoshish