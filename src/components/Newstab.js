import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function NewsTab() {
  const [articles, setArticles] = useState([]);
  const API_KEY = "AitkWHVF5LR6nFKd0DBF9wK5cKmuEG8ImbOaOuUrYOv8ZNL8";

  useEffect(() => {
    fetch(`https://api.currentsapi.services/v1/latest-news?apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(data => setArticles(data.news))
      .catch(error => console.error("Error fetching news:", error));
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="news-container"
    >
      <h3></h3>
      <ul>
        {articles.slice(0, 6).map((article, index) => (
          <motion.li key={index} whileHover={{ scale: 0.85 }}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img src={article.image} alt={article.title} className="news-image" />
              <h4>{article.title}</h4>
            </a>
            <p>{article.description}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default NewsTab;
