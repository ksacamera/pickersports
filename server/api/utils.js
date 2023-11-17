const requireUser  = (req, res, next) =>{
  //if user is logged in pass them through
  if(req.userId){
    next();
  }
  else{
    res.status(401).send({message: "User unauthorized"});
  }
}

const requireAdmin = (req, res, next) => {
  // Check if user is logged in as an admin
  if (req.userId && req.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: "Admin unauthorized" });
  }
}

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

module.exports = {
  requireUser,
  getAuthHeader,
  requireAdmin
}
