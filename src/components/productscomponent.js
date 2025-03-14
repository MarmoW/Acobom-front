import styled from "styled-components";

const products = [
    {
      name: "Product 1",
      image: "/imgs/mock-products1.jpg", 
      description: "This is the description for Product 1.",
    },
    {
      name: "Product 2",
      image: "/imgs/mock-products1.jpg", 
      description: "This is the description for Product 2.",
    },
    {
      name: "Product 3",
      image: "/imgs/mock-products1.jpg", 
      description: "This is the description for Product 3.",
    },
    {
      name: "Product 4",
      image: "/imgs/mock-products1.jpg", 
      description: "This is the description for Product 4.",
    },
    {
      name: "Product 5",
      image: "/imgs/mock-products1.jpg", 
      description: "This is the description for Product 5.",
    },
    {
      name: "Product 6",
      image: "/imgs/mock-products1.jpg", 
      description: "This is the description for Product 6.",
    },
];

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
align-items: start;
justify-content: start;
background-color: #ffffff;
min-width: 20em;
height: 15em;
margin: 1em;
border-radius: 20px;
padding-top: 2em;
padding-right: 1em;

`;

const OtherPic = styled.img`
background-color: black;
border-radius: 4px;
width: 12em;
height: 8em;
margin: 1em;
margin-top: 1em;
`;

const OtherTitle = styled.p`
display:flex;
justify-content: start; 
align-content: start;
font-weight: 600;
font-size: 1.5em; 
color: #515151;
min-width: 8 rem;
background-color: #ffffff;
margin-bottom: 0.8em;
`;

const OtherDescription = styled.p`
display:flex;
flex-wrap: wrap;
justify-content: start; 
align-content: start; 
min-width: 8rem;
font-size: 1rem;
color: #515151;   
`;

export default function ProductsComponent() {
    return(
        <OtherProductsDiv>
            {products.map((infos) => (
            <OtherProducts >
                <OtherPic src={infos.image}/>
                <div>
                    <OtherTitle>{infos.name}</OtherTitle>
                    <OtherDescription>{infos.description}</OtherDescription>
                </div>
            </OtherProducts>
            ))}
            
        </OtherProductsDiv>
    )
}