import { Fragment } from "react/jsx-runtime";
import { Hero } from "./components/Hero";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { AboutMe } from "./components/AboutMe";
import { ProjectsComponent } from "./components/ProjectsComponent";
import { Tecnologies } from "./components/Tecnologies";
import { Contact } from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <GlobalStyle />
        <Hero />
        <AboutMe />
        <ProjectsComponent />
        <Tecnologies />
        <Contact />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
