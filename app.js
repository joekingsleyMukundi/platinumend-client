const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const app = express();
const auth = require('./routes/auth/urls')
const general = require('./routes/general/urls')
const workers = require('./routes/worker/urls')
const employer = require('./routes/employer/urls')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieSession({
    name: 'session',
    signed: false,
    maxAge: 24 * 60 * 60 * 1000,
}))
app.use(auth);
app.use(general);
app.use(workers);
app.use(employer);

const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`client live at port ${PORT}`);
})