import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DocCardHome from './DocCardHome'
import { motion, AnimatePresence } from "framer-motion";

const DocList = () => {
    

    const [documentales, setDocumentales] = useState([]);
    const [loading, setLoading] = useState(true);
    // Obtener el token guardado en localStorage
    let navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        if(token){
            fetchDocs(token);
        }
        else{
            console.log("User no logueado");
            navigate("/login");
        }

    }, []);

    const fetchDocs = async (token) => {
        try {

            // use a global file for the urls
            const res = await fetch('http://localhost:8888/recomendados/1', {
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json',
                }});
            const jsonData = await res.json();
            setDocumentales(jsonData);
            console.log("entre al fetch")
        }
        catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="custom-loader"></div>;
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
