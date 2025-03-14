import styled from "styled-components";

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
padding-left: 2em;
`;

const FeaturedTitle = styled.p`
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

const FeaturedPic = styled.img`
display: flex;
background-color: #7171FF;
min-width: 33em;
min-height: 22em
;

`;

export default function FeaturedComponent() {
    return(
        <FeaturedProduct>
          <FeaturedPic src="/imgs/mock-pic1.png" alt="Table saw"/>
          <div>
            <FeaturedTitle> Serra de Bancada 1800W 10 Pol.</FeaturedTitle>
            <FeaturedDescription>{" A Serra de Bancada possui estrutura reforçada e de fácil configuração, e rodas para transporte e armazenamento. Com guia de auto alinhamento e guia lateral auto-alinhada garantindo mais precisão."}</FeaturedDescription>
          </div>
        </FeaturedProduct>
    )
};