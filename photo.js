
var
                    x = 0,
                    y = 0,
                    frame,
                    canvas = document.getElementById('canvas'),
                    context = canvas.getContext('2d');

var draw = function () {

    if (x <= canvas.width) {
        context.clearRect(0, 0, 345, 345);
        context.strokeStyle = 'rgb(139, 0, 0)';
        context.lineWidth = 8;
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(x += 10, y += 10);
        context.stroke();
    }
    else {
        clearInterval(frame);
        logBold('Animation Complete');
    }
}

if (Modernizr.canvas) {
    frame = setInterval(function () {
        draw();
    }, 25);
}

   
   


