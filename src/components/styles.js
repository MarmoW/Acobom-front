import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #515151;
width: 100%;
height: 6em;
padding-left:4em;
padding-right: 4em;

`;

const Button1 = styled.button`
font-family: "Orbitron", sans-serif !important; 
font-weight: 600;
font-size: 0.8rem;    
justify-content: center;
align-items: center;
background-color:#515151;
max-height: 100%;
margin: 1.5em;
color:#DCDCDC;
padding:0;


&:hover {
    color:#fe7100;
  }


`

const LogoImg = styled.img`
position: relative;
display: flex;
max-height: 3em;

`;

const Title = styled.a`
display: flex;
justify-contet: center;
color: #fe7100
`;

const GlobalStyles = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Melhorias na tipografia */
  html {
    font-size: 16px;
    font-family: Arial, sans-serif;
  }

  /* Remover decoração de links */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Remover estilos padrão de botões */
  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  /* Estilização do body */
  body {
    background: #f5f5f5;
    color: #333;
    
  }

  
`;

export {Header, Button1, GlobalStyles, LogoImg, Title}; 
