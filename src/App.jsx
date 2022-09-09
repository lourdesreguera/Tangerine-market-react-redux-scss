import "./App.scss";
import HeaderDesk from "./components/HeaderDesk";
import HeaderMobile from "./components/HeaderMobile";
import MediaQuery from "react-responsive";
import CategoryNav from "./components/CategoryNav";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";
import MyAccountPage from "./pages/MyAccountPage";

function App() {
  return (
    <div className="app">
      <MediaQuery minWidth={600}>
        <HeaderDesk />
        {/* <CategoryNav /> */}
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <HeaderMobile />
      </MediaQuery>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-account" element={<MyAccountPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
