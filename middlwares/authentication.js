require('dotenv').config()
const jwt  = require('jsonwebtoken')
exports.is_authenticated = async(req,res,next)=>{
  const token = req.session.token;
  if (!token){
    console.log('no token');
    req.flash('error', 'Please login')
    return res.redirect('/')
  }
  // base_token = auth_header.split(' ');
  // if(base_token.length !== 2){
  //   console.log('token error');
  //   req.flash('error', 'Please login')
  //   return res.redirect('/')
  // }
  // const pre_token = base_token[0];
  // if(pre_token !== 'Bearer'){
  //   console.log('token error 2');
  //   req.flash('error', 'Please login')
  //   return res.redirect('/')
  // }
  // const token = base_token[1];
  try {
    const secret = process.env.SIGNINGKEY;
    const decoded = await jwt.verify(token,secret);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    req.flash('error', 'Please login')
    return res.redirect('/')
  }
}