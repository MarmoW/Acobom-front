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
