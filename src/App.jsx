
import {Routes, Route} from "react-router-dom";
import ProductEdit from "./pages/PRODUCT/ProductEdit.jsx";
import ProductForm from "./pages/PRODUCT/ProductForm";
function App() {
  return (
    <>
      <ProductForm/>
      <Routes>
        <Route path="/edit/" element={<ProductEdit />} />
        </Routes>
    </>
  );
}

export default App;