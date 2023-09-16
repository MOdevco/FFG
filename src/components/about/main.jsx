import React from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { Vector, line } from "../../assets";
import Aboutcard from "./aboutcard";
import Teampicture from "./teampicture";

function Main() {
  return (
    <Box pt={'100px'} className="bg" w={'100%'} pb={'50px'}>
    
    <Box pt={{lg:'50px'}} w={{'2xl': '80%', md: '90%', base: '90%'}} m={'auto'}>
      <Box
        textAlign={"center"}
        fontSize={"40px"}
        color={"#0B7077"}
        fontWeight={"700"}
        mb={"71px"}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Heading color={'#0B7077'}>      
           DATA SPIN KOMPANIYASI TARIXI
            <Box className='line' w={'67%'} display={{base: 'none',md :'none', '2xl':'flex'}}  alignItems={'flex-end'} justifyContent={'flex-end'}>
                    <Image src={line} />
                </Box>
          </Heading>
        </Box>
      </Box>
      <Box  shadow='xl' className="text"  w={{'2xl': '100%', md:'100%'}}       m={"auto"}     borderTop={"  30px solid #0B7077"}   >
        <Box display={'flex'} flexDirection={'column'}  alignItems={'center'} gap={{xl :'2.5rem', base: '2rem'}} className="texts" w={"80%"} m={"auto"} fontSize={{xl :'30px', base: '20px'}} h={{'2xl':'95vh', base: '80vh', md: '100%'}} pb={{base: '20px'}} overflow={'scroll'} marginTop={"30px"}>
          <Text fontWeight={"500"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora
            hic, quidem architecto cupiditate quaerat nulla iure tempore eum.
            Voluptas.
          </Text>
          <Text fontWeight={"500"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora
            hic, quidem architecto cupiditate quaerat nulla iure tempore eum.
            Voluptas.
          </Text>
          <Text fontWeight={"500"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora
            hic, quidem architecto cupiditate quaerat nulla iure tempore eum.
            Voluptas.
          </Text>
          <Text fontWeight={"500"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora
            hic, quidem architecto cupiditate quaerat nulla iure tempore eum.
            Voluptas.
          </Text>
          <Text fontWeight={"500"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora
            hic, quidem architecto cupiditate quaerat nulla iure tempore eum.
            Voluptas.
          </Text>
        </Box>
       

      </Box>
      <Box  pt={'50px'}>
    <Box textAlign={'center'} mb={'71px'} color={"#0B7077"} fontSize={"40px"}   fontWeight={"700"} >
      <Box display={'flex'} flexDirection={'column'}>
        <Heading position={'relative'}> DATA SPIN KOMPANIYASI TARIXI
          <Image position={'absolute'}    bottom={-5} right={'35%'} mt={'30px'}   src={Vector}/> </Heading>
      </Box>
    </Box>
    
    <Box className="aboutcards1"><Button className="btn" _hover={''} p={'20px'}>Frontend Dasturchilar</Button></Box>
      <Box display={'flex'} flexDirection={'column'} gap={{'2xl': '4rem', md: '2rem', base: '1rem'}}>
      <Box display={'flex'} className="wrapper aboutcards1" flexWrap={'wrap'} justifyContent={'space-between'}  mt={'18px'}   alignItems={'start'}>
        <Aboutcard    name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
        <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
        <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
        <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
      </Box>
        <Box>

          <Box className="aboutcards1"><Button className="btn" _hover={''} w={'200px'}>Beckend dasturchilar</Button></Box>
          <Box display={'flex'}  flexWrap={'wrap'} className="aboutcards1" justifyContent={'start'} mt={'18px'}   gap={{'2xl':'6rem', base: '1rem', md: '2rem'}}  alignItems={'start'}>
          <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
          <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
          </Box>
        </Box>
        <Box>
          <Box display={'flex'} flexDirection={'column'} >
            <Box className="aboutcards1"><Button className="btn aboutcards1" _hover={''} w={'200px'}>Flutter dasturchilar</Button></Box>
            <Box  display={'flex'} className="aboutcards1" flexWrap={'wrap'} justifyContent={'start'} mt={'18px'} gap={{'2xl':'6rem', base: '1rem', md:'2rem'}}  alignItems={'start'}>
          <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
          <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
          <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />

            </Box>
          </Box>
        </Box>

      </Box>
   </Box>

      <Teampicture/>
    </Box>
    
    </Box>
   
  );
}

export default Main
