var
                    canvas = document.getElementById('canvas'),
                    context = null;

if (Modernizr.canvas) {

    context = canvas.getContext('2d');

    var img = new Image();
    img.onload = function () {

        context.drawImage(img, 0, 0);

        context.beginPath();
        context.moveTo(70, 105);
        context.lineTo(105, 132);
        context.lineTo(142, 250);
        context.lineTo(176, 175);
        context.lineTo(212, 145);
        context.lineTo(245, 197);
        context.lineTo(280, 90);

        context.stroke();
    }
    img.src = 'chart-background.pmg';
}
