//react
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

//components
import Logobar from "./components/logobar/Logobar";
import Navbar from "./components/desktopNavbar/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import MobileNavigation from "./components/mobileNavbar/mobileNavigation/MobileNavigation";
import MobileFooter from "./components/mobileFooter/MobileFooter";
import TopLinks from "./components/topLinks/TopLinks";
import NoContent from "./components/NoContent/NoContent";

//context
import { MediaQueryContext } from "./contexts/MediaQueryContext";

//custom hooks
import useLinkGroupsData from "./hooks/useLinkGroupsData";
import useImportMobileFooterData from "./hooks/useImportMobileFooterData";
import useNavigationOptionsData from "./hooks/useNavigationOptionsData";
import useImportTopLinkData from "./hooks/useImportTopLinkData";
import useScrollToTop from "./hooks/useScrollToTop";

export default function App() {
  useScrollToTop();
  const { mediaQueryState } = useContext(MediaQueryContext);
  const { mainNavOptions, dropdownMenuOptions, mobileNavOptions } =
    useNavigationOptionsData();
  const { footerOptions, logoButtonData, footerBottomOptions } =
    useLinkGroupsData();
  const { mobileFooterFirstList, mobileFooterRestList } =
    useImportMobileFooterData();
  const { topLinkData } = useImportTopLinkData();

  return (
    <div className="App">
      {mediaQueryState.computerScreenMatches && (
        <TopLinks linksInfoArray={topLinkData} />
      )}

      {mediaQueryState.computerScreenMatches && <Logobar title={"The Shop."} />}

      {mediaQueryState.computerScreenMatches && (
        <Navbar
          brandName={"The Shop."}
          mainNavOptions={mainNavOptions}
          dropdownMenuOptions={dropdownMenuOptions}
        />
      )}
      {!mediaQueryState.computerScreenMatches && (
        <MobileNavigation
          mainNavOptions={mobileNavOptions}
          brandName={"The Shop."}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoContent />} />
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
    </div>
  );
}
