const Article = require("../models/article");

module.exports = {
  index,
  show
}

function show(req, res) {
  res.render("articles/show");
};

function index(req, res) {
  Article.find({}, function(err, articles) {
    res.render('articles/index', { title: 'All Articles', articles });
  });
}
