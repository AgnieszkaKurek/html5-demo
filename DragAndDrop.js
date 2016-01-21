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

                   dragStart = function (e) {

                       var img =
                           document.getElementById('drag-image');

                       e.dataTransfer.setDragImage(img, -15, 15);

                       try {

                           e.dataTransfer
                               .setData('text/plain', '');

                       } catch (e) {

                           e.dataTransfer
                               .setData('Text', '');
                       }
                   };

var target = document.querySelector('#target');

target.addEventListener('drop',
                         cancel, false);

target.addEventListener('dragenter',
                         cancel, false);

target.addEventListener('dragover',
                         cancel, false);


var source = document.querySelector('#source');
source.addEventListener('dragstart',
                         dragStart, false);