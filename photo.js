
   

var
                   canvas = document.getElementById('canvas'),
                   context = null;

if (Modernizr.canvas) {

    context = canvas.getContext('2d');

    context.fillStyle =
        'rgba(153, 153, 153, 0.75)';

    context.strokeStyle = '#999';
    context.lineWidth = 5;
    context.lineCap = 'round';
                    
    context.save();

    context.rect(0, 0, 100, 100);
    context.rect(105, 0, 100, 100);
    context.clip();
    context.stroke();

    context.fillRect(0, 0, 300, 300);

    context.restore();

    context.fillRect(0, 105, 100, 100);
}

    
   


