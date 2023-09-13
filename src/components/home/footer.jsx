import { Box, Button, FormErrorMessage, FormHelperText, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { logo } from '../../assets'
import {TiLocation} from 'react-icons/ti'
import {AiTwotoneMail} from 'react-icons/ai'
import {FaPhoneVolume, } from 'react-icons/fa6'

function Footer() {

  return (
    <Box className='bg' pt={{md:'40px', '2xl': '50px', base: '0px'}}>
        <Box className='border' mt={{md:'40px', '2xl': '120px'}} bg={'#D2E6E4'} pb={{md :'40px', '2xl': '0', base: '10px'}} w={'100%'} h={{'2xl': '50vh'}}>
            <Box w={{md: '80%', base: '90%'}} m={'auto'} display={'flex'} flexDirection={{lg :'row', base: 'column'}} alignItems={{'2xl':'center', base: 'left', lg: 'center'}} gap={{'2xl': '2rem', base: '20px', xl :'2rem'}} >
                <Box pt={{'2xl':'100px', md: '60px', base: '30px'}} display={'flex'}  flexDirection={'column'} gap={{'2xl': '2rem', base: '0.5rem'}}>
                    <Image w={{lg:'70%', base: '60%',md: '50%'}} src={logo} />
                    <Text display={'flex'} alignItems={'center'} gap={'10px'} color={'#0B7077'}><TiLocation /> Farg’ona viloyati Quva Tumani.</Text>
                    <Text display={'flex'} alignItems={'center'} gap={'10px'} color={'#0B7077'}><FaPhoneVolume />Tel :+99855 809  13 28</Text>
                    <Text display={'flex'} alignItems={'center'} gap={'10px'} color={'#0B7077'}><AiTwotoneMail />Email: full_force-group@gmail.com</Text>
                </Box>
                <Box pl={{'2xl': '180px'}} pt={{'2xl':'100px', md: '0px', lg: '70px'}} display={'flex'} flexDirection={'column'} gap={{'2xl': '1.5rem', base: '0.5rem'}}>
                    <Text color={'Shartnoma'} fontWeight={'700'}>Shartnoma</Text>
                    <Text color={'#0B7077'}>Shartnoma</Text>
                    <Text color={'#0B7077'}>Hamkorlik</Text>
                    <Text color={'#0B7077'}>Ish bo’yicha shartlar</Text>
                </Box>
                <Box pl={{'2xl': '80px'}} pt={{'2xl':'100px', md: '0px', lg: '70px'}} display={'flex'} flexDirection={'column'} gap={{'2xl': '1.5rem', base: '0.5rem'}}>
                    <Text color={'Shartnoma'} fontWeight={'700'}>Bo’limlar</Text>
                    <Text color={'#0B7077'}>Biz haqimizda</Text>
                    <Text color={'#0B7077'}>Loihalar</Text>
                    <Text color={'#0B7077'}>Biz bilan a’loqa</Text>
                </Box>

                <Box pl={{'2xl': '100px'}} mt={{'2xl': '100px'}} pt={{base: '20px'}} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Text>Email manzilingizni qoldiring</Text>
                    <form>
                    <Box rounded={'15px'} w={{'2xl': '400px', base: '100%'}} display={'flex'} alignItems={'center'} h={'73px'} bg={'#fff'}>
                        <Input  pl={{md:'20px', base: '10px'}} w={{md: '225px', base: '80%', '2xl': '290px'}} variant='unstyled' type='email' required placeholder='Email' h={'73px'} />
                        
                        <Button type='submit' w={'100px'}  _hover={''} mr={{base: '20px'}} ml={{md:'10px', base: '0'}} rounded={'20px'} h={'50px'} bg={'#0B7077'} color={'#fff'}>Send</Button>
                    </Box>
                    </form>
                </Box>

            </Box>
            <Heading fontSize={'20px'} color={'#000000'} fontWeight={'500'} textAlign={'center'} pt={{'2xl': '120px', base: '30px'}}>Full Force Group Barcha Huquqlarda Himoyalangan</Heading>
        </Box>
    </Box>
  )
}

export default Footer