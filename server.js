const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData=[
              {name:'Mark'},
              {name:'Jill'}
]

app.get('/users', function(req,res){
          res.json( {
                   success:true,
                   massage: 'succesfully got users. Nice!',
                   users: mockUserData
        } )
} )

app.get('/users/:id',function(req,res){
  console.log(req.params.id)
  res.json( {
           success:true,
           massage: 'got one user',
           user: req.params.id
   } )
} )

app.post('/login',function(req,res){
        const username=req.body.username;
        const password=req.body.password;

        const mockUsername="billyTheKid";
        const mockPassword="superSecret";

     if (username===mockUsername && password===mockPassword) {
       res.json( {
                success: true,
                massage: 'password and username match!',
                token: 'encrypted token goes here'
     } )
     } else {
     res.json( {
              success: false,
              massage: 'password and username do not match'
          } )
         }
} )

app.listen(8000,function(){
console.log("server is running")
} )