import { Box  , Flex} from '@chakra-ui/react'
import React from 'react'
import AdminHeader from '../components/adminHeader/adminHeader'
import AdminMain from '../components/adminMain/adminMain'
import AdminMainHodimlar from '../components/adminMainHodimlar/adminMainHodimlar'
import AdminSidebar from '../components/adminSidebar/adminSidebar'

const Dataspinpanell = () => {
  return (
    <Box bg={'#1F1F1F'} width='100%' height={'100%'}>
        <Flex>
            <Box>
                <AdminSidebar />
            </Box>

            <Box width={'100%'} display={'flex'} flexDirection={'column'}>
                <Box>
                    <AdminHeader />
                </Box>

                <Box>
                    <Flex >
                        <Box width={'70%'}>
                            <AdminMain />
                        </Box>
                        <Box width={'30%'} >
                            <AdminMainHodimlar />
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    </Box>
  )
}

export default Dataspinpanell