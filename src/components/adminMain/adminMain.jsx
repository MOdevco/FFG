import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import AdminMainPortfolio from '../adminMainPortfolio/adminMainPortfolio'
import HodimQoshish from '../hodimQoshish/hodimQoshish'
import LoihaQoshish from '../loihaQoshish/loihaQoshish'
import YangilikQoshish from '../yangilikQoshish/yangilikQoshish'

const AdminMain = () => {
  return (
    <Box color={'white'} borderRight={'2px'} borderColor={'#3B3B3B'} overflow={'auto'}  height={'86vh'} display={'flex'} flexDirection={'column'} gap={'20px'} >
        <Box display={'flex'} px={'50px'}  pt={'50px'} bg={'#1F1F1F'}  pb={'20px'} position={'sticky'} top={0} zIndex="1000" justifyContent={'space-between'}>
            <Box>
                <Text color={'#8E8E8E'}>Foidalanuvchilar</Text>
                <Heading>100</Heading>
            </Box>
            <Box>
                <Text color={'#8E8E8E'}>Kunlik Qo’shilish</Text>
                <Heading>12</Heading>
            </Box>
            <Box>
                <Text color={'#8E8E8E'}>Chiqishlar</Text>
                <Heading>0</Heading>
            </Box>
        </Box>

        <Box display={'flex'} position={'sticky'} bg={'#1F1F1F'} p={'20px'} pb={'30px'} top={'120px'}  px={'50px'}justifyContent={'space-between'} alignItems={'center'}>
            <LoihaQoshish />
            <HodimQoshish />
            <YangilikQoshish />
        </Box>

        <Box px={'50px'}>
            <AdminMainPortfolio />
        </Box>
    </Box>
  )
}

export default AdminMain