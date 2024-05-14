import { Link } from "react-router-dom";
import { Container } from "./styled";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import instagram from "../../images/instagram.png";
import { useTranslation } from "react-i18next";

function Contact() {
  const [t] = useTranslation("global");
  return (
    <Container id="contact">
      <h2>
        {t("contact.left-h2")}
        <br />
        {t("contact.right-h2")}
      </h2>
      <div className="title-p">
        <p>{t("contact.thanks")}</p>
        <p className="text">
          {t("contact.text-left")} <br /> {t("contact.text-right")}
        </p>
      </div>
      <div className="icon-socialmedia">
        <Link
          className="link"
          target="_blank"
          to="https:www.linkedin.com/in/genesis-patino"
        >
          <img src={linkedin} alt="icon" />
          <span>Linkedin</span>
        </Link>
        <Link
          className="link"
          target="_blank"
          to="https://github.com/genepatino"
        >
          <img src={github} alt="icon" />
          <span>github</span>
        </Link>
        <Link
          className="link"
          target="_blank"
          to="https://www.instagram.com/genesisptn/?hl=es"
        >
          <img src={instagram} alt="icon" />
          <span>instagram</span>
        </Link>
      </div>
    </Container>
  );
}

export { Contact };
