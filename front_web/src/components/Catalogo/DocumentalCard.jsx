import { motion } from "framer-motion"
import { Link } from "react-router-dom";


const DocumentalCard = ( { doc } ) => {
  return (
    <motion.div 
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout 
        >
        <h2 className="catalog-img-title">{doc.titulo}</h2>
        <Link to="/verdoc">
          <img 
            src={doc.img}
            alt={`path to: ${doc.titulo}`}
            className="catalog-img"
            />
        </Link>
            
    </motion.div>
  )
}

export default DocumentalCard