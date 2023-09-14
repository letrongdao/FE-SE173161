import React from 'react'
import './ShowDetails.css'
import {
    Button,
    Img,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Navbar from '../navbar/Navbar'
import { useTheme } from '../others/ThemeContext'
import Youtube from 'react-youtube'

export default function ShowDetails({ film }) {
    const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const opts = {
        height: '450',
        width: '700',
        playerVars: {
            autoplay: 1,
        },
    }
    const onPlayerReady = (event) => {
        event.target.playVideo()
    }

    const darkTheme = useTheme()
    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#FFF",
        color: darkTheme ? "#FFF" : "#333",
    }

    return (
        <div style={themeStyles} >
            <Navbar />
            <div className='details-container' style={themeStyles}>
                <div className='details-image'>
                    <Img src={film.image}
                        boxSize='500px'
                        alt={film.title} />
                </div>
                <div className='details-title'>
                    <h1>{film.title}</h1>
                </div>
                <div className='details-info'>
                    <span className='genre'>Genre: {film.genre}</span>
                    <span className='year'>Released: {film.year}</span>
                    <span className='nation'>
                        <Img src={film.nation}
                            borderRadius='full'
                            boxSize='100px'
                            alt={film.title} />
                    </span>
                </div>
                <div className='details-button'>
                    <Button onClick={onOpen}
                        colorScheme='blue'>
                        Watch trailer
                    </Button>

                    <Button onClick={() => {
                        navigate('/')
                    }}
                        colorScheme='gray'>
                        <ChevronLeftIcon />
                    </Button>
                </div>
                <div className='details-description'>
                    <Text>{film.description}</Text>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay>
                    <ModalContent
                        bgColor={'transparent'}
                        minWidth='fit-content'
                        height='fit-content'>
                        <ModalBody>
                            <Youtube videoId={film.trailer} opts={opts} onReady={onPlayerReady} />
                        </ModalBody>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </div>
    )
}
