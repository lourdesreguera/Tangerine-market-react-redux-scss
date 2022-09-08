import "./App.scss";
import HeaderDesk from "./components/HeaderDesk";
import HeaderMobile from "./components/HeaderMobile";
import MediaQuery from "react-responsive";

function App() {
  return (
    <div className="app">
      <MediaQuery minWidth={600}>
        <HeaderDesk />
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <HeaderMobile />
      </MediaQuery>
    </div>
  );
}

export default App;
