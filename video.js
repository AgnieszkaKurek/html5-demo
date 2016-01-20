var
                    video = document.querySelector('#vid'),
                    canvas = document.querySelector('#canvas'),
                    context = null,
                    btn = $('#btn'), 
                    thumbs = $('#thumbs'),
                    thumbInterval = null;

if (Modernizr.canvas) {
    context = canvas.getContext('2d');

    var width =
            video.width =
            canvas.width =
            video.offsetWidth = 320;

    var height =
            video.height =
            canvas.height =
            video.offsetHeight = 180;

    var getThumb = function() {

        context.drawImage(video,
                          0,
                          0,
                          width,
                          height);

        var thumb = new Image();

        thumb.src =
            canvas.toDataURL('image/png');

        thumb.width = 60;
        thumbs.append(thumb);
    };

    btn.click(function() {
        getThumb();
    });

    video.addEventListener('play', function() {
        thumbInterval = setInterval(function() {
            getThumb();
        }, 4000);
    }, false);

    video.addEventListener('pause', function() {
        clearInterval(thumbInterval);
    }, false);
}

                

