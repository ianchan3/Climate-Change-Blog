const Article = require("../models/article");

module.exports = {
  create,
};

function create (req, res) {
  Article.findById(req.params.id, function(err, article) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    article.reviews.push(req.body);
    article.save(function(err) {
      res.redirect(`/articles/$(article._id}`);
    });
  });
}