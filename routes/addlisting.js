
exports.view = function(req, res){
  var specs = require('./../public/data/specs.json');
  res.render('addListing', specs);
};

exports.addSeller = function(req, res) {
  var fs = require('fs');
  var sellers = require('./../public/data/sellers.json');
  listing = {}
  sellers.push(listing)
  var jsonData = JSON.stringify(sellers);
  fs.writeFile('./../public/data/sellers.json', jsonData, function(err) {
      if (err) {
          console.log(err);
      }
  });


  console.log(sellers);
  console.log(req.body.single);

  res.end();
}

exports.addBuyer = function(req, res) {

  res.end();
}