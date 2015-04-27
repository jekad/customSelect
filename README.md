Custom select plugin.

The simplest is can.

To use this plugin you need to include a jquery, plugin library and css file.


link rel="stylesheet" href="customSelect.css" type="text/css" 

script type="text/javascript" src="jquery-1.11.1.min.js"

script type="text/javascript" src="customSelect.js"


add default select on page and initialize plugin

**INITIALIZATION**

    $('#default-select').customSelect();
    
**PARAMETERS**

    $('#default-select').customSelect( {
            defaultValue: 'Default val',
            height: '100px'
    });

defaultValue - default value

height - dropdown height (add scroll if items height more then you set in parameter)

**METHODS**

    $('#default-select').customSelect( 'update');
    
if you need set dropdown height don't forget add parameter

    $('#default-select').customSelect( 'update', '100px');


