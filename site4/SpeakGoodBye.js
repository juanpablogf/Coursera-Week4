
(function (window) {
  var byeSpeaker = {};
  //helloSpeaker.name = window;
  var greeting = "Good Bye ";
  byeSpeaker.speak = function (name) {
    console.log(greeting + name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
