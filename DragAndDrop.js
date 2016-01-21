var
                   sourceContainerId = '',

                   dragStart = function (e) {

                       try {

                           e.dataTransfer
                               .setData('text/plain', e.target.id);

                       } catch (ex) {

                           e.dataTransfer
                               .setData('Text', e.target.id);
                       }

                       sourceContainerId = this.parentElement.id;
                   },

                   dropped = function (e) {
                       if (this.id !== sourceContainerId) {

                           cancel(e);

                           var id;

                           try {

                               id = e.dataTransfer
                                       .getData('text/plain');

                           } catch (ex) {

                               id = e.dataTransfer
                                       .getData('Text');
                           }

                           e.target.appendChild(
                               document.querySelector('#' + id));
                       }
                   },

                   cancel = function (e) {
                       if (e.preventDefault) {
                           e.preventDefault();
                       }

                       if (e.stopPropagation) {
                           e.stopPropagation();
                       }

                       return false;
                   },

                   forEach = Array.prototype.forEach;

var
    selector = '[data-role="drag-drop-container"]',
    dc = document.
        querySelectorAll(selector);

forEach.call(dc, function (c) {
    c.addEventListener('drop', dropped, false);
    c.addEventListener('dragenter', cancel, false);
    c.addEventListener('dragover', cancel, false);
});

var
    selector = '[draggable="true"]',
    ds = document.querySelectorAll(selector);

forEach.call(ds, function (source) {

    source.addEventListener('dragstart',
                            dragStart,
                            false);
});

var
    sourceContainerId = '',

    cancel = function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        if (e.stopPropagation) {
            e.stopPropagation();
        }

        return false;
    },

    dragStart = function (e) {

        $(this).addClass('drag');

        var dto = e.dataTransfer;

        try {

            dto.setData('text/plain',
                        e.target.id);

        } catch (ex) {

            dto.setData('Text',
                        e.target.id);
        }

        sourceContainerId = this.parentElement.id;
    },

    dropped = function (e) {

        cancel(e);

        var
            id = null,
            dto = e.dataTransfer,
            dropped = null;

        if (dto.types.length > 0) {
            if (dto.types[0] === 'Text') {
                id = dto.getData('Text');
            }
            else {
                id = dto.getData('text/plain');
            }
        }

        if (id !== null) {
            dropped =
                document.querySelector('#' + id);
        }

        if (this.id !== sourceContainerId) {
            e.target.appendChild(dropped);
            $(dropped).removeClass('drag');
        }

        $(this).removeClass('over');
    },

    dragOver = function (e) {
        cancel(e);

        $(this).addClass('over');
    },

    dragLeave = function (e) {
        $(this).removeClass('over');
    },

    dragEnd = function (e) {
        $('.drag').removeClass('drag');
        $('.over').removeClass('over');
    };

var
    selector = '[data-role="drag-drop-container"]',
    containers = $(selector);

containers.each(function (index, c) {
    c.addEventListener('drop', dropped, false);
    c.addEventListener('dragenter', cancel, false);
    c.addEventListener('dragover', dragOver, false);
    c.addEventListener('dragleave', dragLeave, false);
});

var
    sources = $('[draggable="true"]');

sources.each(function (index, source) {
    source.addEventListener('dragstart',
                             dragStart,
                             false);

    source.addEventListener('dragend',
                             dragEnd,
                             false);
});