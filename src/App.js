import './App.css';
import { Header, Button1, GlobalStyles, LogoImg, Title } from './components/styles';
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
        <Button1>Colaboradores</Button1>
        <Button1><AiFillInstagram size={25}/><a>Instagram</a></Button1>
        </div>
      </Header>
    </div>
  );
}

export default App;


