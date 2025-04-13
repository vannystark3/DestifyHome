import React from 'react';
import './hero.css';
import { motion } from 'framer-motion';
import COVER from '../../assets/cover_image.png';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="app-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          DESTIFY
        </motion.h1>

        <motion.p
          className="tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Seamless Group Travel. One Destination, Multiple Journeys.
        </motion.p>

        <motion.p
          className="subtagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Destify simplifies travel coordination like never before. Whether you're in separate vehicles or cities, stay connected, track live locations, and arrive together — stress-free.
        </motion.p>

        <motion.p
          className="cta-line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Download the app in just one click and make your next trip smarter, smoother, and more fun.
        </motion.p>

        <motion.a
          href="/Destify.apk"
          download
          className="download-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Download App
        </motion.a>
      </motion.div>

      {/* Optional image section with animation if needed */}
      {/* 
      <motion.div
        className="cover-image"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={COVER} alt="App Preview" />
      </motion.div> 
      */}
    </section>
  );
}
