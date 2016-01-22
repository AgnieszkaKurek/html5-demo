$(function () {
    dragDrop.setCSSClassNames('over', 'drag');

    var dropped = function (e) {
        var
            countElement = $(this.querySelector('#count')),
            count = countElement.text();

        count++;

        countElement.text(count);
    };

    $('[data-dnd-role="dropzone"]').each(function (index, dropZone) {
        dropZone.addEventListener('drop', dropped, false);
    });

    $('article').fadeIn();
});
