exports.home = function home(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send( '<html><head><title>NodeSlash</title></head>' +
            '<body><h1>The Web\'s Premiere Browser Game</h1>' +
            '<p><img src="/images/sword_and_shield.png"></p>' +
            '<a href="/adventures">Go to adventures</a></body></html>');
};
