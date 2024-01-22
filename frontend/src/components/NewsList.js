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

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-medium text-center uppercase font-sans">Listagem de Notícias</h2>
        <Link to="/create">
          <Button variant="contained" color="primary">
            Criar Notícia
          </Button>
        </Link>
      </div>
      
      {news.map((item) => {
        return (
          <Link to={`/news/${item.id}`}>
            <div className="grid">
              <div className="flex flex-col px-2 py-2 mb-2 border-t border-gray-300">
                <div className="h-1/3">
                  <h3 className="title font-medium font-sans text-lg">{item.title}</h3>
                </div>
                <div className="h-1/3">
                  <p className="url text-blue-500">{item.url}</p>
                </div>
                <div className="h-1/3">
                  <p className="content">{item.created_at}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NewsList;
