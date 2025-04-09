import React from "react";
import "./features.css";
import { motion } from "framer-motion";

const featureData = [
  {
    icon: "📍",
    title: "Live Location Sharing",
    desc: "Track everyone in real-time with high accuracy, even across different vehicles.",
  },
  {
    icon: "🗺️",
    title: "Smart Routing",
    desc: "Get optimized routes and ETAs for every user, all in one view.",
  },
  {
    icon: "🔔",
    title: "Instant Notifications",
    desc: "Get alerts when someone is delayed or takes a detour.",
  },
  {
    icon: "🔒",
    title: "Privacy Control",
    desc: "Only share your location when you want. You're always in control.",
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        Features
      </motion.h2>

      <div className="features-grid">
        {featureData.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
          >
            <span className="icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
