
/*
 * GET home page.
 */

exports.view = function(req, res){
  var users = require('./../public/data/data.json');
  var current = users["current_user"];
  var user = users["users"][current];
  console.log(user);
  res.render('profile', user);

};

exports.other = function(req, res) {
  var users = require('./../public/data/data.json');
  users = users["users"];
  var user = users[req.params.username]
  res.render('profile', user);
  
}