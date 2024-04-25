import { Link } from "react-router-dom";
import ImageHero from "../../images/Hero.jpg";
import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa6";
import {
  HeroSection,
  Navbar,
  ButtonCV,
  AboutMe,
  ImageContainer,
} from "./styled";

function Hero() {
  const [t] = useTranslation("global");

  const list = [
    {
      name: t("navbar.home"),
      to: "/",
    },
    {
      name: t("navbar.about-me"),
      to: "about-me",
    },
    {
      name: t("navbar.projects"),
      to: "projects",
    },
    {
      name: t("navbar.tecnologies"),
      to: "tecnologies",
    },
    {
      name: t("navbar.contact"),
      to: "contact",
    },
  ];

  return (
    <>
      <HeroSection>
        <Navbar>
          <ul>
            {list.map((item) => (
              <li key={item.name}>
                <Link to={item.to} className="goTo">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonCV>
            <FaDownload />
            <a
              href="../../../public/curriculum-vitae.pdf"
              download="CV Génesis Patiño"
            >
              {t("navbar.curriculo")}
            </a>
          </ButtonCV>
        </Navbar>
      </HeroSection>
      <AboutMe>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#070268"
            fillOpacity="1"
            d="M0,192L48,208C96,224,192,256,288,272C384,288,480,288,576,266.7C672,245,768,203,864,160C960,117,1056,75,1152,85.3C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
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
          <img src={ImageHero} alt="foto profesional Genesis Patiño" />
        </ImageContainer>
      </AboutMe>
    </>
  );
}

export { Hero };

/* <HeroSection>
      <BlueSection>
        <Navbar>
          <ul>
            {list.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
          <p>{t("navbar.curriculo")}</p>
        </Navbar>
      </BlueSection>
      <div className="container_2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#070268"
            fill-opacity="1"
            d="M0,192L48,208C96,224,192,256,288,272C384,288,480,288,576,266.7C672,245,768,203,864,160C960,117,1056,75,1152,85.3C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="name">
          <h3>Hola I am</h3>
          <h2>Génesis Patiño</h2>
          <p className="about-me">
            Frontend Developer. Te ayudo a crear experiencias de usuario no solo
            visualmente atractivas, sino también intuitivas y accesibles.
          </p>
        </div>
        <ImageContainer>
          <img src={ImageHero} alt="foto profesional Genesis Patiño" />
        </ImageContainer>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#070268"
          fill-opacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,202.7C384,235,480,245,576,245.3C672,245,768,235,864,213.3C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      </HeroSection> */
