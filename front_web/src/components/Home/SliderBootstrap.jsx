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
            const res = await fetch('http://localhost:8888/documentales');
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
            {documentales.slice(4, 7).map((item) => (
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
        </Carousel>
    );
}

export default SliderBootstrap