const express = require('express');
const db = require('./userDb');
const router = express.Router();
const validateUserId = require('../customMiddlewares/validateId');



router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
    db.get().then( data => res.status('200').json(data)).catch(err => res.status('500').json(err));
});

router.get('/:id',validateUserId, (req, res) => {
   console.log('did we skip?')
    const userData = req.user;
    res.status('200').json(userData);
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware



function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
