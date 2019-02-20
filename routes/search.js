
exports.view = function(req, res){
  var specs = require('./../public/data/specs.json');
  res.render('search', specs);
};