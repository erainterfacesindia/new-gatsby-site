import React from 'react'
import Navbar from './navbar'
import '../styles/global.css'

export default function layout({ children }) {
    return (
<body class="site">
  <main class="site-content"></main>
        <div className="layout">
            <Navbar/>
            <content/>
            <div className="content">
               {children }
            </div>
            
 <footer>
             <p>copyright 2021 Era Interfaces pvt ltd.</p>
         </footer>

         
            
        </div>
        </body>
    )
}
