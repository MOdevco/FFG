import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { logo } from '../../assets'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Box h={'10vh'} w={'100%'} bg={'#D2E6E4'}>
        <Box display={'flex'} alignItems={'center'} minH={'10vh'} justifyContent={'space-between'} maxW={'80%'} m={'auto'}>
            <Box><Image src={logo} /></Box>
            <Box fontWeight={'700'} gap={'3em'} display={'flex'} alignItems={'center'} color={'#252641'} fontSize={'20px'}>
                <Link><Text>Asosiy</Text></Link>
                <Link><Text>Biz haqimizda</Text></Link>
                <Link><Text>Loihalar</Text></Link>
                <Link><Text>Biz bilan a’loqa</Text></Link>
            </Box>
            <Box><Button color={'#fff'} fontSize={'16px'} w={'190px'} h={'48px'} bg={'#0B7077'}>Ro’yhatdan o’tish</Button></Box>
        </Box>
    </Box>
  )
}

export default Navbar