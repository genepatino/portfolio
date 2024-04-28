import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
import { ButtonCV } from "../Hero/styled";
import { GridContainer } from "./styled";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import instagram from "../../images/instagram.png";
import imgCode from "../../images/code.jpg";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const [t] = useTranslation("global");

  return (
    <GridContainer id="about-me">
      <section className="left">
        <h2>Abut Me</h2>
        <p>
          {t("about-me-section.p1")}
          <br />
          {t("about-me-section.br")}
        </p>
        <p>{t("about-me-section.p2")}</p>
        <div className="button-icons">
          <ButtonCV $backgroundColor="linear-gradient(90deg, #4219dc, #973af1)">
            <FaDownload />
            <a
              href="../../../public/curriculum-vitae.pdf"
              download="CV Génesis Patiño"
            >
              Descargar CV
            </a>
          </ButtonCV>
          <Link to="https:www.linkedin.com/in/genesis-patino">
            <img src={linkedin} alt="icon linkedin" />
          </Link>
          <Link to="https://github.com/genepatino">
            <img src={github} alt="icon linkedin" />
          </Link>
          <Link to="https://www.instagram.com/genesisptn/?hl=es">
            <img src={instagram} alt="icon linkedin" />
          </Link>
        </div>
      </section>
      <div className="right">
        <img src={imgCode} alt="img computer and code" />
      </div>
    </GridContainer>
  );
}

export { AboutMe };
