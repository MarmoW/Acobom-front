import './App.css';
import { GlobalStyles, ProductsContainer} from './components/styles';
import HeaderComponent from "./components/headercomponent.js";
import BannerComponent from "./components/bannercomponent.js";
import FeaturedComponent from "./components/featuredcomponent.js";
import ProductsComponent from "./components/productscomponent.js";


function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <HeaderComponent/>
      <BannerComponent/>
      <ProductsContainer>
        <FeaturedComponent/>
        <ProductsComponent/>
      </ProductsContainer>
    </div>
  );
}

export default App;




/*
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
*/