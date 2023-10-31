'use client'
import React, { useState, useEffect } from 'react';

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const [documentales, setDocumentales] = useState([]);
  const [selectedDocumental, setSelectedDocumental] = useState(null);
  const url = 'http://localhost/documentales';
  
  useEffect(() => {
    fetchDocumentales();
  }, []);

  const fetchDocumentales = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setDocumentales(data.data);
    } catch (error) {
      console.error('Error fetching Documentales:', error);
    }
  };

  //html
  return (
    <h1>Acá va el html</h1>
  )

  // Código de ejemplo para ver cómo se usan algunos componentes
  /*
  <Container>
    <Row>
      <Col>
        <h1>CRUD de tortas</h1>
        <InputForm addTorta={addTorta} updateTorta={updateTorta} initialData={{ id: '', nombre: '', descripcion: '', precio: '' }} />
        <List tortas={tortas} viewTorta={setSelectedTorta} editTorta={setSelectedTorta} deleteTorta={deleteTorta} />
        {selectedTorta ? (
          <div>
            <Detail torta={selectedTorta} />
            <Edit torta={selectedTorta} updateTorta={updateTorta} />
          </div>
        ) : null}
      </Col>
    </Row>
  </Container>
  */
}
