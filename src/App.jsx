import "./App.scss";
import HeaderDesk from "./components/HeaderDesk";
import HeaderMobile from "./components/HeaderMobile";
import MediaQuery from "react-responsive";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import MyAccountPage from "./pages/MyAccountPage";
import AuthRoute from "./components/AuthRoute";
import StoresPage from "./pages/StoresPage";
import StoreDetailPage from "./pages/StoreDetailPage";
import ProductsPage from "./pages/ProductsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

function App() {
  return (
    <div className="app">
      <MediaQuery minWidth={600}>
        <HeaderDesk />
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <HeaderMobile />
      </MediaQuery>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/my-account"
          element={<AuthRoute component={<MyAccountPage />} />}
        />
        <Route
          path="/shopping-cart"
          element={<AuthRoute component={<ShoppingCartPage />} />}
        />
        <Route path="/stores">
          <Route index element={<StoresPage />} />
          <Route path=":id" element={<StoreDetailPage />} />
        </Route>
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
