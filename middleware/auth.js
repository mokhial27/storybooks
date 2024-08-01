module.exports.ensureAuth = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.redirect('/')
  }
};

module.exports.ensureGuest = function(req, res, next){
  if(req.isAuthenticated()){
    res.redirect('/dashboard')
  }else{
    next();
  }
}