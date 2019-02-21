
exports.view = function(req, res){
  var specs = require('./../public/data/data.json');
  res.render('search', specs);
};