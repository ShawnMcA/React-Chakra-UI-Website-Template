import React from 'react';
import { Stack, Button, Box, Heading, Flex, Center } from '@chakra-ui/react';
import { EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import bg from '../Media/bgmain.jpg';

const Hero = () => {
  return(
    // ========================== HERO CONTAINER ============================= //
    <Box 
      h='100vh' 
      w='100%' 
      bgImage={`url(${bg})`}
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      {/* ========================== HERO CONTENT CONTAINER ============================= */}
      <Center 
        justifyContent='center' 
        h='100%' 
        w='100%' 
        px={8}
        bgGradient='linear(to-b, rgba(0, 0, 0, .4) 0%, rgba(255, 255, 255, .1) 30%)'
      >
        {/* ========================== HERO CONTENT CONTAINER ============================= */}
        <Flex direction='column' color='white' align='center'>
          {/* ========================== HERO HEADER ============================= */}
          <Heading 
            as='h1' 
            size='4xl' 
            textShadow='
              0px 4px 3px rgba(0,0,0,0.2),
              0px 8px 13px rgba(0,0,0,0.1),
              0px 18px 23px rgba(0,0,0,0.1)
            '
            fontFamily="stylized"
          >
            Header text here...
          </Heading>
          {/* ========================== HERO SUB-HEADER ============================= */}
          <Heading 
            as='h2' 
            fontSize={24} 
            textShadow='
              0px 4px 3px rgba(0,0,0,0.2),
              0px 8px 13px rgba(0,0,0,0.1),
              0px 18px 23px rgba(0,0,0,0.1)
            '
            maxW='80%'
          >
            Call to action subtext
          </Heading>
          {/* ========================== HERO BUTTONS CONTAINER ============================= */}
          <Stack direction="row" spacing={5} justify='flex-end' mt='20px'>
            <Button leftIcon={<EmailIcon />} colorScheme='green' variant="solid" filter='drop-shadow(.5px 2.5px 2px rgba(0, 0, 0, .4))'>
              Email
            </Button>
            <Button rightIcon={<ArrowForwardIcon />} colorScheme="green" variant="solid" filter='drop-shadow(.5px 2.5px 2px rgba(0, 0, 0, .4))'>
              Call Us
            </Button>
          </Stack>
        </Flex>
      </Center>
    </Box>
  );
}

export default Hero;