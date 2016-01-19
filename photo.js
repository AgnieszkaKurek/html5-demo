
var
                    canvas = document.getElementById('canvas'),
                    context = null;

if (Modernizr.canvas) {

    context = canvas.getContext('2d');

    context.beginPath();
    context.arc(
        135,
        120,
        120,
        0,
        Math.PI * 2,
        true);
    context.clip();

    var img = new Image();
    img.onload = function () {
        context.drawImage(img, 0, 0);

        context.lineWidth = 15;
        context.strokeStyle = '#cccccc';
        context.stroke();
    }
    img.src = 'baby.jpg';
}

   
   


