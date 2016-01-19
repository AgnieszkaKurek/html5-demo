var
                    canvas = document.querySelector('#canvas'),
                    context = null;

if (Modernizr.canvas) {

    context = canvas.getContext('2d');

    
    context.translate(100, 100);
   

    var
        text,
        img = new Image();

    img.onload = function () {
        context.drawImage(img, 0, 0);

        text = 'CONFIDENCE';

        context.fillStyle = '#ffffff';
        context.strokeStyle = '#000000';
        context.lineWidth = 6;

        context.font = '3em Impact';
        context.strokeText(text, 55, 55);
        context.fillText(text, 55, 55);

        text = 'Knows No Age';

        context.font = '2em Impact';
        context.strokeText(text, 80, 300);
        context.fillText(text, 80, 300);
    }
    img.src = 'baby.jpg';


}
   
   


