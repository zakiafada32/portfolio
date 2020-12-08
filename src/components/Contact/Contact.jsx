import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              style={{marginBottom:"1rem"}}
              href="https://cathetan.netlify.app/contact"
              aria-label="Send an email"
            >
              Send an email
            </a>
            <br /> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              // style={{color:"#000"}}
              href={email ? `mailto:${email}` : 'https://github.com/zakiafada32'}
              aria-label="email"
            >
              email: {btn || "afadazaki32@gmail.com"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
