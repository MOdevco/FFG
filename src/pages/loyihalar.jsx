import { Box } from '@chakra-ui/react'
import React from 'react'
import LoyihalarComponents from '../components/loyihalar/loyihalar'
import Footer from '../components/home/footer'
import Navbar from '../components/home/navbar'

function Loyihalar() {
  return (
    <Box>
        <Navbar bg={'#FBFBFB'} />
        <LoyihalarComponents />
        <Footer />
    </Box>
  )
}

export default Loyihalar