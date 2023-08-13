const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/routers/authroutes');
const productrouter = require('./src/routers/productroutes');
const Userrouter = require('./src/routers/userroutes');
const db_connection = require('./src/config/db.config');
const app = express();
app.use(bodyParser.json());
app.use('/auth', router);
app.use('/product', productrouter);
app.use('/user', Userrouter);



app.listen(3000, async()=>{
  console.log("server listening on port 3000");
  await db_connection();
})