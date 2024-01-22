import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import JoditEditor from "jodit-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsForm = () => {
  const [formData, setFormData] = useState({
    category_id: '',
    title: '',
    url: '',
    image: '',
    thumbnail: '',
    content: '',
  });

  const config = {};

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/category');
        const data = response.data;

        setCategories(data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      category_id: '',
      title: '',
      url: '',
      image: '',
      thumbnail: '',
      content: '',
    });

    document.getElementById('content').value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formContent = document.getElementById('content').value;

    if(formContent === '<p><br></p>'){
      toast.error('Conteúdo é obrigatório.');
      return;
    }

    console.log({
      category_id: formData.category_id,
      title: formData.title,
      url: formData.url,
      image: formData.image,
      thumbnail: formData.thumbnail,
      content: formContent,
    });

    try {
      const response = await axios.post('/api/news', {
        category_id: Number(formData.category_id),
        title: formData.title,
        url: formData.url,
        image: formData.image,
        thumbnail: formData.thumbnail,
        content: formContent,
      });

      toast.success('Notícia enviada com sucesso!');
      console.log('Resposta da API:', response.data);

      resetForm();
    } catch (error) {
      if (error.response) {
        console.error('Erro ao enviar notícia:', error.response.data);
        toast.error('Erro ao enviar notícia: ' + error.response.data.errors.join(' '));
      } else if (error.request) {
        console.error('Erro ao enviar notícia: Não foi recebida resposta da API.');
        toast.error('Erro ao enviar notícia: Não foi recebida resposta da API.');
      } else {
        console.error('Erro ao enviar notícia:', error.message);
        toast.error('Erro ao enviar notícia: ' + error.message);
      }
    }
  };

  return (
    <div className="container font-sans">
      <div className="flex justify-between mb-6">
        <h2 className="text-3xl font-bold text-center uppercase font-sans">Publicar Notícia</h2>
        <Link to={`/`}>
          <Button variant="contained" color="primary">
            Voltar
          </Button>
        </Link>
      </div>
      <div className="container mt-8 flex justify-start">
        <form onSubmit={handleSubmit} className="w-full max-w-xl">

          <div className="mb-4">
            <label htmlFor="category_id" className="block text-sm font-medium text-gray-700">
              Categoria
            </label>
            <select
              id="category_id"
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            >
              <option value="" disabled>
                Selecione uma categoria
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="url" className="block text-sm font-medium text-gray-600">
              URL
            </label>
            <input
              type="text"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-600">
              Imagem
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-600">
              Thumbnail
            </label>
            <input
              type="text"
              id="thumbnail"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-600">
              Conteúdo
            </label>
            <JoditEditor
              id="content"
              config={{
                ...config,
                shouldPreserveEventFocus: true,
              }}
            />
          </div>

          <div className="mb-6">
            <Button style={{ width: '200px' }} variant="outlined" color="primary" type="submit">
              Publicar
            </Button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewsForm;


