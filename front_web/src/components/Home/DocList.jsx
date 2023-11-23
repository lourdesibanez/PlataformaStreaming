import { useState, useEffect } from 'react';
import DocCardHome from './DocCardHome'
import { motion, AnimatePresence } from "framer-motion";

const DocList = () => {
    

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
        <div className="container">
            <h2 className='titulo-cat'> Recomendados </h2>
            <motion.div
                layout
                className="container catalog-content"

            >
                <AnimatePresence>
                    {documentales.map((item) => (
                        <DocCardHome key={item.id} doc={item} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default DocList