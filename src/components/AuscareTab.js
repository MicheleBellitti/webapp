import React from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

function AusCareTab() {
  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } }
  };

  const titleVariants = {
    hidden: { y: '-100vh' },
    visible: { y: 0, transition: { type: 'spring', stiffness: 120 } }
  };

  const descriptionVariants = {
    hidden: { x: '-100vw' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 120, delay: 0.2 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="auscare-container"
    >

   
      <motion.h3 variants={titleVariants}>Project Demo</motion.h3>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/_-Oh0AxJfTw?si=z78mnLKEA8mggbul" title="Auscare demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <motion.div variants={descriptionVariants} className="auscare-description">
        <h3>About Auscare</h3>
        <div className="auscare-presentation">
        <h3>Project Presentation</h3>
        <iframe 
          src="https://docs.google.com/presentation/d/e/2PACX-1vQaMF04pAa76RK1nopceXybuGjZF3gZ0Imsitz02Jbv4sB_K0egqIco-4pKuKjsR8tiZnmk10z3R2r6/embed?start=false&loop=false&delayms=3000" 
          width="600" 
          height="480" 
          frameborder="0" 
          allowfullscreen
          title="AusCare Presentation"
        ></iframe>
      </div>
      </motion.div>

    

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="cta-container">
        <h4>Interested in Auscare?</h4>
        <p>Reach out to learn more or collaborate on similar projects.</p>
        <a href="#connect" className="cta-button">Contact Me</a>
      </motion.div>
    </motion.div>
  );
}

export default AusCareTab;
