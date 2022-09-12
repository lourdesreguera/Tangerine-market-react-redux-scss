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
import ConditionsPage from "./pages/ConditionsPage";
import AboutPage from "./pages/AboutPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import FooterMobile from "./components/FooterMobile";
import OrderConfirmation from "./pages/OrderConfirmation";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { checkUser } from "./redux/auth/aut.actions";
import HomePage from "./pages/HomePage";
import NavbarMobile from "./components/NavbarMobile";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch]); 

  return (
    <div className="app">
      <MediaQuery minWidth={600}>
        <HeaderDesk />
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <HeaderMobile />
      </MediaQuery>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
        <Route
          path="/order-confirm"
          element={<AuthRoute component={<OrderConfirmation />} />}
        />
        <Route path="/stores">
          <Route index element={<StoresPage />} />
          <Route path=":id" element={<StoreDetailPage />} />
        </Route>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/conditions" element={<ConditionsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <MediaQuery minWidth={600}>
        <Footer />
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <FooterMobile />
        <NavbarMobile />
      </MediaQuery>
    </div>
  );
}

export default App;
