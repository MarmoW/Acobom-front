import styled from "styled-components";


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

const OtherPic = styled.div`
`;

export default function ProductsComponent() {
    return(
        <OtherProductsDiv>
            <OtherProducts >
                <OtherPic></OtherPic>
                <p>PRODUTOS SECUNDÁRIOS 1</p>
            </OtherProducts>
            <OtherProducts >
                <OtherPic></OtherPic>
                <p>PRODUTOS SECUNDÁRIOS 2</p>
            </OtherProducts>
            <OtherProducts >
                <OtherPic></OtherPic>
                <p>PRODUTOS SECUNDÁRIOS 3</p>
            </OtherProducts>
            <OtherProducts >
                <OtherPic></OtherPic>
                <p>PRODUTOS SECUNDÁRIOS 4</p>
            </OtherProducts>
            <OtherProducts >
                <OtherPic></OtherPic>
                <p>PRODUTOS SECUNDÁRIOS 5</p>
            </OtherProducts>
            <OtherProducts >
                <OtherPic></OtherPic>
                <p>PRODUTOS SECUNDÁRIOS 6</p>
            </OtherProducts>  
        </OtherProductsDiv>
    )
}