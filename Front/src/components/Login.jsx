import React from 'react'
import styled from '@emotion/styled'
import "../css/login.css"
import "../js/login.js"




const Contenedor = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  margin-top:40px;
  margin-bottom:40px;
  `



export const Login = () => {
  return (

    <>  
    <Contenedor>

    
      <div class="container5" id="container5">
        <div class="form-container sign-up-container">
          <form action="#" className='form_login'>
            <h1>Create Account</h1>
            <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input className='input_login' type="text" placeholder="Name" />
            <input className='input_login' type="email" placeholder="Email" />
            <input className='input_login' type="password" placeholder="Password" />
            <button className='ghost'>Sign Upx</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#" className='form_login'>
            <h1>Iniciar Sesion</h1>
            
            <span>or use your account</span>
            <input className='input_login' type="email" placeholder="Email" />
            <input className='input_login' type="password" placeholder="Password" />
           <br />
            <button className='buttonl'>Iniciar Sesion</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="buttonl" id="signIn">Iniciar Sesion</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Registrate</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="button2" id="signUp">Registrar</button>
            </div>
          </div>
        </div>
      </div>
    </Contenedor>
   
  
  
  </>
    
  )
}

export default Login