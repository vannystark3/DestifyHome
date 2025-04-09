import './navbar.css';
import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="appname">DESTIFY</div>

      <ul className="nav-links">
        {['Home', 'Features', 'Team', 'Achievements', 'Contact'].map((item, index) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
