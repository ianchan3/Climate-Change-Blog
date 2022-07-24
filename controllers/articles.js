const Article = require("../models/article");

module.exports = {
  index,
}

function index(req, res) {
  Article.find({}, function(err, articles) {
    res.render('articles/index', { title: 'All Articles', articles });
  });
}