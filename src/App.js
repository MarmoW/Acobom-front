import './App.css';
import { GlobalStyles, ProductsContainer} from './components/styles';
import HeaderComponent from "./components/headercomponent.js";
import BannerComponent from "./components/bannercomponent.js";
import FeaturedComponent from "./components/featuredcomponent.js";
import ProductsComponent from "./components/productscomponent.js";
import FooterComponent from "./components/footercomponent.js";


function App() {

  document.addEventListener("wheel", function(event) {
    if (event.ctrlKey) {
      event.preventDefault();
    }
  }, { passive: false });
  

  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <HeaderComponent/>
      <BannerComponent/>
      <ProductsContainer>
        <FeaturedComponent/>
        <ProductsComponent/>
      </ProductsContainer>
      <FooterComponent/>
    </div>
  );
}

export default App;
