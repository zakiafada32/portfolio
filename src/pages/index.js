import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
        <meta property="og:title" content="Zaki Afada Full-Stack Web Developer" />
        <meta property="og:description" content="portfolio personal website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dwonu6xev/image/upload/v1607915006/portfolio/open_graph_my0vdx.png"
        />
      </Helmet>
      <App />
    </>
  );
};
