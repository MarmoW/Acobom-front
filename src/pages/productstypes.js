import styled from "styled-components";
import { useParams, Navigate  } from "react-router-dom";
import HeaderComponent from "../components/headercomponent";
import FooterComponent from "../components/footercomponent";
//import ProductsComponent from "../components/productscomponent";

const CategoryName = styled.p`
width: 100%;
height: 10rem;
font-size: 2rem;
`;

const ProductsDiv = styled.div`
`;





export default function ProductsType() {

    const { type } = useParams();
    
    const productType = type === "maquinas" ? "Máquinas"
                      : type === "ferramentas" ? "Ferramentas"
                      : type === "materiais" ? "Materiais"
                      : '';

    const validTypes = ["maquinas", "ferramentas", "materiais"];

    if (!validTypes.includes(type)) {
        return <Navigate to="/404" replace />;
    }

    console.log(productType);

    return(
        <>
            <HeaderComponent/>
                <CategoryName>{productType}</CategoryName>
            <FooterComponent/>
        </>
    )
}