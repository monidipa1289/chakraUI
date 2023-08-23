import React from 'react';
import {Box,Text, VStack, Stack,HStack, Heading,Button, Input} from '@chakra-ui/react';
import { AiOutlineSend } from "react-icons/ai";
export default function Footer() {
  return <Box bgColor={'blackAlpha.900'} minH={"40"} p="16" color={'white'}>
    <Stack direction={['column' ,'row']} >
    <VStack w={'full'} alignItems={'stretch'} px={'4'}  >
        <Heading size="md" textTransform={'upperacse'}>
            subscribe to get updates
        </Heading>
        <HStack
         borderBottom={'2px solid white'}
         p={'2'}>
            <Input placeholder='Enter email here'
            outline={'none'}
            border={'none'}
            focusBorderColor='none'/>
            <Button 
            p={'0'}
            colorScheme='purple'
            variant={'ghost'}
            >
                <AiOutlineSend size={20}/>
            </Button>
        </HStack>
    </VStack>
    <VStack 
    w={'full'}
     borderLeft={['none','1px solid']}
     borderRight={['none','1px solid']}>
        <Heading textTransform={'uppercase'}
        textAlign={'center'}
        >
            VIDEO HUB
        </Heading>
        <Text> All rights are reserved</Text>
    </VStack>
    <VStack w={'full'}>
        <Heading  size={'md'} textTransform={'uppercase'}>
            Socia Media
        </Heading>
        <HStack>
        <Button variant={'outline'} colorScheme={'red'} >
            <a href="https://github.com/">Github</a>
        </Button>
        <Button variant={'outline'} colorScheme={'pink'} >
            <a href="https://www.instagram.com/">Instagram</a>
        </Button>
        </HStack>
        <Button variant={'outline'} colorScheme={'whatsapp'} >
            <a href="https://web.whatsapp.com/">whatsapp</a>
        </Button>
    </VStack>
    </Stack>
  </Box>
  
};
