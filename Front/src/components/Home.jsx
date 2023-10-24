import React from "react"
import styled from '@emotion/styled'
import Intro from "./Intro"
import CardP from "./Card_product"
import Maps from "./Maps"
import Questions from "./Questions"


import ImagenPastel from "../img/pastel.png"
import ImagenEmpanada from "../img/empanada.png"
import ImagenArepa from "../img/arepa.png"

import { Link } from "react-router-dom"


const Contenedor = styled.div`
  width: 100%;
  background-color: #dddddd;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  `


  const Heading = styled.a `
  font-family: 'Lato', sans-serif;
  Color: #000000;
  cursor: pointer;
  font-size: 25px;
  margin-bottom: 25px;
  `


const Home = () => {
  return (
    <>
      <Intro />
      <Contenedor>
        <CardP title="Empanada Dorada" price="$1.500" imagen={ImagenEmpanada}  />	 
        <CardP title="Pastel Melo" price="$2.500 c/u" imagen={ImagenPastel} />
        <CardP title="Arepa Kool" price="$2.000 c/u" imagen={ImagenArepa} />
        <Heading>
        
        <Link to='/product'>
          <a>Ver todos los productos</a>
        </Link>
            
        </Heading> 	  	
      </Contenedor>
    
     
      <Questions/>  
      <Maps/>
     
    
    
    </>
  )
}
export default Home