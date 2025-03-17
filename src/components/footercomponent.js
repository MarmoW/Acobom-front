import styled from "styled-components";
import {AiFillInstagram} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const addressConst = "Av. Paulino Fernandes da Silva, 157   Jamapará - Sapucaia - RJ, 25880-000";
const copyrightCredits = "© 2025 Aço Bom. Todos os direitos reservados. Horário de Funcionamento: Seg-Sex, 08h - 18h | Sáb, 08h - 12h";

const FooterDiv = styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box;
align-items: center;
justify-content: start;
background-color: #515151;
min-width: 100wh;
width: 100%;
height: 10em;
max-height: 10em;
padding-top: 1rem;
`;

const StoreAddress = styled.p`
display: flex;
justify-content: center;
text-align: left;
font-size: 1.2rem;
margin-top: 1.2rem;
margin-right: 1rem;
color:#DCDCDC;
height: 1.5rem;
max-height: 1.5rem;

&:hover {
    color:#fe7100;
  }

`;

const FooterButtons = styled.button`
display: flex;
font-family: "Orbitron", sans-serif ; 
font-weight: 600;  
vertical-align: bottom;
max-height: 100%;
margin: 1.5em;
color:#DCDCDC;


&:hover {
    color:#fe7100;
  }

`;

const ExtraInfos = styled.p`
display: flex;
box-sizing: border-box;
align-items: baseline;
color: #DCDCDC;
font-size: 1rem;

`;

const FooterButtonsDiv = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
justift-content: center;
`;

export default function FooterComponent(){
    return(
        
    <FooterDiv>
        <FooterButtonsDiv>
            <a style={{ maxHeight: "1.5rem" }} href="https://www.google.com/maps/place/Av.+Paulino+Fernandes+da+Silva,+157+-+Jamapar%C3%A1,+Sapucaia+-+RJ,+25880-000/data=!4m2!3m1!1s0xa2a806a5fb2a43:0x38ac6c2e25815d5?sa=X&ved=1t:242&ictx=111" target="_blank" rel="noopener noreferrer">
                <StoreAddress>
                    {addressConst}
                </StoreAddress>
            </a>
            <FooterButtons>Máquinas</FooterButtons>
            <FooterButtons>Telhas</FooterButtons>
            <FooterButtons>Ferragens</FooterButtons>
            <FooterButtons>
                <AiFillInstagram size={"2em"}/>
            </FooterButtons>
            <FooterButtons>
                <FaWhatsapp size={"2em"}/>
            </FooterButtons>
        </FooterButtonsDiv>
        <ExtraInfos>{copyrightCredits}</ExtraInfos>
    </FooterDiv>
    
    )
}