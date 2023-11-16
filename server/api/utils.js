const requireUser  = (req, res, next) =>{
  //if user is logged is pass them through
  if(req.userId){
    next();
  }
  else{
    res.status(401).send({message: "User unauthorized"});
  }
}

export function getAuthHeader() {
  const token = localStorage.getItem('token');
  if (token) {
    return { 'Authorization': `Bearer ${token}` };
  } else {
    return {};
  }
}


module.exports = {
  requireUser,
  getAuthHeader
}
