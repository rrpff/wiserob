const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const app = require('./app');

app.listen(PORT, HOST, () =>
  console.log(`App ${process.pid} listening on ${HOST}:${PORT}`));
