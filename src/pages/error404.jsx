import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { page } from '../assets'

function Error404() {
  return (
    <Box bg={'#070229'} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
        <Box display={'flex'}>
            <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
              <Box>
                <Heading fontSize={'50px'} fontWeight={'bold'} color={'white'}>DataSpin</Heading>
              </Box>
              <Box>
                <Heading fontSize={'50px'} fontWeight={'bold'} color={'white'}>Xatolik 404</Heading>
              </Box>
              <Box>
                <Heading fontSize={'50px'} fontWeight={'bold'} color={'white'}>Nimadur xato</Heading>
                <Text color={'white'} maxWidth={'500px'}>Siz mavjud bo'lmagan bo'limga tashrif buyurdingiz bosh sahifaga qaytish uchun pastdagi tugmani bosing</Text>
              </Box>
              <Box>
                <Link to={'/'}>
                  <Button>Bosh sahifa</Button>
                </Link>
              </Box>
            </Box>

            <Box className='animateImg'>
              <Image width={'900px'} src={page}></Image>
            </Box>
        </Box>
    </Box>
  )
}

export default Error404