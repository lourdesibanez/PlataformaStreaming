'use client'
import { useEffect } from "react"

const Filter = ( {docs, setFiltrados, activeFilter, setActiveFilter}) => {
    
    useEffect(() => {

        if(activeFilter === 0){
            setFiltrados(docs);
            return
        }
        const filtrado = docs.filter((documental) => 
            documental.genre_ids.includes(activeFilter)
        );
        setFiltrados(filtrado);
    }, [activeFilter]);

  return (
    <div className="my-4"> 
        <button className={activeFilter === 0 ? "mx-2 px-4 py-2 text-sm text-white bg-indigo-300 rounded-lg" : "mx-2 px-3 py-1.5 text-sm text-indigo-600 duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200" } onClick={() => setActiveFilter(0)}>All</button>
        <button className={activeFilter === 28 ? "mx-2 px-4 py-2 text-sm text-white bg-indigo-300 rounded-lg" : "mx-2 px-3 py-1.5 text-sm text-indigo-600 duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200" } onClick={() => setActiveFilter(28)}>Accion</button>
        <button className={activeFilter === 16 ? "mx-2 px-4 py-2 text-sm text-white bg-indigo-300 rounded-lg" : "mx-2 px-3 py-1.5 text-sm text-indigo-600 duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200" } onClick={() => setActiveFilter(16)}>Animados</button>
        <button className={activeFilter === 18 ? "mx-2 px-4 py-2 text-sm text-white bg-indigo-300 rounded-lg" : "mx-2 px-3 py-1.5 text-sm text-indigo-600 duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200" } onClick={() => setActiveFilter(18)}>Drama</button>
        <button className={activeFilter === 27 ? "mx-2 px-4 py-2 text-sm text-white bg-indigo-300 rounded-lg" : "mx-2 px-3 py-1.5 text-sm text-indigo-600 duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200" } onClick={() => setActiveFilter(27)}>Terror</button>
    </div>
  )
}

export default Filter