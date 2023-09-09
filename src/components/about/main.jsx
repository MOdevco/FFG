import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Vector } from "../../assets";


function Main() {
  return (
    <Box>
      <Box textAlign={'center'} fontSize={'40px'} color={'#0B7077'} fontWeight={'700'} mb={'71px'} >
        <Box display={'flex'} flexDirection={'column'}   >
          <Heading position={'relative'}>
            FULL FORCE GROUP KOMPANIYASI TARIXI
            <Image position={'absolute'} right={'33%'} mt={'10px'} src={Vector} />
          </Heading>
      </Box>
      </Box>
      <Box className="text"   w={'80%'} h={'110vh'} m={'auto'}   border={'1px solid '} borderTop={'  30px solid #0B7077'}  >
        <Box w={'80%'} m={'auto'} py={'30px'}  >
        <Text  fontSize={'30px'} fontWeight={'500'} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora hic, quidem architecto cupiditate quaerat nulla iure tempore eum. Voluptas.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora hic, quidem architecto cupiditate quaerat nulla iure tempore eum. Voluptas.
        <br />
        <br />
      
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora hic, quidem architecto cupiditate quaerat nulla iure tempore eum. Voluptas.
        <br />
        <br />
       
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora hic, quidem architecto cupiditate quaerat nulla iure tempore eum. Voluptas.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora hic, quidem architecto cupiditate quaerat nulla iure tempore eum. Voluptas.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse illo quis in ex cum commodi consectetur aliquam. Dicta tempora hic, quidem architecto cupiditate quaerat nulla iure tempore eum. Voluptas.
        <br />
        <br />
        </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Main;
