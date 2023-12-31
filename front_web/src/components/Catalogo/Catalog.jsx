import { useEffect, useState } from "react";
import DocumentalCard from "./DocumentalCard";
import { motion, AnimatePresence } from "framer-motion";


const Catalog = () => {

    const [documentales, setDocumentales] = useState([]);
    const [loading, setLoading] = useState(true);
    //onst [activeFilter, setActiveFilter] = useState(0);

    useEffect(() => {

        fetchDocs("http://localhost:8888/documentales", setDocumentales);

    }, []);


    const fetchDocs = async (endpoint) => {
        try {
            const res = await fetch(endpoint);
            const jsonData = await res.json();
            if (endpoint !== 'http://localhost:8888/documentales') {
                setDocumentales(jsonData);
            } else {
                setDocumentales(jsonData.data); // Si el endpoint es 'localhost/documentales', toma la propiedad 'data'
            }
        }
        catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleButtonClick = async (endpoint) => {
        console.log(endpoint);
        setLoading(true);
        setDocumentales([]);
        await fetchDocs(endpoint);
    };

    if (loading) {
        return <div>
            <div className="w-100 ml-0 my-4 d-flex justify-content-between">
                <div>
                    <p className="text-light">Catalogo Completo</p>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/documentales')}>Todos</button>
                </div>
                <div>
                    <p className="text-light">Categorias</p>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxcategoria/2')}>Artistico</button>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxcategoria/3')}>Historia</button>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxcategoria/4')}>Educativo</button>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxcategoria/4')}>Deportes</button>
                </div>
                <div className="text-light">
                    <p>Region</p>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxregion/1')}>América</button>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxregion/2')}>Europa</button>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxregion/3')}>Asia</button>
                </div>
                <div className="text-light">
                    <p>MPAA</p>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxmpaa/1')}>Todo Publico</button>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxmpaa/3')}>PG-13</button>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxmpaa/5')}>NC-17 (+18)</button>
                </div>
            </div>
            <div className="custom-loader"></div>;
        </div>;
    }

    return (
        <div className="w-100 container">
            <div className="w-100 ml-0 my-4 d-flex justify-content-between">
                <div>
                    <p className="text-light">Catalogo Completo</p>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/documentales')}>Todos</button>
                </div>
                <div>
                    <p className="text-light">Categorias</p>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxcategoria/2')}>Artistico</button>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxcategoria/3')}>Historia</button>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxcategoria/4')}>Educativo</button>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxcategoria/4')}>Deportes</button>
                </div>
                <div className="text-light">
                    <p>Region</p>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxregion/1')}>América</button>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxregion/2')}>Europa</button>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxregion/3')}>Asia</button>
                </div>
                <div className="text-light">
                    <p>MPAA</p>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxmpaa/1')}>Todo Publico</button>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxmpaa/3')}>PG-13</button>
                    <button className="btn btn-outline-light me-2 mt-2" onClick={() => handleButtonClick('http://localhost:8888/docxmpaa/5')}>NC-17 (+18)</button>
                </div>
            </div>
            <motion.div
                layout
                className="container catalog-content"

            >
                <AnimatePresence>
                    {documentales.map((item) => (
                        <DocumentalCard key={item.id} doc={item} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default Catalog