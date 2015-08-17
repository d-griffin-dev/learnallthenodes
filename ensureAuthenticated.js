module.exports = function ensureAuthenticated(){
  if (req.session.username){
    next();
  } else {
    res.redirect('/');
  }
};
