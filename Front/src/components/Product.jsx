import React from "react"
import styled from "@emotion/styled"
import CardPrice from "./Card_price"




const Informacion = styled.h1`
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 52px;

text-align: center;

color: #191D23;

flex: none;
order: 0;
flex-grow: 0;
`

const Descripcion = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;

/* identical to box height */
text-align: center;

/* Neutral / 800 */
color: #191D23;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
`
const Caja = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: center;
`

const Precios = styled.h1`
font-family: 'Manrope';
font-style: normal;
font-weight: 800;
font-size: 40px;
line-height: 52px;

text-align: center;

color: #191D23;
`
const Boton = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 600;
font-height: 22px

text-align: center;

color: #1D4ED8;
`

const Product = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
        
        
      <Informacion>Nuestros Productos</Informacion> 
      <Descripcion>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat sint perferendis eius fugit vero deserunt.</Descripcion>

      <Caja>
        <CardPrice clase="imgbox" title="Empanada" price="$1.500"  />	 
        <CardPrice clase="imgbox2" title="Pastel Melo" price="$2.500 c/u"  />
        <CardPrice clase="imgbox" title="Arepa Kool" price="$2.000 c/u"  />
      </Caja>
    
    </>
  )
}
export default Product