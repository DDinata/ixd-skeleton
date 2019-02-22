
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

exports.login = function(req, res) {
  var user = require('./../public/data/data.json');
  user["current-user"] = req.body.uname;
  console.log(user);
  res.redirect('/profile');
}