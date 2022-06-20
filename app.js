const express = require("express");
const path = require("path");   
const app = express();
const port = 80;

//set the view directory
//app.set("views", path.join(__dirname, 'views'))

// our pug demo endpoint
// app.get('/', (req, res) => {
//     res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
//   });
 
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/page2',function(req,res){
  res.sendFile(path.join(__dirname+'/page2.html'));
});

router.get('/page3',function(req,res){
  res.sendFile(path.join(__dirname+'/page3.html'));
});

//add the router
app.use('/', router);
app.listen(port, ()=>{
    console.log(`The application started seccessfully on port ${port}.`);
});

console.log('Running at Port 80');