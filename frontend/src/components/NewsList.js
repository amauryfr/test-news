import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../services/api';
import Button from '@mui/material/Button';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/news');
        setNews(response.data);
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    };

    fetchNews();
  }, []);

  const handleClick = () => {
    console.log('Clicou no botão');
  };

  return (
    <div>
      <h2>Lista de Notícias</h2>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <Link to={`/news/${item.id}`}>
              {item.title} - {item.url}
            </Link>
          </li>
        ))}
      </ul>
      <Button onClick={handleClick} variant="contained" color="primary">
        Clique Aqui
      </Button>
    </div>
  );
};

export default NewsList;
