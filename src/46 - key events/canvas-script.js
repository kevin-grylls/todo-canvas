
window.onload = function () {

  // Definitions
  var canvas = document.getElementById("key-events-canvas");
  var context = canvas.getContext("2d");

  // Key Events
  // - keydown
  // - keypress
  // - keyup

  // Keyboard Definitions
  var KEY_CODE = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };


  window.addEventListener('keydown', function(event){
    switch (event.keyCode) {
      case KEY_CODE.LEFT:
        console.log('LEFT ARROW PRESSED');
        break;
      case KEY_CODE.UP:
        console.log('UP ARROW PRESSED');
        break;
      case KEY_CODE.RIGHT:
        console.log('RIGHT ARROW PRESSED');
        break;
      case KEY_CODE.DOWN:
        console.log('DOWN ARROW PRESSED');
        break;
    }
  });



};
