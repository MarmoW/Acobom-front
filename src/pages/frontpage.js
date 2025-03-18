import HeaderComponent from "../components/headercomponent";
import BannerComponent from "../components/bannercomponent";
import { ProductsContainer } from "../components/styles";
import FeaturedComponent from "../components/featuredcomponent";
import FooterComponent from "../components/footercomponent";
import ProductsComponent from "../components/productscomponent";


export default function FrontPage() {
    return(
    <>
        <HeaderComponent/>
        <BannerComponent/>
        <ProductsContainer>
            <FeaturedComponent/>
            <ProductsComponent/>
        </ProductsContainer>
        <FooterComponent/>
    </>
    )
};