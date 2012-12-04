// Load your site only if media-queries are supported
yepnope({
	test: Modernizr.mq('only all'),
	nope: 'scripts/polyfill/css3-mediaqueries.js',
	
});

// Reuse your file reader adding a polyfill if not supported. 
yepnope({
	test: !!window.FileReader && Modernizr.draganddrop,
	nope: 'scripts/polyfill/jquery.FileReader.js',
	callback: function (url, result, key) {
    	console.log('Loaded: ' + url);
  	}
});

//Reuse your geolocation code adding a polyfill if not supported.
yepnope({
  test : Modernizr.geolocation,
  nope : 'scripts/polyfill/geolocation.js',
  callback: function (url, result, key) {
    	console.log('Loaded: ' + url);
  }
});

//Reuse your web worker adding a polyfill if not supported.
yepnope({
  test : Modernizr.webworkers,
  nope : 'scripts/polyfill/fakeworker-0.1.js',
  callback: function (url, result, key) {
      console.log('Loaded: ' + url);
  }
});