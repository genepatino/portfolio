import { useTranslation } from "react-i18next";
import { Container, GridContainer } from "./styled";
import luxeBazaarVideo from "../../videos/luxeBazaar.mp4";
import weatherWiseVideo from "../../videos/weatherWise.mp4";
import taskTideVideo from "../../videos/Tasktide.mp4";
import luxeBazaarImg from "../../images/luxebazaar.png";
import weatherwiseImg from "../../images/weatherwise.png";
import tasktideImg from "../../images/tasktide.png";
import { Link } from "react-router-dom";

function ProjectsComponent() {
  const [t] = useTranslation("global");
  return (
    <Container id="projects">
      <p>{t("projects.collection")}</p>
      <h2>{t("projects.work")}</h2>
      <GridContainer>
        <div className="container">
          <div className="video-container videoLuxe">
            <div className="title titleLuxe">
              <h4>Luxee Bazaar</h4>
            </div>
            <video src={luxeBazaarVideo} controls />
          </div>
          <div className="image-project-resena">
            <img className="imagProject" src={luxeBazaarImg} alt="" />
            <p className="resena">
              <Link
                target="_blank"
                className="url"
                to="https://65de0800bb7acd009444b25b--superlative-moxie-f78436.netlify.app/"
              >
                Luxe Bazaar
              </Link>
              {t("projects.luxebazaar")}
            </p>
          </div>
        </div>
        <div className="container">
          <div className="video-container videoWeather">
            <div className="title titleWeather">
              <h4>Weather Wise</h4>
            </div>
            <video src={weatherWiseVideo} controls />
          </div>
          <div className="image-project-resena">
            <img className="imagProject" src={weatherwiseImg} alt="" />
            <p className="resena">
              Weather Wise
              {t("projects.wetherwise")}
            </p>
          </div>
        </div>
        <div className="container">
          <div className="video-container videoTaskTide">
            <div className="title titleTaskTide">
              <h4>Task Tide</h4>
            </div>
            <video src={taskTideVideo} controls />
          </div>
          <div className="image-project-resena">
            <img className="imagProject" src={tasktideImg} alt="" />
            <p className="resena">
              <Link
                target="_blank"
                className="url"
                to="https://genuine-pony-f9062e.netlify.app/"
              >
                Task Tide
              </Link>
              {t("projects.tasktide")}
            </p>
          </div>
        </div>
      </GridContainer>
    </Container>
  );
}

export { ProjectsComponent };
