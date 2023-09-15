import { Box, Button, Image, Text } from '@chakra-ui/react'

function CardProps({image, info, text, date, price, noprice, img, number, bg}) {
  return (
    <Box borderRadius={'14px'}  border={'none'} w={{md:'310px', base: '100%'}} h={'470px'} >
        <Box className='loyihacards' borderRadius={'14px'} w={'296px'}>
            <>
            <Box position={'relative'}>
                <Image borderTopRadius={'14px'} src={image} />
            </Box>
            <Box boxShadow='xs' borderRadius={'14px'}>

            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mt={'-25px'}>
                <Box position={'relative'} gap={'5px'} zIndex={'20'} display={'flex'} alignItems={'center'} justifyContent={'center'} w={'240px'} h={'42px'} borderRadius={'40px'} bg={bg}>
                <Image src={img}  />
                <Text color={'black'}>{number}</Text>
                </Box>
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={'5px'} pt={'40px'} Box w={'90%'} m={'auto'}>
                <Text fontSize={'13px'} color={'#777795'}>{date}</Text>
                <Text color={'#0B7077'} fontSize={'18px'} >{info}</Text>
                <Text color={'#4D4D4D'} fontSize={'13px'}>{text}</Text>
            </Box>

            <Box pb={'10px'} pt={'25px'} w={'90%'} m={'auto'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Box><Text fontWeight={'700'} color={'#FD661F'}>$ {price} <span style={{textDecoration: 'line-through', color:'#230F0F'}}>{noprice}</span></Text></Box>
                <Box>
                    <Button w={'71px'} h={'34px'} p={'10px'} color={'#fff'} bg={'#0B7077'}>Kirish</Button>
                </Box>
            </Box>
            </Box>

            </>
        </Box>
    </Box>
  )
}

export default CardProps