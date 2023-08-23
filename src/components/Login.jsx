import React from 'react';
import {Container , VStack, Heading ,Input ,HStack, Button, Text} from '@chakra-ui/react'
import {Link} from 'react-router-dom';
const Login = () => {
    return <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack alignItems={'stretch'} spacing={'8'} m={'auto'} w={['full','96']} my={'16'} >
                <Heading>
                    Welcome Back 
                </Heading>
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

                 <Button variant={'link'} alignSelf={'flex-end'}  colorScheme='purple' >
                    <Link to={'/forgetpassword'}>Forget password</Link>
                 </Button>
                 <Button to={'/login'} variant={'solid'} type='submit' colorScheme='purple' >
                    Log In
                 </Button>
                 <HStack display={'flex'} justifyContent={'flex-end'}  >
                 <Text  >New user?</Text>
                 <Button to={'/signup'} variant={'outline'} borderLeft={'10px'} m={'2'} >
                     <Link to='/signup'>Sign Up 
                     </Link>
                    </Button>
                 </HStack>
            </VStack>
        </form>
    </Container>
}
 
export default Login ;