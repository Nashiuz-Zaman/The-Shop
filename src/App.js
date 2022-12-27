//components
import Logobar from "./components/logobar/Logobar";
import Navbar from "./components/navbar/Navbar";

import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Logobar />
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
