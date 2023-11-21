'use client'
import { useEffect, useState } from "react";
import DocumentalCard from "../components/DocumentalCard";
import Filter from "../components/Filter";
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
            const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=fecf56db2c6cbb5e281fd36f5ebf9b5e');
            const data = await res.json();
            setDocumentales(data.results);
            setFiltrados(data.results);
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
        <div className="w-full m-auto px-8">
            {/* Con el filtro podriamos armar por categorias de filtrado , hay que adaptarlo a nuestra api 
                porque lo hice con otra para armar bien los layout y filtrar por categorias
            */}
            <Filter docs={documentales} setFiltrados={setFiltrados} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8"

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