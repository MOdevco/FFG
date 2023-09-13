import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/about/navbar'
import LoyihalarComponents from '../components/loyihalar/loyihalar'
import Footer from '../components/home/footer'

function Loyihalar() {
  return (
    <Box>
        <Navbar />
        <LoyihalarComponents />
        <Footer />
    </Box>
  )
}

export default Loyihalar