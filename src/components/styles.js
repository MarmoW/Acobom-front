import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


const Title = styled.a`
display: flex;
justify-contet: center;
color: #fe7100
`;

const GlobalStyles = createGlobalStyle`  
  * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;

    @media (min-height: 900px) {
    font-size: 17px;
  }
    @media (min-height: 1080px) {
    font-size: 20px;
  }
    @media (min-height: 1440px) {
    font-size: 27px;
  }
    @media (min-height: 2160px) {
    font-size: 40px;
  }

    
  }

    html {
    
    font-family: Arial, sans-serif;

  }

  
  a {
    text-decoration: none;
    color: inherit;
  }

 
  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

 
  body {
    min-width: 1366px;
    mid-height: 100vh;
    margin: 0;
    padding: 0;
    background:#ebebeb ;
    color: #333;    

    

  }
`;

const ProductsContainer = styled.div`
font-family: "Roboto Condensed", sans-serif ; 
text-align: left;
display: flex;
flex-direction: column;  
align-items: center;  
width: 100%;
min-width: 100wh;
box-sizing: border-box;
margin-top: 2em;  
`;

export {GlobalStyles, Title, ProductsContainer}; 
