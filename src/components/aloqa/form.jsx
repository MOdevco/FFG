import { Box, Button, FormLabel, Heading, Image, Input } from '@chakra-ui/react'
import React from 'react'
import { line } from '../../assets'

function Form() {
  return (
    <Box bg={'#FBFBFB'} w={'100%'}>
        <Box pt={'50px'} w={{md:'90%', base: '90%', lg: '80%'}} m={'auto'} h={'100%'} pb={{md:'40px', '2xl':'20px', base :'40px'}}>
        <Heading textAlign={'center'}  fontSize={{md: '45px', base: '30px'}} color={'#FD661F'} fontWeight={{base :'400', md: '700'}}>BIZ BILAN A’LOQA</Heading>
        <Box pb={{sm: '40px'}} className='line4'  w={{base: '80%', lg: '62%', md: '77%'}} display={'flex'} alignItems={{md:'center', base: 'flex-end'}} justifyContent={{md:'flex-end', base: 'flex-end'}}>
                <Image src={line} />
            </Box>

            <Box borderTop={'20px solid #0B7077'} mt={{'2xl': '100px', base :'0px'}} boxShadow='lg' w={'100%'} m={'auto'} h={'100%'} p={'30px 0px 40px 0px'} borderRadius={'0 0 24px 24px'}>
            <form>
                <Box >
                    <Box display={{xl:'flex', base :'none'}} flexDirection={{base: 'column', md: 'row'}} gap={{'2xl' :'3rem'}} justifyContent={'center'} alignItems={'center'}>
                    <Box display={'flex'} flexDirection={'column'} gap={{md: '2rem', base: '1rem'}}>
                    <FormLabel w={'100%'} display={'flex'} flexDirection={'column'} fontSize={'20px'} fontWeight={'500'}>Ismingiz
                        <Input bg={'#F5F5F5'} pl={'10px'} h={'54px'} w={{'2xl':'580px', base: '100%', xl :'450px', md: '100%'}} variant='unstyled' placeholder='Ismingiz'/>
                    </FormLabel>
                    <FormLabel display={'flex'} flexDirection={'column'} fontSize={'20px'} fontWeight={'500'}>Telefon nomer
                        <Input bg={'#F5F5F5'} pl={'10px'} h={'54px'} w={{'2xl':'580px', base: '100%', xl :'450px', md: '100%'}} variant='unstyled' placeholder='+998'/>
                    </FormLabel>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} gap={{md: '2rem'}}>
                    <FormLabel display={'flex'} flexDirection={'column'} fontSize={'20px'} fontWeight={'500'}>Familiya
                        <Input bg={'#F5F5F5'} pl={'10px'} h={'54px'} w={{'2xl':'580px', base: '100%', xl :'450px', md: '100%'}} variant='unstyled'  placeholder='Familiya'/>
                    </FormLabel>
                    <FormLabel display={'flex'} flexDirection={'column'} fontSize={'20px'} fontWeight={'500'}>Mavzu
                        <Input bg={'#F5F5F5'} pl={'10px'} h={'54px'} w={{'2xl':'580px', base: '100%', xl :'450px', md: '100%'}} variant='unstyled'  placeholder='Mavzu'/>
                    </FormLabel>
                    </Box>

                    </Box>

                    {/* phones */}
                    <Box display={{xl:'none', base :'flex'}} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <FormLabel pt={'10px'} w={'85%'}>Ismingiz
                    </FormLabel>
                        <Input bg={'#F5F5F5'} pl={'10px'} h={'54px'} w={{'2xl':'580px', base: '90%', xl :'400px', md: '90%'}} variant='unstyled' placeholder='Ismingiz'/>
                    <FormLabel pt={'10px'} w={'85%'}>Telefon nomer
                    </FormLabel>
                        <Input bg={'#F5F5F5'} pl={'10px'} h={'54px'} w={{'2xl':'580px', base: '90%', xl :'400px', md: '90%'}} variant='unstyled' placeholder='+998'/>
                    <FormLabel pt={'10px'} w={'85%'}>Familiya
                    </FormLabel>
                        <Input bg={'#F5F5F5'} pl={'10px'} h={'54px'} w={{'2xl':'580px', base: '90%', xl :'400px', md: '90%'}} variant='unstyled'  placeholder='Familiya'/>
                    <FormLabel pt={'10px'} w={'85%'}>Mavzu
                    </FormLabel>
                        <Input bg={'#F5F5F5'} pl={'10px'} h={'54px'} w={{'2xl':'580px', base: '90%', xl :'400px', md: '90%'}} variant='unstyled'  placeholder='Mavzu'/>

                    </Box>
                    <Box   pt={{md :'2rem', base: '1rem', xl: '0'}} className='msg_main'>
                        <FormLabel fontSize={'20px'}>Xabaringiz</FormLabel>
                        <textarea placeholder='Xabaringiz...' className='msg'></textarea>
                    <Button mt={'20px'} w={'150px'} borderRadius={'10px'} fontSize={'20px'} h={'55px'} bg={'#0B7077'} color={'white'}>Jo’natish</Button>
                    </Box>
                </Box>
            </form>
            </Box>
        </Box>
    </Box>
  )
}

export default Form