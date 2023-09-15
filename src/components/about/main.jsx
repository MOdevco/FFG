import React from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { Vector } from "../../assets";
import Aboutcard from "./aboutcard";
import Teampicture from "./teampicture";

function Main() {
  return (
    <Box className="bg" w={'100%'}>
    
    <Box pt={'50px'} w={{'2xl': '80%', md: '90%', base: '90%'}} m={'auto'}>
      <Box
        textAlign={"center"}
        fontSize={"40px"}
        color={"#0B7077"}
        fontWeight={"700"}
        mb={"71px"}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Heading position={"relative"}>      
            FULL FORCE GROUP KOMPANIYASI TARIXI
            <Image
              position={"absolute"}
              right={"33%"}
              mt={"10px"}
              src={Vector}
            />
          </Heading>
        </Box>
      </Box>
      <Box  shadow='xl' className="text"  w={{'2xl': '100%', md:'100%'}}       m={"auto"}     borderTop={"  30px solid #0B7077"}   >
        <Box display={'flex'} flexDirection={'column'}  alignItems={'center'} gap={{xl :'2.5rem', base: '2rem'}} className="texts" w={"80%"} m={"auto"} fontSize={{xl :'30px', base: '20px'}} h={{'2xl':'95vh', base: '80vh'}} pb={{base: '20px'}} overflow={'scroll'} marginTop={"30px"}>
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
        <Heading position={'relative'}> FULL FORCE GROUP KOMPANIYASI TARIXI
          <Image position={'absolute'}    bottom={-5} right={'35%'} mt={'30px'}   src={Vector}/> </Heading>
      </Box>
    </Box>
    <Button p={'20px'}>Frontend Dasturchilar</Button>
    
      <Box display={'flex'} flexDirection={'column'} gap={{'2xl': '4rem', md: '2rem', base: '1rem'}}>
      <Box display={'flex'} className="wrapper" flexWrap={'wrap'} justifyContent={{'2xl': 'space-between'}} mt={'18px'}   gap={'34px'}  alignItems={'start'}>
        <Aboutcard    name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
        <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
        <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
        <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
      </Box>
        <Box>

          <Button w={'200px'}>Beckend dasturchilar</Button>
          <Box display={'flex'}  flexWrap={'wrap'} justifyContent={'start'} mt={'18px'}   gap={{'2xl':'6rem', base: '1rem', md: '2rem'}}  alignItems={'start'}>
          <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
          <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
          </Box>
        </Box>
        <Box>
          <Box display={'flex'} flexDirection={'column'} >
            <Button w={'200px'}>Flutter dasturchilar</Button>
            <Box  display={'flex'}  flexWrap={'wrap'} justifyContent={'start'} mt={'18px'} gap={{'2xl':'6rem', base: '1rem', md:'2rem'}}  alignItems={'start'}>
          <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
          <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
          <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />

            </Box>
          </Box>
        </Box>

      </Box>
   </Box>

    </Box>
    
      <Teampicture/>
    </Box>
   
  );
}

export default Main
