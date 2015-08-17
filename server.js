var express     = require('express'),
    app         = express(),
    port        = process.env.PORT || 3000,
    handlers    = require('./handlers'),
    middleware  = require('./middleware'),
    routes      = require('./routes');

middleware(app, express);

routes(app, handlers);

app.listen(port);

console.log('Server running at http://0.0.0.0:' + port + '/');
