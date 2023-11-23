import React from 'react'
import { Container } from 'react-bootstrap'
import SliderBootstrap from './SliderBootstrap'
import Catalog from '../Catalogo/Catalog'

const Home = () => {
    return (
        <Container fluid className='home p-0'>
            <SliderBootstrap />
            <Catalog />
        </Container>
    )
}

export default Home