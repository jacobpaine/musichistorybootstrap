requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "firebase": "../lib/bower_components/firebase/firebase",
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
	["bootstrap", "hbs/handlebars", "handler", "firebase"],
	function(b, Handlebars, handler, firebase) {

	});


