import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ShoppingCartContextComponent from "./context/ShoppingCartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ShoppingCartContextComponent>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ShoppingCartContextComponent>
    </Provider>
  </React.StrictMode>
);
