import { Box, Button, FormLabel, Input, Text, useDisclosure } from "@chakra-ui/react"
import Navbar from "../home/navbar"
import { useState } from "react"
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

function Royhatdanotish() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [input, setInput] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [input4, setInput4] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)
  const handleInputChange2 = (e) => setInput2(e.target.value)
  const handleInputChange3 = (e) => setInput3(e.target.value)
  const handleInputChange4 = (e) => setInput4(e.target.value)

  const isError = input === ''
  return (
    <Box>
        <Button onClick={onOpen} _hover={{bg: '#2aacb6'}} color={'#fff'} fontSize={'16px'} w={{lg:'190px', md: '170px'}} h={'48px'} bg={'#0B7077'}>Ro’yhatdan o’tish</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>Name:
            <FormControl isInvalid={isError}>
              <Input variant='flushed' type='text' value={input} onChange={handleInputChange} />
              {!isError ? (
                <FormHelperText>
                  Enter the name you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Name is required.</FormErrorMessage>
              )}
            </FormControl>
            </FormLabel>

            <FormLabel>LastName:
            <FormControl isInvalid={isError}>
              <Input variant='flushed' type='text' value={input2} onChange={handleInputChange2} />
              {!isError ? (
                <FormHelperText>
                  Enter the LastName you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>LastName is required.</FormErrorMessage>
              )}
            </FormControl>
            </FormLabel>
            <FormLabel>Email:
            <FormControl isInvalid={isError}>
              <Input variant='flushed' type='email' value={input3} onChange={handleInputChange3} />
              {!isError ? (
                <FormHelperText>
                  Enter the Email you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
            </FormLabel>
            <FormLabel>Number:
            <FormControl isInvalid={isError}>
              <Input variant='flushed' type='number' value={input4} onChange={handleInputChange4} />
              {!isError ? (
                <FormHelperText>
                  Enter the Number you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Number is required.</FormErrorMessage>
              )}
            </FormControl>
            </FormLabel>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

        
    </Box>
  )
}

export default Royhatdanotish