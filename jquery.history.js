/*!
* jquery.history
* http://www.beseku.com/2009/05/06/detecting-visited-sites-with-jquery/
*
* Copyright (c) 2009 Ben sekulowicz-Barclay
*
* Date: 2009-05-06 (Wed, 06 May 2009)
* Revision: 1.0
*/

jQuery.history = {
	
	test: function(user_url) {
		
		// Define our defaults
		var user = {url:''};
		
		// Overwrite our defaults with user supplied values, if required...
		user.url = (typeof(user_url) != 'undefined')? user_url: user.url;
		
		// Insert our test paragraph style default style
		$('body').prepend('<p id="jQuery-History-Test-P" style="height:20px;left:0;margin:0;padding:0;overflow:hidden;position:absolute;top:0;visibility:visible;width:20px;"><a href="' + user.url + '" style="display:block;overflow:hidden;"></a></p>');
		$('html').prepend('<style id="jQuery-History-Test-S1" type="text/css">p#jQuery-History-Test-P a {height:100px !important;width:100px !important;}</style>');
		$('html').prepend('<style id="jQuery-History-Test-S2" type="text/css">p#jQuery-History-Test-P a:visited {height:999px !important;width:999px !important;}</style>');
		
		// Get our test paragraph's dimensions
		var x = $('#jQuery-History-Test-P > a').width();
		var y = $('#jQuery-History-Test-P > a').height();		
		
		// Remove our test paragraph and visited style
		$('#jQuery-History-Test-P').remove();
		$('#jQuery-History-Test-S1').remove();
		$('#jQuery-History-Test-S2').remove();
		
		// If the dimensions are exact, we have a match	
		return (((x == 999) && (y == 999))? true: false);
	}
};