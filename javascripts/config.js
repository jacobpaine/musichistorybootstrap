requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "firebase": "../lib/bower_components/firebase/firebase",
    "lodash": '../lib/bower_components/lodash/lodash.min',
    "q": '../bower_components/q/q'
  },

  shim: {
    'bootstrap': {
      deps: ['jquery'],
      exports: 'bootstrap'
      
    },
      "firebase": {
        exports: "Firebase"
      }
  }
});



require(
	["jquery","bootstrap", "hbs/handlebars", "handler", "firebase", "lodash", "bookData"],
	function($, b, Handlebars, handler, firebase, _, bookData) {




	});


