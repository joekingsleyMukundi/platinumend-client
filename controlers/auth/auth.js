const axios = require('axios').default;
exports.getLogin = (req,resp,next)=>{
    if (req.method == 'POST'){
        console.log(req.body);
        const {email,password} = req.body
        const data = {
            email: email,
            password: password
        }
        axios.post('http://127.0.0.1:8000/api/v1/auth/token/', data)
        .then(res => {
            console.log(res.data);
            req.session.token = res.data.access;
            resp.status(200).json({
            message: 'Successfully logged in',
          })
        })
        .catch(err => {
          console.log(err);
        })
        return
    }
    resp.render('login',)
}

exports.getRegister = (req,resp,next)=>{
    if (req.method == 'POST'){
        console.log(req.body);
        const {email, username, phone, re_password, password} = req.body
        const data = {
            email: email,
            username: username,
            phone: phone,
            re_password: re_password,
            password: password
        }
        axios.post('http://127.0.0.1:8000/api/v1/auth/users/', data)
        .then(res => {
            console.log(res.data);
            resp.status(200).json({
            message: 'Successfully registered',
          })
        })
        .catch(err => {
          console.log(err);
        })
        return
    }
    resp.render('register',)
}
exports.getForgotPassword = (req,res,next)=>{
    res.render('forgot-password',)
}
exports.getSetForgotPassword = (req,res,next)=>{
    res.render('reset-password',)
}
exports.getActivateAccount = (req,res,next)=>{
    res.render('activate',)
}
exports.getBecomeEmployer = (req,res,next)=>{
    res.render('become-employer',)
}