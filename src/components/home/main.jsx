import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { man, people, star, progress, date } from '../../assets'

function Main() {
  return (
    <Box>
      <Box display={{base: 'flex', md: 'flex'}}>
      <Box className='basic' pt={{'2xl': '53px', lg: '50px', xl: '37px'}} w={'100%'}  h={'100%'} pb={{base:'40px', xl: '0'}} bg={'#D2E6E4'}>
      <Box className='main' flexDirection={{md: 'column-reverse',xl: 'row', '2xl': 'row'}} w={'80%'} m={'auto'} display={'flex'} justifyContent={'space-between'}>
        <Box pt={{base:'40px', xl: '60px', '2xl': '40px'}} display={'flex'} flexDirection={'column'} gap={{lg: '1rem'}}>
          <Box className='maxmini' fontWeight={'500'} w={'270px'} h={'38px'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'10px'} bg={'#fff'}><Text>Biz bilan loihangizni boshlang</Text></Box>
          <Text className='maintext' maxW={{'2xl': '500px',}} fontWeight={{md: '500', lg: '700'}} fontSize={{md: '50px', '2xl': '62px', lg: '40px', base: '30px'}} color={'#0B7077'} pt={{base: '10px', md: '0'}}>DataSpin
          Biz Bilan Loihangizni
          Boshlang.</Text>
          <Box display={'flex'}alignItems={'center'} gap={'10px'}>
            <Button _hover={""} _active={''} color={'#fff'} letterSpacing={'2%'} fontWeight={'500'} fontSize={'16px'} w={{md:'150px',base: '140px'}} h={'50px'} bg={'#FD661F'}>Ma’lumotni</Button>
            <Box display={'flex'} alignItems={'center'} gap={'5px'}>
              <Box><Image src={people} /></Box>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Text fontSize={'20px'} alignItems={'center'} display={'flex'}><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <span><Image src={star} /></span></Text>
                <Text fontSize={{base: '15px', md: '20px'}} color={'#230F0F'}>(10k+ Reviews)</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className='right' display={{base:'none', xl: 'flex'}}>
          <Image className='man' src={man} />
          <Box className='date' position={'absolute'} borderRadius={'20px'} display={'flex'} alignItems={'center'} justifyContent={'center'} top={{xl:'33vh', md: '28vh', '2xl' :'45vh'}}  w={{'2xl':'270px', lg: '230px', md: '250px'}} right={{xl: '45vh', '2xl': '63vh', lg: '60vh'}} h={{'2xl':'90px',lg: '80px'}} bg={'rgba(255, 255, 255, 0.8)'}>
            <Box display={'flex'} gap={'10px'} alignItems={'center'} justifyContent={'center'} minH={'90px'}>
              <Image src={date} />
              <Box color={'rgba(89, 89, 89, 1)'}>
                <Text fontSize={{'2xl':'22px', lg: '18px'}} fontWeight={'600'}>100dan ortiq</Text>
                <Text fontSize={{'2xl':'19px', lg: '16px'}}>Loihalar bilan birga</Text>
              </Box>
            </Box>
          </Box>
          <Box className='progress' right={{'2xl':'28vh', xl: '17vh', lg: '19vh', md: '1vh'}} top={{'2xl':'35vh', xl: '23vh', lg: '35vh',}} position={'absolute'}>
            <Image src={progress} />
          </Box>
        </Box>
      </Box>
    </Box>
      </Box>
         


    </Box>
   
  )
}

export default Main