import MainRasha from "../images/mainrasha.png";
import Welbex from "../images/welbex.png";
import CityBikes from "../images/cityBikes.png";

//export const MAIN_API_URL = 'https://api.movies-explorer.zb.nomoredomains.rocks';
export const MOVIES_API_URL = "https://api.nomoreparties.co/beatfilm-movies";
export const IMAGE_URL = "https://api.nomoreparties.co";

// export const MAIN_API_URL = 'http://localhost:3000';
export const MAIN_API_URL = "https://moviesexplorer-api.herokuapp.com";

export const SCREEN_WIDTH_L = 1280;
export const SCREEN_WIDTH_M = 768;
export const SCREEN_WIDTH_S = 320;

export const QUANTITY_MOVIES_TO_RENDER_L = 12;
export const QUANTITY_MOVIES_TO_RENDER_M = 8;
export const QUANTITY_MOVIES_TO_RENDER_S = 5;

export const QUANTITY_MOVIES_TO_ADD_L = 3;
export const QUANTITY_MOVIES_TO_ADD_M = 2;

export const QUANTIITY = 0;

export const SHORT_MOVIE_DURATION = 40;

const navTabProperties = [
  {
    label: "О проекте",
    anchor: "#about-project",
  },
  {
    label: "Технологии",
    anchor: "#technologies",
  },
  {
    label: "Студент",
    anchor: "#about-me",
  },
];
const teachListProperties = [
  {
    label: "HTML",
    link: "https://html.com/",
  },
  {
    label: "CSS",
    link: "https://www.w3.org/Style/CSS/",
  },
  {
    label: "JS",
    link: "https://www.javascript.com/",
  },
  {
    label: "React",
    link: "https://reactjs.org/",
  },
  {
    label: "Git",
    link: "https://git-scm.com/",
  },
  {
    label: "Express.js",
    link: "https://expressjs.com/",
  },
  {
    label: "mongoDB",
    link: "https://www.mongodb.com/",
  },
];

const socialLinkProperties = [
  {
    label: "Facebook",
    link: "https://www.facebook.com/zura.bobokhidze.3",
  },
  {
    label: "Github",
    link: "https://github.com/zurabobo",
  },
  {
    label: "Linkedin",
    link: "https://www.linkedin.com/in/zura-bobokhidze-bb999b234/",
  },
];

const portfolioLinkProperties = [
  {
    label: "Первое приложение React",
    link: "https://react-mestoapi.netlify.app/sign-in",
  },
  {
    label: "Дипломная работа",
    link: "https://movies-explorer-frontend.netlify.app/",
  },
];

const testProjectsProperties = [
  {
    cardLabel: "Welbex",
    task: "Test task",
    link: "https://welbex-testtask.netlify.app/",
    image: Welbex,
    frontend: "Frontend: React",
    backend: "Backend: Node.js",
    database: "Database: MongoDB",
    bundler: "Bundler: Webpack",
    deadline: "Deadline: 3 days",
    website: "Demo",
    script: "JavaScript",
    bgColor: "#f1e05a"
  },
  {
    cardLabel: "MainRasha",
    task: "Test task",
    link: "https://mainrasha-test-angular.netlify.app/bloggers",
    image: MainRasha,
    frontend: "Frontend: Angular",
    backend: "Backend: Node.js",
    database: "Database: PostgreSQL",
    bundler: "Bundler: Webpack",
    deadline: "Deadline: 3 days",
    website: "Demo",
    script: "TypeScript",
    bgColor: "#3178c6",
  },
  {
    cardLabel: "CityBikes",
    task: "Test task",
    link: "https://zurabobo.github.io/citybikes-test/",
    image: CityBikes,
    frontend: "Frontend: React",
    backend: "Backend: --",
    database: "Database: --",
    bundler: "Bundler: --",
    deadline: "Deadline: 3 days",
    website: "Demo",
    script: "TypeScript",
    bgColor: "#3178c6",
  },
];

export const environment = {
  navTabProperties,
  teachListProperties,
  socialLinkProperties,
  portfolioLinkProperties,
  testProjectsProperties,
};
