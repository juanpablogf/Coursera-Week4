
(function (window) {
  var helloSpeaker = {};
  //helloSpeaker.name = window;
  var greeting = "Hello ";
  helloSpeaker.speak = function (name) {
    console.log(greeting + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
