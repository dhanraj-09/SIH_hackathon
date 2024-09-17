import styled from "styled-components";
import "./navbarcss.css";

function Navbar()
{

    let NAV=styled.nav`
        
    `;

    let P=styled.p``;

    let A=styled.a`
        color: white;
        text-decoration: none;
        padding: 15px;
        display: block;
        text-align: center;
        background-color: #1a1a1a;
        opacity: 70%;
        font-size: large;
    `;


    let DIV=styled.div`
        margin: 0;
        padding: 0;
    `;

    let UL=styled.ul`
        
        //background-color: #1d65ff;
        list-style-type: none;
        margin: 0;
        padding: 0;
        position: fixed;
        left: 600px;
        overflow: hidden;
        
        
        
    `;

    let LI=styled.li`
        float: left;
        
        
    `;


    return(
             <>
                 <P>Project Based Learning</P>
                 <NAV>
                     <UL>
                         <LI className={"ABC"}><A href={"/"}>HOME</A></LI>
                         <LI className={"ABC"}><A href={"/"}>MENTOR</A></LI>
                         <LI className={"ABC"}><A href={"/"}>ABOUT</A></LI>
                         <LI className={"ABC"}><A href={"/"}>SUPPORT</A></LI>
                     </UL>
                 </NAV>
             </>
    )
}

export default Navbar;