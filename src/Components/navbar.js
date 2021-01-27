/* eslint-disable no-lone-blocks */
import React, { useState } from "react";

import { 
  Flex, 
  Spacer, 
  Box,
  Center,
  Heading, 
  HStack, 
  Stack,
  Slide,
  IconButton
} from '@chakra-ui/react';
import { SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavBar = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);
  }

  return (
    <Slide direction='top' in={props.isOpen} style={{ zIndex: 10 }}>
      {/* =========== MAIN NAV - CONTAINER ============================= */}
      <Box 
        as='header' 
        width='100%'  
        borderTop='5px solid' 
        borderTopColor='green.500'
        fontFamily='fonts.custom'
        zIndex='10'
      >
        {/* =========== MAIN NAV - CONTAINER ============================= */}
        <Flex 
          flexDir={{ base:'column', md:'row'}} 
          color='white' 
          m='auto' 
          maxW='1200px' 
          p={{base: '0 30px', xl: '0'}} 
          align='center'
        >
          {/* =========== MAIN NAV - CONTAINER ============================= */}
          <Flex alignItems='center' w={{base:'100%', md:'initial'}} justifyContent='space-between'>
            {/* =========== MAIN NAV lOGO CONTAINER ============================= */}
            <HStack spacing={3}>
              {/* =========== MAIN NAV - lOGO ICON ============================= */}
              <Box>
                <SunIcon filter='drop-shadow(.5px 2.5px 2px rgba(0, 0, 0, .55))' w={8} h={8} />
              </Box>
              {/* =========== MAIN NAV - lOGO TEXT ============================= */}
              <Box py={5}>
                <Heading 
                  textShadow='0px 4px 3px rgba(0,0,0,0.25),
                    0px 8px 13px rgba(0,0,0,0.1),
                    0px 18px 23px rgba(0,0,0,0.1)' 
                  size='md'
                >
                  Company Name
                </Heading>
              </Box>
            </HStack>
            {/* =========== MAIN NAV - MENU CLOSE ICON ============================= */}
            <IconButton 
              aria-label='Open menu' 
              display={{base: 'block', md:'none'}} 
              color='white' 
              variant='ghost' 
              icon={(isMenuOpen) ? <CloseIcon boxSize={7} /> : <HamburgerIcon boxSize={7} />}
              _hover={{ bgColor:'green.500'}}
              onClick={handleMenuClick}
            />
          </Flex>
          {/* =========== MAIN NAV - SPACER ============================= */}
          <Spacer />
          {/* =========== MAIN NAV - LINKS CONTAINER ============================= */}
          <Stack 
            spacing={{base: 0, md: 0 }} 
            display={{ base: `${(isMenuOpen) ? 'flex' : 'none'}`, md:'flex' }}
            flexDir={{ base: 'column', md:'row'}}
            w={{ base: '100%', md: 'initial' }}
            animation={{
              base: 'fadeIn .25s',
              md: 'none'
            }}
          >
            {/* =========== MAIN NAV - HOME BTN CONTAINER ============================= */}
            <Center 
              as='a' 
              target='_blank' 
              cursor='pointer'
              height='100%'
              py={5}
              px={4} 
              userSelect='none' 
              bgColor={{ base: 'green.400', md:'transparent' }} 
              _hover={{ color: 'white', bgColor: 'green.500' }}
              w={{
                base: '100%', 
                md: 'initial'
              }}
              filter={{ base:'drop-shadow(.5px 2.5px 2px rgba(0, 0, 0, .2))', md: 'none' }}
              zIndex='2'
            >
              {/* =========== MAIN NAV - HOME BTN ============================= */}
              <Heading 
                textShadow='
                  0px 4px 3px rgba(0,0,0,0.25),
                  0px 8px 13px rgba(0,0,0,0.1),
                  0px 18px 23px rgba(0,0,0,0.1)
                ' 
                size='md'
              >
                Home
              </Heading>
            </Center>
            {/* =========== MAIN NAV - SERVICES BTN CONTAINER ============================= */}
            <Center 
              as='a' 
              target='_blank' 
              cursor='pointer'
              height='100%' 
              py={5} 
              px={4} 
              userSelect='none'  
              bgColor={{ base: 'green.400', md:'transparent' }}
              _hover={{ color: 'white', bgColor: 'green.500' }}
              w={{
                base: '100%', 
                md: 'initial'
              }}
              filter={{ base:'drop-shadow(.5px 2.5px 2px rgba(0, 0, 0, .2))', md: 'none' }}
              zIndex='1'
              animation={{
                base: 'slideDown .35s ease-out',
                md: 'none'
              }}
            >
            {/* =========== MAIN NAV - SERVICES BTN ============================= */}
              <Heading 
                textShadow='
                  0px 4px 3px rgba(0,0,0,0.25),
                  0px 8px 13px rgba(0,0,0,0.1),
                  0px 18px 23px rgba(0,0,0,0.1)
                ' 
                size='md'
              >
                Services
              </Heading>
            </Center>

            {/* =========== MAIN NAV  - CONTACT BTN CONTAINER ============================= */}
            <Center 
              as='a' 
              target='_blank' 
              cursor='pointer' 
              height='100%'
              py={5} 
              px={4} 
              userSelect='none' 
              bgColor={{ base: 'green.400', md:'transparent'}}
              _hover={{ color: 'white', bgColor: 'green.500'}}
              w={{
                base: '100%', 
                md: 'initial'
              }}
              filter={{ base:'drop-shadow(.5px 2.5px 2px rgba(0, 0, 0, .4))', md: 'none' }}
              animation={{
                base: 'slideDown .55s ease-out',
                md: 'none'
              }}
            >
              {/* =========== MAIN NAV  - CONTACT BTN ============================= */}
              <Heading 
                textShadow='0px 4px 3px rgba(0,0,0,0.25),
                  0px 8px 13px rgba(0,0,0,0.1),
                  0px 18px 23px rgba(0,0,0,0.1)
                ' 
                size='md'
              >
                Contact
              </Heading>
            </Center>
          </Stack>
        </Flex>
      </Box>
    </Slide>
  );
}

export default NavBar;