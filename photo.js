var
                   canvas = document.getElementById('canvas'),
                   context = null,
                   x = 40,
                   y = 25,
                   width = height = 200;

if (Modernizr.canvas) {

    context = canvas.getContext('2d');

    context.beginPath();
    context.rect(x, y, width, height);
    context.clip();

    var img = new Image();
    img.onload = function () {
        context.drawImage(img, 0, 0);
        context.lineWidth = 15;
        context.strokeStyle = '#cccccc';
        context.strokeRect(x, y, width, height);
    }

    img.src = 'baby.jpg';
}

   
   


