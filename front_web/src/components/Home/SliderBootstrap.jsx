import Carousel from 'react-bootstrap/Carousel';

const SliderBootstrap = () => {
    return (
        <Carousel fade className='carouselClass'>
            <Carousel.Item className='carouselItem'>
                <img 
                    src="/calden.jpg"
                    alt='slider'
                    className='img-slider'
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carouselItem'>
                <img 
                    src="/festival.jpg"
                    alt='slider'
                    className='img-slider'
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carouselItem'>
                <img 
                    src="/scooter.jpg"
                    alt='slider'
                    className='img-slider'
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SliderBootstrap