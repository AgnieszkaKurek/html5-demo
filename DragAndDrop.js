var
                    cancel = function (e) {
                        if (e.preventDefault) {
                            e.preventDefault();
                        }

                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }

                        return false;
                    },

                    dropped = function (e) {
                        cancel(e);

                        var
                            target = $(this),
                            content = '';

                        if (e.dataTransfer.types.length > 0) {

                            if (e.dataTransfer.types[0]
                                            === 'Text') {

                                target.text(
                                    e.dataTransfer.getData('Text'));

                            } else {

                                $(e.dataTransfer.types).each(

                                    function (index, type) {
                                        content =
                                            e.dataTransfer
                                                .getData(type);

                                        target.append(
                                            '<p><b>Type</b>: ' +
                                            type +
                                            '<br>' +
                                            '<b>Content</b>:' +
                                            content + '</p><hr/>');
                                    });
                            }
                        }

                        target.removeClass('over');

                       

                    dragLeave = function (e) {
                        $(this).removeClass('over');
                    }

dragOver = function (e) {
    cancel(e);
    $(this).addClass('over');
};

var target = document.querySelector('#target');

target.addEventListener('drop',
                         dropped, false);

target.addEventListener('dragenter',
                         cancel, false);

target.addEventListener('dragover',
                         dragOver, false);

target.addEventListener('dragleave',
                         dragLeave, false);

$('#clear').click(function (e) {
    e.preventDefault();
    $(target).html('');
});