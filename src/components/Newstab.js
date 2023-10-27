import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


function NewsTab() {
  const [articles, setArticles] = useState([]);
  const API_KEY = "cb8abfdb50b44061af190f6a3e6e94d0";

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error("Error fetching news:", error));
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="news-container"
    >
      <h3>Latest News</h3>
      <ul>
        {articles.slice(0, 6).map((article, index) => (
          <motion.li key={index} whileHover={{ scale: 0.85 }}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img src={article.urlToImage} alt={article.title} className="news-image" />
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
