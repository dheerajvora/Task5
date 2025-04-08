import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableScreen from "./screen/TableScreen";
import Home from "./screen/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="table" element={<TableScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
