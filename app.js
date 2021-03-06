/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var search = require('./routes/search');
var message = require('./routes/message');
var addListing = require('./routes/addListing');
var profile = require('./routes/profile');


// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/search', search.view);
app.get('/searchB', search.viewB)
app.get('/addListing', addListing.view);
app.get('/message', message.view);
app.get('/profile', profile.view);
app.get('/success', addListing.success)
app.get('/listing-:type-:name', search.listing);
app.get('/profile-:username', profile.other)

app.post('/login', index.login)
app.post('/addSeller', addListing.addSeller);
app.post('/addBuyer', addListing.addBuyer);
app.post('/listSellers', search.listSellers);
app.post('/listBuyers', search.listBuyers);


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
