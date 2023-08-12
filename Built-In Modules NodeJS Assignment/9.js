var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function (clg) {
  console.log(`thanks for subscribing to ${clg}`);
}

eventEmitter.on('subscri', myEventHandler);

eventEmitter.emit('subscri',"college wallah");

console.log("after removing event");
eventEmitter.removeListener('subscri', myEventHandler);
eventEmitter.emit('subscri',"college wallah");
console.log("it does not work");
