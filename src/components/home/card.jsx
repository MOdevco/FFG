import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { girl, starr } from '../../assets'

function Card() {
  return (
    <Box pt={{md:'110px', lg: '80px', base: '50px',}} className='bg cardc' w={'100%'} minH={'100%'} pb={{md :'40px', '2xl': '0'}}>
        <Box w={{md: '80%', base: '90%'}} m={'auto'}>
            <Box h={{md:'400px', sm: '100%'}} py={{base: '30px', md: '0'}} bg={'#DF1C25'} borderRadius={'16px'}>
                <Box w={'90%'} m={'auto'} display={'flex'} alignItems={'center'} justifyContent={{md:'flex-start', base: 'column', lg: 'space-between'}}>
                    <Box className='cardres' position={'relative'} zIndex={'20'} display={'flex'} flexDirection={'column'} justifyContent={'center'} minH={{lg:'20vh', base: '100%', '2xl': '40vh'}}>
                        <Heading pt={{'2xl':'10px', lg: '40px', md: '35px', base: '0px'}} pb={'30px'} w={{md:'470px', base: '100%'}} fontSize={{base: '25px', md :'40px'}} color={'white'}>Biz bilan shartnoma yoki hamkorligingiz uchun.</Heading>
                        <Box color={'#fff'} display={'flex'} gap={'10px'}  flexDirection={'column'}>
                            <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                                <Image src={starr} />
                                <Text fontSize={'14px'}>Birinchi hamkorlik uchun 2 oy bepul loihani ishlatish.</Text>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                                <Image src={starr} />
                                <Text fontSize={'14px'}>Biz tomonimizdan texnik yordam har oy uchun.</Text>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                                <Image src={starr} />
                                <Text fontSize={'14px'}>Malumotlaringiz hafsiz holatda saqlanish va sifatlik ish olasiz.</Text>
                            </Box>
                        </Box>
                        <Button mt={'50px'} className='btn' _active={""} _hover={''} w={'150px'} h={'50px'} bg={'white'} p={'15px 30px'} color={'#0B7077'}>Boshlash</Button>
                    </Box>
                    
                    <Box className='woman' display={{base: 'none', md: 'none',xl: 'flex'}}  mt={{'2xl': '-130px', lg :'-105px', xl: '-100px', md: '0'}} zIndex={'10'} right={{'2xl':'15vh', lg: '10vh'}} position={'absolute'}>
                        <Image src={girl} />
                    </Box>


                    
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Card