import { useTranslation } from "react-i18next";
import {
  Container,
  GridContainer,
  ProfessionalList,
  ProfessionalCard,
  SectionTitle,
} from "./styled";
import { Link } from "react-router-dom";
import {
  PersonalProject,
  ProfessionalProject,
  personalProjects,
  professionalProjects,
} from "../../data/projects";

function ProfessionalProjectCard({ project }: { project: ProfessionalProject }) {
  const [t] = useTranslation("global");
  const key = `projects.items.${project.id}`;
  const title = t(`${key}.title`);
  const highlights = t(`${key}.highlights`, { returnObjects: true }) as string[];
  const decisions = t(`${key}.decisions`, { returnObjects: true }) as string[];

  return (
    <ProfessionalCard>
      <div className="media">
        <a href={project.productionUrl} target="_blank" rel="noreferrer">
          <img className="cover" src={project.image} alt={title} />
        </a>
        <div className="gallery">
          {project.gallery.map((src, index) => (
            <a key={src} href={src} target="_blank" rel="noreferrer">
              <img src={src} alt={`${title} — ${index + 2}`} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
      <div className="info">
        <span className="meta">
          {t(`${key}.organization`)} · {t(`${key}.period`)}
        </span>
        <h3>{title}</h3>
        <h4>{t("projects.labels.context")}</h4>
        <p>{t(`${key}.context`)}</p>
        <h4>{t("projects.labels.role")}</h4>
        <p>{t(`${key}.role`)}</p>
        <ul>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h4>{t("projects.labels.decisions")}</h4>
        <ul>
          {decisions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h4>{t("projects.labels.stack")}</h4>
        <ul className="stack">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="links">
          <a href={project.productionUrl} target="_blank" rel="noreferrer">
            {t("projects.labels.production")} ↗
          </a>
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              {t("projects.labels.repo")} ↗
            </a>
          )}
        </div>
        <p className="code-note">🔒 {t(`${key}.codeNote`)}</p>
      </div>
    </ProfessionalCard>
  );
}

function PersonalProjectCard({ project }: { project: PersonalProject }) {
  const [t] = useTranslation("global");
  return (
    <div className="container">
      <div className="video-container video">
        <div className="title titleVideo">
          <h4>{project.title}</h4>
        </div>
        <video src={project.video} controls />
      </div>
      <div className="image-project-resena">
        <img className="imagProject" src={project.image} alt={project.title} />
        <p className="resena">
          <Link target="_blank" className="url" to={project.demoUrl}>
            {project.title}
          </Link>
          {t(`projects.items.${project.id}.summary`)}
        </p>
      </div>
    </div>
  );
}

function ProjectsComponent() {
  const [t] = useTranslation("global");
  return (
    <Container id="projects">
      <p>{t("projects.collection")}</p>
      <h2>{t("projects.work")}</h2>
      <SectionTitle>{t("projects.professional")}</SectionTitle>
      <ProfessionalList>
        {professionalProjects.map((project) => (
          <ProfessionalProjectCard key={project.id} project={project} />
        ))}
      </ProfessionalList>
      <SectionTitle>{t("projects.personal")}</SectionTitle>
      <GridContainer>
        {personalProjects.map((project) => (
          <PersonalProjectCard key={project.id} project={project} />
        ))}
      </GridContainer>
    </Container>
  );
}

export { ProjectsComponent };
