const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  try {
    const categories = await prisma.category.createMany({
      data: [
        { name: 'Política' },
        { name: 'Cultura' },
        { name: 'Esportes' },
        { name: 'Tecnologia' },
      ],
    });

    console.log('Categorias criadas:', categories);
  } catch (error) {
    console.error('Erro ao semear categorias:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();