const express = require('express');
const router = express.Router();

const newsController = require('./controllers/newsController');

router.get('/news', newsController.getAllNews);
router.get('/news/:id', newsController.getNewsById);
router.post('/news', newsController.createNews);
router.put('/news/:id', newsController.updateNews);
router.delete('/news/:id', newsController.deleteNews);
router.patch('/news/:id', newsController.softDeleteNews);

module.exports = router;