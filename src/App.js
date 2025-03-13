import './App.css';
import { Header, Button1, GlobalStyles, LogoImg, BannerImg, ProductsContainer, FeaturedProduct,
OtherProducts, OtherProductsDiv, FeaturedPic, FeaturedDescription, FeatureTitle, OtherPic } from './components/styles';
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
        <FeaturedProduct>
          <FeaturedPic src="/imgs/mock-pic1.png" alt="Table saw"/>
          <div>
            <FeatureTitle> Serra de Bancada 1800W 10 Pol.</FeatureTitle>
            <FeaturedDescription>{" A Serra de Bancada possui estrutura reforçada e de fácil configuração, e rodas para transporte e armazenamento. Com guia de auto alinhamento e guia lateral auto-alinhada garantindo mais precisão."}</FeaturedDescription>
          </div>
        </FeaturedProduct>
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
      </ProductsContainer>
    </div>
  );
}

export default App;


