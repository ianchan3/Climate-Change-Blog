const Article = require("../models/article");
/*const Review = ("../models/review"); */

module.exports = {
  index,
  show,
  new: newArticle,
  create
}

function create(req, res) {
  var article = new Article(req.body);
  article.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect('/articles/new');
    res.redirect("/articles");
  });
}

function show(req, res) {
  /* Article.findById(req.params.id, function(err, flight) {
    Review.find({article: article._id}, function(err, reviews) { */
    res.render("articles/show", { title: "Article Detail", Article});
  }
  // );
//   });
// }


function index(req, res) {
  Article.find({}, function(err, articles) {
    res.render('articles/index', { title: 'All Articles', articles });
  });
}

function newArticle(req, res) {
  res.render("articles/new", { title: "Add Article" });
}
