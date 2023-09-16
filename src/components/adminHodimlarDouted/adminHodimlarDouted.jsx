import { Box, Button, Input, useDisclosure } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { BsThreeDots } from 'react-icons/bs'

const AdminHodimlarDouted = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
        <Box>
            <Button bg={'transparent'} _hover={{bg: ''}} _active={{bg: ''}} ref={btnRef} colorScheme='teal' onClick={onOpen}>
                <BsThreeDots />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg={'#2B2B3B'}>
                <DrawerCloseButton color={'white'} />
                <DrawerHeader color={'white'}>Create your account</DrawerHeader>

                <DrawerBody>
                    <Input color={'white'} placeholder='Type here...' />
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' color={'white'} _hover={{bg: ''}} mr={3} onClick={onClose}>
                    Cancel
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default AdminHodimlarDouted