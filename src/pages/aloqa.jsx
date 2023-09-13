import { Box } from '@chakra-ui/react'
import React from 'react'
import Form from '../components/aloqa/form'
import Navbar from '../components/about/navbar'
import Footer from '../components/home/footer'

function Aloqa() {
  return (
    <Box>
        <Navbar />
        <Form />
        <Footer />
    </Box>
  )
}

export default Aloqa