const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { format } = require('date-fns');

const newsController = {
  getAllNews: async (req, res) => {
    try {
      const allNews = await prisma.news.findMany({
        where: {
          deleted_at: null,
        },
        include: {
          Category: true,
        },
      });
      res.json(allNews);
    } catch (error) {
      console.error('Erro ao listar notícias', error);
      res.status(500).json({ error: 'Erro 500 ao listar notícias' });
    }
  },

  getNewsById: async (req, res) => {
    const { id } = req.params;
    try {
      const news = await prisma.news.findUnique({
        where: {
          id: parseInt(id),
        },
        include: {
          Category: true,
        },
      });

      if (news) {
        if (news.deleted_at !== null) {
          res.json({ error: 'Notícia excluida em '+format(new Date(news.deleted_at), 'dd/MM/yyyy HH:mm') });
        }else{
          res.json(news);
        }
      } else {
        res.json({ error: 'Notícia não foi encontrada' });
      }
    } catch (error) {
      console.error('Erro ao buscar uma notícia', error);
      res.status(500).json({ error: 'Erro 500 ao buscar uma notícia' });
    }
  },

  createNews: async (req, res) => {
    const { category_id, title, url, image, thumbnail, content } = req.body;
    try {
      const newNews = await prisma.news.create({
        data: {
          category_id,
          title,
          url,
          image,
          thumbnail,
          content,
        },
      });
      res.json(newNews);
    } catch (error) {
      console.error('Erro ao criar notícia:', error);
      res.status(500).json({ error: 'Erro 500 ao criar notícia' });
    }
  },

  updateNews: async (req, res) => {
    const { id } = req.params;
    const { category_id, title, url, image, thumbnail, content } = req.body;
    try {
      const updatedNews = await prisma.news.update({
        where: {
          id: parseInt(id),
        },
        data: {
          category_id,
          title,
          url,
          image,
          thumbnail,
          content,
        },
      });
      res.json(updatedNews);
    } catch (error) {
      console.error('Erro ao atualizar notícia:', error);
      res.status(500).json({ error: 'Erro 500 ao atualizar notícia' });
    }
  },

  //CRIEI ESSA FUNÇÃO PARA EXCLUIR NOTÍCIAS, MAS ESTOU UTILIZANDO O SOFTDELETE. IGUAL ESSA FUNCIONA TAMBÉM
  deleteNews: async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.news.delete({
        where: {
          id: parseInt(id),
        },
      });
      res.json({ message: 'Notícia deletada com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar notícia:', error);
      res.status(500).json({ error: 'Erro 500 ao deletar notícia.' });
    }
  },

  softDeleteNews: async (req, res) => {
    const { id } = req.params;

    try {
      const deletedNews = await prisma.news.update({
        where: { id: parseInt(id) },
        data: { deleted_at: new Date() },
      });

      res.json({ success: true, message: 'Notícia excluída com sucesso.', data: deletedNews });
    } catch (error) {
      console.error('Erro ao excluir notícia:', error);
      res.status(500).json({ success: false, message: 'Erro 500 ao excluir notícia.' });
    }
  },
};

module.exports = newsController;