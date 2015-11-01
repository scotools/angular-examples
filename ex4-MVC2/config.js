var config = {};
var mongolab = {
  host: 'ds041663.mongolab.com',
  port: 41663,
  database: 'swapit',
  user: 'swapit-webapp',
  password: 'lawnm0wr'
};
// mongodb://<dbuser>:<dbpassword>@ds041663.mongolab.com:41663/swapit
mongolab.connectionString='mongodb://' +
  mongolab.user +
  ':' +
  mongolab.password +
  '@' +
  mongolab.host +
  ':' +
  mongolab.port +
  '/' +
  mongolab.database;

config.mongolab = mongolab;

module.exports = config;
