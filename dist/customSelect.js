(function ( $ ) {
    var methods = {

        init: function(param) {
            var defaults = $.extend({defaultValue: 'Выберите', wrap: $('body')}, param),
                self = $(this),
                uniqueClass = this.attr('id'),
                customSelect,
                defaultValueOption,
                dropdown;

            this.css('display', 'none');

            customSelect = $('<div/>', {
                'class': 'select-custom ' + uniqueClass
            }).appendTo(defaults.wrap);
            defaultValueOption = $('<span/>', {
                text: defaults.defaultValue,
                'class': 'default'
            }).appendTo(customSelect);
            dropdown = $('<div/>', {
                'class': 'dropdown'
            }).appendTo(customSelect);

            this.find('option').each(function (i, el) {
                $('<span/>', {
                    text: $(el).val()
                }).appendTo(dropdown);
            });

            customSelect.on('click', function () {
                dropdown.stop(true, false).fadeToggle('fast');
            });

            $(document).on('click', function (event) {
                if ( !($(event.target).hasClass('select-custom'))  && $(event.target).attr('class') != 'default' ) {
                    dropdown.fadeOut('fast');
                }
            });

            customSelect.find('span').not('.default').on('click', function () {
                self.val( $(this).html() );
                defaultValueOption.html( $(this).html() );
                self.trigger('change');
            });
        },

        update: function () {
            var custom = '.' + this.attr('id'),
                self= $(this);

            $(custom).find('.dropdown span').remove();

            this.find('option').each(function (i, el) {
                $('<span/>', {
                    text: $(el).val()
                }).appendTo( $(custom).find('.dropdown') );
            });

            $(custom).find('span').not('.default').on('click', function () {
                self.val( $(this).html() );
                $(custom).find('.default').html( $(this).html() );
                self.trigger('change');
            });
        }
    };

    $.fn.customSelect = function (method) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод ' +  method + ' не существует в jQuery.customSelect' );
        }
    }
})( jQuery );