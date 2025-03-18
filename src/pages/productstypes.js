import styled from "styled-components";
import { useParams, Navigate  } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderComponent from "../components/headercomponent";
import FooterComponent from "../components/footercomponent";
//import {products} from "../products-data/productsData.js";
//import ProductsComponent from "../components/productscomponent";


const CategoryName = styled.p`
font-family: "Orbitron", sans-serif ; 
font-weight: 600;  
width: 100%;
height: 3rem;
font-size: 2rem;
`;

const ProductsMainDiv = styled.div`
display: flex; 
height: 60em;
width: 100wh;
min-width: 100wh;
align-itens: start;
justify-content: center;
text-align: center;
flex-wrap: wrap; 
margin-top: 2em;
`;

const ProductsDiv = styled.div`
display: flex;
align-items: start;
justify-content: start;
background-color: #ffffff;
min-width: 20em;
max-width: 30%;
height: 15em;
margin: 1em;
border-radius: 20px;
padding-top: 2em;
padding-right: 1em;
border-bottom: 0.25em solid #E1E1E1;

`;

const ProductsImg = styled.img`
background-color: black;
border-radius: 4px;
width: 12em;
height: 8em;
margin: 1em;
margin-top: 1em;
`;

const ProductsTitle = styled.p`
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

const ProductsDescription = styled.p`
display:flex;
flex-wrap: wrap;
justify-content: start; 
align-content: start; 
min-width: 8rem;
font-size: 1rem;
color: #515151;   
`;

const ButtonsDiv = styled.div`
display: flex;
position: relative;
bottom: 1rem;

width: 100% ;
min-width: 100wh;

justify-content: center;
align-items: center;

`;

const productsPerPage = 9;
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRBLkP0c8GKihi6AiIP0GllQjF7RqnFeOXUoOSxf-rSC7Op2Jjuv4rKporhYtLlcslldi-2esemyN_1/pub?output=csv";

export default function ProductsType() {

    const { type } = useParams();
    const [currentPage, setCurrentPage] = useState(0);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch(SHEET_URL)
          .then((response) => response.text())
          .then((csvData) => {
            const rows = csvData.split("\n").slice(1); // Remove header row
            const formattedData = rows.map((row) => {
              const [id, name, category, image, description] = row.split(",");
              return { id, name, category, image, description };
            });
            console.log(formattedData)
            setProducts(formattedData);
          })
          .catch((error) => console.error("Error fetching data:", error));
      }, []);

    const productType = type === "maquinas" ? "Máquinas"
                      : type === "telhas" ? "Telhas"
                      : type === "ferragens" ? "Ferragens"
                      : '';

    const validTypes = ["maquinas", "telhas", "ferragens"];

    if (!validTypes.includes(type)) {
        return <Navigate to="/404" replace />;
    }

    const filteredProducts = products.filter((product) => product.category === type);
    const totalPages = Math.ceil(filteredProducts.length / 9);
    const startIndex = currentPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
          setCurrentPage(currentPage + 1); // Go to the next page
        }
      };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
          setCurrentPage(currentPage - 1); // Go to the previous page
        }
      };

    return(
        <>
            <HeaderComponent/>
                <ProductsMainDiv>
                    <CategoryName>{productType}</CategoryName>
                    {currentProducts.map((infos) => (
                                <ProductsDiv key={infos.id}>
                                    <ProductsImg src={infos.image}/>
                                    <div>
                                        <ProductsTitle>{infos.name}</ProductsTitle>
                                        <ProductsDescription>{infos.description}</ProductsDescription>
                                    </div>
                                </ProductsDiv>
                                ))}
                    <ButtonsDiv>
                    <button onClick={handlePreviousPage} disabled={currentPage === 0}>Previous</button>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>Next</button>    
                    </ButtonsDiv>                                
                </ProductsMainDiv>
            <FooterComponent/>
        </>
    )
}