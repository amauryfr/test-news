import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api';

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await axios.get(`/api/news/${id}`);
        setNews(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes da notícia:', error);
      }
    };

    fetchNewsDetail();
  }, [id]);

  return (
    <div>
      <h2>Detalhes da Notícia</h2>
      <p>Title: {news.title}</p>
      <p>URL: {news.url}</p>
      <p>Category: {news.Category?.name}</p>
      {/* Adicione outros detalhes da notícia conforme necessário */}
    </div>
  );
};

export default NewsDetail;
