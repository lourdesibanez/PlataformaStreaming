import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';

const SliderBootstrap = () => {

    const [documentales, setDocumentales] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        fetchDocs();

    }, []);


    const fetchDocs = async () => {
        try {
            const res = await fetch('http://localhost/documentales');
            const jsonData = await res.json();
            setDocumentales(jsonData.data);
        }
        catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Carousel fade className='carouselClass'>
            {documentales.slice(0, 3).map((item) => (
                <Carousel.Item key={item.id} className='carouselItem'> 
                    <img
                    src={item.img}
                    alt='slider'
                    className='img-slider'
                />
                <Carousel.Caption>
                    <h3>{item.titulo}</h3>
                    <p>{item.descripcion}</p>
                </Carousel.Caption>
                </Carousel.Item>
            ))}
            {/* <Carousel.Item className='carouselItem'>
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
            </Carousel.Item> */}
        </Carousel>
    );
}

export default SliderBootstrap