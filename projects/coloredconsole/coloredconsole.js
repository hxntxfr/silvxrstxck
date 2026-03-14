var coloredjs = {
    version: 1.2,
    color: function(text, color) {
    	if ( color == "none" || color == "reset" ) { color = '\x1b[0m' }
    	if ( color == "black" ) { color = '\x1b[30m' }
    	if ( color == "red" ) { color = '\x1b[31m' }
    	if ( color == "green" ) { color = '\x1b[32m' }
    	if ( color == "yellow" ) { color = '\x1b[33m' }
    	if ( color == "blue" ) { color = '\x1b[34m' }
    	if ( color == "purple" ) { color = '\x1b[35m' }
    	if ( color == "cyan" ) { color = '\x1b[36m' }
    	if ( color == "white" ) { color = '\x1b[37m' }
		console.log(`${color}${text}`);
	},
	style: function(text, style) {
		console.log(`%c${text}`, style);
	},
	multi: function(text) {
		text = text
		.replaceAll('&reset', '\x1b[0m')
		.replaceAll('&black', '\x1b[30m')
		.replaceAll('&red', '\x1b[31m')
		.replaceAll('&green', '\x1b[32m')
		.replaceAll('&yellow', '\x1b[33m')
		.replaceAll('&blue', '\x1b[34m')
		.replaceAll('&purple', '\x1b[35m')
		.replaceAll('&cyan', '\x1b[36m')
		.replaceAll('&white', '\x1b[37m')
		console.log(text);
	}
}