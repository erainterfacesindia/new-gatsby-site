import { Link } from 'gatsby'
import React from 'react'


export default function Navbar() {
    return (
        <nav>
            <img src="/era_logo.png" alt="Logo" style={{maxWidth:'170px',href:"/"}} />
            
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/services"> Services</Link>
            <Link to="/industries"> Industries</Link>
            <Link to="/blog"> Blog</Link>
            <Link to="/contactus"> Contact Us</Link>
            </div>
        
        </nav>
    )
}
