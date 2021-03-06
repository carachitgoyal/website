import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Text,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';
import Location from '../Images/location.png';
import Mobile from '../Images/mobile.png';
import Mail from '../Images/mail.png';

const ContactUS = props => {
  return (
    <Center
      ref={props.reference}
      mx="auto"
      flexDirection={'column'}
      my={{ base: '4rem', md: '10rem' }}
      gap="2rem"
    >
      <Heading>Contact Us</Heading>
      <Wrap
        justify={'space-between'}
        align={'center'}
        maxW="5xl"
        w="fit-content"
      >
        <HStack px={'1.5rem'} w="fit-content">
          <Image h={{ base: '2rem', md: '4rem' }} src={Mobile} />
          <Box fontSize={{ base: 'sm', md: 'md' }}>
            <Text>Phone - 0172-2775657</Text>
            <Text>Whatsapp - 9041611199</Text>
          </Box>
        </HStack>
        <HStack px={'1.5rem'} w="fit-content">
          <Image h={{ base: '2rem', md: '4rem' }} src={Location} />
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            <a href="https://goo.gl/maps/UgszV4ADNKyKXpa98">
              Location - #3317, Sector 19D,
              <br /> Chandigarh, 160019
            </a>
          </Text>
        </HStack>
        <HStack px={'1.5rem'} w="fit-content">
          <Image h={{ base: '2rem', md: '4rem' }} src={Mail} />
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            <a href="mailto:aarsh.asso@gmail.com">
              Email - aarsh.asso@gmail.com
            </a>
          </Text>
        </HStack>
      </Wrap>
    </Center>
  );
};

export default ContactUS;
