import { Box, Heading, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import Navbar from '../navbar/Navbar'

export default function Success() {
    return (
        <>
            <Navbar />
            <Box textAlign="center" py={10} px={6}>
                <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
                <Heading as="h2" size="xl" mt={6} mb={2}>
                    Your words have been sent to be listened to.
                </Heading>
                <Text color={'gray.500'}>
                    Thank you for having your time sharing us your experience about the system. We never stop figuring out to develop the best things for you.
                </Text>
            </Box>
        </>
    )
}