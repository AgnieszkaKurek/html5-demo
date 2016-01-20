
   
var
                    canvas = document.getElementById('canvas'),
                    width = canvas.width,
                    height = canvas.height,
                    context = null;

if (Modernizr.canvas) {

    context = canvas.getContext('2d');

    context.fillStyle =
        'rgba(153, 153, 153, 0.75)';

    context.strokeStyle = '#999999';
    context.lineWidth = 5;
    context.lineCap = 'round';

    context.save();

    context.beginPath();
    context.moveTo(105, 105);
    context.lineTo(200, 100);
    context.lineTo(250, 300);
    context.lineTo(300, 0);
    context.closePath();
    context.stroke();
    context.clip();

    context.fillRect(0, 0, 215, 215);

    

    context.restore();

    context.fillRect(200, 200, 50, 50);
}
   
   


