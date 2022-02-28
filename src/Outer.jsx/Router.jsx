import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Routes, Route , Link} from "react-router-dom"
import  { About, Contact } from './About';
// import { Routes, Route } from "react-router-dom";
import Img from "./egs.png"
 const Outer = () => {
  return (
    <div>
 
       <section>
       <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className=" ml-5 mx-2  align-items-center">
      <Link to="/" className='my-1' >Home</Link>
      <Link to="/about" className='' >About</Link>
      <Link to="/contact" className=' ' >Contect</Link>
    </Nav>
    </Container>
  </Navbar>
   <br />
       </section>




      <Routes>
          <Route index element={ <h1> I love blogging, and I love
             programming. When I decide to write more programming-related posts, I
              find myself stuck in one type of post: tutorials. While tutorials 
              are useful, there are many other ways to blog as a programmer.
             In this post, I will share 20 of them! </h1> } />\
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="*" element={ <img src={Img} className='img-fluid' /> } />
      </Routes>
    </div>
  )
}

export default Outer
