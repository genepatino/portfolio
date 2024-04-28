import { Fragment } from "react/jsx-runtime";
import { Hero } from "./components/Hero";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { AboutMe } from "./components/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <GlobalStyle />
        <Hero />
        <AboutMe />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
