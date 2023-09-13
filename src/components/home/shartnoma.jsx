import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { img1, img2, img3, ser1, ser2 } from '../../assets'

function Shartnoma() {
  return (
    <Box pt={'40px'} className='bg shartnoma' w={'100%'} h={{'2xl': '60vh'}} pb={{md :'40px', '2xl': '0'}}>
        <Box w={{md: '80%', base: '90%'}} m={'auto'} display={'flex'} justifyContent={{md: 'center', lg: 'space-between'}} alignItems={'center'} flexDirection={{md: 'column', base: 'column', lg:'row'}} gap={{lg :'10px'}}>
            <Box >
                <Button className='btn' _hover={''} _active={''} borderRadius={'10px'} w={'146px'} h={'42px'} px={'25px'} py={'10px'} fontWeight={'400'}  bg={'#F5F5F5'} color={'#0B7077'}>Shartnoma</Button>
                <Heading pt={{md: '40px', base: '25px', lg: '20px'}} fontSize={{base: '30px', md: '50px'}} color={'#0B7077'}>Biz bilan shartnoma</Heading>
                <Box  display={'flex'} flexDirection={'column'} gap={{md: '2em', base: '20px', xl :'2em'}} pt={'2em'}>

                <Box gap={{md: '1rem', base: '10px'}} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} shadow='lg' w={'60px'} h={'60px'} borderRadius={'50%'}><Image w={'40px'} src={img1} /></Box>
                    <Text fontSize={'18px'} color={'#696984'}>Shartnoma shartlarihaqida to’liq tanishib shiqing.</Text>
                </Box>
                <Box gap={{md: '1rem', base: '10px'}} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} shadow='lg' w={'60px'} h={'60px'} borderRadius={'50%'}><Image w={'35px'} src={img2} /></Box>
                    <Text fontSize={'18px'} color={'#696984'}>Biz bilan hamkorlik shartlariham mavjud.</Text>
                </Box>
                <Box gap={{md: '1rem', base: '10px'}}  display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} shadow='lg' w={'60px'} h={'60px'} borderRadius={'50%'}><Image src={img3} /></Box>
                    <Text w={{xl: '459px', md: '400px', base: '100%',lg :'400px'}} fontSize={'18px'} color={'#696984'}>Kompaniyaga kirish shartlari yani dasturchi bo’lib kirish uchun shartlar bilan tanishib chiqing</Text>
                </Box>
                </Box>
            </Box>
            <Box py={{base: '20px', md: '0'}} mt={{md :'40px', base: '40px'}} borderRadius={'20px'} w={{md: '600px', base: '100%', lg: '600px'}} h={{md: '418px', base: '100%'}} bg={'#D2E6E4'}>
                <Box pl={{md:'10px', base: '0'}}>
                <Box className='sertifikat' w={{lg:'90%', xl: '100%'}} m={'0 auto'} display={'flex'} flexDirection={{base: 'column', md: 'row'}} alignItems={'center'} justifyContent={'center'} minH={{md: '418px', base: '100%'}} gap={'1rem'}>
                    <Box><Image  w={{lg :'90%'}} src={ser1} /></Box>
                    <Box><Image w={{lg :'90%'}} src={ser2} /></Box>
                </Box>

                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Shartnoma