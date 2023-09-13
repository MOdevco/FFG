import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { holat, img1, img2, img3 } from '../../assets'

function Holat() {
  return (
    <Box pt={'40px'} className='bg holat' w={'100%'} h={{'2xl': '60vh'}} pb={{md :'40px', '2xl': '0'}}>
    <Box w={{md: '80%', base: '90%'}} m={'auto'} display={'flex'} justifyContent={{md: 'center', lg: 'space-between'}} alignItems={'center'} flexDirection={{md: 'column', lg: 'row-reverse', base :'column'}} gap={{lg :'20px', xl :'10px', '2xl': '0'}}>
        <Box>
            <Button className='btn' _hover={''} _active={''} borderRadius={'10px'} w={'146px'} h={'42px'} px={'25px'} py={'10px'} fontWeight={'400'}  bg={'#F5F5F5'} color={'#0B7077'}>Holat</Button>
            <Heading pt={{md: '40px', base: '25px', lg: '20px'}} fontSize={{base: '30px', md: '50px'}} color={'#0B7077'}>Bizning Holatimiz</Heading>
            <Box display={'flex'} flexDirection={'column'} gap={{md: '2em', base: '20px', xl :'2em'}} pt={'2em'}>

            <Box gap={{md: '1rem', base: '10px'}} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} shadow='lg' w={'60px'} h={'60px'} borderRadius={'50%'}><Image w={'40px'} src={img1} /></Box>
                <Text  w={{xl: '459px', md: '400px', base: '100%',lg :'400px'}} fontSize={'18px'} color={'#696984'}>Ishlat juda tez va sivatli darajada bo’ladi. Biz bilan ishlaganingizdan afsuslanmaysiz.</Text>
            </Box>
            <Box gap={{md: '1rem', base: '10px'}} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} shadow='lg' w={'60px'} h={'60px'} borderRadius={'50%'}><Image w={'35px'} src={img2} /></Box>
                <Text  w={{xl: '459px', md: '400px', base: '100%',lg :'400px'}} fontSize={'18px'} color={'#696984'}>Vaqtidan oldin loyihangizni tayyor holatga kelishi narxlariham mahyonbop.</Text>
            </Box>
            <Box gap={{md: '1rem', base: '10px'}}  display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} shadow='lg' w={'60px'} h={'60px'} borderRadius={'50%'}><Image src={img3} /></Box>
                <Text w={{xl: '459px', md: '400px', base: '100%',lg :'400px'}} fontSize={'18px'} color={'#696984'}>Kompaniyaga kirish shartlari yani dasturchi bo’lib kirish uchun shartlar bilan tanishib chiqing</Text>
            </Box>
            </Box>
        </Box>
        <Box pt={{md: '50px', lg :'0'}}>
            <Image src={holat} />
        </Box>
    </Box>
</Box>
  )
}

export default Holat