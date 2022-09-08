import "./App.scss";
import HeaderDesk from "./components/HeaderDesk";
import HeaderMobile from "./components/HeaderMobile";
import MediaQuery from "react-responsive";
import CategoryNav from "./components/CategoryNav";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

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
      {/* <RegisterPage /> */}
      <LoginPage />
    </div>
  );
}

export default App;
