import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../services/api';
import Button from '@mui/material/Button';
import { format } from 'date-fns';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [deletingNews, setDeletingNews] = useState([]);

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

  const handleDeleteClick = async (id) => {
    const confirmed = window.confirm('Tem certeza que deseja excluir esta notícia?');

    if (confirmed) {
      try {
        setDeletingNews((prevDeletingNews) => [...prevDeletingNews, id]);

        await axios.patch(`/api/news/${id}`);

        alert('Notícia excluída com sucesso!');

        window.location.reload();

      } catch (error) {
        console.error('Erro ao excluir notícia:', error);
      } finally {
        setDeletingNews((prevDeletingNews) => prevDeletingNews.filter((newsId) => newsId !== id));
      }
    }
  };

  return (
    <div className="container font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-center uppercase font-sans">Listagem de Notícias</h2>
        <Link to="/create">
          <Button variant="contained" color="primary">
            Criar Notícia
          </Button>
        </Link>
      </div>
      
      {news.map((item) => {
        return (
          <div className="grid my-2">
            <Link to={`/${item.id}`}>
            <div className="flex flex-col px-2 py-2 border-t border-gray-300">
              <div className="flex flex-row justify-between items-center mt-1 h-1/3">
                <h3 className="title font-medium text-lg">{item.title}</h3>
                <Link to={`/${item.id}`}>
                  <Button style={{ width: '100px' }} variant="outlined" color="primary">
                    Detalhes
                  </Button>
                </Link>
              </div>
              <div className="flex flex-row justify-between items-center mt-1 h-1/3">
                <p className="url text-blue-500 hover:underline">{item.url}</p>
                <Link to={`/edit/${item.id}`}>
                  <Button style={{ width: '100px' }} variant="outlined" color="secondary">
                    Editar
                  </Button>
                </Link>
              </div>
              <div className="flex flex-row justify-between items-center mt-1 h-1/3">
                <p>
                  <strong>Data da publicação:</strong> {format(new Date(item.created_at), 'dd/MM/yyyy HH:mm')}
                </p>
                <Button
                  style={{ width: '100px' }}
                  variant="outlined"
                  color="error"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteClick(item.id);
                  }}
                  disabled={deletingNews.includes(item.id)}
                >
                  {deletingNews.includes(item.id) ? 'Excluindo...' : 'Excluir'}
                </Button>
              </div>
            </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;
