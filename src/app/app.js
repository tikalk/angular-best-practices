(function() {
	'use strict';

	angular.module('echoes', [
		'ngRoute',
		'ngSanitize',
		'htmlTemplates',
		'youtube.directives',
		'ui.controls',
		'echoes.services',
		'echoes.resources',
		'youtube.api',
		'youtube-videos',
		'LocalStorageModule',
		'media.search',
		'infinite-scroll'
	])
	.config(config);

	function config ($routeProvider, $locationProvider, localStorageServiceProvider, GapiApiSetterProvider) {
		GapiApiSetterProvider.config({
			scope: 'youtube',
			api: { 
				client: 'youtube', 
				version: 'v3'
			},
			clientId: '971861197531'
		});
	}

})();