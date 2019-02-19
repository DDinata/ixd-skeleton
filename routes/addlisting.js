
exports.view = function(req, res){
  res.render('addListing', {
    'additional-specs': [
      { 'name': 'Pets',
        'id': 'pets'
      },
      { 'name': 'Private Bathroom',
        'id': 'private-bathroom'
      },
      { 'name': 'Gym',
        'id': 'gym'
      },
      { 'name': 'Low noise level',
        'id': 'low-noise'
      },
    ]
  });
};

exports.addSeller = function(req, res) {
  var sellers = require('./../public/data/sellers.json');

  console.log(req.body.location);
  res.end();
}