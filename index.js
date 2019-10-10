// code away!
const express = require('express');
const morgan = require('morgan'); 
require('dotenv').config();  

//configuration
const userRoutes = require('./users/userRouter');
const port = process.env.PORT || '8000';
const server = express();


//start middleware
server.use(morgan('combined'));
server.use(express.json());
server.use('/users',userRoutes);


server.use((err, req, res, next) => {
    // log the error...
    //this is currently being used to catch database errors thrown from upstream middleware
    if(err.httpStatusCode){
        res.status(err.httpStatusCode).json(err.code)
    }
    else{
     
        res.status('500').json(err)
    }
   

})

server.listen(port, () => console.log(`listining on port ${port}`));
//how does node     