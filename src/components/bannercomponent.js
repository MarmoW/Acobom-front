import styled from "styled-components";

const BannerImg = styled.img`
width:100%;
min-width: 100wh;
height: 25em;
background-color: #fe7100;
`;

export default function BannerComponent() {
    return(
    <a href="https://google.com" target="_blank" rel="noopener noreferrer">
      <BannerImg  style={{ userSelect: "none" }} src="/imgs/mock-banner1.jpg" href="google.com"/>
    </a>
    );
}