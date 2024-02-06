import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";

// import profile from "./assets/Profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import java from "./assets/techstack/java.png";
import express from "./assets/techstack/express.png";
import node from "./assets/techstack/node.png";
import mongodb from "./assets/techstack/mongodb.png";
import sql from "./assets/techstack/sql.png";
import firebase from "./assets/techstack/firebase.png";

// Porject Images
import projectImage1 from "./assets/projects/Project1.png";
import projectImage2 from "./assets/projects/Project2.png";
import projectImage3 from "./assets/projects/Project3.png";
import projectImage4 from "./assets/projects/Project4.png";
import projectImage5 from "./assets/projects/Project5.png";
import projectImage6 from "./assets/projects/Project 6.png";
import projectImage8 from "./assets/projects/Project8.png";
import projectImage10 from "./assets/projects/Project10.png";
import projectImage11 from "./assets/projects/Project11.png";
// Certificate Images
import c1 from "./assets/certificates/Certificate1.png";
import c2 from "./assets/certificates/Certificate2.png";
import c3 from "./assets/certificates/Certificate3.png";
import c4 from "./assets/certificates/Certificate4.jpg";
import c5 from "./assets/certificates/Certificate5.png";
import c6 from "./assets/certificates/Certificate6.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
// export const personalDetails = {
//   name: "Govind Kumar",
//   tagline: "I build things for web",
//   img: profile,
// };

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/g3vind/",
  github: "https://www.github.com/g3vind",
  twitter: "https://twitter.com/g3vind",
  instagram: "https://www.instagram.com/govindxingh",
};

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  java: java,
  sql: sql,
  firebase: firebase,
  express: express,
  node: node,
  mongodb: mongodb,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Shop Connect",
    image: projectImage10,
    description: `Ecommerce Webapp with Admin Panel`,
    techstack: "Reactjs, Context API",
    previewLink: "https://expenses-tracker-react-app1.netlify.app/",
    githubLink: "https://github.com/g3vind/shop-connect",
  },
  {
    title: "Swiggy Clone",
    image: projectImage1,
    description: `A Clone of Swiggy's Website`,
    techstack: "ReactJs, Tailwind CSS, React Router DOM",
    previewLink: "https://swiggy-clone11.vercel.app/",
    githubLink: "https://github.com/g3vind/swiggy-clone",
  },
  {
    title: "Youtube Clone",
    image: projectImage11,
    description: `A Clone of Youtube's's Website`,
    techstack: "ReactJs, Axios, Tailwind CSS, React Router DOM",
    previewLink: "https://youtube-clone11.vercel.app/",
    githubLink: "https://github.com/g3vind/youtube-clone",
  },
  {
    title: "Ticket Flow",
    image: projectImage4,
    description: `Ticket Management Website using NextJS `,
    techstack: "NextJS, Tailwind CSS , JavaScript",
    previewLink: "https://cricliveapp.netlify.app/",
    githubLink: "https://github.com/g3vind/ticket-flow",
  },
  {
    title: "Typing Master",
    image: projectImage5,
    description: `Website for typing speed and accuracy detection`,
    techstack: "React.js, Firebase",
    previewLink: "https://what-to-do-list1.netlify.app/",
    githubLink: "https://github.com/g3vind/typing-master",
  },
  {
    title: "MCA Blogs",
    image: projectImage2,
    description: `Blogging Website with Google Authentication `,
    techstack: `React.js, React Router DOM, JSON Server`,
    previewLink: "https://bca-blogs.netlify.app/",
    githubLink: "https://github.com/g3vind/bca-blogs",
  },
  {
    title: "MERN To-Do App",
    image: projectImage3,
    description: `To-Do App for managing tasks`,
    techstack: "HTML5, CSS3, JavaScript",
    previewLink: "https://clone-using-html-css-js.netlify.app/",
    githubLink: "https://github.com/g3vind/mern-todo",
  },
  {
    title: "Crypto Snap",
    image: projectImage8,
    description: `Crypto Tracker Website`,
    techstack: "Reactjs, Chartjs, Tailwind",
    previewLink: "https://crypto-snap.vercel.app/",
    githubLink: "https://github.com/g3vind/crypto-snap",
  },
  {
    title: "Image Search App",
    image: projectImage6,
    description: `A web application to search for images`,
    techstack: "HTML5, CSS3, JavaScript",
    previewLink: "https://search-image-for-you.netlify.app/",
    githubLink: "https://github.com/g3vind/image-search-app",
  },
];

export const certificatesData = [
  {
    id: 1,
    title: "Postman API Fundamentals Student Expert",
    link: "https://badgr.com/public/assertions/80voczJ1QlWWHtErqysf2Q?identity__email=g3vind@gmail.com",
    imageUrl: c1,
  },
  {
    id: 2,
    title: "Namaste React Course (NamasteDev.com) - By Akshay Saini",
    link: "https://courses.namastedev.com/learn/certificate/8683998-142240",
    imageUrl: c2,
  },
  {
    id: 3,
    title: "JavaScript Algorithms and Data Structures",
    link: "https://www.freecodecamp.org/certification/g3vind/javascript-algorithms-and-data-structures",
    imageUrl: c3,
  },
  {
    id: 4,
    title: "Java 8+ Essential Training : Syntax and Structure",
    link: "https://www.linkedin.com/learning/certificates/a108020ef667eb51d76d32b6da526ffb9d4e70dd355594b113af66f6497d01b1",
    imageUrl: c4,
  },
  {
    id: 5,
    title: "Responsive Web Design - freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/g3vind/responsive-web-design",
    imageUrl: c5,
  },
  {
    id: 6,
    title: "Google Cloud (GCP) Bootcamp - GeeksForGeeks",
    link: "https://drive.google.com/file/d/1lgOkm5SdJJ0VhoXxZI8ZkEu2AlmBPpRP/view?usp=drive_link",
    imageUrl: c6,
  },
];
