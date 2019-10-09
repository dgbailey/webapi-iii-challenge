const express = require('express');
const db = require('./userDb');
const dbPosts = require('../posts/postDb');
const router = express.Router();
const validateUserId = require('../customMiddlewares/validateId');
const validateCreateUserBody = require('../customMiddlewares/validateCreateUserBody');
const validatePostBody = require('../customMiddlewares/validatePostBody');

//https://expressjs.com/en/4x/api.html#router.param
//applies middleware whenever route includes the id params
router.param('id',validateUserId);

router.post('/',validateCreateUserBody,(req, res,next) => {
    const body = req.body;
    db.insert(body).then(data => res.status('200').json(data)).catch(next);//hmm what are we doing here for this error
});

router.post('/:id/posts', validatePostBody,(req, res,next) => {
    const body = req.body;
    dbPosts.insert(body).then(data => res.status('200').json(data)).catch(next);
});

router.get('/', (req, res,next) => {
    db.get().then( data => res.status('200').json(data)).catch(err => console.log(err));
    //an error here violating the unique constraint inthe database is processed by the error handler in our index.js file
});

router.get('/:id', (req, res) => {
   console.log('did we skip?')
    const userData = req.user;
    res.status('200').json(userData);
});

router.get('/:id/posts', (req, res,next) => {
    const id = req.params.id
    db.getUserPosts(id).then(data => res.status('200').json(data)).catch(next);
});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware



function validateUser(req, res, next) {

};

module.exports = router;
