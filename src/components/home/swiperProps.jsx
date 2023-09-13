import { Box, Heading, Image, Text } from '@chakra-ui/react'


function SwiperProps({img, text, info, number, img1}) {
  return (
    <Box className='swiperw' borderRadius={'14px'} transition={'.4s'} _hover={{bg: '#fff', boxShadow: 'xl'}} w={{md: '620px', lg: '630px', base: '90%', '2xl': '820px'}} h={{'2xl': '302px',base: '510px', lg :'305px', md: '100%'}}>
        <Box display={'flex'} flexDirection={{base: 'column', md: 'row'}} alignItems={'center'} gap={'20px'}>
            <Box borderRadius={'14px'} w={{md: '250px', base: '100%', '2xl': '380px'}} h={{lg:'302px', md: '250px', base: '230px'}} bg={'#0B7077'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Image className='swiperimg' w={{'2xl':'60%', xl: '70%', md: '70%', base: '70%'}} src={img1} />
            </Box>
            <Box display={'flex'} alignItems={'flex-start'} flexDirection={'column'} justifyContent={'flex-start'} w={{md: '370px',lg: '347px', base: '90%'}}>
                <Heading textAlign={'left'} pb={'15px'} color={'#0B7077'} fontSize={'23px'}>{text}</Heading>
                <Text textAlign={'left'} color={'#4D4D4D'} fontSize={'15px'}>{info}</Text>
            <Box>
                <Box className='swipercard' mt={'15px'} display={'flex'} gap={'5px'} alignItems={'center'} justifyContent={'center'} w={'260px'} h={'45px'} borderRadius={'40px'} bg={'#F5F5F5'}>
                <Image src={img}  />
                <Text color={'black'}>{number}</Text>
                </Box>
            </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default SwiperProps