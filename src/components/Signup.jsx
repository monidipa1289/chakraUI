import React from 'react';
import {Container ,Avatar, VStack, Heading ,Input ,HStack, Button, Text} from '@chakra-ui/react'
import {Link} from 'react-router-dom';
const Signup = () => {
    return <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack alignItems={'stretch'} spacing={'8'} m={'auto'} w={['full','96']} my={'16'} >
                <Heading alignSelf={'center'} >
                   Video Hub
                </Heading>

                <Avatar alignSelf={'center'} boxSize={'32'} />

                 <Input 
                placeholder={'Name'} 
                type={'text'} 
                required focusBorderColor='purple.500'
                 />   
                <Input 
                placeholder={'Email'} 
                type={'email'} 
                required focusBorderColor='purple.500'
                 />
                 <Input 
                placeholder={'Password'} 
                type={'password'} 
                required focusBorderColor='purple.500'
                 />

                 
                 <Button to={'/signup'} variant={'solid'} type='submit' colorScheme='purple' >
                    Sign Up
                 </Button>
                 <HStack display={'flex'} justifyContent={'flex-end'}  >
                 <Text  >Already Existing User ?</Text>
                 <Button  variant={'outline'} borderLeft={'10px'} m={'2'} >
                    <Link to={'/login'}>Log in</Link>
                 </Button>
                 </HStack>
            </VStack>
        </form>
    </Container>
}
 
export default Signup;