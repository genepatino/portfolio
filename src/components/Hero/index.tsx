import { useState } from "react";
import { MenuResponsive } from "../MenuResponsive";
import ImageHero from "../../images/Hero.jpg";
import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa6";
import flagSpain from "../../images/flagspain.svg.png";
import flagEEUU from "../../images/FlagEEUU.svg.png";
import shapsImg from "../../images/shaps.png";
import { NavbarContainer, ButtonCV, AboutMe, ImageContainer } from "./styled";
import cvitae from "../../../public/curriculum-vitae.pdf";

function Hero() {
  const [t, i18n] = useTranslation("global");
  const [languagesIsEs, setLanguagesIsEs] = useState(true);

  const handleLanguages = () => {
    console.log("click over me");
    if (languagesIsEs) {
      setLanguagesIsEs(!languagesIsEs);
      i18n.changeLanguage("en");
    } else {
      setLanguagesIsEs(!languagesIsEs);
      i18n.changeLanguage("es");
    }
  };

  const list = [
    {
      name: t("navbar.home"),
      to: "#",
    },
    {
      name: t("navbar.about-me"),
      to: "#about-me",
    },
    {
      name: t("navbar.projects"),
      to: "#projects",
    },
    {
      name: t("navbar.tecnologies"),
      to: "#tecnologies",
    },
    {
      name: t("navbar.contact"),
      to: "#contact",
    },
  ];

  return (
    <>
      <NavbarContainer>
        <ul className="ul-container">
          {list.map((item) => (
            <li key={item.name}>
              <a href={item.to} className="goTo">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <MenuResponsive />
        <div className="CV-languages">
          <ButtonCV>
            <FaDownload />
            <a href={cvitae} download="curriculum-vitae.pdf">
              {t("navbar.curriculo")}
            </a>
          </ButtonCV>
          <div className="buttons-es-en">
            {languagesIsEs ? (
              <button
                onClick={handleLanguages}
                className="button-languages"
                type="button"
              >
                <span>en</span>
                <img src={flagEEUU} alt="flag spain language spain" />
              </button>
            ) : (
              <button
                onClick={handleLanguages}
                className="button-languages"
                type="button"
              >
                <span>es</span>
                <img src={flagSpain} alt="flag spain language spain" />
              </button>
            )}
          </div>
        </div>
      </NavbarContainer>
      <AboutMe>
        <div className="section-hero-image">
          <div className="about-me">
            <h3>{t("hero.Im")}</h3>
            <h2>Génesis Patiño</h2>
            <p className="developer">{t("hero.developer")}</p>
            <p className="ready">
              <i>
                <strong>{t("hero.ready")}</strong>
              </i>
            </p>
          </div>
          <ImageContainer>
            <img
              className="heroImage"
              src={ImageHero}
              alt="foto profesional Genesis Patiño"
            />
            <img src={shapsImg} alt="" id="shaps" />
          </ImageContainer>
        </div>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#070268"
            fillOpacity="1"
            d="M0,192L60,208C120,224,240,256,360,261.3C480,267,600,245,720,202.7C840,160,960,96,1080,101.3C1200,107,1320,181,1380,218.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </AboutMe>
    </>
  );
}

export { Hero };
