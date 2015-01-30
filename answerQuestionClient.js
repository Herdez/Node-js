<script src="/socket.io/socket.io.js"></script>

<script>
  var server = io.connect('http://localhost:8080');
  
  server.on('question', function(question) {
    insertQuestion(question);
  });
  server.on('answer', function(question, answer) {
    answerQuestion(question, answer);
  });
  
  //Don't worry about these methods, just assume 
  //they insert the correct html into the DOM
  // var insertQuestion = function(question) {
  // }

  // var answerQuestion = function(question, answer) {
  // }
</script>
 
