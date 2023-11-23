import { motion } from "framer-motion"

const DocumentalCard = ( { doc } ) => {
  return (
    <motion.div 
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout 
        >
        <h2 className="catalog-img-title">{doc.titulo}</h2>
        <img 
            src={doc.img}
            alt={`path to: ${doc.titulo}`}
            className="catalog-img"
            />
    </motion.div>
  )
}

export default DocumentalCard