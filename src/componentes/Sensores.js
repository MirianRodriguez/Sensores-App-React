import React from 'react'
import { useState, useEffect } from 'react';

export default function Sensores() {
    const [sensores, setSensores] = useState([])

    const url = "http://localhost:8080/sensores"

    async function getApi() {
        const response = await fetch(url);
        const data = await response.json()

        setSensores(data)

      }

    useEffect(() => {getApi();}, [])

    const mostrar = sensores.map(
      (sensor) =>
    
        <div style={{margin:"20px"}}>
            <div>{`Id: ${sensor.id}`}</div>
            <div>{`Nombre: ${sensor.nombre}`}</div>
        </div>
    
     )
  
  return (
    <div>{mostrar}</div>
  )
}
