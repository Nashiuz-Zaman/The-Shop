//react
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

//components
import Logobar from "./components/logobar/Logobar";
import Navbar from "./components/oneLevelMegaDropdown/navbar/Navbar";
import Home from "./pages/home/Home";
import Men from "./pages/men/Men";
import Women from "./pages/women/Women";
import Kids from "./pages/kids/Kids";
import Sale from "./pages/sale/Sale";
import Footer from "./components/footer/Footer";
import MobileNavigation from "./components/mobileNavigation/MobileNavigation";

//context
import { MediaQueryContext } from "./contexts/MediaQueryContext";

//custom hooks
import useLinkGroups from "./hooks/useLinkGroups";
import useNavigationOptionsData from "./hooks/useNavigationOptionsData";

function App() {
  const { mediaQueryState } = useContext(MediaQueryContext);
  const { mainNavOptions, dropdownMenuOptions, mobileNavOptions } =
    useNavigationOptionsData();
  const { footerOptions, logoButtonData, footerBottomOptions } =
    useLinkGroups();

  return (
    <div className="App">
      <BrowserRouter>
        <Logobar />
        {mediaQueryState.computerScreenMatches && (
          <Navbar
            mainNavOptions={mainNavOptions}
            dropdownMenuOptions={dropdownMenuOptions}
          />
        )}
        {!mediaQueryState.computerScreenMatches && (
          <MobileNavigation mainNavOptions={mobileNavOptions} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/sale" element={<Sale />} />
        </Routes>
        <Footer
          organizationName="The Shop"
          optionsArray={footerOptions}
          logoButtonsArray={logoButtonData}
          bottomOptionsArray={footerBottomOptions}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
