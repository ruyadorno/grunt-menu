var log = require('simple-output');

var messages = require('./messages');


// --


module.exports = function exit() {

  log.message(messages.exitConfirmation);

  process.exit(0);

};

