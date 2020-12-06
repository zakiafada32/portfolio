import React from 'react';
import Particles from 'react-particles-js';

const ParticlesContainer = () => {
  return (
    <Particles
      className="particles"
      // params={{
      //   particles: {
      //     number: {
      //       value: 200,
      //       density: {
      //         enable: false,
      //       },
      //     },
      //     color: {
      //       value: '#9ba1ab',
      //     },
      //     size: {
      //       value: 5,
      //       random: true,
      //       anim: {
      //         speed: 4,
      //         size_min: 0.3,
      //       },
      //     },
      //     line_linked: {
      //       enable: true,
      //     },
      //     move: {
      //       random: true,
      //       speed: 1,
      //       direction: 'top',
      //       out_mode: 'out',
      //     },
      //   },
      //   interactivity: {
      //     events: {
      //       // onhover: {
      //       //   enable: true,
      //       //   mode: 'bubble',
      //       // },
      //       onhover: {
      //         enable: true,
      //         mode: 'repulse',
      //       },
      //       onclick: {
      //         enable: true,
      //         mode: 'repulse',
      //       },
      //     },
      //     modes: {
      //       // bubble: {
      //       //   distance: 250,
      //       //   duration: 2,
      //       //   size: 0,
      //       //   opacity: 0,
      //       // },
      //       repulse: {
      //         distance: 200,
      //         duration: 8,
      //       },
      //     },
      //   },
      // }}
      params={{
        "particles": {
          "number": {
            "value": 150
          },
          "color": {
            "value": '#9ba1ab',
          },
          "size": {
            "value": 5
          }
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
          }
        }}}
    />
)
}

export default ParticlesContainer;