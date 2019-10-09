const db = require('../users/userDb');

const validateId = (req,res,next) => {
   
    if(req.params.id){

        const id = req.params.id;
        
        db.getById(id).then(data => {
        if(!data){
            res.status('400').json('{ message: "invalid user id" }');
            //not passing next here cancels the request from passing through other middleware
        }
        else{
            req.user = data;
            next();
        }
     
    })
        .catch(err => 
        next(err)
    );

    }
    else{
        next();
        console.log('no id requested')
    }
   

}

module.exports = validateId;