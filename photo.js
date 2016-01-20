
   
var
canvas = document.getElementById('canvas'),
img = new Image(),
context = null,
dataUrl = null,
isMagnified = false,

init = function() {
    img.onload = function() {
        context.drawImage(img, 0, 0);
        debugger;
        dataUrl = canvas.toDataURL();
    }
    img.src = 'baby.jpg';
    isMagnified = false;
},
                    
magnify = function() {
    context.save();
    context.lineWidth = 10;
    context.shadowColor = '#000';
    context.shadowBlur = 15;
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;

    context.save();

    context.beginPath();
    context.moveTo(230, 230);

    context.lineCap = 'round';
    context.lineWidth = 30;
    context.lineTo(285, 285);
    context.stroke();

    context.beginPath();

    context.arc(
                150,
                150,
                115,
                0,
                Math.PI * 2,
                true);

    context.clip();

    var magnified = new Image();
    magnified.src = dataUrl;

    context.scale(1.5, 1.5);
    context.drawImage(img, -40, -40);

    context.restore();

    context.arc(
                150,
                150,
                115,
                0,
                Math.PI * 2,
                true);
    context.stroke();
    context.restore();


    isMagnified = true;
};

if (Modernizr.canvas) {

    context = canvas.getContext('2d');

    init();
                    
    $('canvas').click(function() {
        if (isMagnified) {
            init();
        }
        else {
            magnify();
        }
    });
}


