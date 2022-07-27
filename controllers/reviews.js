const Article = require("../models/article");

module.exports = {
  create,
  delete: deleteReview,
  edit,
  update 
};

function update(req, res) {
  Article.findOne(
    {'reviews._id': req.params.id},
    function(err, article) {
      const commentSubdoc = article.reviews.id(req.params.id);
      if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/articles/${article._id}`);
      commentSubdoc.content = req.body.content;
      article.save(function(err) {
        res.redirect(`/articles/${article._id}`);
      });  
    }
  );
}

function edit(req, res) {
  Article.findOne({'reviews._id': req.params.id}, function(err, article) {
    if (err || !article) return res.redirect('/articles');
    res.render('articles/edits', {article, review: req.params.id});
  });
}


async function deleteReview(req, res, next) {
  try {
    const article = await Article.findOne({"reviews._id": req.params.id, "reviews.user": req.user._id});
    if (!article) throw new Error("Nice Try!");
    // Remove the using the remove method on Mongoose arrays
    article.reviews.remove(req.params.id);
    await article.save();
    res.redirect(`/articles/${article._id}`);
  } catch (err) {
    return next(err);
  }
}; 

function create (req, res) {
  Article.findById(req.params.id, function(err, article) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    article.reviews.push(req.body);
    article.save(function(err) {
      res.redirect(`/articles/${article._id}`);
    });
  });
}