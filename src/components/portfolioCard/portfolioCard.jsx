import { Box, Heading, Text } from '@chakra-ui/react'
import { AiOutlineProject } from 'react-icons/ai'

const PortfolioCard = () => {
  return (
    <Box pt={'40px'}>
        <Box border={'1px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} rounded={'10px'} borderColor={'#3B3B3B'} className={'boxShadow'} width={'450px'} p={'30px'}>
            <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                <Box>
                    <Heading as='h4' size='lg'>Loiha nomi</Heading>
                    <Text color={'#8E8E8E'}>React js , Chakra ui</Text>
                </Box>
                <Box>
                    <Text color={'#7ED957'}>20.01.2023</Text>
                </Box>
            </Box>
            <Box display={'flex'} gap={'10px'} flexDirection={'column'} alignItems={'flex-end'}>
                <AiOutlineProject fontSize={'60px'} />
                <Text cursor={'pointer'} color={'#7A69E9'} fontWeight={'bold'}>Tanishib chiqish</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default PortfolioCard