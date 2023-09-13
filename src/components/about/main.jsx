import React from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { Vector } from "../../assets";
import Aboutcard from "./aboutcard";
import Teampicture from "./teampicture";

function Main() {
  return (
    <Box>
    
    <Box className="wrapper">
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
      <Box   className="text"  w={{'2xl': '80%', md:'90%'}}      height={'auto'}       m={"auto"}       border={"1px solid "}     borderTop={"  30px solid #0B7077"}   >
        <Box w={"80%"} m={"auto"} py={"30px"} marginTop={"30px"}>
          <Text fontSize={"30px"} fontWeight={"500"} marginBottom={"100px"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora
            hic, quidem architecto cupiditate quaerat nulla iure tempore eum.
            Voluptas.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora
            hic, quidem architecto cupiditate quaerat nulla iure tempore eum.
            Voluptas.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora
            hic, quidem architecto cupiditate quaerat nulla iure tempore eum.
            Voluptas.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora
            hic, quidem architecto cupiditate quaerat nulla iure tempore eum.
            Voluptas.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora
            hic, quidem architecto cupiditate quaerat nulla iure tempore eum.
            Voluptas.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora
            hic, quidem architecto cupiditate quaerat nulla iure tempore eum.
            Voluptas.
            <br />
            <br />
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
    
   </Box>

    </Box>
      <Box display={'flex'} className="wrapper" flexWrap={'wrap'} justifyContent={'start'} mt={'18px'}   gap={'34px'}  alignItems={'start'}>
        <Aboutcard    name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
        <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
        <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
        <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
      </Box>
      <Box className="wrapper" >
        <Button>Beckend dasturchilar</Button>
        <Box display={'flex'}  flexWrap={'wrap'} justifyContent={'start'} mt={'18px'}   gap={'34px'}  alignItems={'start'}>
        <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
        <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
        </Box>
        <Box>
          <Button>Flutter dasturchilar</Button>
          <Box display={'flex'}  flexWrap={'wrap'} justifyContent={'start'} mt={'18px'}   gap={'34px'}  alignItems={'start'}>
        <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
        <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />
        <Aboutcard  name={"Muhammadali Anvarov"}    title={"Frontend dasturchi"}     text={"Texnalogiya React js +"}     p={   "Abdulaziz Xoldorov frontend dasturchi yoshi 18da 2yildan beri frontend yonalishi bo’licha ishlaydi 5dan ortik loihalarda qatnashgan.."  }   />

          </Box>
        </Box>

      </Box>
      <Teampicture/>
    </Box>
   
  );
}

export default Main
