import { useState } from 'react'
import React from 'react'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from "./paginas/Home"
import Product from "./paginas/Products"
import Contact from "./paginas/Contact"
import Login from "./paginas/Login"
import Register from "./paginas/Register"
import Footer from "./components/Footer"



function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/product' compoent={Product} exact>
            <Product />
          </Route>
          <Route path='/contact' compoent={Contact} exact>
            <Contact />
          </Route>
          <Route path='/login' compoent={Login} exact>
            <Login />
          </Route>
          <Route path='/register' compoent={Register} exact>
            <Register />
          </Route>
        </Switch>
      </Router>


      <Footer />
    </>
    

  
  )
}

export default App
