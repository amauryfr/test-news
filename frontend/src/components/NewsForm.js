import React, { useState } from 'react';

const NewsForm = () => {
  const data = useState({
    category_id: '',
    title: '',
    url: '',
    image: '',
    thumbnail: '',
    content: '',
  });

  console.log(data);

  return (
    <div className="container">
      <h2 className="text-3xl font-medium">
        Lista de Notícias
      </h2>
      <form className="flex flex-col">
        <label className="text-xl"></label>
        Title:
        <input type="text" name="title" />
      </form>
    </div>  
  );
};

export default NewsForm;
