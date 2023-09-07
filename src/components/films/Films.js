import "./Film.css"
import { useTheme } from "../others/ThemeContext"
import Navbar from '../navbar/Navbar'
import {
    Button,
    // Modal,
    // ModalOverlay,
    // ModalContent,
    // ModalHeader,
    // ModalFooter,
    // ModalBody,
    // ModalCloseButton,
    // useDisclosure
} from '@chakra-ui/react'
// import ShowDetails from "./ShowDetails"
import { useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
// import FilmDetails from "./FilmDetails"

export default function Films({ films }) {
    const navigate = useNavigate()
    // const {onClose} = useDisclosure()
    // const [modalOpen, setModalOpen] = useState(false)

    const darkTheme = useTheme()
    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "rgb(235, 235, 235)",
        color: darkTheme ? "#FFF" : "#333",
    }
    
    const getChosenFilm = useCallback((film) => {
        // setModalOpen(true)
        navigate(`/${film.id}`)
    }, [])

    return (
        <div className="film-container" style={themeStyles}>
            <Navbar />
            {
                films?.map((film) => (
                    <div className="film-item" key={film.id}>
                        <div className="film-image">
                            <img src={film.image}
                                alt={film.title}
                                className="image-content" />
                        </div>

                        <div className="film-title">
                            <h3>{film.title}</h3>
                        </div>

                        <div className="film-released">
                            <h5><b>({film.year})</b></h5>
                        </div>

                        <div className="film-nation">
                            <img src={film.nation}
                                alt={film.title}
                                className="nation-image" />
                        </div>

                        <div className="film-desc">
                            <p><i><b>Description: </b></i>{film.description}</p>
                        </div>

                        <Button className="film-button"
                            colorScheme='blackAlpha'
                            variant={darkTheme ? 'solid' : 'outline'}
                            onClick={() => getChosenFilm(film)}>
                            Details
                        </Button>

                        {/* <Modal onClose={onClose}
                            isOpen={modalOpen}
                            isCentered
                            size='xl'
                            scrollBehavior='inside'
                            item={chosenFilm}
                            closeOnOverlayClick={true}
                            >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>FILM DETAILS</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <ShowDetails film={chosenFilm} />
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={onClose}>Close</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal> */}
                    </div>
                ))
            }

        </div>
    )
}