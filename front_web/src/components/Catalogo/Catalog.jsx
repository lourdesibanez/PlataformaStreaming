import { useEffect, useState } from "react";
import DocumentalCard from "./DocumentalCard";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";


const Catalog = () => {

    const [documentales, setDocumentales] = useState([]);
    const [filtrados, setFiltrados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState(0);

    useEffect(() => {

        fetchDocs();

    }, []);


    const fetchDocs = async () => {
        try {
            const res = await fetch('http://localhost/documentales');
            const jsonData = await res.json();
            setDocumentales(jsonData.data);
            setFiltrados(jsonData.data);
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
        <div className="w-100 container">
            {/* Con el filtro podriamos armar por categorias de filtrado , hay que adaptarlo a nuestra api 
                porque lo hice con otra para armar bien los layout y filtrar por categorias
            */}
            <Filter docs={documentales} setFiltrados={setFiltrados} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <motion.div
                layout
                className="container catalog-content"

            >
                <AnimatePresence>
                    {filtrados.map((item) => (
                        <DocumentalCard key={item.id} doc={item} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default Catalog