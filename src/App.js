import './App.css';
import { GlobalStyles } from './components/styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from './pages/frontpage.js';
import ProductsType from "./pages/productstypes.js";


function App() {

  document.addEventListener("wheel", function(event) {
    if (event.ctrlKey) {
      event.preventDefault();
    }
  }, { passive: false });
  

  return (
  <>  
    <GlobalStyles/>
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/products/:type" element={<ProductsType/>}/>
        <Route path="/products/:id" />
        <Route path="/carreiras" />
        <Route path="/404"/>
        <Route path="*"  />
      </Routes>
    </Router>
  </>  
  );
}

export default App;
