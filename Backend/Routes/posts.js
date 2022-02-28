const router = require('express').Router();
let Post = require('../Models/post.model');

router.route('/').get((req, res) => {
   Post.find()
     .then(posts=>res.json(posts))
     .catch(err => res.status(400).json('Error:  ' + err));
});

router.router('/add').post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const category = req.body.category;
  const refernces = req.body.refernces;

  const newPost = new Post({title, content, category, refernces})

  newPost.save()
  .then(()=>res.json('Post Added!'))
  .catch(err => res.status(400).json('Error: '+ err));
});

module.exports =router;