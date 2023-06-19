import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Menu from "../Menu";
import Order from "../Order";
import AboutUs from "../AboutUs";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers