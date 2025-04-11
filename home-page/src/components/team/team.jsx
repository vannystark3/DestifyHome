import React from 'react';
import './team.css';
import mem1 from '../../assets/aditya.png';
import mem2 from '../../assets/abhishek.png';
import mem3 from '../../assets/shaggy.png';
import mem4 from '../../assets/rahul.jpg';
import { motion } from 'framer-motion';

const members = [
  {
    name: "Aditya Khurana",
    role: "Lead Developer",
    image: mem1,
    link: "https://www.linkedin.com/in/aditya-khurana-/"
  },
  {
    name: "Abhishek Sharma",
    role: "Backend developer & Product Strategist",
    image: mem2,
    link: "https://www.linkedin.com/in/abhishek-sharma-60b85a30b/"
  },
  {
    name: "Shagun Rana",
    role: "UI/UX Designer",
    image: mem3,
    link: "https://www.linkedin.com/in/shagun-rana-0a4a22241/"
  },
  {
    name: "Rahul Sharma",
    role: "Database Engineer",
    image: mem4,
    link: "https://www.linkedin.com/in/rahul-sharma-533262351/"
  }
];

export default function Team() {
  return (
    <motion.section
      className="team"
      id="team"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Team Vortex
      </motion.h2>

      <div className="team-grid">
        {members.map((member, idx) => (
          <motion.a
            key={idx}
            href={member.link}
            className="team-card"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={member.image} alt={member.name} />
            <div className="member-name">{member.name}</div>
            <div className="member-role">{member.role}</div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
