import React from 'react';
import { Navbar, Nav,NavDropdown, Button} from 'react-bootstrap';
import "./navbar.css"
// import { Button } from "../Button"
import Wrapper from '../UI/Wrapper';
import { StaticImage } from 'gatsby-plugin-image'

const Menu = () =>{
    return (
      
      <Navbar collapseOnSelect expand="md" variant="dark" fixed="top" >
      {/* <div class="navbar navbar-expand-md navbar-dark bd-navbar sticky-top "> */}
      <nav class="container-fluid flex-wrap flex-md-nowrap" style={{padding:"0 5%"}}>
     
            <Navbar>
              <a aria-current="page" href="/">
        <StaticImage src="../../images/era_logo.png" alt="erainterfaces-era-logo" width={130}/> </a></Navbar> 
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className=" justify-content-md-end"> 
          <Nav>
          <Nav.Link aria-current="page" className="nav-links text-danger" href="/jamstack">JAMstack</Nav.Link> 
            <Nav.Link aria-current="page" className="nav-links text-white" href="/">Home</Nav.Link> 
            <NavDropdown aria-current="page" className="nav-links text-white" title={ <span className="text-white my-auto">About</span>} 
            href="/about" id="basic-nav-dropdown">
            <NavDropdown.Item aria-current="page" href="/about">About Our Company</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item aria-current="page" href="/team">Our Team</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link className="nav-links text-white" href="/about">About</Nav.Link> */}
            <Nav.Link aria-current="page" className="nav-links text-white" href="/services">Services</Nav.Link>
            <Nav.Link aria-current="page" className="nav-links text-white" href="/industries">Industries</Nav.Link>
            <Nav.Link aria-current="page" className="nav-links text-white" href="/blog">Blogs</Nav.Link>
            <Nav.Link aria-current="page" className="nav-links text-white" href="/iot">IoT</Nav.Link>
            <Nav.Link aria-current="page" className="nav-links text-white" href="/contact">Contact us</Nav.Link>
            {/* <Button href="/contact" size="md"  variant="danger">Contact us</Button>   */}
            
          </Nav>
          </Navbar.Collapse>         
        </nav>
       
        </Navbar>
        
       
  
    );
}

export default Menu;









































































// import React, {useEffect, useState} from 'react'
// import {FaBars, FaTimes} from "react-icons/fa"
// import { menuData } from '../data/MenuData'
// import styled from 'styled-components'
// import {Link} from 'gatsby'
// import { Button } from "./Button"
// import './Style/global.css' 
// import Wrapper from '../components/UI/Wrapper'
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Navbar =() => {
//     const [click, setClick] = useState(false)
//     const [scroll, setScroll] = useState(0);

//      const handleClick =() => setClick(!click)
//      const changeNav = () => {
//         const offset=window.scrollY;
//          if(offset > 80)
//         {
//             setScroll(true)
//          }
//          else {
//              setScroll(false)
//          }
//      }

//      useEffect( () => {
//          changeNav()
//          window.addEventListener("scroll", changeNav)},[])

//         return (
//                <Nav active={scroll} click={click}>
//                         <NavLogo to="/">
//                             <img src="/era_logo.png" alt="erainterfaces-era-logo"/> 
//                         </NavLogo> 
//                         <NavMenu onClick={handleClick} click={click} >               
//                {menuData.map((item, index) => (
//                   <NavLink to={item.link} key={index}>
//                     {item.title}
//                   </NavLink>
                 
//               ))} 
//                 <NavBtn>
//                     <Button primary="true" round="true" to="/contact">Contact Now</Button>
//                 </NavBtn>
//               </NavMenu>
//                         <MobileIcon onClick={handleClick}>
//                             {click ? <FaTimes />:<FaBars />}
//                         </MobileIcon>
                        
//                 </Nav>
//         )
       
    
// }

// export default Navbar

// const Nav =styled.nav`
// background:${({active}) => active ? "black":"linear-gradient(to bottom, black 0%,black 100%)"} ;
// position:sticky;
// box-sizing: border-box;
// height:80px;
// display:flex;
// justify-content:space-between;
// font-size:1rem;
// align-items:center;
// padding :0.5rem calc((100vw - 1300px)/2); 
// z-index:999;
// top: 0;


// @media screen and (max-width :960px) {
//     background: ${({ click }) => (click ? "#000": "black")};
//     transition: 0.8s all ease;
// }
// `
// export const NavbarContainer = styled.div`
// display: flex;
// justify-content:space-between;
// height:80px;
// z-index:1;
// width:100%;
// max-width:1000px;
// `
// export const NavLogo = styled(Link)`
// color: white;
// justify-self:inherit;
// cursor:pointer;
// position:relative;
// text-decoration:none;
// font-size:1.8rem;
// display: flex;
// align-items:center;
// height:100%;

// img{
//     width:150px;
// }
// `

// export const MobileIcon = styled.div`
// display: none;
//  color: #6B6E70;
//  size:2em;
//  margin-top:-1rem;
 

// @media screen and (max-width: 960px)
// {
//    display: block;
//    position: absolute;
//    top: 0;
//    right: 0;
//    transform: translate(-100%, 60%);
//    font-size: 1.8rem;
//    cursor:pointer;
   
// }

// `
// const NavMenu = styled.ul`
//   display: flex;
//   align-items: center;
//   text-align:center;
//   padding:0;

//   @media screen and  (max-width: 768px)
//   {
//     display: flex;
//     flex-direction:column;
//     width:100%;
//     height:80vh;
//     position:absolute;
//     top:${({ click }) => (click ? "100%" : "-1000px")};
//     opacity:1;
//     transition: all 0.2s ease;
//     background:black;
//     line-height:1rem;

   
//   }
//  `
//  const NavLink = styled(Link)`
//  height: 100%;
//  display: flex;
//  align-items: center;
//  text-decoration : none;
// color: white;
// margin-right: 2rem;
// font-size:1.3rem;
// font-family: "ubuntu", sans-serif;
// text-transform: capitalize;
// letter-spacing: var(--letterSpacing);
// transition: var(--transition);

// @media screen and (max-width:960px) {
//     text-align: center;
//     padding: 2rem;
//     width:100%;
//     display:table;

//     &:hover{
//         border-color:#f26a2e;
//         transition: all 0.3s ease;
//     }
// }
// `
// const NavBtn = styled.div`
//    display : flex;
//    align-items : center;
   

//    @media screen and (max-width:768px)
//    {
//      display:none;
//    }
// `