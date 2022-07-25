const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const urls = require('./routes/urls')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(urls);

const PORT = 3090;
app.listen(PORT,()=>{
    console.log(`client live at port ${PORT});
})