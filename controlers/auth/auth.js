exports.getLogin = (req,res,next)=>{
    res.render('login',)
}
exports.getRegister = (req,res,next)=>{
    res.render('register',)
}
exports.getForgotPassword = (req,res,next)=>{
    res.render('forgot-password',)
}
exports.getSetForgotPassword = (req,res,next)=>{
    res.render('set-forgot-password',)
}
exports.getActivateAccount = (req,res,next)=>{
    res.render('activate-account',)
}
exports.getBecomeEmployer = (req,res,next)=>{
    res.render('become-employer',)
}
exports.getRegisterCompany = (req,res,next)=>{
    res.render('register-company',)
}