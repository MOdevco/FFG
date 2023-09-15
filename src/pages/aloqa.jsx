import { Box } from '@chakra-ui/react'
import React from 'react'
import Form from '../components/aloqa/form'
import Footer from '../components/home/footer'
import Navbar from '../components/home/navbar'

function Aloqa() {
  return (
    <Box>
        <Navbar bg={'#FBFBFB'} />
        <Form />
        <Footer />
    </Box>
  )
}

export default Aloqa