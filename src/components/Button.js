import styled from "styled-components"
import { Link } from "gatsby"


export const Button = styled(Link)`
 background : ${({ primary}) => (primary ? "linear-gradient(90deg, rgba(213,48,44,1) 50%, rgba(210,51,91,1) 100%)": "white")};
 white-space: nowrap;
 padding: ${({ big}) => (big ? "10px 15px" : "5px 10px")};
 color:#fff;
 font-size:${({ big}) => (big ? "13px" : "16px")};
 outline: none;
 border: none;
 min-width: 35px;
 cursor: pointer;
 text-decoration: none;
 transition: 0.3s !important;
 &:hover {
     /* background: ${({ primary}) => (primary ? "#f26a2e" : "#fff")}; */
     background: #333;
     color: #fff;
     /* transform: translateY(-2px); */
 }
`
// border-radius:${({ round }) => (round ? "50px":"none")};