
exports.view = function(req, res){
  var specs = require('./../public/data/data.json');
  specs['alt'] = false;
  res.render('search', specs);
};

exports.viewB = function(req, res){
  var specs = require('./../public/data/data.json');
  specs['alt'] = true;
  res.render('searchB', specs);
};

exports.listSellers = function(req, res) {
  var listings = require('./../public/data/data.json');
  let list = listings['sellers'];
  // var filtered = list.filter(function (el) {
  //   return "name" in el; 
  // });
  console.log(list);
  res.render('listings', list);
};

exports.listBuyers = function(req, res) {
  var listings = require('./../public/data/data.json');
  var list = listings["buyers"];
  res.render('listings', list);
};

exports.listing = function(req, res) {
  var listings = require('./../public/data/data.json');
  console.log("test");
  var list = listings[req.params.type]
  var listing = list.filter(obj => {
    return obj.name === req.params.name;
  })[0];
  console.log(listing);
  res.render('listing', listing);
  
}

