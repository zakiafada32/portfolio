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
    title: 'Ecommerce Crwn-Clothing',
    info:
      'Full-stack web ecommerce application with full functionalities built with React for UI, Redux for state management, Firebase for data storage, Express.js for handle payment request with Stripe API, and deploy at Herolu.',
    info2: '',
    url: '',
    repo: 'https://github.com/zakiafada32/clothing-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Smart-Face Detection',
    info:
      'Full-stack web application that detect a face within a submitted image using a Clarifai API. It Built with React for UI, Node/Express.js server, user authentication with JWT and PostgreSQL database.',
    info2: '',
    url: '',
    repo: 'https://github.com/zakiafada32/smart-face-detection', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Museum of the World',
    info:
      'Full-stack web application that provides a list of museum around the world. The app features is users can add a new museum and add a review for the museum user authentication, museum location with Mapbpox API and user authentication.',
    info2: '',
    url: '',
    repo: 'https://github.com/zakiafada32/camp-grounds', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Hackernews Clone',
    info:
      'Full-stack web application clone of Hackernews built with GraphQL. The app features is display and search the list of links, user authentication, create new links, upvote links, and realtime update when other users create a new link or upvote a link.',
    info2: '',
    url: '',
    repo: 'https://github.com/zakiafada32/hackernews-apollo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Vanilla JS',
    info: 'A list of interesting projects built with vanilla js, html and css.',
    info2: '',
    url: '',
    repo: 'https://github.com/zakiafada32', // if no repo, the button will not show up
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
