
# jQuery Widget checkboxReplacementWidget

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
