import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack} from "react-icons/io";

const BannerImg = styled.img`
width:100%;
min-width: 100wh;
height: 25em;
background-color: #fe7100;
`;

const WholeBanner = styled.div`
display:flex
width:100%;
min-width: 100wh;
height: 25em;
background-color: green;
`;

const NavButtons = styled.button`
display:flex;
height: 8em;
width: 4em;
position: absolute;
top: 13em;
${(props) => (props.align === "right" ? "right: 5em;" : "left: 5em;")}
z-index:10;
justify-content: center;
align-items: center;

background-color: #fe7100;
color: #737373;
cursor: pointer;
transition: 0.3s ease-in-out;
border: none ;
border-radius: 4px;
cursor: pointer;

&:hover {
  background-color: #b75100;
}

`;
// rgba(207, 92, 0, 0.8)
export default function BannerComponent() {
    return(
    <WholeBanner>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <BannerImg  style={{ userSelect: "none" }} src="/imgs/mock-banner1.jpg" href="google.com"/>
      </a>
      <NavButtons align="left">
        <IoIosArrowBack size="5em" />
      </NavButtons >
      <NavButtons align="right">
        <IoIosArrowForward size="5em"/>
      </NavButtons >
    </WholeBanner>  
    );
}