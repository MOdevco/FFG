import { Box, Button, Image, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
// import { HiMiniBars3 } from 'react-icons/fa';
import { logo } from '../../assets'
import { Link, NavLink } from 'react-router-dom'
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
import Royhatdanotish from '../RoyhatdanOtish/royhatdanotish'

function Navbar({bg}) {
  const [size, setSize] = React.useState('')
  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
  
  return (
    <Box>
      
      <Box display={{lg: 'flex', base: 'none', base: 'none'}} w={'100%'} bg={bg} top={'0'} left={0} position={'fixed'} zIndex={'990'}>

        <Box h={'10vh'} w={'100%'} bg={bg} >
            <Box display={'flex'} alignItems={'center'} minH={'10vh'} justifyContent={'space-between'} maxW={{'2xl':'80%', base: '80%', md: '90%', lg: '80%'}} m={'auto'}>
                <Link to={'/'} className='imgrotate'><Text color={'#0B7077'}  fontWeight={'bold'} fontSize={'30px'}>Data Spin</Text></Link>
                <Box fontWeight={'700'} gap={{'2xl':'3em', md: '1rem'}} display={'flex'} alignItems={'center'} color={'#252641'} fontSize={{'2xl':'20px', lg: '17px'}}>
                    <NavLink to={'/'}><Text className='animate'>Asosiy</Text></NavLink>
                    <NavLink to={'/about'}><Text className='animate'>Biz haqimizda</Text></NavLink>
                    <NavLink to={'/loyihalar'}><Text className='animate'>Loihalar</Text></NavLink>
                    <NavLink to={'/aloqa'}><Text className='animate'>Biz bilan a’loqa</Text></NavLink>
                </Box>
                
                <Box><Royhatdanotish /></Box>
                
            </Box>
        </Box>
      </Box>
      


    <Box display={{base: 'flex',md: 'none', lg: 'none'}} h={'8vh'} w={'100%'} bg={'#D2E6E4'}>
      <Box w={'80%'} m={'auto'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>

        <Box>
          <Image w={'70%'} src={logo} />  
        </Box>
        <Box>
        <Box colorScheme='blue' onClick={onOpen}><HamburgerIcon fontSize={'27px'} /></Box>
          <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay/>
            <DrawerContent>
              <DrawerHeader borderBottomWidth='1px'><Image src={logo} w={'50%'} /></DrawerHeader>
              <DrawerBody>
              <Box pt={'20px'} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'} gap={'1rem'}>
                    <Link to={'/'}><Text>Asosiy</Text></Link>
                    <Link to={'/about'}><Text>Biz haqimizda</Text></Link>
                    <Link to={'/loyihalar'}><Text>Loihalar</Text></Link>
                    <Link to={'/aloqa'}><Text>Biz bilan a’loqa</Text></Link>
                </Box>
                <Box pt={'20px'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Box><Royhatdanotish /></Box></Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>

        </Box>

      </Box>



    <Box display={{md: 'flex', lg: 'none', base: 'none'}} h={'8vh'} w={'100%'} bg={'#D2E6E4'}>
      <Box w={'80%'} m={'auto'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>

        <Box>
          <Image w={'70%'} src={logo} />  
        </Box>
        <Box>
        
        <Box colorScheme='blue' onClick={onOpen}><HamburgerIcon fontSize={'27px'} /></Box>
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={'40px'} color={'#0B7077'} fontWeight={'bold'}>DataSpin</DrawerHeader>
          <DrawerBody>
            <Box pt={'20px'} fontSize={'25px'} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'} gap={'1rem'}>
                    <Link to={'/'}><Text>Asosiy</Text></Link>
                    <Link to={'/about'}><Text>Biz haqimizda</Text></Link>
                    <Link to={'/loyihalar'}><Text>Loihalar</Text></Link>
                    <Link to={'/aloqa'}><Text>Biz bilan a’loqa</Text></Link>
                </Box>
                <Box pt={'20px'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Box><Royhatdanotish /></Box></Box>
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