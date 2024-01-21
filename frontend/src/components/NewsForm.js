import React, { useState } from 'react';
import axios from '../services/api';

const NewsForm = () => {
  const [formData, setFormData] = useState({
    category_id: '',
    title: '',
    url: '',
    image: '',
    thumbnail: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/news', formData);
      console.log('Notícia criada com sucesso:', response.data);
      // Adicione lógica adicional conforme necessário
    } catch (error) {
      console.error('Erro ao criar notícia:', error);
    }
  };

  return (
    <div>
      <h2>Criar Notícia</h2>
      <form onSubmit={handleSubmit}>
        {/* Adicione campos do formulário conforme necessário */}
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        {/* Adicione outros campos conforme necessário */}
        <button type="submit">Criar Notícia</button>
      </form>
    </div>
  );
};

export default NewsForm;
