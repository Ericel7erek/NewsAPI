const express = require('express');
const axios = require('axios');
const router = express.Router();
const ApiKey= "ab1abf526a814f8a851896cb370e2f0d"
router.get('/', async (req, res) => {
  try {
    const url = 'https://newsapi.org/v2/top-headlines?' + 'country=eg&' + `apiKey=${ApiKey}`;
    const news_get = await axios.get(url);
    res.render('news', { articles: news_get.data.articles });
  } catch (error) {
    if (error.response) {
      console.log(error);
    }
  }
});

module.exports = router;