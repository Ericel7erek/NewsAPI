const express = require('express');
const app = express();
const port = 2424;
const axios = require('axios');
const ApiKey= "ab1abf526a814f8a851896cb370e2f0d"
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
  try {
    const url = 'https://newsapi.org/v2/top-headlines?' + 'category=business&' + 'country=eg&' + `apiKey=${ApiKey}`;
    const news_get = await axios.get(url);
    res.render('news', { articles: news_get.data.articles });
  } catch (error) {
    if (error.response) {
      console.log(error);
    }
  }
});

app.listen(port, () => console.log(`started on port ${port}`));