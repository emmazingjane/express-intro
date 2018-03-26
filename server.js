var express = require('express');
var app = express();
// app created

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use(function(req, res, next){
	// app to use this policy every time there is a get or use
	// security thing
	// request, respond, whenever next go to the next thing
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use(express.static('public'));
// referencing to folder, serve up files(static) that dont change
// serves up entire public folder

 app.use(express.static('vendor'));

var albums = [
    {
      title: 'Cupid Deluxe',
      artist: 'Blood Orange'
    },
    {
      title: 'M3LL155X - EP',
      artist: 'FKA twigs'
    },
    {
      title: 'Fake History',
      artist: 'letlive.'
    }
];



app.get('/', function(request, respond){
	// request and respond
	console.log('GET /')
	// console.log('***********')
	// console.log(request)
	// console.log('*******')
	// respond.send('Hello Emma!');
	respond.sendFile('views/index.html', { root :__dirname});
	console.log(__dirname)
});

app.get('/api/albums', function(request, respond){
	respond.send(albums);
	// can do respond.json but it means the same thing
});

 var taquerias = [
    { name: "La Taqueria" },
    { name: "El Farolito" },
    { name: "Taqueria Cancun" }
 ];

 app.get('/api/taquerias', function (request, respond) {
    respond.json(taquerias);
 });

// our own API!!!!

app.listen(3000, function(){
	console.log('example app listening to localhost:3000/');
});


