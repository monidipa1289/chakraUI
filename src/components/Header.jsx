import React from 'react';
 import {Stack, HStack, VStack} from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton ,
    Button,
    useDisclosure} from '@chakra-ui/react';
    import {Link} from 'react-router-dom';
    import {BiMenuAltLeft} from 'react-icons/bi';
const Header = () => {
    const {isOpen,onOpen,onClose}=useDisclosure();
    return <>
      <Button
       pos={'fixed'}
       left={"4"}
       top={"4"}
       colorScheme='purple'
       p={'0'}
       w={'10'}
       h={'10'}
       zIndex={'overlay'}
       borderRadius={'full'}
       onClick ={onOpen}>
         <BiMenuAltLeft size={'25'}/>
        </Button>
        <Drawer isOpen={isOpen} placement='left' onClose={onClose} >
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>VIDEO HUB</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={'flex-start'}>
                        <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                            <Link to={'/'}>Home</Link>
                        </Button>
                        <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                            <Link to={'/video'}>Video</Link>
                        </Button>
                        <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                            <Link to={'/videos?category=free'}>Free Video</Link>
                        </Button>
                        <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                            <Link to={'/upload'}>Upload Video</Link>
                        </Button>
                    </VStack>
                    <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'center'}>
                        <Button onClick={onClose} colorScheme='purple' >
                            <Link to={'/login'}>Login</Link>
                        </Button >
                        <Button onClick={onClose} variant={'outline'} colorScheme='purple'>
                            <Link to={'/signup'}>Sign up</Link>
                        </Button>
                    </HStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>;
};
 
export default Header;