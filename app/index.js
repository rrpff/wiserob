var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || '0.0.0.0';

var app = require('./app');

app.listen(PORT, HOST, console.log.bind(console,
  'App %d listening on %s:%d', process.pid, HOST, PORT)
);
