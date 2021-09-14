import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Zaki Afada | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Zaki Afada software developer, welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Zaki Afada',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "I'm an Electrical Engineer turned Software Developer. I fell in love with the capabilities of web development after learning from various resources. Since then, I've been on the path of a self-taught developer striving to improve.",
  paragraphTwo:
    'I am a conceptual thinker with strong technical skills. I have experience in JavaScript, Typescript, React, Redux, Node.js, Express.js, Golang, Python, PostgreSQL and MongoDB.',
  paragraphThree: 'Besides programming, my hobbies are outdoor sports and listening to a podcast.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'codenote.png',
    title: 'jschalk',
    info: 'Jschalk is an interactive javascript playground environment built with Typescript, React for UI, Redux for state management, Esbuild for bundle JS code, and Express.js for handle CLI requests.',
    info2: '',
    url: 'https://www.npmjs.com/package/jschalk/',
    repo: 'https://github.com/zakiafada32/code-note/', // if no repo, the button will not show up
    techList: [
      {
        id: nanoid(),
        name: 'Typescript',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1621863653/icons-50x50/typescript-logo_edezyj.png',
      },
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
        name: 'Esbuild',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1621864000/icons-50x50/esbuild-logo_z0szzj.png',
      },
    ],
  },
  {
    id: nanoid(),
    img: 'clothing.png',
    title: 'Clothing E-commerce',
    info: 'Full-stack web e-commerce application with full functionalities built with React for UI, Redux for state management, Firebase for data storage, Express.js for handle payment requests with Stripe API, and deploy at Heroku.',
    info2: '',
    url: 'https://clothing-app-zaki.herokuapp.com/',
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
    img: 'dolanan.png',
    title: 'Dolanan',
    info: 'Full-stack web application that provides a list of holiday destinations in Indonesia. The app features are users can add a new holiday destination and add a review for it, user authentication, and use Mapbox API for the destination location.',
    info2: '',
    url: 'https://serene-shelf-47659.herokuapp.com/',
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
    ],
  },
  {
    id: nanoid(),
    img: 'smartface.png',
    title: 'Smart-Face Detection',
    info: 'Full-stack web application that detects a face within a submitted image using a Clarifai API. It Built with React for UI, Node/Express.js server, user authentication with JWT, and PostgreSQL database. Login email: zaki@gmail.com and password: zaki',
    info2: '',
    url: 'https://face-detection-zaki.herokuapp.com/',
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
        name: 'Clarifai API',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223570/icons-50x50/clarifai_ukjot7.png',
      },
    ],
  },
  {
    id: nanoid(),
    img: 'hackernews.png',
    title: 'Hackernews Clone',
    info: 'Full-stack web application clone of Hackernews built with GraphQL. The app features are the list of links search, user authentication, create a new link, upvote links, and real-time update when other users create a new or upvote a link.',
    info2: '',
    url: 'https://hackernerws-clone.netlify.app/',
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
        name: 'PostgreSQL',
        iconUrl:
          'https://res.cloudinary.com/dwonu6xev/image/upload/v1607223571/icons-50x50/postgresql_dm6ytz.png',
      },
    ],
  },
  {
    id: nanoid(),
    img: 'vanillajs.png',
    title: 'Vanilla JS',
    info: 'A list of interesting app built with Vanilla JS, HTML, and CSS.',
    info2: '',
    url: 'https://github.com/zakiafada32/vanilla-js/blob/main/README.md',
    repo: 'https://github.com/zakiafada32/vanilla-js/blob/main/README.md', // if no repo, the button will not show up
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
