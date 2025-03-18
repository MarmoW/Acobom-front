import styled from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #515151;
min-width: 100wh;
width: 100%;
height: 5.5em;
padding-left:4em;
padding-right: 4em;
min-width: 100wh;
border-bottom: 0.25em solid rgb(71, 71, 71);

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

export default function HeaderComponent() {

    return(
    <Header>
        <Link to="/">
          <LogoImg  src="/imgs/logo-acobom.png"/>
        </Link>
        <div>
          <Link to="/produtos/maquinas">
            <Button1>Máquinas</Button1>  
          </Link>
          <Link to="/produtos/telhas">
            <Button1>Telhas</Button1>
          </Link>
          <Link to="/produtos/ferragens">
            <Button1>Ferragens</Button1>
          </Link>
          <Button1>Fale Conosco</Button1>
          <Button1>Carreiras</Button1>
          <Button1>
            <a href="https://www.instagram.com/acobomoficial/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram size={"2em"}/>
              <p>Instagram</p>
            </a>
          </Button1>
        </div>
      </Header>
    );
}