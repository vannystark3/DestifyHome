import React from 'react';
import './footer.css';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      id="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-content">
        <motion.h3
          className="footer-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          DESTIFY
        </motion.h3>

        <motion.ul
          className="footer-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#team">Team</a></li>
        </motion.ul>

        <motion.div
          className="footer-social-columns"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[
            {
              name: "Aditya",
              links: {
                linkedin: "https://www.linkedin.com/in/aditya-khurana-/",
                github: "https://github.com/vannystark3",
                instagram: "https://instagram.com/adityakhurana_04",
              }
            },
            {
              name: "Abhishek",
              links: {
                linkedin: "https://www.linkedin.com/in/abhishek-sharma-60b85a30b/",
                github: "https://github.com/abhishek",
                instagram: "https://instagram.com/abhishek",
              }
            },
            {
              name: "Shagun",
              links: {
                linkedin: "https://www.linkedin.com/in/shagun-rana-0a4a22241/",
                github: "https://github.com/shagunrana",
                instagram: "https://instagram.com/shagunrana",
              }
            },
            {
              name: "Rahul",
              links: {
                linkedin: "https://www.linkedin.com/in/rahul-sharma-533262351/",
                github: "https://github.com/rahulsharma",
                instagram: "https://instagram.com/rahulsharma",
              }
            }
          ].map((member, idx) => (
            <div className="member-social" key={idx}>
              <h4>{member.name}</h4>
              <a href={member.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={member.links.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={member.links.instagram} target="_blank" rel="noreferrer">Instagram</a>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.p
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        © 2025 DESTIFY. All rights reserved.
      </motion.p>
    </motion.footer>
  );
}
