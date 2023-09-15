import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { backend, flutter, frontend, line, mobile } from '../../assets'
import YonalishProps from './YonalishProps'

function Hizmatlar() {
  return (
    <Box bg={'#FBFBFB'} w={'100%'}>
    <Box className='hizmat' pt={{md:'50px', '2xl': '120px'}} w={{md:'90%', base: '90%', lg: '80%'}} m={'auto'} h={{'2xl': '60vh', base: '100%', md: '100%', lg: '100%'}} pb={{base: '40px', md: '0'}}>
        <Box>
        <Heading textAlign={'center'}  fontSize={{md: '45px', base: '30px'}} color={'#FD661F'} fontWeight={{base :'400', md: '700'}}>Bizning Hizmatlar</Heading>
            <Box className='line2'  w={{base: '80%', lg: '62%', md: '77%'}} display={{base: 'none',md :'none', '2xl':'flex'}}  alignItems={{md:'center', base: 'flex-end'}} justifyContent={{md:'flex-end', base: 'flex-end'}}>
                <Image src={line} />
            </Box>
            <Text pt={'30px'} textAlign={'center'} fontSize={'22px'} fontWeight={'400'} color={'#696984'} >Bizning Hizmatlarimi haqida Batafsil Bilib Oling!</Text>

            <Box w={{base: '90%'}} m={'0 auto'} display={'flex'} flexWrap={'wrap'} justifyContent={{md:'space-between', base: 'center'}} pt={'40px'}>
                <YonalishProps img={backend} text={'Beckend'} info={'Loyihani server tomolama taminlash uchun ishlaydi.'} />
                <YonalishProps img={frontend} text={'Frontend'} info={'Loyihani foidalanuvchi ko’radigan qismini tayorlaydi.'} />
                <YonalishProps img={mobile} text={'Mobil dastur'} info={'Telefonlar uchun har-hil turdagi ilovalarni qilish uuchun ishlaydi.'} />
                <YonalishProps img={flutter} text={'Flutter'} info={'Barcha turdagi web dasturlar mobil ilovalar qilish uchun ishlaydi.'} />
            </Box>


        </Box>
    </Box>

    </Box>
  )
}

export default Hizmatlar