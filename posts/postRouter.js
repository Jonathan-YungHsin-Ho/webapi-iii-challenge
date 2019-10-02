const express = require('express');

const Posts = require('./postDb');

const router = express.Router();

// Endpoint to Retrieve (GET) posts - FUNCTIONAL
router.get('/', (req, res) => {
  Posts.get(req.query)
    .then(posts => res.status(200).json(posts))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error retrieving the posts' });
    });
});

// Endpoint to Retrieve (GET) posts by id -
router.get('/:id', validatePostId, (req, res) => {
  Posts.getById()
    .then()
    .catch();
});

// Endpoint to Delete (DEL) post -
router.delete('/:id', validatePostId, (req, res) => {
  Posts.remove()
    .then()
    .catch();
});

// Endpoint to Update (PUT) post -
router.put('/:id', validatePostId, (req, res) => {
  Posts.update()
    .then()
    .catch();
});

// Custom Middleware

// Validate post ID on every request expecting post ID parameter - NEEDS TESTING
function validatePostId(req, res, next) {
  Posts.getById(req.params.id)
    .then(post => {
      if (!post) {
        res.status(400).json({ message: 'Invalid post ID' });
      } else {
        req.post = req.params.id;
        next();
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error validating post ID' });
    });
  // next();
}

module.exports = router;
