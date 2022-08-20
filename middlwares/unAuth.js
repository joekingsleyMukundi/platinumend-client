exports.is_not_authenticated = async(req,res,next)=>{
  const token = req.session.token;
  if (token){
    return res.redirect('/dashboard')
  }
  next();
}