import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { loyihalar } from '../../assets'


function LoyihalarCard({img, text, info, number, img1}) {
  return (
    <Box className='cardloyiha' borderRadius={'14px'} transition={'.4s'} _hover={{bg: '#fff', boxShadow: 'xl'}} w={{md: '620px', xl: '500px',lg: '580px', base: '90%', '2xl': '640px'}} h={{'2xl': '302px',base: '510px', lg :'305px', md: '100%'}}>
        <Box className='gap' display={'flex'} flexDirection={{base: 'column', md: 'row'}} alignItems={'center'} gap={'20px'}>
            <Box borderRadius={'14px'} w={{md: '250px', base: '100%', '2xl': '218px'}} h={{lg:'301px', md: '250px', base: '230px'}} bg={'#0B7077'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Image className='imgloyiha' w={{'2xl':'85%', xl: '70%', md: '70%', base: '60%'}} src={img1} />
            </Box>
            <Box display={'flex'} alignItems={'flex-start'} flexDirection={'column'} justifyContent={'flex-start'} w={{md: '370px',lg: '410px', base: '90%'}}>
                <Heading textAlign={'left'} pb={'15px'} color={'#0B7077'} fontSize={{'2xl':'23px', xl: '18px'}}>{text}</Heading>
                <Text textAlign={'left'} color={'#4D4D4D'} fontSize={'15px'}>{info}</Text>
            <Box>
                <Box className='mini' mt={'15px'} display={'flex'} gap={'12px'} alignItems={'center'} justifyContent={'center'} minW={{md:'300px', base: '90%', lg: '100%'}} px={'7px'} h={'45px'} borderRadius={'40px'} bg={'#0B7077'}>
                <Image src={img}  />
                <Text color={'white'}>{number}</Text>
                </Box>
            </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default LoyihalarCard