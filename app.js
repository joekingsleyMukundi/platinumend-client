const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const auth = require('./routes/auth/urls')
const general = require('./routes/general/urls')
const workers = require('./routes/worker/urls')
const employer = require('./routes/employer/urls')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(auth);
app.use(general);
app.use(workers);
app.use(employer);

const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`client live at port ${PORT}`);
})