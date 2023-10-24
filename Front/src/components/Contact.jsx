import React from "react"
import styled from "@emotion/styled"
import "../css/Form.css"
import ImagenContact from "../img/contact.png"

const Imagen = styled.img`
    width: 100%;

    @media screen and (max-width: 1160px) {

    }
    @media screen and (max-width: 950px) {

    }
    @media screen and (max-width: 768px) {
        width: 80%;
    }

`



const Contact = () => {
  return (
    <>
   
      
<div class="container4">
  <div class="content">
    <div class="image-box">
    <Imagen
            src={ImagenContact}
        />	
    </div>
  <form action="" method="POST">
     
    <div class="topic">¡Contactenos!</div>
    <div class="input-box">
      <input type="text" required name="nombre"></input>
      <label>Nombre</label>
    </div>
    <div class="input-box">
      <input type="text" name="correo" required></input>
      <label>Correo</label>
    </div>

    <div class="message-box" >
      <textarea name="mensaje" id="" cols="30" rows="10"></textarea>
      <label>Mensaje</label>
    </div>
    <div class="input-box">
      <input type="submit" value="Enviar Mensaje"></input>
    </div>
  </form>
</div>
</div>
     
  
      
    </>
  )
}
export default Contact