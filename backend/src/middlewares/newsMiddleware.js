const validateNews = (req, res, next) => {
  const { category_id, title, url, image, thumbnail, content } = req.body;

  if (!category_id || !title || !url || !image || !thumbnail || !content) {
    return res.status(400).json({ error: 'Dados obrigatórios faltando.' });
  }

  next();
}

const validateId = (req, res, next) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).json({ error: 'ID precisa ser um número.' });
  }

  next();
}

const validateIdAndOneField = (req, res, next) => {
  const { id } = req.params;
  const { category_id, title, url, image, thumbnail, content } = req.body;

  if (isNaN(parseInt(id))) {
    return res.status(400).json({ error: 'ID precisa ser um número.' });
  }

  if (!category_id && !title && !url && !image && !thumbnail && !content) {
    return res.status(400).json({ error: 'É preciso alterar ao menos um campo.' });
  }

  next();
}

module.exports = {
  validateNews,
  validateId,
  validateIdAndOneField,
};