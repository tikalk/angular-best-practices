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
		'youtube.player',
		'youtube-videos',
		'media.search',
		'ngAnimate',
		'drawer',
		'LocalStorageModule',
		'infinite-scroll'
		// 'google.api.loader',
		// 'google-signin',
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

		localStorageServiceProvider.setPrefix('EchoesPlayer');

		$routeProvider
			.when('/', {
				templateUrl: 'app/youtube-videos/youtube.videos.tpl.html',
				controller: 'YoutubeVideosCtrl',
				controllerAs: 'vm'
			})

			.otherwise({
				redirectTo: '/'
			});
	}

})();