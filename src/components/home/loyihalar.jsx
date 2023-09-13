import { Box, Heading, Image } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import CardProps from './cardProps'
import { animals, card1, card2, card3, card4, line } from '../../assets'
function Loyihalar() {
  return (
    <Box bg={'#FBFBFB'} w={'100%'}>
        <Box className='loyihalar' h={{'2xl': '70vh', md:'100%', lg :'100%', base :'100%'}} pb={{md: '40px', lg: '0'}} pt={'40px'} m={'auto'} w={{lg:'80%', base: '90%', md: '90%'}}>
            <Box>
                <Heading textAlign={'center'} fontSize={{md: '45px', base: '30px'}} color={'#FD661F'} fontWeight={{base :'400', md: '700'}}>Bizning Loyihalar</Heading>
                <Box className='line' w={{'2xl': '61%', base: '80%', md: '75%'}} display={{base: 'none',md :'none', '2xl':'flex'}}  alignItems={'flex-end'} justifyContent={'flex-end'}>
                    <Image src={line} />
                </Box>
                <Box pt={'50px'}>
                <Tabs variant='unstyled'>
                    <TabList w={'90%'} m={'auto'} pt={'20px'} fontSize={'12px'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'} gap={{base: '20px', md: '2rem'}}>
                        <Tab fontSize={'18px'} py={'10px'} px={'20px'} borderRadius={'5px'} w={'100px'} h={'34px'} border={'1px solid #C4C4C4'} _selected={{ color: '#fff', bg: '#0B7077' }}>Barchasi</Tab>
                        <Tab fontSize={'18px'} py={'10px'} px={'20px'} borderRadius={'5px'} w={'180px'} h={'34px'} border={'1px solid #C4C4C4'} _selected={{ color: '#fff', bg: '#0B7077' }}>Web dasturlash</Tab>
                        <Tab fontSize={'18px'} py={'10px'} px={'20px'} borderRadius={'5px'} w={'100px'} h={'34px'} border={'1px solid #C4C4C4'} _selected={{ color: '#fff', bg: '#0B7077' }}>Frontend</Tab>
                        <Tab fontSize={'18px'} py={'10px'} px={'20px'} borderRadius={'5px'} w={'100px'} h={'34px'} border={'1px solid #C4C4C4'} _selected={{ color: '#fff', bg: '#0B7077' }}>Beckend</Tab>
                        <Tab fontSize={'18px'} py={'10px'} px={'20px'} borderRadius={'5px'} w={'100px'} h={'34px'} border={'1px solid #C4C4C4'} _selected={{ color: '#fff', bg: '#0B7077' }}>Android</Tab>
                        <Tab fontSize={'18px'} py={'10px'} px={'20px'} borderRadius={'5px'} w={'90px'} h={'34px'} border={'1px solid #C4C4C4'} _selected={{ color: '#fff', bg: '#0B7077' }}>Flutter</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel display={'flex'} alignItems={'center'} justifyContent={'center'}>
                            <Box pt={'40px'}  display={'flex'} flexWrap={'wrap'} flexDirection={{base :'column', md :'row'}} justifyContent={{md :'space-between', base:'center'}} gap={{'2xl': '3rem', base: '1rem'}}>
                                <CardProps image={card1} date={'1 - 28 July 2022'} info={'Loyihani dekoratsiya qilish vazifasi a’lo darajata yakunlandi.'} text={'Ma’lumotlar loyihab olinganda olingan hisobida 1oyga olingan loyiga 15kunda mudatidan oldin topshirildi'} price={'380'} noprice={'$ 500'} />
                                <CardProps img={animals} bg={'#FAFAFA'} number={'+ 11 students'} image={card2} date={'1 - 28 July 2022'} info={'BM Data Science Professional Certificate'} text={'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.'} price={'678'} noprice={' 500'} />
                                <CardProps img={animals} bg={'#FAFAFA'} number={'+ 234 students'} image={card3} date={'1 - 28 July 2022'} info={'BM Data Science Professional Certificate'} text={'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.'} price={'678'} noprice={' 500'} />
                                <CardProps img={animals} bg={'#FAFAFA'} number={'+ 342 students'} image={card4} date={'1 - 28 July 2022'} info={'Python for Everybody Specialization'} text={'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.'} price={'678'} noprice={' 500'} />
                            </Box>
                        </TabPanel>
                        <TabPanel>
                        </TabPanel>
                        <TabPanel>
                        <p>three!</p>
                        </TabPanel>
                        <TabPanel>
                        <p>four!</p>
                        </TabPanel>
                        <TabPanel>
                        <p>five!</p>
                        </TabPanel>
                        <TabPanel>
                        <p>six!</p>
                        </TabPanel>
                    </TabPanels>
                    </Tabs>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Loyihalar