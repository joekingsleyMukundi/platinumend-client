const axios = require('axios').default;
exports.verify_password_change = (req,resp,next)=>{
  const {uid,token} = req.params;
  const data = {
    uid: uid,
    token: token
  }
  axios.get(`http://127.0.0.1:8000/api/v1/auth/password_reset/${uid}/${token}`)
  .then(res => {
    console.log(res.data);
    
    resp.status(200).json({
    message: 'Datails correct',
  })
  })
  .catch(err => {
    console.log(err);
  })
}