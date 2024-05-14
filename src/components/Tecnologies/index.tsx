import { useTranslation } from "react-i18next";
import { Card, Container, GridContainer } from "./styled";
import html5 from "../../images/html.png";
import css3 from "../../images/css3.png";
import js from "../../images/javascript.png";
import react from "../../images/React.webp";
import redux from "../../images/redux.png";
import styledC from "../../images/styledComponents.png";
import ts from "../../images/ts.png";
import npm from "../../images/npm.png";
import git from "../../images/git.png";
import github from "../../images/github.png";
import vscode from "../../images/visual-studio-code-icon.webp";
import figma from "../../images/Figma-logo.svg";
import notion from "../../images/notion.svg";

function Tecnologies() {
  const [t] = useTranslation("global");
  return (
    <>
      <Container id="tecnologies">
        <h2>{t("navbar.tecnologies")}</h2>
        <GridContainer>
          <Card>
            <p>Frontend</p>
            <div className="icon-container">
              <figure>
                <img src={html5} alt="" />
                <figcaption>html5</figcaption>
              </figure>
              <figure>
                <img src={css3} alt="" />
                <figcaption>css3</figcaption>
              </figure>
              <figure>
                <img src={js} alt="" />
                <figcaption>js</figcaption>
              </figure>
              <figure>
                <img src={react} alt="" />
                <figcaption>react</figcaption>
              </figure>
              <figure>
                <img src={ts} alt="" />
                <figcaption>typescript</figcaption>
              </figure>
              <figure>
                <img src={redux} alt="" />
                <figcaption>redux</figcaption>
              </figure>
              <figure>
                <img src={styledC} alt="" />
                <figcaption>styled C</figcaption>
              </figure>
            </div>
          </Card>
          <Card>
            <p>{t("tecnologies.tools")}</p>
            <div className="icon-container">
              <figure>
                <img src={npm} alt="" />
                <figcaption>npm</figcaption>
              </figure>
              <figure>
                <img src={git} alt="" />
                <figcaption>git</figcaption>
              </figure>
              <figure>
                <img src={github} alt="" />
                <figcaption>github</figcaption>
              </figure>
              <figure>
                <img src={vscode} alt="" />
                <figcaption>vscode</figcaption>
              </figure>
              <figure>
                <img src={figma} alt="" />
                <figcaption>figma</figcaption>
              </figure>
              <figure>
                <img src={notion} alt="" />
                <figcaption>notion</figcaption>
              </figure>
            </div>
          </Card>
        </GridContainer>
      </Container>
    </>
  );
}

export { Tecnologies };
