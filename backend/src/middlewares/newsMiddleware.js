const validateNews = (req, res, next) => {
  const { category_id, title, url, image, thumbnail, content } = req.body;
  const errors = [];

  if (!category_id || typeof category_id !== 'number') {
    errors.push('Categoria é obrigatória e precisa ser um número válido.');
  }

  if (!title) {
    errors.push('Título é obrigatório.');
  }

  if (!url) {
    errors.push('URL é obrigatória.');
  }

  if (!image) {
    errors.push('Imagem é obrigatória.');
  }

  if (!thumbnail) {
    errors.push('Thumbnail é obrigatório.');
  }

  if (!content) {
    errors.push('Conteúdo é obrigatório.');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
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

const validateNewsAndId = (req, res, next) => {
  const { id } = req.params;
  const { category_id, title, url, image, thumbnail, content } = req.body;

  if (isNaN(parseInt(id))) {
    return res.status(400).json({ error: 'ID precisa ser um número.' });
  }

  const errors = [];

  if (!category_id || typeof category_id !== 'number') {
    errors.push('Categoria é obrigatória e precisa ser um número válido.');
  }

  if (!title) {
    errors.push('Título é obrigatório.');
  }

  if (!url) {
    errors.push('URL é obrigatória.');
  }

  if (!image) {
    errors.push('Imagem é obrigatória.');
  }

  if (!thumbnail) {
    errors.push('Thumbnail é obrigatório.');
  }

  if (!content) {
    errors.push('Conteúdo é obrigatório.');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
}

module.exports = {
  validateNews,
  validateId,
  validateNewsAndId,
};