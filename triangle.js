var canvas = document.getElementById('canvas');
var context = null;
if (canvas && canvas.getContext) {
    context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(75, 50);
    context.lineTo(75, 100);
    context.lineTo(25, 100);
    context.fill();
}