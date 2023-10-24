import styled from '@emotion/styled'
import React from 'react'
import "../css/Card_price.css"

const Caja = styled.div`
display: flex;
align-items: flex-start;
width: 318px;
column-count: 3;
filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
margin-bottom: 40px;

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


export const Card_price = (props) => {
  return (
    <Caja>
    <div className={props.clase} id="imgbox1"><Informacion>{props.title}</Informacion>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <Precios>{props.price}</Precios>
          <button className="button2"><Boton>Pidelo Ya</Boton></button>
          <br></br>
          <br></br>
          <ol>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          </ol>
    
    </div>

   
    </Caja>
  )
}

export default Card_price