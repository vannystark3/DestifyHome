import React from 'react';
import Slider from 'react-slick';
import './achievements.css';
import { motion } from 'framer-motion';

import ach1 from '../../assets/react.svg';
import ach2 from '../../assets/react.svg';
import ach3 from '../../assets/react.svg';

const achievements = [
  {
    image: ach1,
    position: "3rd Place",
    event: "Hack 5.0",
    location: "NIT Hamirpur"
  },
  {
    image: ach2,
    position: "Top 10",
    event: "Hackmatrix",
    location: "IIT Patna"
  },
  {
    image: ach3,
    position: "Top 10",
    event: "HackWithTricity",
    location: "Chandigarh University"
  }
];

export default function Achievements() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false
  };

  return (
    <section className="achievements" id="achievements">
      <motion.h2
        className="achievements-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Achievements
      </motion.h2>

      <motion.div
        className="slider-container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Slider {...settings}>
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="achievement-card">
                <img src={item.image} alt={item.event} />
                <h3>{item.position}</h3>
                <p>{item.event}</p>
                <span>{item.location}</span>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}
