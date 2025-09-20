import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import OneTime from "./Components/OneTime";
import Recurring from "./Components/Recurring";
import Moving from "./Components/Moving";
import About from "./Components/About";
import Contact from "./Components/Contact";
import FAQ from "./Components/FAQ";

function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/onetime" element={<OneTime />} />
      <Route path="/recurring" element={<Recurring />} />
      <Route path="/moving" element={<Moving />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}

export default WebRoutes;