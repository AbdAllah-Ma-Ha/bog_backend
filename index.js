const express = require('express');
const router=require('./router/router');
const app = express();
const port = 3000;
const mongoose=require('mongoose');
const cors=require('cors');
mongoose.connect('mongodb://localhost/Blog',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('mogodb connected successfully')
}).catch((error)=>{
    console.log(error)
})
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(router);
app.listen(port, () => console.log(`node working on port ${port}!`));