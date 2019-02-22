
exports.view = function(req, res){
  var specs = require('./../public/data/data.json');
  res.render('search', specs);
};

exports.listSellers = function(req, res) {
  var listings = require('./../public/data/data.json');
  var list = listings["sellers"];
  var filtered = list.filter(function (el) {
    return "name" in el; 
  });
  console.log(list);
  res.render('listings', list);
};

exports.listBuyers = function(req, res) {
  var listings = require('./../public/data/data.json');
  var list = listings["buyers"];
  res.render('listings', list);
};



