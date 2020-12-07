import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Zaki Afada | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Zaki Afada full stack web developer, welcome to my website', // e.g: Welcome to my website
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
    'I am conpceptual thinker with strong technical skills. I have experience i HTML, CSS, JavaScript, React, Redux, Node.js, Express.js, PostgreSQL and MongoDB.',
  paragraphThree:
    'Beside programming, my hobbies are outdoor sports, cycling, reading and listening podcast.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'clothing.png',
    title: 'Ecommerce Crwn-Clothing',
    info:
      'Full-stack web ecommerce application with full functionalities built with React for UI, Redux for state management, Firebase for data storage, Express.js for handle payment request with Stripe API, and deploy at Heroku.',
    info2: '',
    url: '',
    repo: 'https://github.com/zakiafada32/clothing-app', // if no repo, the button will not show up
    techList: [
      {
        id: nanoid(),
        name: 'React',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223572/icons-50x50/react_vw6dzy.png',
      },
      {
        id: nanoid(),
        name: 'Redux',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223572/icons-50x50/redux_yprrd9.png',
      },
      {
        id: nanoid(),
        name: 'Node.js',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223572/icons-50x50/node_lvlwhg.png',
      },
      {
        id: nanoid(),
        name: 'Express.js',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223570/icons-50x50/express_ul52li.png',
      },
      {
        id: nanoid(),
        name: 'Firebase',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223571/icons-50x50/firebase_c2calw.png',
      },
      {
        id: nanoid(),
        name: 'Stripe API',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223572/icons-50x50/stripe_s0hpwp.png',
      },
      {
        id: nanoid(),
        name: 'Heroku',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223570/icons-50x50/heroku_l4hpjr.png',
      },
    ],
  },
  {
    id: nanoid(),
    img: 'smartface.png',
    title: 'Smart-Face Detection',
    info:
      'Full-stack web application that detect a face within a submitted image using a Clarifai API. It Built with React for UI, Node/Express.js server, user authentication with JWT and PostgreSQL database.',
    info2: '',
    url: '',
    repo: 'https://github.com/zakiafada32/smart-face-detection', // if no repo, the button will not show up
    techList: [
      {
        id: nanoid(),
        name: 'React',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223572/icons-50x50/react_vw6dzy.png',
      },
      {
        id: nanoid(),
        name: 'Node.js',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223572/icons-50x50/node_lvlwhg.png',
      },
      {
        id: nanoid(),
        name: 'Express.js',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223570/icons-50x50/express_ul52li.png',
      },
      {
        id: nanoid(),
        name: 'PostgreSQL',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223571/icons-50x50/postgresql_dm6ytz.png',
      },
      {
        id: nanoid(),
        name: 'JSON Web Tokens',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223570/icons-50x50/jwt_i3kgqx.png',
      },
      {
        id: nanoid(),
        name: 'Clarifai API',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223570/icons-50x50/clarifai_ukjot7.png',
      },
      {
        id: nanoid(),
        name: 'Heroku',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223570/icons-50x50/heroku_l4hpjr.png',
      },
    ],
  },
  {
    id: nanoid(),
    img: 'yelpcamp.png',
    title: 'Museum of the World',
    info:
      'Full-stack web application that provides a list of museums around the world. The app features is users can add a new museum and add a review for the museum, museums location with Mapbpox API and user authentication.',
    info2: '',
    url: '',
    repo: 'https://github.com/zakiafada32/camp-grounds', // if no repo, the button will not show up
    techList: [
      {
        id: nanoid(),
        name: 'Node.js',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223572/icons-50x50/node_lvlwhg.png',
      },
      {
        id: nanoid(),
        name: 'Express.js',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223570/icons-50x50/express_ul52li.png',
      },
      {
        id: nanoid(),
        name: 'EJS',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223570/icons-50x50/ejs_dfqryv.png',
      },
      {
        id: nanoid(),
        name: 'MongoDB',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223571/icons-50x50/mongodb_ug0km0.png',
      },
      {
        id: nanoid(),
        name: 'Cloudinary API',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223570/icons-50x50/cloudinary_qudadz.png',
      },
      {
        id: nanoid(),
        name: 'MapBox API',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223571/icons-50x50/mapbox_rsvdgy.png',
      },
      {
        id: nanoid(),
        name: 'Heroku',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223570/icons-50x50/heroku_l4hpjr.png',
      },
    ],
  },
  {
    id: nanoid(),
    img: 'hackernews.png',
    title: 'Hackernews Clone',
    info:
      'Full-stack web application clone of Hackernews built with GraphQL. The app features is display and search the list of links, user authentication, create new links, upvote links, and realtime update when other users create a new link or upvote a link.',
    info2: '',
    url: '',
    repo: 'https://github.com/zakiafada32/hackernews-apollo', // if no repo, the button will not show up
    techList: [
      {
        id: nanoid(),
        name: 'React',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223572/icons-50x50/react_vw6dzy.png',
      },
      {
        id: nanoid(),
        name: 'GraphQL',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223571/icons-50x50/graphql_zwh9sf.png',
      },
      {
        id: nanoid(),
        name: 'Apollo GraphQL',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223570/icons-50x50/apollo_bbma8p.png',
      },
      {
        id: nanoid(),
        name: 'Node.js',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223572/icons-50x50/node_lvlwhg.png',
      },
      {
        id: nanoid(),
        name: 'Prisma.io',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223572/icons-50x50/prisma_nfdrwa.png',
      },
      {
        id: nanoid(),
        name: 'PostgreSQL',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223571/icons-50x50/postgresql_dm6ytz.png',
      },
      {
        id: nanoid(),
        name: 'JSON Web Tokens',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223570/icons-50x50/jwt_i3kgqx.png',
      },
      {
        id: nanoid(),
        name: 'Heroku',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223570/icons-50x50/heroku_l4hpjr.png',
      },
    ],
  },
  {
    id: nanoid(),
    img: 'vanillajs.png',
    title: 'Vanilla JS',
    info: 'A list of interesting projects built with vanilla js, html and css.',
    info2: '',
    url: '',
    repo: 'https://github.com/zakiafada32', // if no repo, the button will not show up
    techList: [
      {
        id: nanoid(),
        name: 'JavaScript',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223571/icons-50x50/javascript_qlz89t.png',
      },
      {
        id: nanoid(),
        name: 'HTML',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223571/icons-50x50/html_omkjdi.png',
      },
      {
        id: nanoid(),
        name: 'CSS',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223570/icons-50x50/css_kc2qzz.png',
      },
    ],
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: 'afadazaki32@gmail.com',
  email: 'afadazaki32@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/zaki-afada/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/zakiafada32',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
