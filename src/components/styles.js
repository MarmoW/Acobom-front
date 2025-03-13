
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

const BannerImg = styled.img`
width:100%;
min-width: 100wh;
height: 25em;
background-color: #fe7100;
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

const FeaturedProduct = styled.div`
box-sizing: border-box;
display: flex;
justify-content: start;
align-content: start;
min-width: 100wh;
width: 70%;
height: 25em;
padding-top: 1.5em;
background-color: #ffffff;
border-radius: 30px;
`;

const FeatureTitle = styled.p`
display:flex;
justify-content: start; 
align-content: start;
font-weight: 600;
font-size: 2em; 
color: #515151;
min-width: 30 rem;
background-color: #ffffff;
margin-left: 1.5rem;
margin-bottom: 1.5rem;
`;

const FeaturedDescription = styled.p`
display:flex;
flex-wrap: wrap;
justify-content: start; 
align-content: start; 
min-width: 30rem;
max-width: 30rem;
font-size: 1.5em;
color: #515151;   
margin-left: 1.5rem;
`;

const OtherProductsDiv = styled.div`
display: flex; 
height: 40em;
width: 100%;
align-itens: space-around;
justify-content: center;
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

const FeaturedPic = styled.img`
display: flex;
background-color: #7171FF;
min-width: 32em;
min-height: 22em;
border-radius: 30px;
`;

const OtherPic = styled.div`
`;


export {Header, Button1, GlobalStyles, LogoImg, Title, BannerImg, ProductsContainer, OtherPic,
FeaturedProduct, OtherProducts, OtherProductsDiv, FeaturedPic, FeaturedDescription, FeatureTitle}; 
