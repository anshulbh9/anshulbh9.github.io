import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: ' ',
  paragraphThree: '     ',
  resume: 'https://drive.google.com/file/d/1bSyfL1qlYPsi8ofCAzJqvOH-3hQuQrcC/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsDatas = [
  {
    id: nanoid(),
    img: 'oyoroom.jpg',
    title: 'Software Development Engineer I',
    info:
      'Working as a software development engineer in growth tech team, i mostly work on backend technologies',
    info2:
      'Skills:\n' +
      'Java, C++, Spring Boot, SQL, Kubernetes, Hibernate, HTML, CSS, JavaScript, React.js, Kibana, Grafana',
    url: '',
  },
];
export const projectsData = [
  {
    id: nanoid(),
    img: 'TitleImg.jpg',
    title: 'Library Management System',
    info:
      'Making ER diagrams, database normalization to 3-nf and SQL\n' +
      'queries for CRUD operations and making a spring boot application\n' +
      'for REST API to perform CRUD operations',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'trieimg.png',
    title: 'AutoComplete and Auto-Suggest| Data Structures C++',
    info:
      'Implemented the auto-suggest feature using trie data structure, which gives completion option based on user inputs',
    info2: '',
    url: '',
    repo: 'https://github.com/anshulbh9/anshulbh9.github.io', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'anshulbh9@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://medium.com/@anshulbh9',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://www.hackerrank.com/anshulb14',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anshulbh9/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/anshulbh9',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
