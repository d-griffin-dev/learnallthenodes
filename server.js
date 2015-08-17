var express = require('express'),
    app     = express(),
    port    = process.env.PORT || 3000;

    function home(req,res) {
      res.setHeader('Content-Type', 'text/html');
      res.send( '<html><head><title>NodeSlash</title></head>' +
                '<body><h1>The Web\'s Premiere Browser Game</h1>' +
                '<a href="/adventures">Go to adventures</a></body></html>');
    }

    function adventuresIndex(req,res) {
      res.setHeader('Content-Type', 'text/html');
      res.send( '<html><head><title>Adventures - NodeSlash</title></head>' +
                '<body><h1>Are you brave?</h1>' +
                '<form action="adventures" method="POST">' +
                '<button type="submit">Yes, I am brave</button></form>' +
                '</body></html>');
    }

    function createAdventure(req,res) {
      res.setHeader('Content-Type', 'text/html');
      res.send( '<html><head><title>Adventures - NodeSlash</title></head>' +
                '<body><h1>You are brave.</h1>' +
                '<form action="adventures" method="POST">' +
                '<button type="submit">Again!</button></form>' +
                '<p>You have found some <a href="/loot/1">loot.</a></p>' +
                '</body></html>');
    }

    function updateAdventure(req,res) {
      res.setHeader('Content-Type', 'text/html');
      res.send( '<html><head><title>Adventures - NodeSlash</title></head>' +
                '<body><h1>It\'s a secret to everybody.</h1></body></html>');
    }

    function showLoot(req,res) {
      var id = req.params.id;
      res.setHeader('Content-Type', 'text/html');
      res.send( '<html><head><title>Adventures - NodeSlash</title></head>' +
                '<body><h1>Ogre-slaying knife</h1>' +
                '<p>It has +9 against ogres. It was id #' + id +
                '</p></body></html>');
    }

    // Routes
    app.get('/',               home);
    app.get('/adventures',     adventuresIndex);
    app.post('/adventures',    createAdventure);
    app.put('/adventures/:id', updateAdventure);
    app.get('/loot/:id',       showLoot);


app.listen(port);

console.log('Server running at http://0.0.0.0:' + port + '/');
