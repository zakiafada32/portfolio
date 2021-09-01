import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import ParticlesContainer from '../Particles/ParticlesContainer';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <>
      <ParticlesContainer />
      <section id="hero" className="jumbotron">
        <ToggleTheme />
        <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {title || 'Hi, my name is'}{' '}
              <span className="text-color-main">{name || 'Zaki Afada'}</span>
              <br />
              {subtitle || 'Full-Stack Web Developer'}
              <br />
              {/* <span className="hero-subtitle">I can bring your product to life.</span> */}
              <br />
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div className="cta-container">
              <p className="hero-cta">
                <span className="cta-btn cta-btn--hero">
                  <a
                    className="my-blog"
                    href="https://blog.zakiafada.me/"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={name}
                  >
                    {cta || 'Visit my blog'}
                  </a>
                </span>
              </p>
              <p className="hero-cta">
                <span className="cta-btn cta-btn--hero">
                  <Link to="about" smooth duration={1000}>
                    {cta || 'Know more'}
                  </Link>
                </span>
              </p>
              <p className="hero-cta">
                <span className="cta-btn cta-btn--hero">
                  <Link to="projects" smooth duration={1000}>
                    {cta || 'See my work'}
                  </Link>
                </span>
              </p>
              <p className="hero-cta">
                <span className="cta-btn cta-btn--hero">
                  <Link to="contact" smooth duration={1000}>
                    {cta || 'Contact me'}
                  </Link>
                </span>
              </p>
            </div>
          </Fade>
        </Container>
      </section>
    </>
  );
};

export default Header;
