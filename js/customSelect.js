(function ( $ ) {
    var methods = {

        init: function(param) {
            var defaults = $.extend({
                    defaultValue: 'Choose',
                    height: 'auto'
                }, param),
                self = $(this),
                uniqueClass = this.attr('id'),
                customSelect,
                customSelectHeight,
                defaultValueOption,
                dropdown;

            this.css('display', 'none');

            // template
            customSelect = $('<div/>', {
                'class': 'select-custom ' + uniqueClass
            });
            $('<span/>', {
                'class': 'cs-arrow'
            }).appendTo(customSelect);
            defaultValueOption = $('<span/>', {
                text: defaults.defaultValue,
                'class': 'default'
            }).appendTo(customSelect);
            dropdown = $('<div/>', {
                'class': 'dropdown'
            }).appendTo(customSelect);

            this.find('option').each(function (i, el) {
                var item = $('<span/>', {
                    text: $(el).html(),
                    "data-val": $(el).val()
                }).appendTo(dropdown);

                if ( $(el).attr('data-icon') ) { // add icon if set path
                    $('<img>', {
                        "class": "cs-icon",
                        "src": $(el).attr('data-icon')
                    }).prependTo(item);
                }

                if ( defaults.height != 'auto' ) {      //set dropdown height
                    dropdown.css({'height': defaults.height,
                        'overflow-y': 'scroll'
                    });
                }
            });

            customSelect.insertAfter(this);

            //positioner drop down
            customSelectHeight = customSelect.outerHeight();
            dropdown.css('top', customSelectHeight);

            //disable selection
            customSelect.on('mousedown', function () {
                return false;
            });

            // open/close select
            customSelect.on('click', function () {
                if ( $(this).hasClass('update') ) return false;

                dropdown.stop(true, false).fadeToggle('fast');
            });

            // close, if click not on the select
            $(document).on('click', function (event) {
                if ( !($(event.target).hasClass('select-custom'))  && $(event.target).attr('class') != 'default' && !($(event.target).hasClass('cs-arrow')) && !($(event.target).hasClass('cs-icon')) ) {
                    dropdown.fadeOut('fast');
                }
            });

            // change value and text, if click on the select item
            customSelect.find('span').not('.default').not('.cs-arrow').on('click', function () {
                self.val( $(this).attr('data-val') );
                defaultValueOption.html( $(this).html() );
                self.trigger('change');
            });
        },

        update: function (height) {     // update select items, if there are change
            var custom = '.' + this.attr('id'),
                self = $(this),
                dropdown = $(custom).find('.dropdown');

            $(custom).addClass('update');
            $(custom).find('.dropdown span').remove();

            this.find('option').each(function (i, el) {
                var item = $('<span/>', {
                    text: $(el).html(),
                    "data-val": $(el).val()
                }).appendTo( dropdown );

                if ( $(el).attr('data-icon') ) {
                    $('<img>', {
                        "class": "cs-icon",
                        "src": $(el).attr('data-icon')
                    }).prependTo(item);
                }
            });

            if ( height != undefined ) {
                dropdown.css({'height': height,
                    'overflow-y': 'scroll'
                });
            } else {
                dropdown.css({'height': 'auto',
                    'overflow': 'auto'
                });
            }

            $(custom).find('span').not('.default').on('click', function () {
                self.val( $(this).attr('data-val') );
                $(custom).find('.default').html( $(this).html() );
                self.trigger('change');
            });
            $(custom).removeClass('update');
        }
    };

    $.fn.customSelect = function (method) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' not exist in jQuery.customSelect' );
        }
    }
})( jQuery );