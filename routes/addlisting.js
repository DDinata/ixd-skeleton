var sellers = require('./../public/data/sellers.json');


exports.view = function(req, res){
  res.render('addlisting', {
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