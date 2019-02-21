
exports.view = function(req, res){
  var specs = require('./../public/data/specs.json');
  res.render('addListing', specs);
};

exports.addSeller = function(req, res) {
  var fs = require('fs');
  var listings = require('./../public/data/listings.json');
  listing = {};
  listings["sellers"].push(listing);
  // var jsonData = JSON.stringify(listings);
  // fs.writeFile('./../public/data/listings.json', jsonData, function(err) {
  //     if (err) {
  //         console.log(err);
  //     }
  // });
  console.log(listings["sellers"]);
  console.log(req.body.single);
  res.end();
}

exports.addBuyer = function(req, res) {

  res.end();
}