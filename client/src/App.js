import Login from "./Pages/Login";
import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import InventoryManagement from "./Pages/InventoryManagement";
import OrderProcessing from "./Pages/OrderProcessing";
import AboutUs from "./Pages/AboutUs";
import './Assets/base.scss';
import IndividualProduct from "./Pages/IndividualProduct";
import Checkout from "./Pages/Checkout";
import {useState} from 'react';


function App() {

  const [rerender, setRerender] = useState(false);

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home rerender={rerender} setRerender={setRerender}/>}></Route> 
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/products" element={<ProductPage rerender={rerender} setRerender={setRerender}/>}></Route>
            <Route path="/inventory-management" element={<InventoryManagement/>}></Route>
            <Route path="/order-processing" element={<OrderProcessing/>}></Route>
            <Route path="/about-us" element={<AboutUs/>}></Route>
            <Route path="/individual-product" element={<IndividualProduct rerender={rerender} setRerender={setRerender}/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
