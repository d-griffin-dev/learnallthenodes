// Problem Handlers
function notFound(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(404, '<h1>404</h2>' +
          '<p>Sorry, we could not find this page!');
}

function catchErrors(err, req, res, next) {
  console.log('Uh Oh, there was a serious error.');
  next(err);
}

function showErrorPage(err, req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.send(500, '<h1>500</h1><p>A serious error occurred.</p>');
}


// Custom Middleware
function stoopidLogger(options){
  return function stoopidLoggerInner(req, res, next){
    console.log('Hi! I was called at: ', req.path);
    next();
  };
}

// Middleware calls
module.exports = function(app, express){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.cookieSession({secret: 'itsasecrettoeverybody', key: 'session'}));
  app.use('/', stoopidLogger());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(notFound);
  app.use(catchErrors);
  app.use(showErrorPage);
};
