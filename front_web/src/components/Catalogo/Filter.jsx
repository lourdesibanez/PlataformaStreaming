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
    <div className="ml-0 my-4"> 
        <button className={activeFilter === 0 ? "btn btn-info me-2" : "btn btn-outline-info me-2" } onClick={() => setActiveFilter(0)}>All</button>
        <button className={activeFilter === 28 ? "btn btn-info me-2" : "btn btn-outline-info me-2" } onClick={() => setActiveFilter(28)}>Accion</button>
        <button className={activeFilter === 16 ? "btn btn-info me-2" : "btn btn-outline-info me-2" } onClick={() => setActiveFilter(16)}>Animados</button>
        <button className={activeFilter === 18 ? "btn btn-info me-2" : "btn btn-outline-info me-2" } onClick={() => setActiveFilter(18)}>Drama</button>
        <button className={activeFilter === 27 ? "btn btn-info me-2" : "btn btn-outline-info me-2" } onClick={() => setActiveFilter(27)}>Terror</button>
    </div>
  )
}

export default Filter