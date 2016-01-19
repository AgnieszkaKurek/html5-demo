var
    canvas = document.getElementById('canvas'),
    context = null,

    if (Modernizr.canvas){
        context = canvas.getContext('2d');

        var g1 = context.createRadialGradient(
            160, 120, 0, 320, 220,300);
        g1.addColorStop(0, '#ffffff');
        g1.addColorStop(1, '#999999');

        context.lineWidth = 0;
        context.strokeStyle = '#000000';
        context.fillStyle = g1;
        context.beginPath();
        context.arc(
            180,180,160,0,
            Math.PI * 2,
            true);
        context.fill();

        var g2 = context.createRadialGradient(
            360, 320, 0, 260, 220, 200);
        
        g2.addColorStop(0,'#ffffff');
        g2.addColorStop(1,'#999999');

        context.fillStyle = g2;
        context.beginPath ();
        context.arc(
            180, 180, 130, 0, Math * 2, true);
        context.fill();

        context.fillStyle = '#ffffff';
        context.font = '280px Arial';
        context.fillText('C', 80, 280);


    }