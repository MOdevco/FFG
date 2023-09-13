import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

function YonalishProps({img, text, info}) {
  return (
    <Box borderRadius={'15px'} className='yonalish' w={{lg:'290px', sm: '90%', md :'300px'}} h={'330px'}>
        <Box w={'90%'} m={'auto'}>
            <Box pt={'50px'} gap={'12px'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                <Box w={'50px'} h={'50px'} borderRadius={'50%'} bg={'#A3D3FF'}><Image src={img} /></Box>
                <Text fontSize={'25px'} fontWeight={'700'} color={'#0B7077'}>{text}</Text>
            </Box>
            <Box>
                <Text pt={'10px'} textAlign={'center'}>{info}</Text>
            </Box>
            <Box pt={'50px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Button className='btn' shadow='lg' w={'177px'} h={'45px'} px={'60px'} py={'10px'} bg={'transparent'} _hover={''} _active={''}>Batafsil</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default YonalishProps