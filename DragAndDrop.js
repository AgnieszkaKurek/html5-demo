var
                    dragStart = function (e) {

                        
                        try {

                            e.dataTransfer
                                .setData('text/plain',
                                    e.target.id);

                        } catch (ex) {

                            e.dataTransfer
                                .setData('Text', e.target.id);
                        }
                    },

                    dropped = function (e) {
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
                    },

                    cancel = function (e) {
                        if (e.preventDefault) {
                            e.preventDefault();
                        }

                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }

                        return false;
                    };

var img = document.querySelector('#ps-logo');
img.addEventListener('dragstart', dragStart, false);

var
    selector = '#target-container',
    target = document.querySelector(selector);

target.addEventListener('drop', dropped, false);
target.addEventListener('dragenter', cancel, false);
target.addEventListener('dragover', cancel, false);

