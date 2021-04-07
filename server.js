const express = require('express');
const app = express();

const mockUserData=[
              {name:'Mark'},
              {name:'Jill'}
]

app.get('/users', function(reg,res){
          res.json({
                   success:true,
                   massage: 'succesfully got users. Nice!',
                   users: mockUserData
        })
})

app.listen(8000,function(){
console.log("server is running")
})