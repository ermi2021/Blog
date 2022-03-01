const router = require('express').Router();
let Post = require('../Models/post.model');

router.route('/').get((req, res) => {
   Post.find()
     .then(posts=>res.json(posts))
     .catch(err => res.status(400).json('Error:  ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const category = req.body.category;
  const refernces = req.body.refernces;

  const newPost = new Post({title, content, category, refernces});

  newPost.save()
  .then(()=>res.json('Post Added!'))
  .catch(err => console.log(err));
});

router.route('/:id').get((req, res) => {
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error '+ err));
})

router.route('/:id').delete((req, res) =>{
    Post.findByIdAndDelete(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').put((req, res) => {
   Post.findById(req.params.id)
   .then(post => {

     post.title = req.body.title,
     post.content = req.body.content,
     post.category = req.body.category,
     post.refernces = req.body.refernces

     post.save()
     .then(() => res.json('Post Updated Sucessfully!'))
     .catch(err => res.status(400).json('Error: '+ err))
   })
});

module.exports =router;