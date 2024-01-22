const express = require('express');
const router = express.Router();

const newsController = require('./controllers/newsController');
const categoryController = require('./controllers/categoryController');
const newsMiddleware = require('./middlewares/newsMiddleware');

router.get('/news', newsController.getAllNews);
router.get('/news/:id', newsMiddleware.validateId, newsController.getNewsById);
router.post('/news', newsMiddleware.validateNews, newsController.createNews);
router.put('/news/:id', newsMiddleware.validateNewsAndId ,newsController.updateNews);
router.delete('/news/:id', newsMiddleware.validateId, newsController.deleteNews);
router.patch('/news/:id', newsMiddleware.validateId, newsController.softDeleteNews);

router.get('/category', categoryController.getAllCategory);

module.exports = router;