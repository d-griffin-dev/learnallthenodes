exports.index = function index(req,res) {
  res.setHeader('Content-Type', 'text/html');
  res.send( '<html><head><title>Adventures - NodeSlash</title></head>' +
            '<body><h1>Are you brave, '+ req.session.username + '?</h1>' +
            '<form action="adventures" method="POST">' +
            '<button type="submit">Yes, I am brave</button></form>' +
            '</body></html>');
};

exports.create = function create(req,res) {
  console.log(req.body);
  res.setHeader('Content-Type', 'text/html');
  res.send( '<html><head><title>Adventures - NodeSlash</title></head>' +
            '<body><h1>You are brave.</h1>' +
            '<form action="adventures" method="POST">' +
            '<button type="submit">Again!</button></form>' +
            '<p>You have found some <a href="/loot/1">loot.</a></p>' +
            '</body></html>');
};

exports.update = function update(req,res) {
  res.setHeader('Content-Type', 'text/html');
  res.send( '<html><head><title>Adventures - NodeSlash</title></head>' +
            '<body><h1>It\'s a secret to everybody.</h1></body></html>');
};
