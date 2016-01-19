var degreesToRadians = function(degrees) {
    var radians = (degrees * (Math.PI / 180));
    return radians;
}

var
    canvas = document.getElementById('canvas'),
    context = null;

if (Modernizr.canvas) {

    context = canvas.getContext('2d');

    var img = new Image();
    img.onload = function () {
        context.drawImage(img, 0, 0);

    }

    
    context.rotate(degreesToRadians(-15));
}

   
   


