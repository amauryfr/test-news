const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const categoryController = {
  getAllCategory: async (req, res) => {
    try {
      const allCategory = await prisma.category.findMany();
      res.json(allCategory);
    } catch (error) {
      console.error('Erro ao listar categorias', error);
      res.status(500).json({ error: 'Erro 500 ao listar categorias' });
    }
  },
};

module.exports = categoryController;