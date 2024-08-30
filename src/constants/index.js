import project1 from "../assets/projects/theWayHome.jpg";
import project2 from "../assets/projects/quickPurchasePage.jpg";
import project3 from "../assets/projects/calebArmonya.jpg";
import video1 from "../assets/projects/2DGame_Balmeo_Collado_Jonson_Subido_SampleGameplay.mp4";
import design1 from "../assets/projects/design1.jpg"
import design2 from "../assets/projects/design2.jpg"
import design3 from "../assets/projects/design3.jpg"
import design4 from "../assets/projects/design4.jpg"
import design5 from "../assets/projects/design5.jpg"
import design6 from "../assets/projects/design6.jpg"
import design7 from "../assets/projects/design7.jpg"

export const ABOUT_TEXT = `I am passionate about creating innovative solutions and continuously expanding my knowledge.`;

export const EXPERIENCES = [
  {
    year: "2019 - 2024",
    role: "De La Salle University - Dasmarinas",
    company: "College - Bachelor of Science in Computer Science",
    description: `DBB-B, 4115 West Ave, Dasmariñas, Cavite`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2013 - 2019",
    role: "Statefields School Inc",
    company: "Highschool",
    description: `National Road, Molino III, Bacoor City, Cavite, Philippines 4102`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2006 - 2013",
    role: "CENTEX School of Excellence",
    company: "Elementary",
    description: `Jose Abad Santos St cor CM Recto, Tondo Manila Manila, Philippines`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "The Way Home",
    image: project1,
    description:
      "In a cozy-themed 2D platformer, guide a determined cat on its heartwarming journey home, navigating through charming yet challenging obstacles, as it leaps, climbs, and purrs its way through a world filled with challenges.",
    technologies: ["HTML", "CSS"],
    video: ["View"],
    play: [video1],
  },
  {
    title: "User Interface/Page Design",
    image: project2,
    description:
      "A intuitive user interface that allows users to quickly repurchase recently bought items, featuring streamlined navigation, personalized recommendations, and easy one-tap purchasing for a seamless shopping experience.",
    technologies: ["Figma"],
    video: ["View"],
    play: [design1, design2, design3, design4, design5, design6, design7],
  },
  {
    title: "Armonya",
    image: project3,
    description:
      "In an interactive narrative storytelling game, follow the emotional journey of a person striving to mend broken bonds with friends and family, making choices that shape heartfelt conversations, rebuild trust, and uncover the power of forgiveness and connection.",
    technologies: ["C#", "Unity"],
    video: ["View"],
    play: ["https://www.youtube.com/embed/SpKy-CdCeCI"],
  },
];

export const CONTACT = {
  address: "Molino IV, Bacoor, Cavite ",
  phoneNo: "+63 945 607 9469 ",
  email: "joshuasubido.career@gmail.com",
};
