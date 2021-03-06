window.onload = function () {
  // Definitions
  var canvas = document.getElementById("polygon-canvas");
  var context = canvas.getContext("2d");

  // Polygon Variables
  var sides = 5;
  var radius = 100;
  var centerX = 400;
  var centerY = 300;
  var startAngle = 200;
  var angle = (2 * Math.PI) / sides;

  // Start Drawing
  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 5;
  context.lineJoin = "round";

  // Begin Point Coordinates
  var beginX = centerX + radius * Math.cos(startAngle);
  var beginY = centerY - radius * Math.sin(startAngle);

  context.moveTo(beginX, beginY);

  // Draw Lines
  for (var i = 1; i <= sides; i++) {
    // Current point's coordinates
    var currentAngle = startAngle + i * angle;
    var currentPointX = centerX + radius * Math.cos(currentAngle);
    var currentPointY = centerY - radius * Math.sin(currentAngle);

    // Draw the line
    context.lineTo(currentPointX, currentPointY);
  }

  context.closePath(); // to close paths manually
  context.stroke();
};
