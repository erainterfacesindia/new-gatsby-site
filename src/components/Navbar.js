import React, {useEffect, useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { menuData } from '../data/MenuData'
import styled from 'styled-components'
import {Link} from 'gatsby'
import { Button } from "./Button"
import './Style/global.css' 


const Navbar =() => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(0);

     const handleClick =() => setClick(!click)
     const changeNav = () => {
        const offset=window.scrollY;
         if(offset > 80)
        {
            setScroll(true)
         }
         else {
             setScroll(false)
         }
     }

     useEffect( () => {
         changeNav()
         window.addEventListener("scroll", changeNav)},[])

    //  let navbarClasses=['navbar'];
            //  if(scroll){
    //           navbarClasses.push('scroll');
    //        }

        return (
               <Nav  active={scroll} click={click}> {/* */}
                        <NavLogo to="/">
                            <img src="/era_logo.png" alt="era-logo"/> 
                        </NavLogo> 
                        <NavMenu onClick={handleClick} click={click} >{/*  */}                
               {menuData.map((item, index) => (
                  <NavLink to={item.link} key={index}>
                    {item.title}
                  </NavLink>
                 
              ))}
               
               <NavBtn>
               <Button primary="true" round="true" to="/contact">Contact Now</Button>
            </NavBtn>
              </NavMenu>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes />:<FaBars />}
                        </MobileIcon>
                </Nav>
            
        )
       
    
}

export default Navbar

const Nav =styled.nav`
background:${({active}) => active ? "black":"linear-gradient(to bottom, black 0%,black 100%)"} ;
position: sticky;
box-sizing: border-box;
height : 80px;
display :flex;
justify-content: space-between;
font-size:1rem;
align-items:center;
padding : 0.5rem calc((100vw - 1300px)/2);
z-index:999;
top: 0;


@media screen and (max-width :960px) {
    beckground: ${({ click }) => (click ? "#fff": "transparent")};
    transition: 0.8s all ease;
}
`
export const NavbarContainer = styled.div`
display: flex;
justify-content : space-between;
height:80px;
z-index: 1;
width: 100%;
max-width: 1000px;
`
export const NavLogo = styled(Link)`
color: white;
justify-self: flex-start;
cursor:pointer;
text-decoration:none;
font-size:1.5rem;
display: flex;
align-items: center;
height:100%;

img{
    width:150px;
}
`

export const MobileIcon = styled.div`
display: none;
 color: #6B6E70;
 size:2em;
 margin-top:-1rem;
 

@media screen and (max-width: 960px)
{
   display: block;
   position: absolute;
   top: 0;
   right: 0;
   transform: translate(-100%, 60%);
   font-size: 1.8rem;
   cursor:pointer;
   
}

`
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align:center;
  padding:0;

  @media screen and  (max-width: 768px)
  {
    display: flex;
    flex-direction:column;
    width:100%;
    height:80vh;
    position:absolute;
    top:${({ click }) => (click ? "100%" : "-1000px")};
    opacity:1;
    transition: all 0.2s ease;
    background :black;
    line-height:1rem;

   
  }
 `
 const NavLink = styled(Link)`
 height: 100%;
 display: flex;
 align-items: center;
 text-decoration : none;
color: white;
margin-right: 1rem;
font-size:1rem;
font-family: "ubuntu", sans-serif;
text-transform: capitalize;
letter-spacing: var(--letterSpacing);
transition: var(--transition);

@meda scren and (max-width:960px) {
    text-align-center;
    padding: 2rem;
    width:100%;
    display: table;

    &:hover{
        border-color:#f26a2e;
        transition: all 0.3s ease;
    }
}
`
const NavBtn = styled.div`
   display : flex;
   align-items : center;
   

   @media screen and (max-width:768px)
   {
     display:none;
   }
`

















































// import { SidebarContainer,Icon,CloseIcon,SidebarLink,SidebarMenu,SidebarWrapper } from './SidebarElements'

// const Sidebar = () => {
//     return (
//         <SidebarContainer>
//             <Icon>
//                 <CloseIcon />
//             </Icon>
//             <SidebarWrapper>
//                 <SidebarMenu>
//                 <SidebarLink to="/">Home</SidebarLink>
//                 <SidebarLink to="/about">About</SidebarLink>
//                 <SidebarLink to="/services">Services</SidebarLink>
//                 <SidebarLink to="/industries">Industries</SidebarLink>
//                 <SidebarLink to="/blog">Blog</SidebarLink>
//                 </SidebarMenu>
//             </SidebarWrapper>
//         </SidebarContainer>
//     )
// }

// export default Sidebar

 