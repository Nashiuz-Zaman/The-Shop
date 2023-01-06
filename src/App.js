//react
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Logobar from "./components/logobar/Logobar";
import Navbar from "./components/oneLevelMegaDropdown/navbar/Navbar";
import Home from "./pages/home/Home";
import Men from "./pages/men/Men";
import Women from "./pages/women/Women";
import Kids from "./pages/kids/Kids";
import Sale from "./pages/sale/Sale";
import Footer from "./components/footer/Footer";

//custom hooks
import useLinkGroups from "./hooks/useLinkGroups";

function App() {
  const { footerOptions } = useLinkGroups();

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
        <Footer optionsArray={footerOptions} />
      </BrowserRouter>
    </div>
  );
}

export default App;
