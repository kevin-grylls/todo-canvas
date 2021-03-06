window.onload = function () {
  // Definitions
  var canvas = document.getElementById("intro-canvas");
  var context = canvas.getContext("2d");

  const ball = new Ball(30, "green");

  ball.x = 100;
  ball.y = 250;
  ball.context = context;
  ball.draw();

  // window.requestAnimationFrame(animationLoop);

  function animationLoop() {
    // Clear Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Update

    // Draw

    // Animate
    window.requestAnimationFrame(animationLoop);
  }

  window.requestAnimationFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
};
