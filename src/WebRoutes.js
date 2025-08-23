import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Services from "./Components/Services"
function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services/>}/>
    </Routes>
  );
}

export default WebRoutes;
