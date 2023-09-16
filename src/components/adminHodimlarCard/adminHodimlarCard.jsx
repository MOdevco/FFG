import { Avatar, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'

const AdminHodimlarCard = () => {
  return (
    <Box >
        <Box border={'2px'}  p={'14px'}  display={'flex'} alignItems={'center'} justifyContent={'space-between'} rounded={'10px'} borderColor={'#3B3B3B'}>
            {/* image uchun */}
            <Box>
                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov'/>
            </Box>


            {/* title uchun */}
            <Box>
                <Heading as='h4' size='md'>MOdevco</Heading>
                <Text fontSize={'14px'} color={'#8E8E8E'}>React dasturchi</Text>
            </Box>

            {/* ma'lumot uchun */}
            <Box>
                <Text color={'#7ED957'}>Ish faoliyatida</Text>
                <Text display={'flex'} alignItems={'center'} gap={'5px'} color={'#8E8E8E'}>
                    <AiOutlineClockCircle />
                    May 4th, 2020
                </Text>
            </Box>
        </Box>
    </Box>
  )
}

export default AdminHodimlarCard