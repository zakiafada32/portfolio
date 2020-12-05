import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Zaki Afada', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'personal website, portfolio, welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Zaki Afada',
  subtitle: 'Full-Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm an Electrical Engineer turned Full-Stack Web Developer. I fell in love with the capabilities of web development after learning from various resources. Since then I've been on the path of a self-taught developer striving to always improve.",
  paragraphTwo:
    'I am conpceptual thinker with strong technical skills. I have experience i HTML, CSS, JavaScript, React, Redux, Node.js, Express.js, PostgreSQL and MongoDB',
  paragraphThree:
    'Beside programming, my hobbies are outdoor sports, cycling, reading and listening podcast',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
