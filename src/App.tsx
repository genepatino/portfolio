import { Fragment } from "react/jsx-runtime";
import { Hero } from "./components/Hero";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <GlobalStyle />
        <Hero />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
