const axios = require('axios').default;
exports.getLogin = (req,res,next)=>{
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
            
          return
        })
        .catch(err => {
          console.log(err);
          return
        })
    }
    res.render('login',)
}

exports.getRegister = (req,res,next)=>{
    res.render('register',)
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