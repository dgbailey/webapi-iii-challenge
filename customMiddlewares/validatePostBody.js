


const validatePostBody = (req,res,next) =>{
    if(!req.body){
        req.status('400').json(`{ message: "missing post data" }`);
    }
    else if(req.body && !req.body.text){
        req.status('400').json(`{ message: "missing post data" }`);
    }
    else{
        next();
    }
}

module.exports = validatePostBody;