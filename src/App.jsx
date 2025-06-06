import Homepage from "./pages/HOMEPAGE/homepage.jsx";
import Footer from "./layouts/Footer.jsx";
import Header from "./layouts/Header.jsx";
import ProductEdit from "./pages/PRODUCT/ProductEdit.jsx"
import {Routes, Route} from "react-router-dom";
import ProductForm from "./pages/PRODUCT/ProductForm.jsx";
function App() {
  return (
    <>
    <Header/>
            <Routes>
                
                <Route path="/"  element={<Homepage/>}/>
                <Route path="/product-create"  element={<ProductForm/>}/>
                <Route path="/product-edit/:id"  element={<ProductEdit/>} />
            </Routes>
            <Footer/>
    </>
  );
}

export default App;