

/*

- `validateUser()`
  - `validateUser` validates the `body` on a request to create a new user
  - if the request `body` is missing, cancel the request and respond with status `400` and `{ message: "missing user data" }`
  - if the request `body` is missing the required `name` field, cancel the request and respond with status `400` and `{ message: "missing required name field" }`

*/

  const validateUser = (req,res,next) =>{

    const body = req.body;
    if(!body){

        res.status('400').json(`{ message: missing user data }`);
        //no next here

    }
    else if (!body.name){
        res.status('400').json("{message: missing required name field}");
        //no next

    }
    else{
        next();
    }

  }

  module.exports = validateUser;