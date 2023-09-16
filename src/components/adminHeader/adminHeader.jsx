
import { Box , Heading  ,Avatar} from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineNotifications } from 'react-icons/md'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
const AdminHeader = () => {
  return (
    <Box color={'white'} display={'flex'} borderBottom={'2px'} pb={'59px'} borderColor={'#3B3B3B'} px={'50px'} pt={'30px'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
        <Box>
            <Heading>Boshqaruv paneli</Heading>
        </Box>

        <Box bg={'#3B3B3B'} p={'7px'} rounded={'50px'} display={'flex'} alignItems={'center'}>
            <AiOutlineSearch fontSize={'30px'} />
            <input placeholder='Qidirish...' className='serchInp' style={{ color: 'white' , paddingLeft: '20px', borderRadius: '50px' , width: '300px'}} type='search' />
        </Box>

        <Box display={'flex'} gap={'20px'} alignItems={'center'}>
            <MdOutlineNotifications fontSize={'30px'} />
            <Box>
                <Menu >
                    <MenuButton  rightIcon={<ChevronDownIcon />}>
                        <ChevronDownIcon fontSize={'20px'} />
                        MOdevco
                    </MenuButton>
                    <MenuList border={'none'} bg={'white'}>
                        <MenuItem fontWeight={'bold'} color={'black'}>Profile</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Box>
                <Avatar />
            </Box>
        </Box>
    </Box>
  )
}

export default AdminHeader