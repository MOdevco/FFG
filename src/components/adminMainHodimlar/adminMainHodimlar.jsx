import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import AdminHodimlarCard from '../adminHodimlarCard/adminHodimlarCard'
import AdminHodimlarDouted from '../adminHodimlarDouted/adminHodimlarDouted'

const AdminMainHodimlar = () => {
  return (
    <Box color={'white'} display={'flex'} height={'85vh'} overflow={'auto'}  flexDirection={'column'} gap={'20px'} px={'50px'} pt={'0px'}>
        <Box>
            <Box display={'flex'} alignItems={'center'} position={'sticky'} top={0} bg={'#1F1F1F'} zIndex={1000} py={'42px'} justifyContent={'space-between'}>
                <Text color={'#8E8E8E'}>Xodimlar</Text>
                <AdminHodimlarDouted />
            </Box>

            <Box display={'flex'} flexDirection={'column'} gap={'15px'}>
                <AdminHodimlarCard />
                <AdminHodimlarCard />
                <AdminHodimlarCard />
                <AdminHodimlarCard />
                <AdminHodimlarCard />
                <AdminHodimlarCard />
                <AdminHodimlarCard />
                <AdminHodimlarCard />
                <AdminHodimlarCard />
                <AdminHodimlarCard />
                <AdminHodimlarCard />
                <AdminHodimlarCard />
            </Box>
        </Box>
    </Box>
  )
}

export default AdminMainHodimlar