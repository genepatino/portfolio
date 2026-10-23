import luxeBazaarVideo from "../videos/luxeBazaar.mp4";
import weatherWiseVideo from "../videos/weatherWise.mp4";
import taskTideVideo from "../videos/Tasktide.mp4";
import luxeBazaarImg from "../images/luxebazaar.png";
import weatherwiseImg from "../images/weatherwise.png";
import tasktideImg from "../images/tasktide.png";
import pqrsFormImg from "../images/projects/pqrs-form.webp";
import pqrsValidationImg from "../images/projects/pqrs-validation.webp";
import cifreFeaturedImg from "../images/projects/cifre-featured.png";
import cifreLoginImg from "../images/projects/cifre-login.webp";
import cifreCourseDetailImg from "../images/projects/cifre-course-detail.webp";

// Texts live in translations/{es,en}/global.json under `projects.items.<id>`.
type BaseProject = {
  id: string;
  image: string;
};

export type PersonalProject = BaseProject & {
  kind: "personal";
  title: string;
  video: string;
  demoUrl: string;
};

// Expected translation keys for a professional project:
// title, organization, period, context, role, highlights[], decisions[], codeNote
export type ProfessionalProject = BaseProject & {
  kind: "professional";
  stack: string[];
  productionUrl: string;
  gallery: string[];
  codeAvailability: "private" | "public";
  repoUrl?: string;
};

export type Project = PersonalProject | ProfessionalProject;

export const professionalProjects: ProfessionalProject[] = [
  {
    kind: "professional",
    id: "pqrs",
    image: pqrsFormImg,
    gallery: [pqrsValidationImg],
    stack: ["React", "TypeScript", "Redux", "Tailwind CSS", "Axios"],
    productionUrl: "https://bpms-portal.icfes.gov.co/pqrs",
    codeAvailability: "private",
  },
  {
    kind: "professional",
    id: "cifre",
    image: cifreFeaturedImg,
    gallery: [cifreLoginImg, cifreCourseDetailImg],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "TanStack Query",
      "Axios",
      "React Router",
      "i18next",
    ],
    productionUrl: "https://academy.cifre.com.co/courses",
    codeAvailability: "private",
  },
];

export const personalProjects: PersonalProject[] = [
  {
    kind: "personal",
    id: "luxebazaar",
    title: "Luxe Bazaar",
    image: luxeBazaarImg,
    video: luxeBazaarVideo,
    demoUrl: "https://superlative-moxie-f78436.netlify.app/",
  },
  {
    kind: "personal",
    id: "weatherwise",
    title: "Weather Wise",
    image: weatherwiseImg,
    video: weatherWiseVideo,
    demoUrl: "https://effervescent-dragon-bf467a.netlify.app/",
  },
  {
    kind: "personal",
    id: "tasktide",
    title: "Task Tide",
    image: tasktideImg,
    video: taskTideVideo,
    demoUrl: "https://genuine-pony-f9062e.netlify.app/",
  },
];
