Custom select plugin.

The simplest is can.

To use this plugin you need to include a jquery, plugin library and css file.

link rel="stylesheet" href="customSelect.css" type="text/css" 
script type="text/javascript" src="jquery-1.11.1.min.js"
script type="text/javascript" src="customSelect.js"

add default select on page and initialize plugin

    $('#default-select').customSelect( {
        wrap: $('.select-wrap'),
        defaultValue: 'Default val'
    });

wrap - block where is been located your custom select( default is body )
defaultValue - default value

live example - http://insurance.rwi-group.com/
