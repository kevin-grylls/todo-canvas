window.onload = function () {
  // Definitions
  var canvas = document.getElementById("bezier-curves-canvas");
  var context = canvas.getContext("2d");

  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.moveTo(200, 250);
  context.bezierCurveTo(200, 10, 50, 150, 400, 250);
  context.stroke();
};
