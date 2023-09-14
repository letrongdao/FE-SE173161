import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import {
    Flex,
    Box,
    FormLabel,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import './Login.css'

export default function Login() {

    const initialValues = {
        email: '',
        password: ''
    }

    const checkLogin = (values) => {
        let email, password
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response.data.id)
            })
            .catch(error => {
                console.error('Data error: ', error)
            })
            .finally(() => {
                // console.log("Email: ", email, " -  Password: ", password)
            })
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to get access to the <Text color={'blue.400'}>features</Text>
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={checkLogin}
                            dirty>
                            {({ values }) => (
                                <Form id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Field type="email" name='email' className='login-input' />

                                    <FormLabel>Password</FormLabel>
                                    <Field type="password" name='password' className='login-input' />

                                    <Stack spacing={10} mt={5}>
                                        <Stack
                                            direction={{ base: 'column', sm: 'row' }}
                                            align={'start'}
                                            justify={'space-between'}>
                                            <Checkbox>Remember me</Checkbox>
                                            <Text color={'blue.400'}>Forgot password?</Text>
                                        </Stack>
                                        <Button
                                            type='submit'
                                            bg={'blue.400'}
                                            color={'white'}
                                            _hover={{
                                                bg: 'blue.500',
                                            }}>
                                            Sign in
                                        </Button>
                                    </Stack>
                                </Form>
                            )}
                        </Formik>
                    </Stack>
                </Box>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const credentialResponseDecoded = jwt_decode(credentialResponse.credential)
                        console.log(credentialResponseDecoded);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </Stack>
        </Flex>
    )
}