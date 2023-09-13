import { Box, Button, Text,  Image } from '@chakra-ui/react'
import React from 'react'
import { Vector, stiker } from '../../assets'

function Aboutcard({name, title, text, p,  }) {
  return (
    <Box borderRadius={'14px'}  border={'none'} w={{md:'310px', base: '90%'}} h={'470px'} >
    <Box borderRadius={'14px'} w={'296px'}>
        <>
        <Box position={'relative'}>
            <Image borderTopRadius={'14px'} src={stiker} />
        </Box>
        <Box boxShadow='xs' borderRadius={'14px'}>

        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mt={'-25px'}>
            <Box position={'relative'} gap={'5px'} zIndex={'20'} display={'flex'} alignItems={'center'} justifyContent={'center'} w={'240px'} bg={'#FAFAFA'} h={'42px'} borderRadius={'40px'} >
            <Text color={'black'}>{name}</Text>
            </Box>
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={'5px'} pt={'40px'} Box w={'90%'} m={'auto'}>
            <Text fontSize={'13px'} color={'#777795'}>{title}</Text>
            <Text color={'#0B7077'} fontSize={'18px'} >{text}</Text>
            <Text color={'#4D4D4D'} fontSize={'13px'}>{p}</Text>
        </Box>
    
        <Box pb={'10px'} pt={'25px'} w={'90%'} m={'auto'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
                <Button w={'123px'} h={'34px'} p={'10px'} color={'#fff'} bg={'#0B7077'}>Murojat uchun</Button>
            </Box>
        </Box>
       
        </Box>

        </>
    </Box>
</Box>





   
  )
}

export default Aboutcard