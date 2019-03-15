
exports.view = function(req, res){
  var specs = require('./../public/data/data.json');
  res.render('addListing', specs);
};

exports.addSeller = function(req, res) {
  var fs = require('fs');
  var listings = require('./../public/data/data.json');
  listing = req.body;
  listing["type"] = "seller";
  listing["username"] = listings["current_user"];
  listing["image"] = "https://weeks.com.au/wp-content/themes/weeksbg/assets/svg/footer-home-icon.svg";
  listings["sellers"].push(listing);
  res.redirect('/success');
}

exports.addBuyer = function(req, res) {
  var fs = require('fs');
  var listings = require('./../public/data/data.json');
  listing = req.body;
  listing["username"] = listings["current_user"];
  listing["type"] = "buyer";
  listings["buyers"].push(listing);
  res.redirect('/success');
}

exports.success = function(req, res) {
  res.render('success')
}