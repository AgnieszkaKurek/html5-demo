var
                    canvas = document.getElementById("canvas"),
                    context = null;

if (Modernizr.canvas) {

    context = canvas.getContext("2d");

    var img = new Image();
    img.onload = function() {
        context.drawImage(img, 0, 0);
    }
    img.src = "../img/fist-pump-baby.jpg";

   
    context.scale(.25,.5); 
}

