var
                   cancel = function(e) {
                       if (e.preventDefault) {
                           e.preventDefault();
                       }

                       if (e.stopPropagation) {
                           e.stopPropagation();
                       }

                       return false;
                   },

                   dragStart = function(e) {
                       var
                         selector = 'input:radio[name="allowed"]' +
                                    ':checked';

                       e.dataTransfer.effectAllowed = 
                                           $(selector).val();

                       try {

                           e.dataTransfer
                               .setData('text/plain', '');

                       } catch (e) {

                           e.dataTransfer
                               .setData('Text', '');
                       }
                   },

                   dragEnd = function(e) {
                       $('#msg').text(e.dataTransfer.dropEffect);
                   },

                   dropped = function(e) {
                       cancel(e);

                       var
                           target = $(this),

                           countElement =
                               $(this.querySelector('#count')),

                           count = countElement.text();

                       count++;

                       countElement.text(count);

                       target.removeClass('over');
                   },

                   dragLeave = function(e) {
                       $(this).removeClass('over');
                   },

                   dragOver = function(e) {
                       cancel(e);

                       var
                         selector = 'input:radio[name="effect"]' +
                                    ':checked';

                       e.dataTransfer.dropEffect =
                           $(selector).val();

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


var source = document.querySelector('#source');

source.addEventListener('dragstart',
                         dragStart, false);

source.addEventListener('dragend',
                         dragEnd, false);


      