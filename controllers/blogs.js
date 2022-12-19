const Blog = require("../models/blog");

module.exports = {
  index,
  show,
  new: newBlog,
  create,
}

function create(req, res) {
  Blog.findById(req.params.id, function(err, blog) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
  var blog = new Blog(req.body);
  blog.save(function(err) {
    if (err) return res.redirect('/blogs/new');
    res.redirect("/blogs");
    });
  });
}

function show(req, res) {
  Blog.findById(req.params.id, function(err, blog) {
  res.render("blogs/show", { title: "Blog Detail", blog});
  });
};

function index(req, res) {
  Blog.find({}, function(err, blogs) {
    res.render('blogs/index', { title: 'All Blogs', blogs });
  });
}

function newBlog(req, res) {
  res.render("blogs/new", { title: "Add Blog" });
}
