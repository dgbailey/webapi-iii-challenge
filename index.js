// code away!
const express = require('express');
const morgan = require('morgan');

//configuration
const userRoutes = require('./users/userRouter');
const port = '8000';
const server = express();


//start middleware
server.use(morgan('combined'));
server.use(express.json());
server.use('/users',userRoutes);


server.use((err, req, res, next) => {
    // log the error...
    if(err.httpStatusCode){
        res.status(err.httpStatusCode).json(err.code)
    }
    else{
     
        res.status('500').json(err)
    }
   

})

server.listen(port, () => console.log(`listining on port ${port}`));
