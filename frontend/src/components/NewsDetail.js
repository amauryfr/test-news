import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../services/api';
import { format } from 'date-fns';
import Button from '@mui/material/Button';

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
  
  const formattedDate = news.created_at ? format(new Date(news.created_at), 'dd/MM/yyyy HH:mm') : '';

  return (
    <div className="container font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-center uppercase font-sans">Detalhes da Notícia</h2>
        <Link to={`/`}>
          <Button variant="contained" color="primary">
            <button>Voltar</button>
          </Button>
        </Link>
      </div>
      <p className="title font-medium text-lg">{news.title}</p>
      <div className="flex flex-row mt-1">
        <strong className="mr-1">URL: </strong>
        <Link target="_blank" to={news.url}>
          <p className="url text-blue-500 hover:underline">
            {news.url}
          </p>
        </Link>
      </div>
      <p className="mt-1"><strong>Chapéu:</strong> {news.Category?.name}</p>
      <p className="mt-1">
        <strong>Data da publicação:</strong> {formattedDate}
      </p>
      <p className="mt-4 font-medium text-lg">Imagem:</p>
      <p>
        <img src={news.image} alt="Imagem" />
      </p>
      <p className="mt-4 font-medium text-lg">Miniatura:</p>
      <p>
        <img src={news.thumbnail} alt="Thunbnail" />
      </p>
      <p className="mt-4 mb-2 font-medium text-lg">Conteúdo:</p>
      <p className="px-4 py-2 border rounded" dangerouslySetInnerHTML={{ __html: news.content }} />
    </div>
  );
};

export default NewsDetail;
