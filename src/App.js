//components
import Logobar from "./components/logobar/Logobar";
import Navbar from "./components/oneLevelMegaDropdown/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Men from "./pages/men/Men";
import Women from "./pages/women/Women";
import Kids from "./pages/kids/Kids";
import Sale from "./pages/sale/Sale";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logobar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/sale" element={<Sale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
