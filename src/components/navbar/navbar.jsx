import './navbar.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isShrunk,setShrink] = useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      setShrink(window.scrollY>50);
    };
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
  },[]);

  return (
    <motion.nav
      className= {`navbar ${isShrunk?"shrink":""}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 1, opacity:1 }}
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
