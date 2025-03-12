import './App.css';
import { Header, Button1, GlobalStyles, LogoImg, BannerImg, ProductsContainer, FeaturedProduct, OtherProducts, OtherProductsDiv } from './components/styles';
import { AiFillInstagram } from "react-icons/ai";
import Logo from "./Logo-acobom.png";

function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Header>
        <LogoImg  src={Logo}/>
        <div>
        <Button1>Máquinas</Button1>
        <Button1>Telhas</Button1>
        <Button1>Ferragens</Button1>
        <Button1>Fale Conosco</Button1>
        <Button1>Carreiras</Button1>
        <Button1>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size={"2em"}/>
            <p>Instagram</p>
          </a>
          </Button1>
        </div>
      </Header>
      <BannerImg>BANNER</BannerImg>
      <ProductsContainer>
        <FeaturedProduct>PRODUTO EM DESTAQUE</FeaturedProduct>
        <OtherProductsDiv>
          <OtherProducts >PRODUTOS SECUNDÁRIOS</OtherProducts>
          <OtherProducts >PRODUTOS SECUNDÁRIOS</OtherProducts>
          <OtherProducts >PRODUTOS SECUNDÁRIOS</OtherProducts>
          <OtherProducts >PRODUTOS SECUNDÁRIOS</OtherProducts>
          <OtherProducts >PRODUTOS SECUNDÁRIOS</OtherProducts>
          <OtherProducts >PRODUTOS SECUNDÁRIOS</OtherProducts>   
        </OtherProductsDiv>
      </ProductsContainer>
    </div>
  );
}

export default App;


