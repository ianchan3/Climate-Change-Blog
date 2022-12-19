const Blog = require("../models/blog");

module.exports = {
  create,
  delete: deleteReview,
  edit,
  update 
};

function update(req, res) {
  Blog.findOne(
    {'reviews._id': req.params.id},
    function(err, blog) {
      const commentSubdoc = blog.reviews.id(req.params.id);
      if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/blogs/${blog._id}`);
      commentSubdoc.content = req.body.content;
      commentSubdoc.rating = req.body.rating;
      blog.save(function(err) {
        res.redirect(`/blogs/${blog._id}`);
      });  
    }
  );
}

function edit(req, res) {
  Blog.findOne({'reviews._id': req.params.id}, function(err, blog) {
    if (err || !blog) return res.redirect('/blogs');
    res.render('blogs/edits', {blog, review: req.params.id});
  });
}


async function deleteReview(req, res, next) {
  try {
    const blog = await Blog.findOne({"reviews._id": req.params.id, "reviews.user": req.user._id});
    if (!blog) throw new Error("Nice Try!");
    blog.reviews.remove(req.params.id);
    await blog.save();
    res.redirect(`/blogs/${blog._id}`);
  } catch (err) {
    return next(err);
  }
}; 

function create (req, res) {
  Blog.findById(req.params.id, function(err, blog) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    blog.reviews.push(req.body);
    blog.save(function(err) {
      res.redirect(`/blogs/${blog._id}`);
    });
  });
}