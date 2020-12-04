import creativeAgency from "../../Images/works/creativeAgency.PNG";
import devFolio from "../../Images/works/DevFolio.PNG";
import friendBook from "../../Images/works/friendBook.PNG";
import networkVolunteer from "../../Images/works/networkVolunteer.PNG";
import travelGuru from "../../Images/works/travelGuru.PNG";

export const navLinks = [
  {
    title: "Home",
    cName: "nav-links",
    url: "#home",
  },
  {
    title: "Skills",
    cName: "nav-links",
    url: "#skills",
  },
  {
    title: "Projects",
    cName: "nav-links",
    url: "#projects",
  },
  {
    title: "Contact",
    cName: "nav-links",
    url: "#contact",
  },
];

export const skills = [
  { id: 1, skill: "React", level: "expertise" },
  { id: 2, skill: "JavaScript", level: "expertise" },
  { id: 3, skill: "HTML5", level: "expertise" },
  { id: 4, skill: "Bootstrap", level: "expertise" },
  { id: 5, skill: "Material ui", level: "expertise" },
  { id: 6, skill: "ES6", level: "expertise" },
  { id: 7, skill: "MongoDB", level: "expertise" },
  {
    id: 8,
    level: "comfortable",
    skill: "Node.js",
  },
  {
    id: 9,
    level: "comfortable",
    skill: "Express.js",
  },
  {
    id: 10,
    level: "comfortable",
    skill: "Heroku",
  },
  {
    id: 11,
    level: "comfortable",
    skill: "Data Structure",
  },
  {
    id: 12,
    level: "comfortable",
    skill: "algorithms",
  },
  {
    id: 13,
    level: "familiar",
    skill: "Redux",
  },
  {
    id: 14,
    level: "familiar",
    skill: "Mongoose",
  },
];

export const works = [
  {
    id: 1,
    type: "mern",
    photo: creativeAgency,
    title: "Creative Agency",
    discription:
      "It is an agency website for developing buyer projects in different fields like web development, app development.",
    liveSite: "https://creative-agency-368ac.web.app//",
    github: "https://github.com/Rabby-sopno/creative-agency-client",
    technology:
      "React.js, Bootstrap, Express, MongoDB, Node.js, firebase, React-router",
  },
  {
    id: 2,
    type: "mern",
    photo: networkVolunteer,
    title: "Network Volunteer",
    discription:
      " It is a volunteering site where people can play a volunteer role in developing society.",
    liveSite: "https://volunteer-network-12fba.web.app/",
    github: "https://github.com/Rabby-sopno/Network-Volunteer",
    technology:
      "React.js, Bootstrap, Express, MongoDB, Node.js, firebase, React-router",
  },
  {
    id: 3,
    type: "react",
    photo: devFolio,
    title: "Dev Folio",
    discription:
      " It is portfolio website which I have added my some experience",
    liveSite: "https://musing-wright-9161cc.netlify.app/",
    github: "https://github.com/Rabby-sopno/dev-folio",
    technology: "React.js, Material UI, Netlify,React-router",
  },
  {
    id: 4,
    type: "mern",
    photo: travelGuru,
    title: "Travel Guru",
    discription:
      " It is a travel agency website where people can book hostel in your desire place",
    liveSite: "https://wonderful-meitner-8f3db3.netlify.app/",
    github: "https://github.com/Rabby-sopno/travel-guru",
    technology: "React.js, Bootstrap, firebase, React-router",
  },
  {
    id: 5,
    type: "react",
    photo: friendBook,
    title: "Friend Book",
    discription:
      "It is a social website like Facebook.Where has 10 users which collected from third-party API.",
    liveSite: "frosty-williams-50d30a.netlify.app/",
    github: "https://github.com/Rabby-sopno/assignment-8",
    technology: "React.js, Material UI, third-party API,",
  },
];
