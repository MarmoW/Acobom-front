
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #515151;
width: 100%;
height: 5.5em;
padding-left:4em;
padding-right: 4em;
min-width: 100wh;

`;

const Button1 = styled.button`
font-family: "Orbitron", sans-serif ; 
font-weight: 600;  
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
//768p => 16px, 900p => 20px , 1080p => 24px, 1440p => 28px, 2160p => 32px.
const GlobalStyles = createGlobalStyle`  
  * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;

    @media (min-height: 900px) {
    font-size: 20px;
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
    background: #f5f5f5;
    color: #333;    

    

  }
`;

const BannerImg = styled.div`
width:100%;
min-width: 100wh;
height: 25em;
background-color: #fe7100;
`;
const ProductsContainer = styled.div`
display: flex-row;  
justify-content: center;
background-color: #717171;
width: 100%;
min-width: 100wh;
box-sizing: border-box;
margin-top: 2em;
`;

const FeaturedProduct = styled.div`
background-color:#f15500;
min-width: 100wh;
width: 100%;
height: 25em;
`;
const OtherProductsDiv = styled.div`
display: flex; 
height: 40em;
width: 100%;
align-itens: space-around;
justify-content: center;
background-color:  #c1c1c1 ;
flex-wrap: wrap; 
margin-top: 2em;
`;

const OtherProducts = styled.div`
display: flex;
background-color: #919191;
min-width: 30%;
height: 15em;
margin: 1em;

`;

const FeaturedPic = styled.div``;

const OtherPic = styled.div``;


export {Header, Button1, GlobalStyles, LogoImg, Title, BannerImg, ProductsContainer,
FeaturedProduct, OtherProducts, OtherProductsDiv}; 
