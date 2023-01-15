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
import MobileNavigation from "./components/mobileNavBar/mobileNavigation/MobileNavigation";
import BackdropBlur from "./components/backdropBlur/BackdropBlur";
import MobileFooter from "./components/mobileFooter/MobileFooter";

//context
import { MediaQueryContext } from "./contexts/MediaQueryContext";

//custom hooks
import useLinkGroupsData from "./hooks/useLinkGroupsData";
import useImportMobileFooterData from "./hooks/useImportMobileFooterData";
import useNavigationOptionsData from "./hooks/useNavigationOptionsData";

export default function App() {
  const { mediaQueryState } = useContext(MediaQueryContext);
  const { mainNavOptions, dropdownMenuOptions, mobileNavOptions } =
    useNavigationOptionsData();
  const { footerOptions, logoButtonData, footerBottomOptions } =
    useLinkGroupsData();
  const { mobileFooterFirstList, mobileFooterRestList } =
    useImportMobileFooterData();

  return (
    <div className="App">
      <BackdropBlur />
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

        {mediaQueryState.computerScreenMatches && (
          <Footer
            organizationName="The Shop"
            optionsArray={footerOptions}
            logoButtonsArray={logoButtonData}
            bottomOptionsArray={footerBottomOptions}
          />
        )}

        {!mediaQueryState.computerScreenMatches && (
          <MobileFooter
            organizationName="The Shop"
            firstOptionsList={mobileFooterFirstList}
            restOptionsList={mobileFooterRestList}
            logoButtonsArray={logoButtonData}
            bottomOptionsArray={footerBottomOptions}
          />
        )}
      </BrowserRouter>
    </div>
  );
}
