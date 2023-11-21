'use client'

import { motion } from "framer-motion"

const DocumentalCard = ( { doc } ) => {
  return (
    <motion.div 
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout 
        >
        <h2 className="text-sm text-center text-white">{doc.original_title}</h2>
        <img 
            src={`https://image.tmdb.org/t/p/w500${doc.backdrop_path}`} 
            alt="poster"
            className="w-full h-3/4 min-h-[240px] object-cover rounded-2xl mb-4"
            />
    </motion.div>
  )
}

export default DocumentalCard