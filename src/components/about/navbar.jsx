import { Box, Button, Image, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
// import { HiMiniBars3 } from 'react-icons/fa';
import { logo } from '../../assets'
import { Link } from 'react-router-dom'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
  return (
    <Box>
      <Box  display={{md: 'flex', base: 'none'}}>

        <Box h={'10vh'}  w={'100%'} className={'bg'}>
            <Box display={'flex'} alignItems={'center'} minH={'10vh'} justifyContent={'space-between'} maxW={{'2xl':'80%', base: '80%', md: '90%', lg: '80%'}} m={'auto'}>
                <Box><Image src={logo} /></Box>
                <Box fontWeight={'700'} gap={{'2xl':'3em', md: '1rem'}} display={'flex'} alignItems={'center'} color={'#252641'} fontSize={{'2xl':'20px', lg: '17px'}}>
                    <Link to={'/'}><Text className='animate'>Asosiy</Text></Link>
                    <Link to={'/about'}><Text className='animate'>Biz haqimizda</Text></Link>
                    <Link to={'/loyihalar'}><Text className='animate'>Loihalar</Text></Link>
                    <Link><Text className='animate'>Biz bilan a’loqa</Text></Link>
                </Box>
                <Box><Button color={'#fff'} fontSize={'16px'} w={{lg:'190px', md: '150px'}} h={'48px'} bg={'#0B7077'}>Ro’yhatdan o’tish</Button></Box>
            </Box>
        </Box>
      </Box>


    <Box display={{base: 'flex', md: 'none'}} h={'8vh'} w={'100%'} bg={'#D2E6E4'}>
      <Box w={'80%'} m={'auto'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>

        <Box>
          <Image w={'70%'} src={logo} />  
        </Box>
        <Box>
        <Box colorScheme='blue' onClick={onOpen}><HamburgerIcon fontSize={'27px'} /></Box>
          <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth='1px'><Image src={logo} w={'50%'} /></DrawerHeader>
              <DrawerBody>
              <Box pt={'20px'} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'} gap={'1rem'}>
                    <Link to={'/'}><Text>Asosiy</Text></Link>
                    <Link to={'/about'}><Text>Biz haqimizda</Text></Link>
                    <Link><Text>Loihalar</Text></Link>
                    <Link><Text>Biz bilan a’loqa</Text></Link>
                </Box>
                <Box pt={'20px'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Button color={'#fff'} fontSize={'16px'} w={{lg:'190px', md: '150px'}} h={'48px'} bg={'#0B7077'}>Ro’yhatdan o’tish</Button></Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>

        </Box>

      </Box>

    </Box>
  )
}

export default Navbar