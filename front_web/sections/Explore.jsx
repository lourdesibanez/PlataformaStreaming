'use client';

import { useState , useEffect } from "react";


const Explore = () => {
  const [tortas, setTortas] = useState([]);
  
  const url = 'http://localhost/documentales';
  
  useEffect(() => {
    fetchTortas();
  }, []);

  const fetchTortas = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTortas(data.data);
      console.log(data.data);
    } catch (error) {
      console.error('Error fetching Tortas:', error);
    }
    console.log(tortas);
  };

  return( 
  <section>
    
  </section>
)};

export default Explore;
