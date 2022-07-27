import React from 'react'
import { useState, useEffect } from 'react';

export default function Mediciones() {
    const [mediciones, setMediciones] = useState([])

    const url = "http://localhost:8080/mediciones"

    async function getApi() {
        const response = await fetch(url);
        const data = await response.json()
        setMediciones(data)
      }

    useEffect(() => {getApi();}, [])

    const mostrar = mediciones.map(
      (medicion) =>
    <div style={{margin: "20px"}}>
        <div>{`Id: ${medicion.id}`}</div>
        <div>{`Fecha y hora: ${medicion.fechaHora}`}</div>
        <div>{`Valor medido: ${medicion.valor}`}</div>
        <div>{`Sensor: ${medicion.sensor.nombre}`}</div>
    </div>
     )
  
  return (
    <div>{mostrar}</div>
  )
}
