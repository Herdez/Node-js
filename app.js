var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = []; chatme = [];
  
chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

chat.on('join', function(greetings) {
  chatme.push(greetings);
});

chat.emit('join', "greetings");
chat.emit('message', "Hello");
chat.emit('join', "Hi");