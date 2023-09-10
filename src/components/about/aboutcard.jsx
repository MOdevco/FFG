import { Box, Button, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Vector, stiker } from '../../assets'

function Aboutcard({name, title, text, p, button}) {
  return (
    <Box pt={'50px'}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Heading position={'relative'}>
         KOMPANIYA HODIMLARI HAQIDA MA’LUMOT
         <Image position={'absolute'} pt={'20px'} right={'20%'} src={Vector}></Image>
        </Heading>
      </Box>
      <Box pl={'100px'}>
        <Button>Frontend dasturchilar</Button>
      </Box>
      <Box bg={'white'} p={'30px'}>
        <Image width={'334px'} rounded={'30px'} src={stiker}/>
        <Heading bg={'white'}  >
         <Box>
           {name}
         </Box>
       
         
         
        </Heading>
      </Box>
    </Box>
  )
}

export default Aboutcard