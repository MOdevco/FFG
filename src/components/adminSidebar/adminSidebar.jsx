
import { Box , Heading , Text} from '@chakra-ui/react'
import { PiSquaresFourLight } from 'react-icons/pi'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { AiOutlineUser , AiOutlineSetting , AiOutlineQuestionCircle} from 'react-icons/ai'
import { MdOutlineNotifications } from 'react-icons/md'
import { Link } from 'react-router-dom'
const AdminSidebar = () => {
  return (
    <Box color={'white'} width={'400px'} height={'100vh'} py={'20px'} borderRight={'1px'} borderColor={'#3B3B3B'}>
        <Box display={'flex'} gap={'50px'} flexDirection={'column'} pl={'100px'} alignItems={'flex-start'} justifyContent={'center'}>
            <Box cursor={'pointer'}>
                <Link to={'/'}>
                    <Heading  color={'#8C52FF'}>DataSpin</Heading>
                </Link>
            </Box>


            <Box borderBottom={'2px'} borderColor={'#3B3B3B'} width={'100%'}>
                <Box color={'#8E8E8E'}> 
                    <Text>Menu</Text>
                </Box>
            </Box>

            <Box display={'flex'} cursor={'pointer'} gap={'28px'} flexDirection={'column'}>
                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <PiSquaresFourLight fontSize={'25px'} />
                    <Heading fontWeight={'medium'} fontSize={'17px'}>Boshqaruv paneli</Heading>
                </Box>
                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <LiaShoppingBagSolid fontSize={'25px'} />
                    <Heading fontWeight={'medium'} fontSize={'17px'}>Portfolio</Heading>
                </Box>
                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <AiOutlineUser fontSize={'25px'} />
                    <Heading fontWeight={'medium'} fontSize={'17px'}>Xodimlar</Heading>
                </Box>
                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <MdOutlineNotifications fontSize={'25px'} />
                    <Heading fontWeight={'medium'} fontSize={'17px'}>Bildirishnoma</Heading>
                </Box>
            </Box>

            <Box borderBottom={'2px'}  borderColor={'#3B3B3B'} width={'100%'}>
                <Box color={'#8E8E8E'}> 
                    <Text>Qo’shimcha m’lumot</Text>
                </Box>
            </Box>
            <Box display={'flex'} cursor={'pointer'} gap={'28px'} flexDirection={'column'}>
                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <AiOutlineUser fontSize={'25px'} />
                    <Heading fontWeight={'medium'} fontSize={'17px'}>Mening profilim</Heading>
                </Box>  
                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <AiOutlineSetting fontSize={'25px'} />
                    <Heading fontWeight={'medium'} fontSize={'17px'}>Sozlamalar</Heading>
                </Box>
            </Box>

            <Box borderBottom={'2px'} borderColor={'#3B3B3B'} width={'100%'}>
                <Box color={'#8E8E8E'}> 
                    <Text>Admin</Text>
                </Box>
            </Box>
            <Box display={'flex'} gap={'28px'} cursor={'pointer'} flexDirection={'column'}>
                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <AiOutlineQuestionCircle fontSize={'25px'} />
                    <Heading fontWeight={'medium'} fontSize={'17px'}>Admin</Heading>
                </Box>  
            </Box>
        </Box>
    </Box>
  )
}

export default AdminSidebar