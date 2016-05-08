
# jQuery Widget monthSelectorWidget

this plugin/widget is used to build a Checkbox-Element-Replacement on a given selector

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<link rel="stylesheet" href="dist/css/checkboxreplacement.css">
	<script src="dist/js/jquery.checkboxreplacement.widget.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").checkboxReplacement();
	```

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   ├── index.html
│   ├──css/
│   │  └──demo.css
├── dist/
│   ├── css/
│   │  └── checkboxreplacement.css
│   └── js/
│      └── jquery.checkboxreplacement.widget.js
├── src/
│   ├── css/
│   │  └── checkboxreplacement.css
│   └── js/
│      └── jquery.checkboxreplacement.widget.js
├── .jshintrc
├── Gruntfile.js
├── bower.json
└── package.json


#### [demo/](https://github.com/jquery-boilerplate/boilerplate/tree/master/demo)

Contains a simple HTML file to demonstrate your plugin.

#### [dist/](https://github.com/jquery-boilerplate/boilerplate/tree/master/dist)

This is where the generated files are stored once Grunt runs.

#### [src/](https://github.com/jquery-boilerplate/boilerplate/tree/master/src)

Contains the files responsible for your plugin, you can choose between JavaScript or CoffeeScript.

