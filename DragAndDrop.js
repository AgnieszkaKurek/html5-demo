var isDnDTypesSupported = true;

var
    dragStart = function(e) {
        var index = $(e.target).index();

        index += ''; 

        try {

            e.dataTransfer
                .setData('text/plain', index);

        } catch (ex) {

            e.dataTransfer
                .setData('Text', index);

            isDnDTypesSupported = false;
        }
    },

    dropped = function(e) {
        cancel(e);

        var oldIndex;

        if(isDnDTypesSupported) {
            oldIndex =
              e.dataTransfer.getData('text/plain');
        }
        else {
            oldIndex =
              e.dataTransfer.getData('Text');
        }

        var
            target = $(e.target),
            newIndex = target.index(),
            dropped = $(this)
                        .parent()
                        .children()
                        .eq(oldIndex);

        dropped.remove();

        if (newIndex < oldIndex) {
            target.before(dropped);
        }
        else {
            target.after(dropped);
        }
    },

    cancel = function(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        if (e.stopPropagation) {
            e.stopPropagation();
        }

        return false;
    },
                    
    forEach = Array.prototype.forEach;

var items =
      document.querySelectorAll('#items-list > li');

forEach.call(items, function(item) {

    $(item).prop('draggable', true);

    item.addEventListener('dragstart',
                           dragStart, false);

    item.addEventListener('drop',
                           dropped, false);

    item.addEventListener('dragenter',
                           cancel, false);

    item.addEventListener('dragover',
                           cancel, false);
});

      